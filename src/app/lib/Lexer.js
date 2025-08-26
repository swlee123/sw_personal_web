import Tokenizer from "./Tokenizer.js";
class Lexer {
  constructor () {
    // 存储所有解析的token
    this.tokens = [];
    this.tokenizer = new Tokenizer();
  }
  /*
  * 对src 分词
  * */
  lex (src) { //产生token
    src = this.preprocess(src);
    console.log("进入分词", src);
    this.tokens = [];
    /*
    * 开始解析 https://www.markdownguide.org/basic-syntax/
    * 块->内联
    * */
    this.parseBLock(src, this.tokens);
    console.log(this.tokens)
    return this.tokens;
  }
  /*
  * 预处理去除注释空格
  * */
  preprocess(src) {
    return src.replace(/\r\n?|\n/g, "\n").replace(/\t/g, "    "); //处理操作系统的不统一
  }
  parseBLock (src, tokens = []) {
    let token;
    // let n = 0;
    while (src) {
      // newline
      if ((token = this.tokenizer.newline(src))) {
        src = src.substring(token.raw.length); //匹配到的内容要删除
        this.tokens.push(token);
        continue;
      }
      // heading
      if ((token = this.tokenizer.heading(src))) {
        this.inlineToken(token.text, token.children); //内联行处理到数组内
        src = src.substring(token.raw.length); //匹配到的内容要删除
        this.tokens.push(token);
        continue;
      }
      // list
      if ((token = this.tokenizer.list(src))) {
        this.inlineToken(token.text, token.children); //内联行处理到数组内
        src = src.substring(token.raw.length); //匹配到的内容要删除
        this.tokens.push(token);
        continue;
      }
      // 异常处理
      if (src) {
        // throw new Error(`Error: ${src}`)
        src = ""
      }
    }
  }
  inlineToken (src, tokens = []) {
    let token;
    while (src) {
      // em
      if ((token = this.tokenizer.em(src))) {
        src = src.substring(token.raw.length); //匹配到的内容要删除
        tokens.push(token);
        continue;
      }
      // text
      if ((token = this.tokenizer.inlineText(src))) {
        src = src.substring(token.raw.length); //匹配到的内容要删除
        tokens.push(token);
        continue;
      }
      // 异常处理
      if (src) {
        // throw new Error(`Error: ${src}`)
        src = ""
      }
    }
  }
}

export default Lexer;

