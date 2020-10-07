const userInfo: any = undefined

function catchError(msg: string) {//工厂模式
    return function (target: any, key: string, descriptor: PropertyDescriptor) {
        const fn = descriptor.value
        descriptor.value = function () {
            try {
                fn()
            } catch (e) {
                console.log(msg);
            }
        }
    }
}

class Test1 {
    @catchError('userInfo.name 不存在')
    getName() {
        return userInfo.name
    }
    @catchError('userInfo.age 不存在')
    getAge() {
        return userInfo.age
    }
}
const test1 = new Test1()
test1.getName()
test1.getAge()