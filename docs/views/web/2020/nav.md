---
title: 声明式导航和编程式导航
date: 2020-04-12
sidebar: 'auto'
categories:
 - 前端
tags:
 - vue
publish: true
---
声明式导航用在直接渲染到页面，编程式导航用于在js中处理逻辑后需要页面进行跳转
<!-- more -->

声明式导航：`<router-link to="/url">`

声明式导航中的to怎么写，那么编程式导航中的参数就怎么写：this.$router.push()

this.$router其实就是router，vue为了方便我们在组件中使用router，才添加了this.$router

this.$router.push()：会进行页面跳转，同时会在历史记录上留下记录

this.$router.replce()：和push功能相同，但是会替换当前页出现在历史记录中
  
this.$router.go(num)：表示距离当前页的在历史记录上的页数

this.$router.back()：返回到上一页

this.$router.forward()：前进到下一页

next中参数写法同push()

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <div id="app">
    <router-link to="/url"></router-link>
    <router-link :to="{path: 'url'}"></router-link>
    <!-- 如果想要携带query参数 -->
    <router-link to="/url?a=1"></router-link>
    <router-link :to="'/url?a=' + a"></router-link>
    <router-link :to="{path: '/url', query: {a: 1}}"></router-link>
    <router-link :to="{name: 'u', params: {id: 1}}"></router-link>
    <button @click="handler">按钮</button>
  </div>
  <script src="../vue.js"></script>
  <script src="../vue-router.js"></script>
  <script>
    const routes = [
      {
        name: 'u',
        path: '/u/:id'
      }
    ]
    const router = new VueRouter({
      routes
    })
    const app = new Vue({
      el: '#app',
      router,
      data: {
        a: 1
      },
      methods: {
        handler () {
          // this.$router.push({path: '/a', query: {a: 1}})
          this.$router.push({name: 'u', params: {id: 1}})
          // router.push('/')
        }
      }
    })
  
  </script>
</body>
</html>
```
