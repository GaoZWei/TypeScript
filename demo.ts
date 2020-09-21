//静态类型
// let b:number=123
// b='123'
interface Point { x: number, y: number }

function tsdemo(data: Point) {
    console.log('1231233')
    return Math.sqrt(data.x ** 2 + data.y ** 2)
}
tsdemo(
    { x: 1, y: 3 })