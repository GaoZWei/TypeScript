//type annotation 类型注解 告诉ts变量是什么类型
//type inference 类型推断  ts自动尝试分析变量的类型
//如果ts能自动分析变量类型,我们就什么也不需要做了
//如果ts无法分析变量类型的话,我们就需要使用类型注解

// 类型注解
let count: number
count = 123;

// 类型推断
let countInference = 123;

//类型推断
const firstNumber = 1;
const secondNumber = 2;
const total = firstNumber + secondNumber

// 类型注解
function getTotal(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber
}
const total1 = getTotal(1, 2)

const obj = {
    name: 'dell',
    age: 18
}




