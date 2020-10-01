//es6 模块化
declare module 'jquery' {
    interface JqueryInstance {
        html: (html: string) => JqueryInstance //返回jquery实例
    }
    //混合类型
    function $(readyFun: () => void): void
    function $(seletor: string): JqueryInstance
    namespace $ {
        namespace fn {
            class init {

            }
        }
    }
    export =$
}
