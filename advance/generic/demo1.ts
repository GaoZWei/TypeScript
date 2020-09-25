// 类中泛型

// (1)
// const data = new DataManager<number>([1])
// data.getItem(0)

// (2)
// interface Item {
//     name: string
// }

// class DataManager<T extends Item> { //泛型必须拥有Item中的东西
//     constructor(private data: T[]) { }
//     getItem(index: number): string { //返回string类型
//         return this.data[index].name   //this.data[index]是T类型
//     }
// }

// (2)
// const data = new DataManager([{
//     name: 'gao'
// }])
// data.getItem(0)


// (3)
// class DataManager<T extends number | string> {
//     constructor(private data: T[]) { }
//     getItem(index: number): T {
//         return this.data[index]
//     }
// }
// interface Test {
//     name: string
// }
// const data = new DataManager<string>([])


// (4)如何使用泛型作为具体类型注解
function hello<T>(params: T) {
    return params
}
const fun: <T>(params: T) => T = hello
