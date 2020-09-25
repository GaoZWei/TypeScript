//泛型 generic 泛指的类型
function join<ABC>(first: ABC, second: ABC) {
    return `${first}${second}`
}
join<string>('1', '2')

function join1<T, P>(first: T, second: P) {
    return `${first}${second}`
}
join1<number, string>(1, '2')
join1(1, '2')//会默认识别

function join2<T, P>(first: T, second: P):T {  //返回值T类型
    return first
}

function map<ABC>(params: Array<ABC>) { //Array<ABC> <=> ABC[]
    return params
}
map<string>(['12'])


