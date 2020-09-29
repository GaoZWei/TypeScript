//类型定义文件
//定义全局变量
// declare var $: (param: () => void) => void  //返回空  (变量的类型是函数,函数的参数是函数)

//定义全局函数
interface JqueryInstance {
    html: (html: string) => JqueryInstance //返回jquery实例
}
//函数重载
declare function $(readyFun: () => void): void
declare function $(seletor: string): JqueryInstance

//如何对对象进行类型定义,以及对类进行类型定义,以及命名空间的嵌套
declare namespace $ {
    namespace fn {
        class init {
            
        }
    }
}

// 使用interface的语法,实现函数重载
// interface JQuery {
//     (readFun: () => void): void;
//     (seletor: string): JqueryInstance
// }
// declare var $: JQuery

