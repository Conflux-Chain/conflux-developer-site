module.exports = function () {
  return transformer;
  function transformer(tree) {
    const replaced = tree;
    replaced.children = tree.children.reduce((acc, node) => {
      // NOTE: this only strips the first level of this kinds of nodes
      if (node.value && node.value.includes && node.value.includes("style=")) {
      } else {
        acc.push(node);
      }
      return acc;
    }, []);
    return replaced;
  }
};
