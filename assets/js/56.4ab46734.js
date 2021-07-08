(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{529:function(a,t,s){"use strict";s.r(t);var e=s(42),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h3",{attrs:{id:"一、前言"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、前言"}},[a._v("#")]),a._v(" 一、前言")]),a._v(" "),s("p",[a._v("对于多分支的代码仓库，将代码从一个分支移到另一个分支是非常常见的需求。这个时候就分为两种情况：")]),a._v(" "),s("ul",[s("li",[a._v("需要另一个分支的所有代码变动，则使用 "),s("code",[a._v("git merge")])]),a._v(" "),s("li",[a._v("只需要部分代码的变动（某几个提交），这个时候可以采用 Cherry pick")])]),a._v(" "),s("h3",{attrs:{id:"二、基本用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、基本用法"}},[a._v("#")]),a._v(" 二、基本用法")]),a._v(" "),s("p",[s("code",[a._v("git cherry-pick")]),a._v("命令的作用，就是将指定的提交（commit）应用于其他分支。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("git cherry-pick <commitHash>\n")])])]),s("p",[a._v("上面的命令就会指定提交的commitHash，应用于当前分支。在当前分支产生一个新的提交，他们哈希值不一样。")]),a._v(" "),s("p",[a._v("例子：仓库有"),s("code",[a._v("master")]),a._v(" 和 "),s("code",[a._v("feature")]),a._v("两个分支。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  a - b - c - d   Master\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n         e - f - g Feature\n")])])]),s("p",[a._v("现在将提交"),s("code",[a._v("f")]),a._v("应用到"),s("code",[a._v("master")]),a._v("分支")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换到 master 分支")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout master\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Cherry pick 操作")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick f\n")])])]),s("p",[a._v("上面的操作完成以后，代码库就变成了下面的样子。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("  a - b - c - d - f   Master\n       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n         e - f - g Feature\n")])])]),s("p",[a._v("完成上面操作之后，"),s("code",[a._v("master")]),a._v("分支新增了一个f的提交")]),a._v(" "),s("p",[s("code",[a._v("git cherry-pick")]),a._v("命令的参数，不一定是提交的哈希值，分支名也是可以的，表示转移该分支的最新提交。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" cherry-pick feature\n")])])])]),a._v(" "),s("p",[a._v("上面代码表示将"),s("code",[a._v("feature")]),a._v("分支的最近一次提交，转移到当前分支。")]),a._v(" "),s("h3",{attrs:{id:"三、转移多个提交"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、转移多个提交"}},[a._v("#")]),a._v(" 三、转移多个提交")])])}),[],!1,null,null,null);t.default=r.exports}}]);