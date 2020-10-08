import 'reflect-metadata'
import { CrowllerController, LoginController } from "../controller"
import { RequestHandler } from 'express'

export function use(middleware: RequestHandler) {
    return function (target: CrowllerController | LoginController, key: string) {
        //多个中间件使用
        const originMiddleWares = Reflect.getMetadata('middlewares', target, key) || []
        originMiddleWares.push(middleware)
        Reflect.defineMetadata('middlewares', originMiddleWares, target, key)//自定义
    }
}