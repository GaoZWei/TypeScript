// import express, { Request, Response, NextFunction } from 'express'
import express from 'express'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'
import './controller/LoginController'
import './controller/CrowllerController'
import { router } from './controller/decorator'
// import router from './router'

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))//处理表单
// 自定义中间件
// app.use((req: Request, res: Response, next: NextFunction) => {
//     req.teacherName = 'dell'
//     next()
// })
app.use(
    cookieSession({
        name: 'session',
        keys: ['gao'],
        maxAge: 24 * 60 * 60 * 1000
    })
)
app.use(router)

app.listen(7001, () => {
    console.log('server is running')
})