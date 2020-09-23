// readonly
// class Person {
//     public readonly name: string;

//     constructor(name: string) {
//         this.name = name
//     }
// }

// const person = new Person('gao')
// person.name = 'hello'
// console.log(person.name)

// 抽象类
// abstract class Goem {
//     width: number
//     getType() {
//         return 'goem'
//     }
//     abstract getArea(): number;
// }

// class Circle extends Goem {
//     getArea() {  //实现抽象方法
//         return 123
//     }
// }
// class Sque {
// }


//接口,对通用的进行提炼
interface Person {
    name: string
}

interface Teacher extends Person {
    teachingAge: number
}
interface Student {
    age: number
}

const teacher = {
    name: 'gao',
    teachingAge: 15
}
const student = {
    name: "hah",
    age: 18
}

const getUserInfo = (user: Person) => {
    console.log(user.name)
}
getUserInfo(teacher)
getUserInfo(student)