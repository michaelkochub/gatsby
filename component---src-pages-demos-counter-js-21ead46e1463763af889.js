webpackJsonp([0x6b95ea996c9dac00],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-plugin-transform-object-assign/lib/index.js",["transform-react-jsx",{"pragma":"Glamor.createElement"}],"glamor/babel-hoist"],"presets":[["/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-preset-stage-0/lib/index.js","/Users/mkochub/dev/gatsby/gatsby-proj/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/demos/counter.js':function(e,t,o){(function(n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=o("./node_modules/react/react.js"),c=r(l),i=function(e){function t(o){s(this,t);var n=a(this,e.call(this,o));return n.state={count:n.props.initCount||0},n}return u(t,e),t.prototype.render=function(){var e=this;return n.createElement("div",null,n.createElement("h1",null,this.props.title||"Counter"),n.createElement("p",null,"current count: ",this.state.count),n.createElement("button",{onClick:function(){return e.setState({count:e.state.count+1})}},"plus"),n.createElement("button",{onClick:function(){return e.setState({count:e.state.count-1})}},"minus"))},t}(c.default.Component);t.default=function(){return n.createElement(i,{title:"My Counter",initCount:3})},e.exports=t.default}).call(t,o("./node_modules/glamor/react.js"))}});
//# sourceMappingURL=component---src-pages-demos-counter-js-21ead46e1463763af889.js.map