//类的装饰器
//装饰器本身是一个函数
//类装饰器接收的参数是构造函数
//装饰器通过 @ 符号使用

// function testDecorator(flag: boolean) {
//     if (flag) {
//         return function (constructor: any) {
//             constructor.prototype.getName = () => {
//                 console.log('gao')
//             }
//         }
//     }else {
//         return function (constructor: any) { }
//     }
// }

// @testDecorator(true)
// class Test { }
// const test = new Test()
// (test as any).getName()

