/**
 * Created by 懒牛牛 on 2017/11/29.
 */

/*
安装和配置

安装对应的插件 egg-mysql ：

$ npm i --save egg-mysql
开启插件：

// config/plugin.js
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
在 config/config.${env}.js 配置各个环境的数据库连接信息。
 */

/*
单数据源
// config/config.${env}.js
exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: 'mysql.com',
    // 端口号
    port: '3306',
    // 用户名
    user: 'test_user',
    // 密码
    password: 'test_password',
    // 数据库名
    database: 'test',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};

多数据源
如果我们的应用需要访问多个 MySQL 数据源

exports.mysql = {
  clients: {
    // clientId, 获取client实例，需要通过 app.mysql.get('clientId') 获取
    db1: {
      // host
      host: 'mysql.com',
      // 端口号
      port: '3306',
      // 用户名
      user: 'test_user',
      // 密码
      password: 'test_password',
      // 数据库名
      database: 'test',
    },
    db2: {
      // host
      host: 'mysql2.com',
      // 端口号
      port: '3307',
      // 用户名
      user: 'test_user',
      // 密码
      password: 'test_password',
      // 数据库名
      database: 'test',
    },
    // ...
  },
  // 所有数据库配置的默认值
  default: {

  },

  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};


动态创建

我们可以不需要将配置提前申明在配置文件中，而是在应用运行时动态的从配置中心获取实际的参数，再来初始化一个实例。
 */

/*
Service 层

由于对 MySQL 数据库的访问操作属于 Web 层中的数据处理层，因此我们强烈建议将这部分代码放在 Service 层中维护。
 */

/*
如何编写 CRUD 语句

Create

可以直接使用 insert 方法插入一条记录。

Read

可以直接使用 get 方法或 select 方法获取一条或多条记录。select 方法支持条件查询与结果的定制。

 Update

可以直接使用 update 方法更新数据库记录。

Delete

可以直接使用 delete 方法删除数据库记录。
 */

/*
使用事务

MySQL 事务主要用于处理操作量大，复杂度高的数据。

一个事务将一组连续的数据库操作，放在一个单一的工作单元来执行。该组内的每个单独的操作是成功，事务才能成功。
如果事务中的任何操作失败，则整个事务将失败。

一般来说，事务是必须满足4个条件（ACID）： Atomicity（原子性）、Consistency（一致性）、Isolation（隔离性）、Durability（可靠性）
原子性：确保事务内的所有操作都成功完成，否则事务将被中止在故障点，以前的操作将回滚到以前的状态。
一致性：对于数据库的修改是一致的。
隔离性：事务是彼此独立的，不互相影响
持久性：确保提交事务后，事务产生的结果可以永久存在。
因此，对于一个事务来讲，一定伴随着 beginTransaction、commit 或 rollback，分别代表事务的开始，成功和失败回滚。
 */

/*
事务类型分类

手动控制
优点：beginTransaction, commit 或 rollback 都由开发者来完全控制，可以做到非常细粒度的控制。
缺点：手写代码比较多，不是每个人都能写好。忘记了捕获异常和 cleanup 都会导致严重 bug。

自动控制：Transaction with scope

API：beginTransactionScope(scope, ctx)
scope: 一个 generatorFunction，在这个函数里面执行这次事务的所有 sql 语句。
ctx: 当前请求的上下文对象，传入 ctx 可以保证即便在出现事务嵌套的情况下，一次请求中同时只有一个激活状态的事务。
优点：使用简单，不容易犯错，就感觉事务不存在的样子。
缺点：整个事务要么成功，要么失败，无法做细粒度控制。
 */

/*
表达式(Literal)

如果需要调用 MySQL 内置的函数（或表达式），可以使用 Literal。

内置表达式

NOW()：数据库当前系统时间，通过 app.mysql.literals.now 获取。
自定义表达式

下例展示了如何调用 MySQL 内置的 CONCAT(s1, ...sn) 函数，做字符串拼接。
 */








