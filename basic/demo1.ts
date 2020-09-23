// 基础类型
// null,undefined,symbol,boolean,void
const count: number = 123
const teacherName: string = 'hah1'

//对象类型
const teacher: {
    name: string,
    age: number
} = { name: 'gao', age: 18 }
//数组类型(对象类型)
const numbers: number[] = [1, 2, 3]
//类类型(对象类型)
class Person {

}
const gao: Person = new Person()
//函数类型(对象类型)
const getTotal: () => number = () => {
    return 123
}
 
//自定义类型
interface Point { x: number, y: number }
const point: Point = { x: 3, y: 4 }