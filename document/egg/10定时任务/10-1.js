/**
 * Created by 懒牛牛 on 2017/11/20.
 */

/*
虽然我们通过框架开发的 HTTP Server 是请求响应模型的，但是仍然还会有许多场景需要执行一些定时任务，例如：

定时上报应用状态。
定时从远程接口更新本地缓存。
定时进行文件切割、临时文件删除。
框架提供了一套机制来让定时任务的编写和维护更加优雅。
 */

/*
编写定时任务

所有的定时任务都统一存放在 app/schedule 目录下，每一个文件都是一个独立的定时任务，可以配置定时任务的属性和要执行的方法。

任务

task 或 subscribe 同时支持 generator function 和 async function。
task 的入参为 ctx，匿名的 Context 实例，可以通过它调用 service 等。
 */

/*
定时方式

定时任务可以指定 interval 或者 cron 两种不同的定时方式。

interval

通过 schedule.interval 参数来配置定时任务的执行时机，定时任务将会每间隔指定的时间执行一次。interval 可以配置成

数字类型，单位为毫秒数，例如 5000。
字符类型，会通过 ms 转换成毫秒数，例如 5s。

cron

通过 schedule.cron 参数来配置定时任务的执行时机，定时任务将会按照 cron 表达式在特定的时间点执行。
cron 表达式通过 cron-parser 进行解析。

 */

/*
类型

框架提供的定时任务默认支持两种类型，worker 和 all。worker 和 all 都支持上面的两种定时方式，只是当到执行时机时，会执行定时任务的 worker 不同：

worker 类型：每台机器上只有一个 worker 会执行这个定时任务，每次执行定时任务的 worker 的选择是随机的。
all 类型：每台机器上的每个 worker 都会执行这个定时任务。
 其他参数

除了刚才介绍到的几个参数之外，定时任务还支持这些参数：

cronOptions: 配置 cron 的时区等，参见 cron-parser 文档
immediate：配置了该参数为 true 时，这个定时任务会在应用启动并 ready 后立刻执行一次这个定时任务。
disable：配置改参数为 true 时，这个定时任务不会被启动。
 */

/*
手动执行定时任务

我们可以通过 app.runSchedule(schedulePath) 来运行一个定时任务。
app.runSchedule 接受一个定时任务文件路径（app/schedule 目录下的相对路径或者完整的绝对路径），执行对应的定时任务，返回一个 Promise。
 */

/*
扩展定时任务类型

默认框架提供的定时任务只支持每台机器的单个进程执行和全部进程执行，有些情况下，我们的服务并不是单机部署的，这时候可能有一个集群的某一个进程执行一个定时任务的需求。

框架并没有直接提供此功能，但开发者可以在上层框架自行扩展新的定时任务类型。

在 agent.js 中继承 agent.ScheduleStrategy，然后通过 agent.schedule.use() 注册即可：

ScheduleStrategy 基类提供了：

schedule - 定时任务的属性，disable 是默认统一支持的，其他配置可以自行解析。
this.sendOne() - 随机通知一个 worker 执行 task。
this.sendAll() - 通知所有的 worker 执行 task。
 */
