webpackJsonp([26],{'./node_modules/babel-loader/lib/index.js?{"presets":["/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-es2015/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-stage-1/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-react/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-env/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-stage-0/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-preset-react/lib/index.js"],"plugins":["/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/tsuyoshiwada/develop/react-drip-form/www/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"cacheDirectory":true}!./src/pages/index.js':function(e,n,t){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e,n){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}Object.defineProperty(n,"__esModule",{value:!0});var r=a(["\n  margin: 180px 0;\n  text-align: center;\n\n  & div {\n    line-height: 1;\n  }\n\n  & svg {\n    width: 40px;\n    height: 55px;\n  }\n\n  & h1 {\n    margin: 10px 0 0;\n    font-size: 1rem;\n  }\n\n  & p {\n    margin: 10px 0 0;\n    font-size: 0.68rem;\n  }\n\n  @media (",") {\n    & svg {\n      width: 50px;\n      height: 67.5px;\n    }\n\n    & h1 {\n      font-size: 1.75rem;\n    }\n\n    & p {\n      font-size: 0.875rem;\n    }\n  }\n"],["\n  margin: 180px 0;\n  text-align: center;\n\n  & div {\n    line-height: 1;\n  }\n\n  & svg {\n    width: 40px;\n    height: 55px;\n  }\n\n  & h1 {\n    margin: 10px 0 0;\n    font-size: 1rem;\n  }\n\n  & p {\n    margin: 10px 0 0;\n    font-size: 0.68rem;\n  }\n\n  @media (",") {\n    & svg {\n      width: 50px;\n      height: 67.5px;\n    }\n\n    & h1 {\n      font-size: 1.75rem;\n    }\n\n    & p {\n      font-size: 0.875rem;\n    }\n  }\n"]),o=a(["\n  margin: 180px 0;\n\n  & h2 {\n    font-size: 1.75rem;\n  }\n\n  @media (",") {\n    & h2 {\n      font-size: 2.25rem;\n      text-align: center;\n    }\n  }\n"],["\n  margin: 180px 0;\n\n  & h2 {\n    font-size: 1.75rem;\n  }\n\n  @media (",") {\n    & h2 {\n      font-size: 2.25rem;\n      text-align: center;\n    }\n  }\n"]),i=a(["\n  display: block;\n  overflow: hidden;\n  margin-top: 30px;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n  color: inherit;\n  text-decoration: none;\n\n  &:hover {\n    color: #20c59d;\n  }\n\n  & img {\n    vertical-align: top;\n    transition: all 120ms ease-out;\n  }\n\n  &:hover img {\n    opacity: 0.8;\n  }\n\n  & div {\n    padding: 1.5em 1em;\n  }\n\n  & h3 {\n    margin: 0;\n    font-size: 1rem;\n    transition: color 80ms ease-out;\n  }\n\n  & p {\n    margin: 0;\n    overflow: hidden;\n    font-size: 0.75em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #a0a0a0 !important;\n  }\n"],["\n  display: block;\n  overflow: hidden;\n  margin-top: 30px;\n  background: #fff;\n  border-radius: 3px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);\n  color: inherit;\n  text-decoration: none;\n\n  &:hover {\n    color: #20c59d;\n  }\n\n  & img {\n    vertical-align: top;\n    transition: all 120ms ease-out;\n  }\n\n  &:hover img {\n    opacity: 0.8;\n  }\n\n  & div {\n    padding: 1.5em 1em;\n  }\n\n  & h3 {\n    margin: 0;\n    font-size: 1rem;\n    transition: color 80ms ease-out;\n  }\n\n  & p {\n    margin: 0;\n    overflow: hidden;\n    font-size: 0.75em;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    color: #a0a0a0 !important;\n  }\n"]),d=t("./node_modules/react/react.js"),s=l(d),m=t("./node_modules/styled-components/lib/index.js"),u=l(m),c=t("./node_modules/react-lime-grid/lib/index.js"),p=t("./src/components/index.js"),f=t("./src/constants.js"),w=u.default.div(r,f.viewport.md),g=u.default.section(o,f.viewport.md),h=u.default.a(i),b=function(e){var n=e.href,t=e.title,l=e.image;return s.default.createElement(c.Col,{xs:12,sm:6,lg:4},s.default.createElement(h,{href:n,title:t},s.default.createElement("img",{src:"./components/"+l,alt:t,title:t}),s.default.createElement("div",null,s.default.createElement("h3",null,t),s.default.createElement("p",null,n))))};n.default=function(){return s.default.createElement("div",null,s.default.createElement(p.Helmet,{title:"Powerfully React forms state manager"}),s.default.createElement(p.Header,null),s.default.createElement(w,null,s.default.createElement(c.Container,null,s.default.createElement("div",null,s.default.createElement(p.Logo,null)),s.default.createElement("h1",null,"react drip form"),s.default.createElement("p",null,"Powerfully React forms state manager"))),s.default.createElement(g,null,s.default.createElement(p.Demo,null)),s.default.createElement(g,null,s.default.createElement(c.Container,null,s.default.createElement("h2",null,"Features"),s.default.createElement(c.Row,{center:"xs"},s.default.createElement(c.Col,{xs:12,md:8},s.default.createElement("ul",null,s.default.createElement("li",null,"HOC based API. (No magic, transparent and open API)"),s.default.createElement("li",null,"Free component design. Integration with many UI frameworks."),s.default.createElement("li",null,"Rule based validation, and Provide many built-in rules.Support async and sync validation."),s.default.createElement("li",null,"Support normalization."),s.default.createElement("li",null,"Support Nest fields and Array fields."),s.default.createElement("li",null,"Customizable error message. (Support i18n)")))))),s.default.createElement(g,null,s.default.createElement(c.Container,null,s.default.createElement("h2",null,"Installation"),s.default.createElement(c.Row,{center:"xs"},s.default.createElement(c.Col,{xs:12,md:8},s.default.createElement(p.Code,{language:"bash"},"$ npm install react-drip-form --save"))))),s.default.createElement(g,null,s.default.createElement(c.Container,null,s.default.createElement("h2",null,"Components"),s.default.createElement(c.Row,{center:"xs",style:{marginTop:-30}},s.default.createElement(b,{href:"https://github.com/tsuyoshiwada/react-drip-form-components",title:"Official UI Components",image:"react-drip-form-components.png"}),s.default.createElement(b,{href:"https://github.com/tsuyoshiwada/react-drip-form-material-ui",title:"Material-UI ",image:"react-drip-form-material-ui.png"})))),s.default.createElement(p.Footer,null))},e.exports=n.default}});
//# sourceMappingURL=page-component---src-pages-index-js-d6ed103d6ce350333044.js.map