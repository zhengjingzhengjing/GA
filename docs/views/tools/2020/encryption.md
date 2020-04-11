---
title: 加密三种方式：base64/md5/sha1
date: 2020-04-11
sidebar: 'auto'
categories:
 - 工具
tags:
 - base64
 - md5
 - sha1
publish: true
---

js实现base64加密、md5加密、sha1加密
<!-- more -->

## sha1加密

加密不可逆，更安全，解析慢点

SHA-1（英语：Secure Hash Algorithm 1，中文名：安全散列算法1）

页面中引入sha1.js，调用方法为   

```
<script src="https://cdn.bootcss.com/js-sha1/0.6.0/sha1.min.js"></script>
<script>
  console.log(sha1('mima123465'))
</script>
```

## md5加密

加密不可逆

在页面中引用md5.js文件，调用方法为

```
<script src="https://cdn.bootcss.com/blueimp-md5/2.10.0/js/md5.min.js"></script>
<script>
  console.log(md5('mima123465'))
</script>
```

## base64加密

在页面中引入base64.js文件，调用方法为

```
<script> 
  console.log(window.btoa('admin')) // 加密
  console.log(window.atob('YWRtaW4=')) //解密
</script> 
```

散列/哈希算法：https://tool.oschina.net/encrypt?type=2