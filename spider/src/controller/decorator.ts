import { Router, RequestHandler } from 'express'
export const router = Router()//装饰器走完,就会生成router的路由,走对应的路由

enum Method {
    get = "get",
    post = "post"
}
export function controller(target: any) {
    for (let key in target.prototype) {
        const path = Reflect.getMetadata('path', target.prototype, key)
        const method: Method = Reflect.getMetadata('method', target.prototype, key)
        const handler = target.prototype[key]
        const middleware = Reflect.getMetadata('middleware', target.prototype, key)
        if (path && method && handler) {
            if (middleware) {
                router[method](path, middleware, handler)
            } else {
                router[method](path, handler)
            }
        }
        // console.log(Reflect.getMetadata('path',target.prototype,key));
    }
}

export function use(middleware: RequestHandler) {
    return function (target: any, key: string) {
        Reflect.defineMetadata('middleware', middleware, target, key)//自定义
    }
}

// 工厂函数解决不同请求的方法
function getRequestDecorator(type: string) {
    return function (path: string) {
        return function (target: any, key: string) {
            Reflect.defineMetadata('path', path, target, key)//自定义
            Reflect.defineMetadata('method', type, target, key)
        }
    }
}

export const get = getRequestDecorator('get')
export const post = getRequestDecorator('post')
export const put = getRequestDecorator('put')
export const del = getRequestDecorator('delete')



// export function get(path: string) {
//     return function (target: any, key: string) {
//         Reflect.defineMetadata('path', path, target, key)//自定义
//         Reflect.defineMetadata('method', 'get', target, key)
//     }
// }

// export function post(path: string) {
//     return function (target: any, key: string) {
//         Reflect.defineMetadata('path', path, target, key)
//         Reflect.defineMetadata('method', 'post', target, key)
//     }
// }
