webpackJsonp([3],{208:function(e,a,t){"use strict";function n(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function l(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function o(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0}),t.d(a,"attributes",function(){return i});var s=t(0),c=t.n(s),r=t(67),m=t(213),u=t(242),p=(t.n(u),function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}()),i={},E=function(e){function a(e){n(this,a);var t=l(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return o(a,e),p(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"Toolbars"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"Toolbar actions appear above the view affected by their actions.")),c.a.createElement("ul",null,c.a.createElement("li",null,"Module ",c.a.createElement("strong",null,"@rmwc/toolbar")),c.a.createElement("li",null,"Import styles:",c.a.createElement("ul",null,c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/toolbar/dist/mdc.toolbar.css'"),";"))),c.a.createElement("li",null,"MDC Docs: ",c.a.createElement("a",{href:"https://material.io/develop/web/components/toolbar/"},"https://material.io/develop/web/components/toolbar/"))),c.a.createElement("div",{className:"example render-with-code"},c.a.createElement("div",{className:"run"},c.a.createElement(r.a,null,c.a.createElement(r.d,null,c.a.createElement(r.f,null,"Toolbar"))),c.a.createElement(r.a,null,c.a.createElement(r.d,null,c.a.createElement(r.e,{alignStart:!0},c.a.createElement(r.c,{icon:"menu"}),c.a.createElement(r.f,null,"Toolbar")),c.a.createElement(r.e,{alignEnd:!0},c.a.createElement(r.b,{icon:"save"}),c.a.createElement(r.b,{icon:"print"})))),c.a.createElement(r.a,null,c.a.createElement(r.d,null,c.a.createElement(r.f,null,"Toolbar")),c.a.createElement(r.d,null,c.a.createElement(r.f,null,"Second Row")))),c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","  Toolbar",c.a.createElement("span",{className:"token punctuation"},","),"\n","  ToolbarRow",c.a.createElement("span",{className:"token punctuation"},","),"\n","  ToolbarSection",c.a.createElement("span",{className:"token punctuation"},","),"\n","  ToolbarTitle",c.a.createElement("span",{className:"token punctuation"},","),"\n","  ToolbarMenuIcon",c.a.createElement("span",{className:"token punctuation"},","),"\n","  ToolbarIcon","\n",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@rmwc/toolbar'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Minimum usage */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Toolbar"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"Toolbar",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Toolbar"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* With multiple sections */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Toolbar"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarSection")," ",c.a.createElement("span",{className:"token attr-name"},"alignStart"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarMenuIcon")," ",c.a.createElement("span",{className:"token attr-name"},"icon"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"menu",c.a.createElement("span",{className:"token punctuation"},'"'),"/"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"Toolbar",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarSection"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarSection")," ",c.a.createElement("span",{className:"token attr-name"},"alignEnd"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarIcon")," ",c.a.createElement("span",{className:"token attr-name"},"icon"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"save",c.a.createElement("span",{className:"token punctuation"},'"'),"/"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","      ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarIcon")," ",c.a.createElement("span",{className:"token attr-name"},"icon"),c.a.createElement("span",{className:"token attr-value"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},'"'),"print",c.a.createElement("span",{className:"token punctuation"},'"'),"/"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarSection"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Toolbar"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Multiple rows */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Toolbar"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"Toolbar",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"Second Row",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Toolbar"),c.a.createElement("span",{className:"token punctuation"},">")),"\n")))),c.a.createElement("h2",null,"Fixed Toolbars"),c.a.createElement("p",null,"When using the ",c.a.createElement("code",null,"fixed")," prop, you can optionally add the ",c.a.createElement("code",null,"ToolbarFixedAdjust")," component to fill in the appropriate space."),c.a.createElement("div",{className:"example code-only"},c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","  Toolbar",c.a.createElement("span",{className:"token punctuation"},","),"\n","  ToolbarRow",c.a.createElement("span",{className:"token punctuation"},","),"\n","  ToolbarTitle",c.a.createElement("span",{className:"token punctuation"},","),"\n","  ToolbarFixedAdjust",c.a.createElement("span",{className:"token punctuation"},","),"\n",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@rmwc/toolbar'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Toolbar")," ",c.a.createElement("span",{className:"token attr-name"},"fixed"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"Toolbar",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarTitle"),c.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"ToolbarRow"),c.a.createElement("span",{className:"token punctuation"},">")),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Toolbar"),c.a.createElement("span",{className:"token punctuation"},">")),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"ToolbarFixedAdjust")," ",c.a.createElement("span",{className:"token punctuation"},"/>")),"\n")))),c.a.createElement("div",{className:"example render-only"},c.a.createElement("div",{className:"run"},c.a.createElement(m.a,{docs:u,displayName:"Toolbar"}),c.a.createElement(m.a,{docs:u,displayName:"ToolbarRow"}),c.a.createElement(m.a,{docs:u,displayName:"ToolbarSection"}),c.a.createElement(m.a,{docs:u,displayName:"ToolbarTitle"}),c.a.createElement(m.a,{docs:u,displayName:"ToolbarMenuIcon",composes:["Icon"]}),c.a.createElement(m.a,{docs:u,displayName:"ToolbarIcon",composes:["Icon"]}),c.a.createElement(m.a,{docs:u,displayName:"ToolbarFixedAdjust"}))))}}]),a}(c.a.Component);a.default=E},213:function(e,a,t){"use strict";function n(e){if(Array.isArray(e)){for(var a=0,t=Array(e.length);a<e.length;a++)t[a]=e[a];return t}return Array.from(e)}function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function o(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}function s(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}t.d(a,"a",function(){return u});var c=t(0),r=(t.n(c),function(){function e(e,a){var t=[],n=!0,l=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);n=!0);}catch(e){l=!0,o=e}finally{try{!n&&c.return&&c.return()}finally{if(l)throw o}}return t}return function(a,t){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return e(a,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,a){for(var t=0;t<a.length;t++){var n=a[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(a,t,n){return t&&e(a.prototype,t),n&&e(a,n),a}}(),u=function(e){function a(e){l(this,a);var t=o(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.flatDocs=Object.values(e.docs).reduce(function(e,a){return e.concat(a)},[]),t}return s(a,e),m(a,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(a){return a.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,a){return c.createElement(c.Fragment,{key:a},0!==a&&c.createElement("br",null),e.split("  ").map(function(e,a){return c.createElement(c.Fragment,{key:a},0!==a&&c.createElement(c.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var a=this;return e.map(function(e){return a.findDocDef(e)}).filter(Boolean).reduce(function(e,a){return Object.assign({},a,e,{props:a.props||e.props?Object.assign({},a.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,a=this.props,t=a.displayName,l=a.composes,o=void 0===l?[]:l,s=this.getComposedDefs([t].concat(n(o)));return c.createElement("div",{className:"document-component"},c.createElement("h2",null,t),s&&!!s.description&&c.createElement("p",null,s.description),s&&s.props&&c.createElement("div",null,c.createElement("h3",null,"Props"),c.createElement("table",null,c.createElement("thead",null,c.createElement("tr",null,c.createElement("th",null,"Name"),c.createElement("th",null,"Type"),c.createElement("th",null,"Default"),c.createElement("th",null,"Description"))),c.createElement("tbody",null,Object.entries(s.props).map(function(a,t){var n=r(a,2),l=n[0],o=n[1];return c.createElement("tr",{key:t},c.createElement("td",{className:o.required?"required":""},c.createElement("code",null,l)),c.createElement("td",null,c.createElement("code",null,o.flowType&&e.renderRaw(o.flowType.raw||o.flowType.name||""))),c.createElement("td",null,o.defaultValue?c.createElement("code",null,o.defaultValue.value):c.createElement("code",null,"undefined")),c.createElement("td",null,o.description||""))})))))}}]),a}(c.Component)},242:function(e,a){e.exports=[{description:"",methods:[{name:"classNames",docblock:null,modifiers:[],params:[{name:"props",type:{name:"intersection",raw:"{\n  /** Makes the toolbar fixed */\n  fixed?: boolean,\n  /** Adds a waterfall effect on scroll */\n  waterfall?: boolean,\n  /** Fixes the last row of a multi-row toolbar */\n  fixedLastrowOnly?: boolean,\n  /** makes the toolbar flexible */\n  flexible?: boolean,\n  /** further defines the background and title movement behavior, use in conjunction with flexible. */\n  flexibleDefaultBehavior?: boolean\n} & SimpleTagPropsT",elements:[{name:"signature",type:"object",raw:"{\n  /** Makes the toolbar fixed */\n  fixed?: boolean,\n  /** Adds a waterfall effect on scroll */\n  waterfall?: boolean,\n  /** Fixes the last row of a multi-row toolbar */\n  fixedLastrowOnly?: boolean,\n  /** makes the toolbar flexible */\n  flexible?: boolean,\n  /** further defines the background and title movement behavior, use in conjunction with flexible. */\n  flexibleDefaultBehavior?: boolean\n}",signature:{properties:[{key:"fixed",value:{name:"boolean",required:!1}},{key:"waterfall",value:{name:"boolean",required:!1}},{key:"fixedLastrowOnly",value:{name:"boolean",required:!1}},{key:"flexible",value:{name:"boolean",required:!1}},{key:"flexibleDefaultBehavior",value:{name:"boolean",required:!1}}]}},{name:"SimpleTagPropsT"}],alias:"ToolbarPropsT"}}],returns:null}],props:{fixed:{defaultValue:{value:"false",computed:!1},required:!1},waterfall:{defaultValue:{value:"false",computed:!1},required:!1},fixedLastrowOnly:{defaultValue:{value:"false",computed:!1},required:!1},flexible:{defaultValue:{value:"false",computed:!1},required:!1},flexibleDefaultBehavior:{defaultValue:{value:"false",computed:!1},required:!1}}},{description:"A Toolbar title",displayName:"ToolbarTitle",methods:[]},{description:"A section of the Toolbar",displayName:"ToolbarSection",methods:[],props:{alignStart:{flowType:{name:"boolean"},required:!1,description:"Aligns the ToolbarSection at the start."},alignEnd:{flowType:{name:"boolean"},required:!1,description:"Aligns the ToolbarSection at the end."},shrinkToFit:{flowType:{name:"boolean"},required:!1,description:"Makes the ToolbarSection shrink to fit."}}},{description:"A Toolbar row",displayName:"ToolbarRow",methods:[]},{description:"This component can be placed after a fixed Toolbar component to fill in the space.",displayName:"ToolbarFixedAdjust",methods:[]},{description:"A Menu Icon For the Toolbar. This is an instance of the Icon component.",displayName:"ToolbarMenuIcon",methods:[]},{description:"A standard Icon for toolbar actions. This is an instance of the Icon component.",displayName:"ToolbarIcon",methods:[]},{description:"",displayName:"Toolbar",methods:[],props:{fixed:{flowType:{name:"boolean"},required:!1,description:"Makes the toolbar fixed"},waterfall:{flowType:{name:"boolean"},required:!1,description:"Adds a waterfall effect on scroll"},fixedLastrowOnly:{flowType:{name:"boolean"},required:!1,description:"Fixes the last row of a multi-row toolbar"},flexible:{flowType:{name:"boolean"},required:!1,description:"makes the toolbar flexible"},flexibleDefaultBehavior:{flowType:{name:"boolean"},required:!1,description:"further defines the background and title movement behavior, use in conjunction with flexible."}}}]}});
//# sourceMappingURL=3.2cda6928.chunk.js.map