// 基础类型 boolean number string void undefined symbol null 
let count1: number
count1 = 123

//对象类型 {} Class function []

const func = (str: string): number => {
    return parseInt(str, 10)
}

const func1: (str: string) => number = (str) => {   //(str: string) => number函数类型  =后是具体实现
    return parseInt(str, 10)
}

const date = new Date()

//其他case
interface Person {
    name: 'string'
}
const rowData = '{"name":"gao"}'
const newData: Person = JSON.parse(rowData)

// 设置 | 通用匹配
let temp: number | string = 123;
temp = '456'