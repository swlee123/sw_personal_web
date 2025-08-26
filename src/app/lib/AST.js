class AST {
    constructor (tokens) {
      this.ast = {
        type: "root",
        children: []
      };
      this.createChildren(tokens, this.ast)
    }
    createChildren (tokens, parent) {
      let listContainer;
      const _parent = parent;
      tokens.forEach((token) => {
        switch (token.type) {
          case "list" :
            if (!listContainer) {
              listContainer = {
                type: "listContainer",
                children: []
              };
              _parent.children.push(listContainer)
            }
            parent = listContainer;
            break;
          default:
            listContainer = null;
            parent = _parent;
            break;
        }
        this.createNode(token,parent)
      });
    }
    createNode (token,parent) {
      parent.children.push({...token})
    }
  }
  export default AST;
