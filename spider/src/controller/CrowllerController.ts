import 'reflect-metadata'
import fs from 'fs'
import path from 'path'
import { Request, Response, NextFunction } from 'express'
import { controller, use, get } from '../decorator'
import { getResponseData } from '../utils/util'
import Crowller from '../utils/crowller'
import Analyzer from '../utils/analyzer';
interface BodyRequest extends Request {
    body: {
        [key: string]: string | undefined//KEY设置为任何形式的stirng
    }
}

const checkLogin = (req: Request, res: Response, next: NextFunction): void => {
    // console.log('checkLogin middleware');
    const isLogin = !!(req.session ? req.session.login : false)  //!!转成bool类型
    if (isLogin) {
        next()
    } else {
        res.json(getResponseData(null, '请先登录'))
    }
}

//测试小功能(可忽略)
const test = (req: Request, res: Response, next: NextFunction): void => {
   console.log('test middleware');
   next()
}

@controller('/')
export class CrowllerController {

    @get('/getData')
    @use(checkLogin)//把中间件注册到函数中
    @use(test)
    getData(req: BodyRequest, res: Response): void {
        const secret = 'secretKey';
        const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;
        const analyzer = Analyzer.getInstance();
        new Crowller(url, analyzer);
        res.json(getResponseData(true))
    }

    @get('/showData')
    @use(checkLogin)//把中间件注册到函数中
    showData(req: BodyRequest, res: Response): void {
        try {
            const position = path.resolve(__dirname, "../../data/course.json")
            const result = fs.readFileSync(position, 'utf-8')
            res.json(getResponseData(JSON.parse(result)))
        } catch (e) {
            res.json(getResponseData(false, '数据不存在'))
        }
    }
}