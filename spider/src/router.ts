import { Router, Request, Response } from 'express'
import Crowller from './crowller'
import DellAnalyzer from './dellAnalyzer';
import fs from 'fs'
import path from 'path'

// 问题一:express库的类型定义文件.d.ts 文件类型描述不准确
// 解决方法
interface RequestWithBody extends Request {
    body: {
        [key: string]: string | undefined//KEY设置为任何形式的stirng
    }
}

const router = Router() //密码123
router.get('/', (req: Request, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        res.send(
            `
            <html>
            <body>
            <a href="/getData">爬取内容</a>
            <a href="/showData">展示内容</a>
            <a href="/logout">退出</a>
            </body>
            </html>
            `
        )
    } else {
        res.send(
            `
            <html>
            <body>
            <form method="post" action="/login">
            <input type="password" name="password" />
            <button>登录</button>
            </form>
            </body>
            </html>
            `
        )
    }

})

router.get('/getData', (req: RequestWithBody, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        const secret = 'secretKey';
        const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
        const analyzer = DellAnalyzer.getInstance();
        new Crowller(url, analyzer);
        res.send('getData success')
    } else {
        res.send(`请先登录`)
        // res.send(`${req.teacherName} password error`)
    }
})

router.get('/showData', (req: RequestWithBody, res: Response) => {
    const isLogin = req.session ? req.session.login : false
    if (isLogin) {
        try {
            const position = path.resolve(__dirname, "../data/course.json")
            const result = fs.readFileSync(position, 'utf-8')
            res.json(JSON.parse(result))
        } catch{
            res.send('尚未爬取到内容')
        }
    } else {
        res.send('请登录后查看内容')
    }

})


router.post('/login', (req: RequestWithBody, res: Response) => {
    const { password } = req.body
    const isLogin = req.session ? req.session.login : false

    if (isLogin) {
        res.send('已经登录过')
    } else {
        if (password == '123' && req.session) {
            req.session.login = true
            res.send('登录成功')
        } else {
            res.send('登录失败')
        }
    }
})

router.get('/logout', (req: Request, res: Response) => {
    if (req.session) {
        req.session.login = undefined
    }
    res.redirect('/')
})


export default router