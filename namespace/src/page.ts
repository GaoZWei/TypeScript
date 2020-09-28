/// <reference path="./components.ts"/>
//依赖于component文件

namespace Home {
    export class Page {
        user:Components.User={
            name:'gao'
        }
        constructor() {
            new Components.Header()
            new Components.Content()
            new Components.Footer()
        }
    }
}