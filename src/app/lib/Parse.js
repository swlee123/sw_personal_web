import Lexer from "./Lexer.js" //分词器
import AST from "./AST.js"
class Parser {
  /*
  * 解析传入的markdown内容
  * @ params src 要解析的内容
  * */
  constructor () {
    this.lexer = new Lexer();
  }
  parse (src) {
    const tokens = this.lexer.lex(src);
    console.log("parse->tokens", tokens);
    const ast = (new AST(tokens)).ast;
    console.log("ast", ast);
    return ast;
  }
}

export default Parser;

