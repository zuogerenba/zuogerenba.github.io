(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{491:function(e,t,n){e.exports=n.p+"assets/img/require_01.129063e3.png"},605:function(e,t,n){"use strict";n.r(t);var s=n(42),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"前端模块化-commonjs-amd-cmd-es6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端模块化-commonjs-amd-cmd-es6"}},[e._v("#")]),e._v(" 前端模块化：CommonJS，AMD，CMD，ES6")]),e._v(" "),s("p",[e._v("前端模块化可以提供代码的复用率，方便管理。一般一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数。目前的前端模块化有CommonJS，AMD，CMD")]),e._v(" "),s("h2",{attrs:{id:"一、commonjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、commonjs"}},[e._v("#")]),e._v(" 一、CommonJS")]),e._v(" "),s("p",[e._v("Node.js是commonJS规范的主要实践者，它有四个重要的环境变量为模块化的实现提供支持："),s("code",[e._v("module")]),e._v("、"),s("code",[e._v("exports")]),e._v("、"),s("code",[e._v("require")]),e._v("、"),s("code",[e._v("global")]),e._v("。实际使用时，用"),s("code",[e._v("module.exports")]),e._v("定义当前模块对外输出的接口（不推荐直接用"),s("code",[e._v("exports")]),e._v("），用"),s("code",[e._v("require")]),e._v("加载模块。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 定义模块math.js\nvar basicNum = 0;\nfunction add(a, b) {\n  return a + b;\n}\nmodule.exports = { //在这里写上需要向外暴露的函数、变量\n  add: add,\n  basicNum: basicNum\n}\n\n// 引用自定义的模块时，参数包含路径，可省略.js\nvar math = require('./math');\nmath.add(2, 5);\n\n// 引用核心模块时，不需要带路径\nvar http = require('http');\nhttp.createService(...).listen(3000);\n复制代码\n")])])]),s("p",[e._v("commonJS用同步的方式加载模块。在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。")]),e._v(" "),s("h2",{attrs:{id:"二、amd和require-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、amd和require-js"}},[e._v("#")]),e._v(" 二、AMD和require.js")]),e._v(" "),s("p",[e._v("AMD规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。这里介绍用require.js实现AMD规范的模块化：用"),s("code",[e._v("require.config()")]),e._v("指定引用路径等，用"),s("code",[e._v("define()")]),e._v("定义模块，用"),s("code",[e._v("require()")]),e._v("加载模块。")]),e._v(" "),s("p",[e._v("首先我们需要引入require.js文件和一个入口文件main.js。main.js中配置"),s("code",[e._v("require.config()")]),e._v("并规定项目中用到的基础模块。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('/** 网页中引入require.js及main.js **/\n<script src="js/require.js" data-main="js/main"><\/script>\n\n/** main.js 入口文件/主模块 **/\n// 首先用config()指定各模块路径和引用名\nrequire.config({\n  baseUrl: "js/lib",\n  paths: {\n    "jquery": "jquery.min",  //实际路径为js/lib/jquery.min.js\n    "underscore": "underscore.min",\n  }\n});\n// 执行基本操作\nrequire(["jquery","underscore"],function($,_){\n  // some code here\n});\n')])])]),s("p",[e._v("引用模块的时候，我们将模块名放在"),s("code",[e._v("[]")]),e._v("中作为"),s("code",[e._v("reqiure()")]),e._v("的第一参数；如果我们定义的模块本身也依赖其他模块,那就需要将它们放在"),s("code",[e._v("[]")]),e._v("中作为"),s("code",[e._v("define()")]),e._v("的第一参数。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// 定义math.js模块\ndefine(function () {\n    var basicNum = 0;\n    var add = function (x, y) {\n        return x + y;\n    };\n    return {\n        add: add,\n        basicNum :basicNum\n    };\n});\n// 定义一个依赖underscore.js的模块\ndefine(['underscore'],function(_){\n  var classify = function(list){\n    _.countBy(list,function(num){\n      return num > 30 ? 'old' : 'young';\n    })\n  };\n  return {\n    classify :classify\n  };\n})\n\n// 引用模块，将模块放在[]内\nrequire(['jquery', 'math'],function($, math){\n  var sum = math.add(10,20);\n  $(\"#sum\").html(sum);\n});\n")])])]),s("h2",{attrs:{id:"三、cmd和sea-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、cmd和sea-js"}},[e._v("#")]),e._v(" 三、CMD和sea.js")]),e._v(" "),s("p",[e._v("require.js在申明依赖的模块时会在第一之间加载并执行模块内的代码：")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('define(["a", "b", "c", "d", "e", "f"], function(a, b, c, d, e, f) { \n    // 等于在最前面声明并初始化了要用到的所有模块\n    if (false) {\n      // 即便没用到某个模块 b，但 b 还是提前执行了\n      b.foo()\n    } \n});\n复制代码\n')])])]),s("p",[e._v("CMD是另一种js模块化方案，它与AMD很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。此规范其实是在sea.js推广过程中产生的。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('/** AMD写法 **/\ndefine(["a", "b", "c", "d", "e", "f"], function(a, b, c, d, e, f) { \n     // 等于在最前面声明并初始化了要用到的所有模块\n    a.doSomething();\n    if (false) {\n        // 即便没用到某个模块 b，但 b 还是提前执行了\n        b.doSomething()\n    } \n});\n\n/** CMD写法 **/\ndefine(function(require, exports, module) {\n    var a = require(\'./a\'); //在需要时申明\n    a.doSomething();\n    if (false) {\n        var b = require(\'./b\');\n        b.doSomething();\n    }\n});\n\n/** sea.js **/\n// 定义模块 math.js\ndefine(function(require, exports, module) {\n    var $ = require(\'jquery.js\');\n    var add = function(a,b){\n        return a+b;\n    }\n    exports.add = add;\n});\n// 加载模块\nseajs.use([\'math.js\'], function(math){\n    var sum = math.add(1+2);\n});\n复制代码\n')])])]),s("h2",{attrs:{id:"四、es6-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、es6-module"}},[e._v("#")]),e._v(" 四、ES6 Module")]),e._v(" "),s("p",[e._v("ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成："),s("code",[e._v("export")]),e._v("和"),s("code",[e._v("import")]),e._v("。"),s("code",[e._v("export")]),e._v("命令用于规定模块的对外接口，"),s("code",[e._v("import")]),e._v("命令用于输入其他模块提供的功能。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/** 定义模块 math.js **/\nvar basicNum = 0;\nvar add = function (a, b) {\n    return a + b;\n};\nexport { basicNum, add };\n\n/** 引用模块 **/\nimport { basicNum, add } from './math';\nfunction test(ele) {\n    ele.textContent = add(99 + basicNum);\n}\n复制代码\n")])])]),s("p",[e._v("如上例所示，使用"),s("code",[e._v("import")]),e._v("命令的时候，用户需要知道所要加载的变量名或函数名。其实ES6还提供了"),s("code",[e._v("export default")]),e._v("命令，为模块指定默认输出，对应的"),s("code",[e._v("import")]),e._v("语句不需要使用大括号。这也更趋近于ADM的引用写法。")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/** export default **/\n//定义输出\nexport default { basicNum, add };\n//引入\nimport math from './math';\nfunction test(ele) {\n    ele.textContent = math.add(99 + math.basicNum);\n}\n复制代码\n")])])]),s("p",[e._v("ES6的模块不是对象，"),s("code",[e._v("import")]),e._v("命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能。")]),e._v(" "),s("h2",{attrs:{id:"五、-es6-模块与-commonjs-模块的差异"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、-es6-模块与-commonjs-模块的差异"}},[e._v("#")]),e._v(" 五、 ES6 模块与 CommonJS 模块的差异")]),e._v(" "),s("h3",{attrs:{id:"_1-commonjs-模块输出的是一个值的拷贝-es6-模块输出的是值的引用。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-commonjs-模块输出的是一个值的拷贝-es6-模块输出的是值的引用。"}},[e._v("#")]),e._v(" 1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。")]),e._v(" "),s("ul",[s("li",[e._v("CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。")]),e._v(" "),s("li",[e._v("ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令"),s("code",[e._v("import")]),e._v("，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的"),s("code",[e._v("import")]),e._v("有点像 Unix 系统的“符号连接”，原始值变了，"),s("code",[e._v("import")]),e._v("加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。")])]),e._v(" "),s("h3",{attrs:{id:"_2-commonjs-模块是运行时加载-es6-模块是编译时输出接口。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-commonjs-模块是运行时加载-es6-模块是编译时输出接口。"}},[e._v("#")]),e._v(" 2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。")]),e._v(" "),s("ul",[s("li",[e._v("运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。")]),e._v(" "),s("li",[e._v("编译时加载: ES6 模块不是对象，而是通过 "),s("code",[e._v("export")]),e._v(" 命令显式指定输出的代码，"),s("code",[e._v("import")]),e._v("时采用静态命令的形式。即在"),s("code",[e._v("import")]),e._v("时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。")])]),e._v(" "),s("p",[e._v("CommonJS 加载的是一个对象（即"),s("code",[e._v("module.exports")]),e._v("属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。")]),e._v(" "),s("h2",{attrs:{id:"一、commonjs-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、commonjs-2"}},[e._v("#")]),e._v(" 一、CommonJs")]),e._v(" "),s("h3",{attrs:{id:"_1-exports与require"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-exports与require"}},[e._v("#")]),e._v(" 1.exports与require()")]),e._v(" "),s("ul",[s("li",[e._v("require是一个函数，它有返回值，返回值是exports")]),e._v(" "),s("li",[e._v("所以导入的时候可以使用解构")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("// bar.js\nexports.name = 'qmj';\nexports.age = 18;\n\n// 导入\nconst demo = require('./bar.js');\ndemo = {\n\tname: 'qmj',\n\tage: 18\n}\nconst {name, age} = require('./bar.js')\n")])])]),s("h3",{attrs:{id:"_2-module-exports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-module-exports"}},[e._v("#")]),e._v(" 2.module.exports")]),e._v(" "),s("ul",[s("li",[e._v("为什么有了exports还要有module.exports呢？")]),e._v(" "),s("li",[e._v("其实CommonJS没有提到module.exports，但是Node中为了导出，实现了Module类，每个模块是Module的实例。")]),e._v(" "),s("li",[e._v("真正导出的是 module.exports，在源码里 module.exports = exports;")])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 内部源码")]),e._v("\nexports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" exports"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n这样做的目的是为了让module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("exports和exports指向同一个对象；\n")])])]),s("h3",{attrs:{id:"_3-require细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-require细节"}},[e._v("#")]),e._v(" 3.require细节")]),e._v(" "),s("ul",[s("li",[e._v("require是一个函数，帮我们引入一个文件（模块）中导入的对象")])]),e._v(" "),s("h4",{attrs:{id:"require的查找细节"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#require的查找细节"}},[e._v("#")]),e._v(" require的查找细节")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("导入格式如：require(X):\n\n情况一：X是一个核心模块\n\t直接返回核心模块，并停止查找\n\t\n情况二：X是./ ../或 /\n\t第一步：将X当做一个文件在对应的目录下查找：\n\t\t1.有文件后缀名，按照后缀名的格式查找对应的文件\n\t\t2.无后缀名，会按照下面顺序：\n\t\t\t1）直接查找文件X\n\t\t\t2）查找X.js文件\n\t\t\t3）查找X.json文件\n\t\t\t4）查找X.node文件\n\t第二步：X作为一个目录\n\t\t1.查找目录下面的index文件\n\t\t\t1）查找X/index.js文件\n\t\t\t2）查找X/index.json文件\n\t\t\t3）查找X/index.node文件\n\t第三步：没有找到\n\t\t1.报错Not Found\n\t\t\n情况三：直接是X，X并不是一个核心模块\n\t1.是在/Users/didi/Documents/Project/Node下编写文件main.js\n\t\t1）/Users/didi/Documents/Project/Node/node_modules\n\t\t2）/Users/didi/Documents/Project/node_modules\n\t\t3）/Users/didi/Documents/node_modules\n\t\t4）/Users/didi/node_modules\n\t\t5）/Users/node_modules\n    6）/node_modules\n  2.上面这些还没找到就直接返回Not Found\n")])])]),s("h3",{attrs:{id:"_4-模块的加载过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-模块的加载过程"}},[e._v("#")]),e._v(" 4.模块的加载过程")]),e._v(" "),s("ul",[s("li",[e._v("commonJs加载是同步的，模块加载完之后才会进行下一步代码")]),e._v(" "),s("li",[e._v("例子：先打印加载文件，再打印文本本身，")])]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// bar.js")]),e._v("\nconsloe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'qmj'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// index.js ")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'./bar.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'hello world'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// cmd node index.js")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// result => qmj hello world")]),e._v("\n")])])]),s("ul",[s("li",[e._v("模块在多次引入时，只会执行一次，因为被缓存\n"),s("ul",[s("li",[e._v("每个模块对象都有一个属性：loaded")]),e._v(" "),s("li",[e._v("false表示没有加载，true表示已经加载")])])]),e._v(" "),s("li",[e._v("模块被循环引用时，不会执行多次\n"),s("ul",[s("li",[e._v("这种情况是一种闭环，加载顺序是按照图的深度优先遍历加载的")]),e._v(" "),s("li",[e._v("main=>aaa=>ccc=>ddd=>eee=>bbb")]),e._v(" "),s("li",[e._v("之所以bbb后面不会加载ccc是因为ccc的loaded被设置为true了")])])])]),e._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:n(491)}})])}),[],!1,null,null,null);t.default=a.exports}}]);