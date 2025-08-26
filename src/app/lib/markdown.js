import Parser from "./Parse.js" //解析器
import Renderer from "./Renderer.js"; //dom render


class MyMarkdown {
  constructor () {
    this.parser = new Parser();
    this.renderer = new Renderer();
  }
  parse (src) {
    const ast = this.parser.parse(src);
    return ast;
  }
  render (ast) {
    return this.renderer.render(ast);
  }
}

export default MyMarkdown;
