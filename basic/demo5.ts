//数组
const numberArr: (number | string)[] = [1, 2, 3]
const stringArr: string[] = ['a', 'b', 'c']
const undefinedArr: undefined[] = [undefined]

//type alias别名
type User = { name: string, age: number }

class Teacher1 {
    name: string
    age: number
}

const objectArr: Teacher1[] = [
    new Teacher1(),
    {
        name: 'gao',
        age: 28,
    }
]


//元组  特殊数组,固定
const teacherInfo: [string, string, number] = ['Dell', 'male', 18];
//csv
const teacherList: [string, string, number][] =
    [
        ['dell', 'male', 18],
        ['sun', 'female', 12]
    ]

