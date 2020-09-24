// ts ->.d.ts翻译文件 @types/superagent-> js    //直接引js不行
import superagent from 'superagent' //js语法
import cheerio from 'cheerio'
interface Course {
    title: string;
    count: number;
}
class Crowller {
    private secret = 'secretKey'//爬取密钥
    // private url = `http://baidu.com/das?secret=${this.secret}`
    private url = `https://movie.douban.com/chart`
    private rawHtml = ''
    getCourseInfo(html: string) {
        const $ = cheerio.load(html);
        const courseItems = $('.course-item');
        const courseInfos: Course[] = [];
        courseItems.map((index, element) => {
            const descs = $(element).find('.course-desc');
            const title = descs.eq(0).text();
            const count = parseInt(
                descs
                    .eq(1)
                    .text()
                    .split('：')[1],
                10
            );
            courseInfos.push({ title, count });
        });
        const result = {
            time: new Date().getTime(),
            data: courseInfos
        };
        console.log(result);
    }
    async getRawHtml() {
        const result = await superagent.get(this.url)
        // console.log(result.text);
        // this.rawHtml=result.text;//不好使,用下面替代
        // this.rawHtml = ''
        this.getCourseInfo(result.text);
    }
    constructor() {
        this.getRawHtml()
    }
}

const crowller = new Crowller();