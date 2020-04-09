(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{355:function(s,e,a){"use strict";a.r(e);var n=a(3),t=Object(n.a)({},(function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("ul",[a("li",[s._v("安装node.js主要是用里面的npm包工具，安装工具方便，直接npm...就直接安装，而不是再引入js等文件")]),s._v(" "),a("li",[s._v("cnpm 淘宝镜像")]),s._v(" "),a("li",[s._v("promise： es6的异步模块")]),s._v(" "),a("li",[s._v("webpack：模块打包工具")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://ke.qq.com/webcourse/index.html#cid=244252&term_id=100287997&taid=1542803792575004&vid=5285890787935296159",target:"_blank",rel:"noopener noreferrer"}},[s._v("教程"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.jianshu.com/p/9ffd11f8bd68",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack基本配置webpack.config.js"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.echartsjs.com/zh/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts",target:"_blank",rel:"noopener noreferrer"}},[s._v("在 webpack 中使用 ECharts"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("安装步骤:")]),s._v(" "),a("ul",[a("li",[s._v("1，在文件A中：npm init -y     =>得到package.json")]),s._v(" "),a("li",[s._v("2，npm i webpack --save   =>得到node_modules   node_modules/webpack/...  package.json中就会有webpack")]),s._v(" "),a("li",[s._v("3，在文件A中创建webpack.config.js(建这个) /webpack.config.dev.js来自己写代码来配置模块，开发环境和生产环境的区别，在文件中配置入口文件，出口文件等"),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("var path = require('path')\n\nmodule.exports = {\n  watch: true,\n  \n  //入口\n  entry: 'src/index.js',\n  \n  // 出口\n  output: {\n    path: path.join(__dirname, 'dist/static/'),\n    filename: 'index.js'\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])])]),s._v(" "),a("li",[s._v("4，执行webpack打包")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("1，如果想要其它项目也有这些配置，直接将package.json拷贝过去，重新npm install生成node_modules"),a("br"),s._v("\n2，将webpack.config.js也拷贝过来")])]),s._v(" "),a("p",[a("a",{attrs:{href:"http://note.youdao.com/noteshare?id=35680783ef43e089b160d0f91695d8c1",target:"_blank",rel:"noopener noreferrer"}},[s._v("note"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[s._v("#")]),s._v(" Promise")]),s._v(" "),a("p",[s._v("作用:  解决异步回调、回调地狱问题（一层一层的嵌套，用promise就可以用then拉伸一个平级）")]),s._v(" "),a("p",[s._v("所谓promise，简单说是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果，")]),s._v(" "),a("p",[s._v("从语法上说，promise是一个对象，从它可以获取异步操作的消息，promise提供了统一的API，各种异步操作都可以用同样的方法进行处理。")]),s._v(" "),a("p",[s._v("传统方式，大部分用回调函数，事件驱动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ajax(url,{  //获取token\n\t\tajax(url,()=>{  //获取用户信息\n\t\t\tajax(url, ()=>{\n\t\t\t\t//获取用户相关新闻\n\t\t\t})\n\t\t})\n\t})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("let promise = new Promise(function(resolve, reject){\n\t\t    //resolve,   成功调用\n\t\t    //reject     失败调用\n\t\t});\n\t\tpromise.then(res=>{ }, err=>{ })\n// 专门来捕获错误的\n\t\tpromise.catch(err=>{})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  new Promise(()=> {\n    $.get('...', data => {  // jq\n      console.log(data)\n    })\n  }).then(()=>{}).catch(()=>{})\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('// Promise 封装 ajax\nfunction fetch(method, url, data){\n    return new Promise((resolve, reject) => {\n        var xhr = new XMLHttpRequest();\n        var method = method || "GET";\n        var data = data || null;\n        xhr.open(method, url, true);\n        xhr.onreadystatechange = function() {\n            if(xhr.status === 200 && xhr.readyState === 4){\n                resolve(xhr.responseText);\n            } else {\n                reject(xhr.responseText);\n            }\n        }\n        xhr.send(data);\n        })\n}\n\n// 使用\nfetch("GET", "/some/url.json", null)\n.then(result => {\n    console.log(result);\n})\n\n\n\n// 封装 nodejs error first 风格回调\nfunction readFile(url) {\n    return new Promise((resolve, reject) => {\n       fs.readFile(url,\'utf8\', (err, data) => {\n        if(err) {\n            reject(err);\n            return;\n        }\n        resolve(data)\n        }) \n    })\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br")])]),a("p",[s._v("Promise.resolve('aa') :  将现有的东西，转成一个promise对象， resolve状态，成功，等价于: new Promise(resolve =>{    resolve('aaa')});")]),s._v(" "),a("p",[s._v("Promise.reject('aaa'):   将现有的东西，转成一个promise对象，reject状态，失败状态，等价于: new Promise((resolve, reject) =>{ reject('aaa')});")]),s._v(" "),a("p",[s._v("Promise.all([p1, p2, p3]):  把promise打包，扔到一个数组里面，打包完还是一个promise对象，必须确保，所有的promise对象，都是resolve状态，都是成功状态")]),s._v(" "),a("p",[s._v("Promise.race([p1, p2, p3]): 只要有一个成功，就返回")]),s._v(" "),a("h2",{attrs:{id:"promise-all"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-all"}},[s._v("#")]),s._v(" Promise.all()")]),s._v(" "),a("h2",{attrs:{id:"async-await-promise封装ajax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-await-promise封装ajax"}},[s._v("#")]),s._v(" async await+promise封装ajax")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://caibaojian.com/asyncawait.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Async/Await：比Promise更好的6个理由"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://segmentfault.com/a/1190000015488033",target:"_blank",rel:"noopener noreferrer"}},[s._v("理解async/await"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("请背下这段代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("function xxx(){\n    return new Promise((f1, f2) => {\n        doSomething()\n        setTimeout(()=>{\n            // 成功就调用 f1，失败就调用 f2\n        },3000)\n    })\n}\n\nxxx().then(success, fail)\n\n// 链式操作\nxxx().then(success, fail).then(success, fail)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h2",{attrs:{id:"axios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axios"}},[s._v("#")]),s._v(" axios")]),s._v(" "),a("p",[s._v("axios基于promise对ajax的封装，Axios 是一个基于 promise 的 HTTP 库")]),s._v(" "),a("p",[s._v("传统项目也可以使用axios")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<script src="https://unpkg.com/axios@0.19.2/dist/axios.min.js"><\/script>\naxios.get(url).then(res => { console.log(res)})\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("a",{attrs:{href:"http://note.youdao.com/noteshare?id=d0d6971a59c8ee9e2aaea09d33d311e1&sub=90F6E7121DB6460EB346CBD33BB95C7C",target:"_blank",rel:"noopener noreferrer"}},[s._v("有道云笔记链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=t.exports}}]);