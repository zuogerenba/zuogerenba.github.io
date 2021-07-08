(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{487:function(t,s,a){t.exports=a.p+"assets/img/fontend.db45c727.png"},601:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"一、什么是前端渲染-什么是后端渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、什么是前端渲染-什么是后端渲染"}},[t._v("#")]),t._v(" 一、什么是前端渲染，什么是后端渲染？")]),t._v(" "),n("h2",{attrs:{id:"一、后端渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、后端渲染"}},[t._v("#")]),t._v(" 一、后端渲染")]),t._v(" "),n("h3",{attrs:{id:"_1-后端渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-后端渲染"}},[t._v("#")]),t._v(" 1.后端渲染")]),t._v(" "),n("blockquote",[n("p",[t._v("早前通过jsp/php/c#，只有html+css; 去服务器请求的时候，会拿到html+css+java，动态的放到页面当中。")]),t._v(" "),n("p",[t._v("每个不同的url，都映射到不同的资源，都是服务器在处理")])]),t._v(" "),n("p",[t._v("通服务器里面拿到后端已经渲染好的页面进行展示")]),t._v(" "),n("h3",{attrs:{id:"_2-后端路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-后端路由"}},[t._v("#")]),t._v(" 2.后端路由")]),t._v(" "),n("p",[t._v("后端里面有路由的映射表")]),t._v(" "),n("h4",{attrs:{id:"一个网站这么多页面-服务器如何处理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一个网站这么多页面-服务器如何处理"}},[t._v("#")]),t._v(" 一个网站这么多页面，服务器如何处理？")]),t._v(" "),n("ul",[n("li",[t._v("一个页面由自己对应的网址URL")]),t._v(" "),n("li",[t._v("url发送到服务器，服务器通过正则匹配，控制器进行处理生成HTML和数据，返回前端")]),t._v(" "),n("li",[t._v("这就是一个IO操作")])]),t._v(" "),n("h2",{attrs:{id:"二、前后端分离阶段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、前后端分离阶段"}},[t._v("#")]),t._v(" 二、前后端分离阶段")]),t._v(" "),n("h3",{attrs:{id:"_1-前端渲染"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-前端渲染"}},[t._v("#")]),t._v(" 1.前端渲染")]),t._v(" "),n("p",[n("img",{attrs:{src:a(487),alt:"前后端分离"}})]),t._v(" "),n("p",[t._v("前后端分离阶段：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("1.是ajax出现后才开始的\n2.后端只提供API返回数据，前端通过ajax获取数据，并用js渲染到页面中\n3.这样前后端责任清晰，后端专注数据，前端专注交互，页面\n")])])]),n("p",[t._v("单页面富应用阶段(SPA)：")]),t._v(" "),n("ul",[n("li",[t._v("vue")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("1.SPA是在前后端分离的基础上加了一层前端路由\n2.前端来维护一套路由规则\n")])])]),n("h2",{attrs:{id:"三、spa阶段-单一页面富应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、spa阶段-单一页面富应用"}},[t._v("#")]),t._v(" 三、SPA阶段——单一页面富应用")]),t._v(" "),n("blockquote",[n("p",[t._v("全网站只有一个html页面，通过不同的路由，会抽取不同的组件进行展示，映射关系也是由前端进行管理")])]),t._v(" "),n("ul",[n("li",[t._v("当url改变的时候，并不会从服务器请求信的静态资源")]),t._v(" "),n("li",[t._v("而是通过js监听url 的改变，去重新渲染新的页面")]),t._v(" "),n("li",[t._v("前端去配置路由的映射表")])]),t._v(" "),n("h3",{attrs:{id:"四、前端路由的原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、前端路由的原理"}},[t._v("#")]),t._v(" 四、前端路由的原理")]),t._v(" "),n("ul",[n("li",[t._v("前端路由改变url不会刷新页面的")])]),t._v(" "),n("h4",{attrs:{id:"_1-url的hash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-url的hash"}},[t._v("#")]),t._v(" 1.URL的hash")]),t._v(" "),n("ul",[n("li",[t._v("URL的hash也就是锚点(#),本质上是改变window.location的href的属性")]),t._v(" "),n("li",[t._v("可以通过直接赋值location.hash来改变href，但是页面不发生刷新")]),t._v(" "),n("li",[t._v("通过window.addEventListener('hashchange')")]),t._v(" "),n("li",[t._v("优点是兼容性好，缺点是#不像URL")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div id"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#/home"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("首页"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#/about"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("关于"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"router-view"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routerViewEl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'router-view'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routerViewEl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hashchange'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hashChange'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#/home'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          routerViewEl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'首页'")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#/about'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          routerViewEl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'关于'")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          routerViewEl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),n("h4",{attrs:{id:"_2-html的history"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-html的history"}},[t._v("#")]),t._v(" 2.HTML的history")]),t._v(" "),n("p",[t._v("history接口是HTML5新增的，有6种改变URL的方法且不刷新页面")]),t._v(" "),n("ul",[n("li",[t._v("replaceState：替换原来的路径")]),t._v(" "),n("li",[t._v("pushState：使用路径名")]),t._v(" "),n("li",[t._v("popState：路径回退")]),t._v(" "),n("li",[t._v("go：向前或向后改变")]),t._v(" "),n("li",[t._v("forward：向前1位")]),t._v(" "),n("li",[t._v("back：向后改变路径")])]),t._v(" "),n("p",[n("strong",[t._v("history的简单实现")]),t._v("：")]),t._v(" "),n("ul",[n("li",[t._v("'/home'默认是会刷新页面的，获取a元素，阻止a的默认事件，自己监听a元素改变。")]),t._v(" "),n("li",[t._v("返回/前进操作时，更新视图，用window.addEventListener('popstate')/go")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取router-view的dom")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" routerViewEl "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByClassName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'router-view'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  获取a元素，自己监听改变")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" aEls "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementsByTagName")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" el "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" aEls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        e"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("preventDefault")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 阻止a的默认事件")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" href "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAttribute")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"href"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a发生了点击'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        history"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pushState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("urlChange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f返回操作时，更新视图")]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'popstate'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("urlChange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'go'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("urlChange"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("urlChange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("location"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("pathname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          routerViewEl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'首页'")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/about'")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          routerViewEl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'关于'")]),t._v("\n          "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n          routerViewEl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerHTML "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);