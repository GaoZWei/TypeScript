import express from 'express'
import bodyParser from 'body-parser'
import router from './router'
const app = express()

// 问题一:express库的类型定义文件.d.ts 文件类型描述不准确
// 问题二:使用中间件时候,对req,res修改后,实际上类型并不能改变

app.use(bodyParser.urlencoded({ extended: false }))//处理表单
app.use(router)

app.listen(7001, () => {
    console.log('server is running')
})