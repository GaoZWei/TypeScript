interface Bird {
    fly: boolean
    sing: () => {

    }
}
interface Dog {
    fly: boolean
    bark: () => {

    }
}

//联合类型 | 只提醒共有的函数
//类型保护(解决👆的问题)
//类型断言的方式
function trainAnimal(animal: Bird | Dog) {
    if (animal.fly) {
        (animal as Bird).sing() //类型断言
    }
    (animal as Dog).bark()
}
//in 语法做类型保护
function trainAnimalSecond(animal: Bird | Dog) {
    if ('sing' in animal) {
        animal.sing()
    } else {
        animal.bark()
    }
}

//typeof语法做类型保护
function add(first: string | number, second: string | number) {
    if (typeof first === "string" || typeof second === "string") {
        return `${first}${second}`
    }
    return first + second
}

//使用instanceof语法来做类型保护
class NumberObj {
    count: number=0;
}
function addSecond(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}