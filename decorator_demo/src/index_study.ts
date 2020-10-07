// 类的装饰器
// function testDecorator() {
//     //constructor是泛型,可以实例化,创建出类,应该有以下构造函数
//     return function <T extends new (...args: any[]) => any>(constructor: T) {
//         return class extends constructor {
//             name = 'gzw'
//             getName() {
//                 return this.name
//             }
//         }
//     }
// }

// const Test = testDecorator()(//工厂函数
//     class {
//         name: string;
//         constructor(name: string) {
//             this.name = name
//         }
//     }
// );

// const test = new Test('gao')
// console.log(test.getName())


//普通方法,target 对应的是类的 prototype
//静态方法,target 对应的是类的 构造函数

// 方法的装饰器       PropertyDescriptor控制函数
// function getNameDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//     // console.log(target, key)  Test { getName: [Function] } getName
//     // descriptor.writable = false//不可重写
//     descriptor.value = function () {
//         return 'decorator'
//     }
// }

// class Test {
//     name: string;
//     constructor(name: string) {
//         this.name = name
//     }
//     @getNameDecorator
//     getName() {
//         return this.name
//     }
// }
// const test = new Test('gao')
// test.getName = () => {
//     return '123'
// }
// console.log(test.getName())



//访问器的装饰器  get和set不能同时加装饰器
// function visitDecorator(target: any, key: string, descriptor: PropertyDescriptor) {
//     // descriptor.writable = false
// }

// class Test {
//     private _name: string;
//     constructor(name: string) {
//         this._name = name
//     }
//     get name() {
//         return this._name
//     }
//     @visitDecorator //访问器的装饰器
//     set name(name: string) {
//         this._name = name
//     }
// }
// const test = new Test('gao')
// test.name = '123123'
// console.log(test.name)


//属性的装饰器 
// function nameDecorator(target: any, key: string): any {
//     console.log(target, key);
//     const descriptor: PropertyDescriptor = {
//         writable: false
//     }
//     return descriptor
// }

//修改的并不是实例上的name,而是原型上的name
// function nameDecorator(target: any, key: string): any {
//     target[key] = 'zhengwei'//prototype上
// }
// // name放在实例上
// class Test {
//     @nameDecorator
//     name = "gao";//放在test实例上
// }
// const test = new Test()
// // test.name = 'zw'
// console.log(test.name)
// console.log((test as any).__proto__.name)


//原型,方法名,参数所在位置
function paramDecorator(target: any, method: string, paramIndex: number) {
    console.log(target, method, paramIndex)
}

class Test {
    getInfo(@paramDecorator name: string, age: number) {
        console.log(name, age)
    }
}
const test = new Test()
test.getInfo('gao', 23)