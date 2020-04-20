const HtmlToReactParser = require("html-to-react").Parser;
const reactElementToJSXString = require("react-element-to-jsx-string");

module.exports = function () {
  return transformer;
  function transformer(tree) {
    const replaced = tree;
    replaced.children = tree.children.reduce((acc, node) => {
      if (node.children) node = transformer(node);
      if (node.type === "jsx" && node.value && node.value.includes('style=')) {
        const htmlToReactParser = new HtmlToReactParser();
        const reactElement = htmlToReactParser.parse(node.value);
        if (!Array.isArray(reactElement))
          node.value = reactElementToJSXString.default(reactElement).replace(/\n/g, '');
      }
      acc.push(node);
      return acc;
    }, []);
    return replaced;
  }
};
