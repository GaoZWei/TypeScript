// import { Router, RequestHandler } from 'express'
// // export const router = Router()//装饰器走完,就会生成router的路由,走对应的路由
import { CrowllerController, LoginController } from "../controller"
export enum Methods {
    get = "get",
    post = "post"
}

// 工厂函数解决不同请求的方法
function getRequestDecorator(type: Methods) {
    return function (path: string) {
        return function (target: CrowllerController | LoginController, key: string) {
            Reflect.defineMetadata('path', path, target, key)//自定义
            Reflect.defineMetadata('method', type, target, key)
        }
    }
}

export const get = getRequestDecorator(Methods.get)
export const post = getRequestDecorator(Methods.post)
// export const put = getRequestDecorator('put')
// export const del = getRequestDecorator('delete')

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
