import router from "../router"
import { RequestHandler } from 'express'
import { Methods } from './request'
// enum Methods {
//     get = "get",
//     post = "post"
// }

export function controller(root: string) {
    return function (target: new (...args: any[]) => any) {
        for (let key in target.prototype) {
            const path: string = Reflect.getMetadata('path', target.prototype, key)
            const method: Methods = Reflect.getMetadata('method', target.prototype, key)
            const handler = target.prototype[key]
            const middlewares: RequestHandler[] = Reflect.getMetadata('middlewares', target.prototype, key)
            if (path && method) {
                //处理前缀问题@controller('abc')
                const fullPath = root === "/" ? path : `${root}${path}`
                if (middlewares && middlewares.length) {
                    router[method](fullPath, ...middlewares, handler)
                } else {
                    router[method](fullPath, handler)
                }
            }
            // console.log(Reflect.getMetadata('path',target.prototype,key));
        }
    }
}