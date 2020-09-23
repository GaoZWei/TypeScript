// ts ->.d.ts翻译文件 @types/superagent-> js    //直接引js不行
import superagent from 'superagent' //js语法
class Crowller {
    private secret = 'secretKey'//爬取密钥
    // private url = `http://baidu.com/das?secret=${this.secret}`
    private url = `http://baidu.com/`
    private rawHtml = ''
    async getRawHtml() {
        const result = await superagent.get(this.url)
        console.log(result.text);
        // this.rawHtml=result.text;//不好使,用下面替代
        this.rawHtml = ''
    }
    constructor() {
        this.getRawHtml()
    }
}

const crowller = new Crowller();