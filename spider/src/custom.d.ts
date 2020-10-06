//自定义
// 问题二:使用中间件时候,对req,res修改后,实际上类型并不能改变
// 解决(类型融合)

// declare namespace Express {
//     interface Request {
//         teacherName: string
//     }
// }