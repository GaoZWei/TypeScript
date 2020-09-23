//函数
// function add(first: number, second: number): number {//设置返回值类型
//     return first + second
// }

// const total = add(1, 2)

// function sayHello(): void {//无返回值
//     console.log('hello')
// }

// function errorEmitter(): never {//无法执行完
//     throw new Error();
//     console.log(123)
// }

//参数类型设置(解构语法)
function add({ first, second }: { first: number, second: number }) {
    return first + second
}
const totals = add({ first: 1, second: 2 })


function getNumber({ first }: { first: number }) {
    return first
}
const count = getNumber({ first: 1 })