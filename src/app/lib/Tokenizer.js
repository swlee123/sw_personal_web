import Rules from "./Rule.js";

class Tokenizer {
  constructor () {
  }
  /**
   * @param src
   * @return {{ raw: string, type: string }}
   */
  newline (src) {
    const res = Rules.block.newline.exec(src);
    console.log("exec", res);
    if (res) {
      return {
        type: "newline",
        raw: res[0]
      }
    }
  }
  /**
   * @param src
   * @return {{ depth: number, children: *[], raw: string, text: string,type: string }}
   */
  heading (src) {
    const res = Rules.block.heading.exec(src);
    console.log("heading", res);
    if (res) {
      let text = res[2].trim();
      return {
        type: "heading",
        raw: res[0],
        depth: res[1].length,
        text: text,
        children: []
      }
    }
  }
  /**
   * @param src
   * @return {{ depth: number, children: *[], raw: string, text: string,type: string }}
   */
  list (src) {
    const res = Rules.block.list.exec(src);
    if (res) {
      return {
        type: "list",
        raw: res[0],
        text: res[2] && res[2].trim(),
        children: []
      }
    }
  }
  em (src) {
    const res = Rules.inline.em.exec(src);
    if (res) {
      return {
        type: "em",
        raw: res[0],
        text: res[1]
      }
    }
  }
  inlineText (src) { //内联文本
    const res = Rules.inline.text.exec(src);
    if (res) {
      return {
        type: "text",
        raw: res[0],
        text: res[0]
      }
    }
  }
}

export default Tokenizer;
