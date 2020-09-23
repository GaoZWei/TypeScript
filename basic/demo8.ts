//类的属性和方法对应的访问类型
// private protected public
// public 允许在类的内外被调用
// private 允许在类的内部被使用
// protected 允许在类内及继承的子类中使用

// class Person {
//     // protected name: string;
//     public name: string;
//     public sayHi() {
//         this.name
//         console.log('hi')
//     }
//     private sayABC() {
//         this.name
//     }
// }

// class Teacher extends Person {
//     public sayBye() {
//         this.name
//     }
// }
// const person = new Person();
// person.name = 'gao'
// console.log(person.name)


// constructor
// class Person {
//     //传统写法
//     // public name: string;
//     // constructor(name: string) {
//     //     this.name = name
//     // }
//     // 简化写法
//     constructor(public name: string) { }
// }
// const person = new Person('gao') //new的瞬间constructor执行
// console.log(person.name)

class Person {
    constructor(public name: string) {
    }
}
class Teacher extends Person {
    constructor(public age: number) {
        super('gao');//子类调用父类构造函数,必须有super
    }
}
const teacher = new Teacher(28)
console.log(teacher.name+teacher.age);