// get set
// class Person {
//     constructor(private _name: string) { }
//     get name() {//保证数据安全性
//         return this._name + ' zw'
//     }
//     set name(name: string) {
//         const realName = name.split(' ')[0]//只储存gao
//         this._name = realName
//     }
// }

// const person = new Person('gao')
// console.log(person.name)
// person.name = 'gao zw'
// console.log(person.name)

//单例模式
class Demo {
    private static instance: Demo//存储new的demo
    private constructor(public name: string) { }

    static getInstance() {//直接挂在类上
        if (!this.instance) {
            this.instance = new Demo('gao')
        }
        return this.instance
    }
}
const demo1 = Demo.getInstance()
const demo2 = Demo.getInstance()
console.log(demo1.name)
console.log(demo2.name)
