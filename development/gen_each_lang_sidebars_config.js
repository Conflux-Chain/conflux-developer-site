const fs = require("fs");
const { promisify } = require("util");
const { resolve: presolve } = require("path");
const mustache = require("mustache");

const writeFile = promisify(fs.writeFile);
const template = fs.readFileSync(
  presolve(__dirname, "./sidebars.each-lang.js.mustache"),
  "utf-8"
);
const configs = require(presolve(__dirname, "../sidebars.js"));

Object.keys(configs.docs).map(lang => {
  return writeFile(
    `sidebars.${lang}.js`,
    mustache.render(template, {
      eachLangConfig: JSON.stringify(configs.docs[lang])
    })
  );
});
