(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{548:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"一、同源策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、同源策略"}},[t._v("#")]),t._v(" 一、同源策略")]),t._v(" "),a("blockquote",[a("p",[t._v("同源策略是浏览器最核心的安全功能，没有同源策略，网页很容易受到xss，csrf攻击。同源指的是同域名、同端口、同协议。三者必须同时满足，即使是两个不同域名执行同一个ip地址，也是非同源。")])]),t._v(" "),a("h4",{attrs:{id:"_1-同源限制什么内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-同源限制什么内容"}},[t._v("#")]),t._v(" 1.同源限制什么内容？")]),t._v(" "),a("ul",[a("li",[t._v("Cookie、LocalStorage、IndexedDB 等存储性内容")]),t._v(" "),a("li",[t._v("DOM 节点")]),t._v(" "),a("li",[t._v("AJAX 请求发送后，结果被浏览器拦截了")])]),t._v(" "),a("p",[t._v("哪些标签可以跨域：img/link/script")]),t._v(" "),a("h2",{attrs:{id:"二、跨域解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、跨域解决方案"}},[t._v("#")]),t._v(" 二、跨域解决方案")]),t._v(" "),a("h3",{attrs:{id:"_1-jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-jsonp"}},[t._v("#")]),t._v(" 1.jsonp")]),t._v(" "),a("h4",{attrs:{id:"jsonp原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp原理"}},[t._v("#")]),t._v(" jsonp原理")]),t._v(" "),a("p",[t._v("利用"),a("code",[t._v("script")]),t._v("标签没有跨域限制的漏洞，网页可以得到其他来源动态产生的json的数据，jsonp请求需要对方服务器做支持才可以")]),t._v(" "),a("h4",{attrs:{id:"jsonp和ajax对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp和ajax对比"}},[t._v("#")]),t._v(" JSONP和AJAX对比")]),t._v(" "),a("p",[t._v("相同：都是从客户端向服务器发送请求，从服务端获取数据")]),t._v(" "),a("p",[t._v("不同：AJAX属于同源策略，JSONP属于非同源策略")]),t._v(" "),a("h4",{attrs:{id:"jsonp优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jsonp优缺点"}},[t._v("#")]),t._v(" JSONP优缺点")]),t._v(" "),a("p",[t._v("优点：简单，兼容性好，解决主流浏览器跨域数据访问")]),t._v(" "),a("p",[t._v("缺点：只有get方法，也有遭受xss攻击的可能性")]),t._v(" "),a("h3",{attrs:{id:"_2-cors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-cors"}},[t._v("#")]),t._v(" 2.CORS")]),t._v(" "),a("p",[a("strong",[t._v("CORS 需要浏览器和后端同时支持。IE 8 和 9 需要通过 XDomainRequest 来实现")]),t._v(" 。")]),t._v(" "),a("p",[t._v("浏览器自动进行cors跨域，实现cors通信关键在于后端。 服务端设置 Access-Control-Allow-Origin 就可以开启 CORS。 该属性表示那些域名可以访问资源，设置通配符代表所有网站都可以访问。有两种情况，简单请求和复杂请求。")]),t._v(" "),a("h4",{attrs:{id:"简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[t._v("#")]),t._v(" 简单请求")]),t._v(" "),a("p",[t._v("同时满足以下两个条件，就是简单请求")]),t._v(" "),a("p",[t._v("条件2：使用下列方法之一")]),t._v(" "),a("ul",[a("li",[t._v("GET")]),t._v(" "),a("li",[t._v("HEAD")]),t._v(" "),a("li",[t._v("POST")])]),t._v(" "),a("p",[t._v("条件2：Content-Type 的值仅限于下列三者之一：")]),t._v(" "),a("ul",[a("li",[t._v("text/plain")]),t._v(" "),a("li",[t._v("multipart/form-data")]),t._v(" "),a("li",[t._v("application/x-www-form-urlencoded")])]),t._v(" "),a("h4",{attrs:{id:"复杂请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂请求"}},[t._v("#")]),t._v(" 复杂请求")]),t._v(" "),a("p",[t._v('不符合以上条件的请求就肯定是复杂请求了。 复杂请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求,该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。')]),t._v(" "),a("p",[t._v("我们用"),a("code",[t._v("PUT")]),t._v("向后台请求时，属于复杂请求，后台需做如下配置：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// 允许哪个方法访问我\nres.setHeader('Access-Control-Allow-Methods', 'PUT')\n// 预检的存活时间\nres.setHeader('Access-Control-Max-Age', 6)\n// OPTIONS请求不做任何处理\nif (req.method === 'OPTIONS') {\n  res.end() \n}\n// 定义后台返回的内容\napp.put('/getData', function(req, res) {\n  console.log(req.headers)\n  res.end('我不爱你')\n})\n")])])]),a("h3",{attrs:{id:"_3-postmessage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-postmessage"}},[t._v("#")]),t._v(" 3.postMessage")]),t._v(" "),a("p",[t._v("postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一，它可用于解决以下方面的问题：")]),t._v(" "),a("ul",[a("li",[t._v("页面和其打开的新窗口的数据传递")]),t._v(" "),a("li",[t._v("多窗口之间消息传递")]),t._v(" "),a("li",[t._v("页面与嵌套的iframe消息传递")]),t._v(" "),a("li",[t._v("上面三个场景的跨域数据传递")])]),t._v(" "),a("p",[a("strong",[t._v("postMessage()方法允许来自不同源的脚本采用异步方式进行有限的通信，可以实现跨文本档、多窗口、跨域消息传递")]),t._v("。")]),t._v(" "),a("blockquote",[a("p",[t._v("otherWindow.postMessage(message, targetOrigin, [transfer]);")])]),t._v(" "),a("ul",[a("li",[t._v("message: 将要发送到其他 window的数据。")]),t._v(" "),a("li",[t._v('targetOrigin:通过窗口的origin属性来指定哪些窗口能接收到消息事件，其值可以是字符串"*"（表示无限制）或者一个URI。在发送消息的时候，如果目标窗口的协议、主机地址或端口这三者的任意一项不匹配targetOrigin提供的值，那么消息就不会被发送；只有三者完全匹配，消息才会被发送。')]),t._v(" "),a("li",[t._v("transfer(可选)：是一串和message 同时传递的 Transferable 对象. 这些对象的所有权将被转移给消息的接收方，而发送一方将不再保有所有权。")])]),t._v(" "),a("p",[t._v("接下来我们看个例子： "),a("code",[t._v("http://localhost:3000/a.html")]),t._v("页面向"),a("code",[t._v("http://localhost:4000/b.html")]),t._v('传递“我爱你”,然后后者传回"我不爱你"。')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// a.html\n  <iframe src=\"http://localhost:4000/b.html\" frameborder=\"0\" id=\"frame\" onload=\"load()\"></iframe> //等它加载完触发一个事件\n  //内嵌在http://localhost:3000/a.html\n    <script>\n      function load() {\n        let frame = document.getElementById('frame')\n        frame.contentWindow.postMessage('我爱你', 'http://localhost:4000') //发送数据\n        window.onmessage = function(e) { //接受返回数据\n          console.log(e.data) //我不爱你\n        }\n      }\n    <\/script>\n复制代码\n// b.html\n  window.onmessage = function(e) {\n    console.log(e.data) //我爱你\n    e.source.postMessage('我不爱你', e.origin)\n }\n")])])]),a("h3",{attrs:{id:"_4-nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-nginx"}},[t._v("#")]),t._v(" 4.nginx")]),t._v(" "),a("div",{staticClass:"language-nginx extra-class"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy")]),t._v("服务器\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("listen")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("81")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("server_name")]),t._v("  www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("location")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_pass")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#反向代理")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proxy_cookie_domain")]),t._v(" www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改cookie里域名")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Allow")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("domain1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#当前端只跨域不带cookie时，可为*")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("add_header")]),t._v(" Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Allow")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Credentials "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);