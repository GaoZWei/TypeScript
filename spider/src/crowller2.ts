import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import LeeAnalyzer from './leeAnalyzer';

export interface Analyzer {
  analyze: (html: string, filePath: string) => string;
}

class Crowller {
  private filePath = path.resolve(__dirname, '../data/course.json');//数据存在哪

  async getRawHtml() {
    const result = await superagent.get(this.url);//从哪里取数据
    return result.text;
  }

  writeFile(content: string) {//从哪里写数据
    fs.writeFileSync(this.filePath, content);
  }

  async initSpiderProcess() {//数据分析流程
    const html = await this.getRawHtml();
    const fileContent = this.analyzer.analyze(html, this.filePath);
    this.writeFile(fileContent);
  }

  constructor(private url: string, private analyzer: Analyzer) {
    this.initSpiderProcess();
  }
}

const secret = 'secretKey';
const url = `http://www.dell-lee.com/typescript/demo.html?secret=${secret}`;

const analyzer = new LeeAnalyzer();
new Crowller(url, analyzer);
