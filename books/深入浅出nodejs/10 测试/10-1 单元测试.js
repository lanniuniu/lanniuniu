/*
主动面对问题，测试会有很大作用
测试的意义在于 在用户消费产出的代码之前 开发者首先消费它 给予其重要的质量保证 正视自己的代码 对它负责
测试包含 单元测试、性能测试、安全测试、功能测试
 */

/*
编写可测试代码 原则遵循
1、单一职责 2、接口抽象 3、层次分离

单元测试包含 断言、测试框架、测试用例、测试覆盖率、mock、持续集成等

 */
const assert = require('assert')
assert.equal(Math.max(1, 100), 100)

/*
ok()
equal()
notEqual()
deepEqual() 深度相等 数组和对象里面的元素都相等
notDeepEqual()
strictEqual()
notStrictEqual()
throws()
doesNotThrow()
ifError()
市面上 大多都是给予assert模块进行封装扩展
 */

/*
测试框架
为测试服务 本身不参加测试 主要用于管理测试用例 和 生成测试报告 提升测试用例的开发速度 提高测试用例的可维护性和可读性 以及一些周边性的工作
mocha

测试风格
TDD 测试驱动开发
BDD 行为驱动开发

测试框架配合断言库

测试报告

测试用例

异步测试 添加Done()作为参数 使用了才会进行下一个测试

UI自动化测试 cypress

超时设置

测试覆盖率 jscover

mock 模拟异常
 */

/*
工程化 makefile
持续集成 travis-ci
 */
