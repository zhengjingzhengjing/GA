---
title: params传参和query传参
date: 2020-04-12
sidebar: 'auto'
categories:
 - 前端
tags:
 - vue
publish: true
---
使用params传参时，要在路由后面加参数名，并且传参的时候，参数名要跟路由后面设置的参数名对应。使用query方法，就没有这种限制，直接在跳转里面用就可以。
<!-- more -->

- 传参可以使用params和query两种方式。

- 使用params传参只能用name来引入路由，即push里面只能是name:’xxxx’,不能是path:’/xxx’，因为params只能用name来引入路由，如果这里写成了path，接收参数页面会是undefined！！！。 

- 使用query传参使用path来引入路由。

- params是路由的一部分,必须要在路由后面添加参数名。query是拼接在url后面的参数，没有也没关系。  

- 二者还有点区别，直白的来说query相当于get请求，页面跳转的时候，可以在地址栏看到请求参数，而params相当于post请求，参数不会再地址栏中显示。


## params传参
```
//params传参 使用name
this.$router.push({
  name:'second',
  params: {
    id:'20180822',
     name: 'query'
  }
})

//params接收参数
this.id = this.$route.params.id ;
this.name = this.$route.params.name ;

//路由
{
path: '/second/:id/:name',
name: 'second',
component: () => import('@/view/second')
}
```

## query传参

name和path都可

```
//query传参，使用name跳转
this.$router.push({
    **name:'second',**
    query: {
        queryId:'20180822',
        queryName: 'query'
    }
})

//query传参，使用path跳转
this.$router.push({
    **path:'second',**
    query: {
        queryId:'20180822',
        queryName: 'query'
    }
})

//query传参接收
this.queryName = this.$route.query.queryName;
this.queryId = this.$route.query.queryId;

```
