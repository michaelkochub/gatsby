webpackJsonp([0x935d4c634a122000],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-plugin-transform-object-assign/lib/index.js",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"glamor/babel-hoist"],"presets":[["/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-preset-stage-0/lib/index.js","/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/my-files.js':function(e,t,l){(function(e){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var r=l("./node_modules/react/react.js"),a=(s(r),l("./node_modules/gatsby-link/index.js")),n=s(a);t.default=function(t){var l=t.data;return console.log(l),e.createElement("div",null,e.createElement("h1",null,"My Site's Files"),e.createElement("table",null,e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"relativePath"),e.createElement("th",null,"prettySize"),e.createElement("th",null,"extension"),e.createElement("th",null,"birthTime"))),e.createElement("tbody",null,l.allFile.edges.map(function(t){var l=t.node;return e.createElement("tr",null,e.createElement("td",null,e.createElement(n.default,{to:l.relativePath.slice(0,-3).split("/").slice(1).join("/"),css:{textDecoration:"none",color:"inherit"}},l.relativePath)),e.createElement("td",null,l.prettySize),e.createElement("td",null,l.extension),e.createElement("td",null,l.birthTime))}))))};t.query="** extracted graphql fragment **"}).call(t,l("./node_modules/glamor/react.js"))}});
//# sourceMappingURL=component---src-pages-my-files-js-1582653a42f5ec739373.js.map