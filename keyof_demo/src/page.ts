interface Person {
    name: string;
    age: number;
    gender: string
}
// type T='name'
// key:'name'
// Person['name']

class Teacher {
    constructor(private info: Person) { }
    getInfo<T extends keyof Person>(key: T): Person[T] {//泛型结合keyof
        // 等价于 if (key === 'name' || key === 'age' || key === 'gender') { }
        return this.info[key]
    }
}
const teacher = new Teacher({
    name: 'gao',
    age: 18,
    gender: 'male'
})
const test = teacher.getInfo('name')
console.log(test)