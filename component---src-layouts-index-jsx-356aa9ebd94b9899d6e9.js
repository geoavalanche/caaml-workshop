webpackJsonp([79611799117203,60335399758886],{122:function(e,t){e.exports={layoutContext:{}}},247:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(1),l=n(o),i=r(259),u=n(i),c=r(122),f=n(c);t.default=function(e){return l.default.createElement(u.default,a({},e,f.default))},e.exports=t.default},356:function(e,t){},357:function(e,t){},259:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=r(1),u=n(i),c=r(24),f=n(c),s=r(17),p=r(18),d=n(p);r(356),r(357);var h=r(260),b=n(h),y=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.getLocalTitle=function(){function e(e){return e.charAt(0).toUpperCase()+e.slice(1)}var t=d.default.pathPrefix?d.default.pathPrefix:"/",r=this.props.location.pathname.replace(t,"").replace("/",""),n="";if(""===r)n="Home";else if("tags/"===r)n="Tags";else if("categories/"===r)n="Categories";else if("about/"===r)n="About";else if(r.includes("posts"))n="Article";else if(r.includes("tags/")){var a=r.replace("tags/","").replace("/","").replace("-"," ");n="Tagged in "+e(a)}else if(r.includes("categories/")){var o=r.replace("categories/","").replace("/","").replace("-"," ");n=""+e(o)}return n},t.prototype.render=function(){var e=this.props.children;return u.default.createElement("div",null,u.default.createElement(f.default,null,u.default.createElement("title",null,d.default.siteTitle+" |  "+this.getLocalTitle()),u.default.createElement("meta",{name:"description",content:d.default.siteDescription})),u.default.createElement(s.ThemeProvider,{theme:b.default},e()))},t}(u.default.Component);t.default=y,e.exports=t.default},260:function(e,t){"use strict";t.__esModule=!0;var r={brand:"#41B883",accent:"#0a5eb7",accentDark:"#35495E",lightGrey:"#F6F6F6",darkGrey:"#91a2a3",ink:"black",errorRed:"#FF6666",codeEditBlue:"#2973b7",codeEditGreen:"#42b983",contentWidthLaptop:"850px",sitePadding:"25px"};t.default=r,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-jsx-356aa9ebd94b9899d6e9.js.map