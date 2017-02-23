let birth = '2000/01/01';

let Person = {

    name: '张三',

    //等同于birth: birth
    birth,

    // 等同于hello: function ()...
    hello() {
        console.log('我的名字是', this.name);
    }

};
Person.hello();
//运行环境node.js 在终端输入命令 node xxx 即可实现效果
