//interface 和type类似,不完全一致
interface Person {
    // readonly name: string;只读
    name: string;
    age?: number //?表示可有可无
    [propName: string]: any//额外的属性
    say(): string
}

//别名
// type Person1 = {
//     name: string
// }

//继承
interface Teacher extends Person {
    teach(): string
}

const getPersonName = (person: Person): void => {
    console.log(person.name)
}

const setPersonName = (person: Teacher, name: string): void => {
    person.name = name
}

const person = {
    name: 'gao',
    age: 12,
    sex: 'male',
    say() {
        return 'say hello'
    },
    teach() {
        return "teach"
    }
}//直接把{}传进去的话,会强校验,会提示错误
getPersonName(person)
setPersonName(person, 'lee')


class User1 implements Person {
    name: 'gaozw';
    sex: 'male';
    say() {
        return 'say lll'
    }
}

//函数式定义
interface SayHi {
    (word: string): string
}
const say: SayHi = (word: string) => {
    return word
}