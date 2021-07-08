(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{599:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一、html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、html"}},[t._v("#")]),t._v(" 一、HTML")]),t._v(" "),s("p",[s("strong",[t._v("使用语义化标签")])]),t._v(" "),s("p",[t._v("HTML能使用语义化标签的，尽量使用语义化标签，避免整个文档都是div或者是p标签")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\x3c!-- bad --\x3e\n<div>\n  <p></p>\n</div>\n\n\x3c!-- good --\x3e\n<header></header>\n<footer></footer>\n")])])]),s("p",[s("strong",[t._v("属性顺序要求")])]),t._v(" "),s("p",[t._v("HTML属性应该按照特定的顺序出现以保证易读性")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("id\nclass\nname\ndata-xxx\nsrc, for, type, href\ntitle, alt\naria-xxx, role\n")])])]),s("p",[s("strong",[t._v("语法")])]),t._v(" "),s("ul",[s("li",[t._v("属性使用双引号，不要使用单引号")]),t._v(" "),s("li",[t._v("属性名全小写，使用中线（-）做分隔符")])]),t._v(" "),s("h2",{attrs:{id:"二、css"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、css"}},[t._v("#")]),t._v(" 二、CSS")]),t._v(" "),s("p",[s("strong",[t._v("BEM命名原则")])]),t._v(" "),s("ul",[s("li",[t._v("block：模块，名字单词间用-连接")]),t._v(" "),s("li",[t._v("element：元素，模块的子元素，以_与block连接")]),t._v(" "),s("li",[t._v("modifier：修饰，模块的变体，定义特殊模块，以--与block连接")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/* 举个例子 */\n.block__element {\n}\n.block--modifier {\n}\n")])])]),s("p",[s("strong",[t._v("有效使用CSS选择器")])]),t._v(" "),s("p",[t._v("选择器嵌套应少于3级")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("/* bad */\n.page .header .login #username input {\n}\n\n/* good */\n#username input {\n}\n")])])]),s("p",[t._v("有效使用CSS选择器，应遵守以下规则")]),t._v(" "),s("ul",[s("li",[t._v("保持简单，不要嵌套过多复杂的选择器")]),t._v(" "),s("li",[t._v("通配符和属性选择器效率最低，需要匹配的元素最多，避免使用")]),t._v(" "),s("li",[t._v("不要使用类选择器和ID选择器修饰元素标签")]),t._v(" "),s("li",[t._v("避免CSS表达式")])]),t._v(" "),s("h2",{attrs:{id:"三、javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、javascript"}},[t._v("#")]),t._v(" 三、JavaScript")]),t._v(" "),s("h4",{attrs:{id:"关于命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于命名"}},[t._v("#")]),t._v(" "),s("strong",[t._v("关于命名")])]),t._v(" "),s("p",[t._v("普通命名使用小驼峰")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("let userName = 'coderqmj';\n")])])]),s("p",[t._v("命名复数时需要加s，如一个存放很多名字的数组")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("let names = ['邱模建', '马云', '马化腾'];\n")])])]),s("p",[t._v("每个常量都需命名，便于别人读懂含义")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// good\nconst COL_NUM = 10\nlet row = Math.ceil(num / COL_NUM)\n\n// bad\nlet row = Math.ceil(num / 10)\n")])])]),s("p",[t._v("命名需要语义化，函数命名，一般需要加上动词前缀：")]),t._v(" "),s("ul",[s("li",[t._v("can判断是否可以执行某个动作")]),t._v(" "),s("li",[t._v("has判断是否含有某个值")]),t._v(" "),s("li",[t._v("is判断是否为某个值")]),t._v(" "),s("li",[t._v("get获取某个值")]),t._v(" "),s("li",[t._v("set设置某个值")])]),t._v(" "),s("h4",{attrs:{id:"关于函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于函数"}},[t._v("#")]),t._v(" "),s("strong",[t._v("关于函数")])]),t._v(" "),s("p",[t._v("函数参数使用结构语法，函数参数越少越好，如果超过两个参数，要使用ES6结构语法，不用考虑参数顺序。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("你好，我的名字是")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("，今年")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("岁，身高是")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("m")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'邱模建'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.88")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"空行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#空行"}},[t._v("#")]),t._v(" 空行")]),t._v(" "),s("p",[t._v("以下情况需要空行：")]),t._v(" "),s("ul",[s("li",[t._v("变量声明之后")]),t._v(" "),s("li",[t._v("注释前（如果注释在文件第一行，则不需要）")]),t._v(" "),s("li",[t._v("文件最后保留一个空行")])]),t._v(" "),s("h4",{attrs:{id:"引号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引号"}},[t._v("#")]),t._v(" 引号")]),t._v(" "),s("p",[t._v("外层单引号，内层双引号")]),t._v(" "),s("h4",{attrs:{id:"括号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#括号"}},[t._v("#")]),t._v(" 括号")]),t._v(" "),s("p",[t._v("下列关键字后必须有大括号（即使代码块的内容只有一行）："),s("code",[t._v("if")]),t._v(", "),s("code",[t._v("else")]),t._v(", "),s("code",[t._v("for")]),t._v(", "),s("code",[t._v("while")]),t._v(", "),s("code",[t._v("do")]),t._v(", "),s("code",[t._v("switch")]),t._v(", "),s("code",[t._v("try")]),t._v(", "),s("code",[t._v("catch")]),t._v(", "),s("code",[t._v("finally")]),t._v(", "),s("code",[t._v("with")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// not good")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"不要写全局方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不要写全局方法"}},[t._v("#")]),t._v(" 不要写全局方法")]),t._v(" "),s("p",[t._v("会污染全局，团队开发中会造成安全隐患")]),t._v(" "),s("h2",{attrs:{id:"四、react"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、react"}},[t._v("#")]),t._v(" 四、React")]),t._v(" "),s("h4",{attrs:{id:"基础规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础规则"}},[t._v("#")]),t._v(" 基础规则")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("一个文件一个组件")]),t._v(" ：虽然一个文件可以声明多个组件，但是最好不要这样做；推荐一个文件声明一个组件，并且也只导出一个文件。")]),t._v(" "),s("li",[s("strong",[t._v("函数式组件和类组件选择")]),t._v(" ：如果定义的组件不需要props和state，建议将组件定义成函数组件，否则class组件")])]),t._v(" "),s("h4",{attrs:{id:"react中的命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react中的命名"}},[t._v("#")]),t._v(" React中的命名")]),t._v(" "),s("ul",[s("li",[t._v("组件名称：大驼峰")]),t._v(" "),s("li",[t._v("属性名称：React DOM使用小驼峰定义属性名称，和HTML属性名称的约定不一样")])]),t._v(" "),s("h4",{attrs:{id:"jsx写法注意点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsx写法注意点"}},[t._v("#")]),t._v(" JSX写法注意点")]),t._v(" "),s("p",[t._v("标签多行属性关闭标签要另起一行")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("baz")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("baz")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("组件跨行时，要使用括号包裹JSX标签")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyComponent")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("long body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n             ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyChild")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n           ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyComponent")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyComponent")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("long body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("foo")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n        ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyChild")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyComponent")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("p",[t._v("JSX语法应该使用以下对齐方式")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 推荐")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("superLongParam")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("anotherSuperLongParam")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不推荐")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("superLongParam")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("anotherSuperLongParam")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("baz"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),s("p",[t._v("JSX引号问题：JSX的属性都采用双引号，其他JS都使用单引号，因为JSX属性不能包含转义引号")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// bad")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"20px"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// good")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bar")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Foo")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" left"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'20px'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\n")])])]),s("h4",{attrs:{id:"redux代码规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux代码规范"}},[t._v("#")]),t._v(" Redux代码规范")]),t._v(" "),s("ul",[s("li",[t._v("每个模块都有对应自己的reducer，通过combineReducer进行合并")]),t._v(" "),s("li",[t._v("异步请求代码使用redux-thunk，并且写在actionCreators中")]),t._v(" "),s("li",[t._v("redux直接采用redux hooks方式编写，不再使用connect")])]),t._v(" "),s("h4",{attrs:{id:"组件代码的顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件代码的顺序"}},[t._v("#")]),t._v(" 组件代码的顺序")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.类组件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Example")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 静态属性")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" defaultProps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 声明周期钩子函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 按照它们执行的顺序")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. componentWillMount")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. componentWillReceiveProps")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. shouldComponentUpdate")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 4. componentDidMount")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5. componentDidUpdate")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 6. componentWillUnmount")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("componentDidMount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 事件函数/普通函数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("handleClick")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最后，render 方法")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                          \n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.函数式组件")]),t._v("\n第三方"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("官方\n自己配置的功能性\n导入组件\n本文件组件\n组件内部state管理\nredux的hooks代码\n其他组件的hooks代码\n其他逻辑代码\n返回"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSX")]),t._v("代码\n")])])]),s("h2",{attrs:{id:"五、项目规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、项目规范"}},[t._v("#")]),t._v(" 五、项目规范")]),t._v(" "),s("ul",[s("li",[t._v("文件夹，文件名统一小写，多个单词以连接符（-）连接；")]),t._v(" "),s("li",[t._v("JavaScript变量名称 "),s("strong",[t._v("小驼峰")]),t._v("，常量全部大写字母，组件命名 "),s("strong",[t._v("大驼峰")]),t._v(" ；")]),t._v(" "),s("li",[t._v("组件内部状态可以使用useState，useReducer；业务数据全部放在redux中管理；")]),t._v(" "),s("li",[t._v("函数组件内部按照以下顺序编写代码\n"),s("ul",[s("li",[t._v("组件内部state管理")]),t._v(" "),s("li",[t._v("redux的hooks代码")]),t._v(" "),s("li",[t._v("其他组件的hooks代码")]),t._v(" "),s("li",[t._v("其他逻辑代码")]),t._v(" "),s("li",[t._v("返回JSX代码")])])]),t._v(" "),s("li",[t._v("每个模块都有对应自己的reducer")]),t._v(" "),s("li",[t._v("前端目录划分")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("├─"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v("\n└─src\n    ├─assets\n    │  ├─css\n    │  ├─font\n    │  └─img\n    ├─common  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 放点常量，公共配置之类的 ")]),t._v("\n    ├─components\n    ├─pages\n    ├─router\n    ├─services\n    ├─store\n    └─utils\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);