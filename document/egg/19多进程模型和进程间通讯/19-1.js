/**
 * Created by 懒牛牛 on 2017/11/23.
 */

/*
方案：Cluster

简单的说，

在服务器上同时启动多个进程。
每个进程里都跑的是同一份源代码（好比把以前一个进程的工作分给多个进程去做）。
更神奇的是，这些进程可以同时监听一个端口

其中：

负责启动其他进程的叫做 Master 进程，他好比是个『包工头』，不做具体的工作，只负责启动其他进程。
其他被启动的叫 Worker 进程，顾名思义就是干活的『工人』。它们接收请求，对外提供服务。
Worker 进程的数量一般根据服务器的 CPU 核数来定，这样就可以完美利用多核资源。

 */

/*
# 框架的多进程模型

进程守护

健壮性（又叫鲁棒性）是企业级应用必须考虑的问题，除了程序本身代码质量要保证，
框架层面也需要提供相应的『兜底』机制保证极端情况下应用的可用性

Node.js 进程退出可以分为两类：
1.未捕获异常
当代码抛出了异常没有被捕获到时，进程将会退出，此时 Node.js 提供了 process.on('uncaughtException', handler) 接口来捕获它，
但是当一个 Worker 进程遇到 未捕获的异常 时，它已经处于一个不确定状态，此时我们应该让这个进程优雅退出：

关闭异常 Worker 进程所有的 TCP Server（将已有的连接快速断开，且不再接收新的连接），断开和 Master 的 IPC 通道，
不再接受新的用户请求。
Master 立刻 fork 一个新的 Worker 进程，保证在线的『工人』总数不变。
异常 Worker 等待一段时间，处理完已经接受的请求后退出。

2. OOM、系统异常
而当一个进程出现异常导致 crash 或者 OOM 被系统杀死时，不像未捕获异常发生时我们还有机会让进程继续执行，
只能够让当前进程直接退出，Master 立刻 fork 一个新的 Worker。

在框架里，我们采用 graceful 和 egg-cluster 两个模块配合实现上面的逻辑。这套方案已在阿里巴巴和蚂蚁金服的生产环境广泛部署，
且经受过『双11』大促的考验，所以是相对稳定和靠谱的

 */

/*
Agent 的机制

对于这一类后台运行的逻辑，我们希望将它们放到一个单独的进程上去执行，这个进程就叫 Agent Worker，
简称 Agent。Agent 好比是 Master 给其他 Worker 请的一个『秘书』，它不对外提供服务，只给 App Worker 打工，专门处理一些公共事务。

用法

你可以在应用或插件根目录下的 agent.js 中实现你自己的逻辑（和启动自定义 用法类似，只是入口参数是 agent 对象）
 */

/*
Master VS Agent VS Worker

master

在这个模型下，Master 进程承担了进程管理的工作（类似 pm2），不运行任何业务代码，
我们只需要运行起一个 Master 进程它就会帮我们搞定所有的 Worker、Agent 进程的初始化以及重启等工作了。

Master 进程的稳定性是极高的，线上运行时我们只需要通过 egg-scripts 后台运行通过 egg.startCluster 启动的 Master 进程就可以了，
不再需要使用 pm2 等进程守护模块。

Agent

在大部分情况下，我们在写业务代码的时候完全不用考虑 Agent 进程的存在，但是当我们遇到一些场景，
只想让代码运行在一个进程上的时候，Agent 进程就到了发挥作用的时候了。

由于 Agent 只有一个，而且会负责许多维持连接的脏活累活，因此它不能轻易挂掉和重启，所以 Agent 进程在监听到未捕获异常时不会退出，
但是会打印出错误日志，我们需要对日志中的未捕获异常提高警惕。

Worker

Worker 进程负责处理真正的用户请求和定时任务的处理。而 Egg 的定时任务也提供了只让一个 Worker 进程运行的能力，
所以能够通过定时任务解决的问题就不要放到 Agent 上执行。

Worker 运行的是业务代码，相对会比 Agent 和 Master 进程上运行的代码复杂度更高，稳定性也低一点，当 Worker 进程异常退出时，
Master 进程会重启一个 Worker 进程。
 */

/*
IPC （进程间通讯）
虽然每个 Worker 进程是相对独立的，但是它们之间始终还是需要通讯的，叫进程间通讯（IPC）

细心的你可能已经发现 cluster 的 IPC 通道只存在于 Master 和 Worker/Agent 之间，Worker 与 Agent 进程互相间是没有的。
那么 Worker 之间想通讯该怎么办呢？是的，通过 Master 来转发。

发送

app.messenger.broadcast(action, data)：发送给所有的 agent / app 进程（包括自己）
app.messenger.sendToApp(action, data): 发送给所有的 app 进程
在 app 上调用该方法会发送给自己和其他的 app 进程
在 agent 上调用该方法会发送给所有的 app 进程
app.messenger.sendToAgent(action, data): 发送给 agent 进程
在 app 上调用该方法会发送给 agent 进程
在 agent 上调用该方法会发送给 agent 自己
agent.messenger.sendRandom(action, data):
app 上没有该方法（现在 Egg 的实现是等同于 sentToAgent）
agent 会随机发送消息给一个 app 进程（由 master 来控制发送给谁）
app.messenger.sendTo(pid, action, data): 发送给指定进程

egg-ready

上面的示例中提到，需要等 egg-ready 消息之后才能发送消息。
只有在 Master 确认所有的 Agent 进程和 Worker 进程都已经成功启动（并 ready）之后，
才会通过 messenger 发送 egg-ready 消息给所有的 Agent 和 Worker，告知一切准备就绪，IPC 通道可以开始使用了。

接收

在 messenger 上监听对应的 action 事件，就可以收到其他进程发送来的信息了。
 */




