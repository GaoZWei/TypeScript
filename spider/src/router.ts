//被优化的代码,备份
// import fs from 'fs'
// import path from 'path'
// import { Router, Request, Response, NextFunction } from 'express'
// import Crowller from './utils/crowller'
// import Analyzer from './utils/analyzer';
// import { getResponseData } from './utils/util'

// // 问题一:express库的类型定义文件.d.ts 文件类型描述不准确
// // 解决方法
// interface BodyRequest extends Request {
//     body: {
//         [key: string]: string | undefined//KEY设置为任何形式的stirng
//     }
// }
// const checkLogin = (req: Request, res: Response, next: NextFunction) => {
//     const isLogin = req.session ? req.session.login : false
//     if (isLogin) {
//         next()
//     } else {
//         res.json(getResponseData(null, '请先登录'))
//     }
// }
// const router = Router() //密码123
// router.get('/', ()=>{})
// // (req: BodyRequest, res: Response) => {
// //     const isLogin = req.session ? req.session.login : false
// //     if (isLogin) {
// //         res.send(`
// //             <html>
// //             <body>
// //             <a href="/getData">爬取内容</a>
// //             <a href="/showData">展示内容</a>
// //             <a href="/logout">退出</a>
// //             </body>
// //             </html>
// //             `)
// //     } else {
// //         res.send(`
// //             <html>
// //             <body>
// //             <form method="post" action="/login">
// //             <input type="password" name="password" />
// //             <button>登录</button>
// //             </form>
// //             </body>
// //             </html>
// //             `)
// //     }

// // })

// router.get('/getData', checkLogin, (req: BodyRequest, res: Response) => {
//     const secret = 'secretKey';
//     const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
//     const analyzer = Analyzer.getInstance();
//     new Crowller(url, analyzer);
//     res.json(getResponseData(true))
//     // res.send('getData success')
//     // res.send(`${req.teacherName} password error`)
// })

// router.get('/showData', checkLogin, (req: BodyRequest, res: Response) => {
//     try {
//         const position = path.resolve(__dirname, "../data/course.json")
//         const result = fs.readFileSync(position, 'utf-8')
//         res.json(getResponseData(JSON.parse(result)))
//     } catch (e) {
//         res.json(getResponseData(false, '数据不存在'))
//     }
// })

// router.post('/login', (req: BodyRequest, res: Response) => {
//     const { password } = req.body
//     const isLogin = req.session ? req.session.login : false
//     if (isLogin) {
//         res.json(getResponseData(false, '已经登录过'))
//     } else {
//         if (password == '123' && req.session) {
//             req.session.login = true
//             res.json(getResponseData(true))
//             // res.send('getData success')//错的
//         } else {
//             res.json(getResponseData(false, '登录失败'))
//         }
//     }
// })

// router.get('/logout', (req: BodyRequest, res: Response) => {
//     if (req.session) {
//         req.session.login = undefined
//     }
//     // res.redirect('/')
//     res.json(getResponseData(true))
// })


// export default router