// 真正的装饰器
function testDecorator() {
    //constructor是泛型,可以实例化,创建出类,应该有以下构造函数
    return function <T extends new (...args: any[]) => any>(constructor: T) {
        return class extends constructor {
            name = 'gzw'
            getName() {
                return this.name
            }
        }
    }
}

const Test = testDecorator()(//工厂函数
    class {
        name: string;
        constructor(name: string) {
            this.name = name
        }
    }
);

const test = new Test('gao')
console.log(test.getName())

