---
title: 快速让全站页面变成灰色
date: 2020-04-05
sidebar: 'auto'
categories:
 - 前端
tags:
 - css
 - html
publish: true
---
20200404是全国哀悼日，打开网页，几乎所有网页都变成了灰色。
这时候就有些好奇，是使用了什么方法让这些网站快速变灰的？
<!-- more -->

在你的css里面加上这一段代码就可以了

```
 html { 
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%); 
  -moz-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
   -o-filter: grayscale(100%); 
  filter: url("data:image/svg+xml;utf8,#grayscale");
  filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); 
  -webkit-filter: grayscale(1);
}
```
### 简洁版
```
html {
  -webkit-filter: grayscale(100%);
  filter:progid:DXImageTransform.Microsoft.BasicImage(graysale=1);
}
```

html标签增加class属性class='gray'

```
.gray {
  -webkit-filter: grayscale(.95);
}
```