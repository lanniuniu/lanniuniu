// 函数类型——包括参数类型和返回值类型 =>之前是参数类型 =>之后是返回值类型
let func1: (baseValue: number, increment: number) => number =
    function(x: number, y: number): number { return x + y; };

// 可选参数和默认参数 可选参数必须跟在必须参数后面。默认值共享参数类型
let fun2 = function (first = 'liu', second: string): string {
    return `${first} love ${second}`
}
console.log(fun2(undefined ,'dai'))

// 剩余参数
let fun3 = function (first = 'liu', ...andSoOn: string[]): string {
    return `${typeof andSoOn.join(' ')}`
}
console.log(fun3('liu','1','2','3'))

// this
let me = 'niu'
let a = {
    me: 'liu',
    func4: (x: string) => {
        console.log(this)
        return `${this.me} love ${x}`
    },
    func5: function (x:string):string {
        console.log(this)
        return `${this.me} love ${x}`
    }
}
console.log(a.func4('dai')) // 箭头函数中的this是定义时所在的对象 所以是在顶层对象
console.log(a.func5('dai')) // 普通函数中的this是使用时所在的对象 所以是a

