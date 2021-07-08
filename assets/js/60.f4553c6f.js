(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{535:function(t,s,a){"use strict";a.r(s);var n=a(42),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"开始之前"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始之前"}},[t._v("#")]),t._v(" 开始之前")]),t._v(" "),a("blockquote",[a("p",[t._v("闭包的不恰当使用将会在IE(IE9之前)造成内存泄漏")])]),t._v(" "),a("p",[t._v("为什么在IE9之前会产生这样的问题？答案：")]),t._v(" "),a("blockquote",[a("p",[t._v("IE9的JS引擎用的垃圾回收算法时"),a("strong",[t._v("引用计数法")]),t._v("，对于循环引用将会导致GC无法回收应该被回收的内存。造成无意义的内存占用，也叫内存泄漏。")])]),t._v(" "),a("p",[a("strong",[t._v("内存泄漏：")])]),t._v(" "),a("p",[t._v("程序中动态分配的堆内存由于某种原因没有释放，造成内存上的浪费，导致程序变慢，甚至奔溃")]),t._v(" "),a("p",[t._v("提问：")]),t._v(" "),a("ul",[a("li",[t._v("什么是循环引用？、")]),t._v(" "),a("li",[t._v("GC是什么？怎么工作？")]),t._v(" "),a("li",[t._v("为什么引用计数法导致内存无法释放？")]),t._v(" "),a("li",[t._v("JS还有多少垃圾回收算法？")])]),t._v(" "),a("h3",{attrs:{id:"什么是gc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是gc"}},[t._v("#")]),t._v(" 什么是GC")]),t._v(" "),a("p",[t._v("GC就是 Garbage Collection ，，他的作用就是找到内存空间中的垃圾，将其释放，让这么分空间得到再次利用")]),t._v(" "),a("h3",{attrs:{id:"常见的垃圾回收算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的垃圾回收算法"}},[t._v("#")]),t._v(" 常见的垃圾回收算法")]),t._v(" "),a("h4",{attrs:{id:"引用计数法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引用计数法"}},[t._v("#")]),t._v(" 引用计数法")]),t._v(" "),a("p",[t._v("就是记录下所有对象有多少人在引用他：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此时'这个对象'的引用计数为1（a在引用）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ‘这个对象’的引用计数是2（a,b）")]),t._v("\na "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reference_count = 1")]),t._v("\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// reference_count = 0 ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 下一步 GC来回收‘这个对象’了")]),t._v("\n")])])]),a("p",[t._v("该方法的优点：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("即刻回收垃圾")]),t._v("，引用为0时，立即回收。")]),t._v(" "),a("li",[t._v("程序不会暂停去单独使用很长一段时间的GC，"),a("strong",[t._v("最大暂停时间短")])]),t._v(" "),a("li",[t._v("不用遍历堆里面的所有活动对象和非活动对象")])]),t._v(" "),a("p",[t._v("该方法的缺点：")]),t._v(" "),a("ul",[a("li",[t._v("计数器占了很大的位置，如果有大量的引用，那么计数器就需要很多位数")]),t._v(" "),a("li",[t._v("最大的缺点就是无法解决无法回收的问题")])]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("ul",[a("li",[t._v("本来f()执行完应该回收函数作用域里面的内存空间")]),t._v(" "),a("li",[t._v("但是o里面有属性引用o2，导致o2的引用始终存在，o2里面的o也是如此")]),t._v(" "),a("li",[t._v("最终造成了内存泄漏")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o 引用 o2,o2的引用次数是1")]),t._v("\n  o2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// o2 引用 o,o的引用此时是1")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"azerty"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("所以这种方法被淘汰，在V8引擎里面使用最多的是标记清除算法")]),t._v(" "),a("h4",{attrs:{id:"标记清除算法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标记清除算法"}},[t._v("#")]),t._v(" 标记清除算法")]),t._v(" "),a("p",[t._v("主要将垃圾回收过程分为两个阶段：")]),t._v(" "),a("ul",[a("li",[t._v("标记阶段：把所有活动对象作标记")]),t._v(" "),a("li",[t._v("清除标记：把没有标记的销毁")])]),t._v(" "),a("p",[a("strong",[t._v("标记阶段")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("可达性")])]),t._v(" "),a("p",[t._v("GC从全局作用域的变量，沿作用域逐层往里遍历，遍历到堆中对象时，说明对象被引用，打上标记，继续递归遍历(因为对象也会引用另外一个对象)，知道遍历到最后一个节点。")]),t._v(" "),a("p",[a("strong",[t._v("清除阶段")]),t._v("：")]),t._v(" "),a("p",[t._v("再进行遍历，遍历整个堆，把没有打上标记的对象进行回收")]),t._v(" "),a("p",[t._v("这种算法解决了循环引用的问题，因为在标记的时候循环引用的对象无法从全局对象中获取，则没有被标记，所以在清除阶段时会被回收")]),t._v(" "),a("p",[t._v("优点：")]),t._v(" "),a("ul",[a("li",[t._v("实现简单，打标记就两种情况")]),t._v(" "),a("li",[t._v("解决循环引用问题")])]),t._v(" "),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("造成碎片化")]),t._v(" "),a("li",[t._v("遍历次数过多")])])])}),[],!1,null,null,null);s.default=v.exports}}]);