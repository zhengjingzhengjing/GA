---
title: LESS的基础语法
date: 2020-04-01
sidebar: 'auto'
categories:
 - 工具
tags:
 - less
publish: true
---

<!-- more -->

常用的编译工具有：Koala(据说目前最流行的)、在线编译(http://tool.oschina.net/less)、SimpLESS等。

## 变量

[官网](https://less.bootcss.com/#%E6%A6%82%E8%A7%88)

```  
  @link-color: #428bca;
  @link-color-hover: darken(@link-color, 10%);

  a {
      color: @link-color;
      &:hover {
          color: @link-color-hover;
      }
  }
```

还可以用变量存储公用的URL、选择器等等

```
  .@{selector} {
      width: 100px;
      height: 100px;
      @{property}: #000;
      background: url("@{bgImg}/test.png");

      &:after {
          display: block;
          content: @@var;
      }
  }
  @selector: box;
  @bgImg: "../img";
  @property: color;
  @name: "珠峰培训";
  @var: "name";

  //->编译为CSS的结果
  .box {
      width: 100px;
      height: 100px;
      color: #000;
      background: url("../img/test.png");
  }

  .box:after {
      display: block;
      content: "珠峰培训";
  }
```

变量存储的值可以作为选择器，也可以作为样式属性名，同样也可以像类似于JS中字符串拼接的方式把变量值的和另外一个字符串进行拼接，而且@@var是把var变量存储的值作为另外一个变量的名从而获取对应的值。还有一点值的我们注意的是，变量可以定在使用代码的下面，这个有点类似于JS中的预解释，不管写在上面还是下面，都是相当于全局的变量，并且都可以把存储值获取到(但是建议大家把变量都统一在最上面定义)。

## 混合(Mixins)

混合其实是把某个选择器中的样式拿过来使用

```
  .public {
      width: 100px;
      height: 100px;
  }

  nav ul {
      .public;
      list-style: none;
  }

  .public() {//->在选择器后面加上()就可以不编译这个样式了
    width: 100px;
    height: 100px;
  }
```

虽然在上述的案例中，nav ul把public中的样式继承了过来，但是原理却是把代码copy一份过来，这样编译后的CSS中依然会存留大量的冗余CSS代码，为了避免这一点，我们可以使用extend伪类来实现样式的继承使用。

```
  .public {
      width: 100px;
      height: 100px;
  }

  nav ul {
      &:extend(.public);
      list-style: none;
  }
```

或

```
  .public {
      width: 100px;
      height: 100px;
  }

  nav ul:extend(.public) {
      list-style: none;
  }
```


## 命名空间和作用域

可以指定命名空间，实现在一个盒子中层级嵌套式的编写。下面案例中，.box就是命名空间，里面的img、.gray都是这个空间下的样式，调取的话需要.box > .gray。

```
  .box {
      width: 100px;
      height: 100px;
      img {
          width: 100%;
          height: 100%;
      }
      .gray {
          color: #eee;
      }
      &:hover {
          background: green;
      }
  }

  #nav {
      .box;
  }

  #header {
      .box > .gray;
  }
```

## !important

在调用的混合集后面追加 !important 关键字，可以使混合集里面的所有属性都继承 !important:

```
  @color: #ccc;
  .box {
    @color: #eee;
    .gray {
      color: @color;
    }
  }

  nav ul {
    .box !important;
  }

  ** 表示nav ul 就等于box **

  //->编译为CSS的结果
  .box .gray {
      color: #eee;
  }

  nav ul .gray {
      color: #eee !important;
  }
  ```

## Parametric Mixins

如同JS一样，LESS也可以向函数一样设定形参数，这个技巧在我们的项目中会被经常的使用到，例如：处理CSS3的兼容问题

```
  .transition(@property:all;@duration:1s;@function:linear;@delay:0s;) {
    -webkit-transition: @property @duration @function @delay;
    -moz-transition: @property @duration @function @delay;
    -ms-transition: @property @duration @function @delay;
    -o-transition: @property @duration @function @delay;
    transition: @property @duration @function @delay;
  }

  .box1 {
    .transition;
  }

  .box2 {
    .transition(@duration: 2s);
  }

  .box3 {
    .transition(@duration: 2s; @property: width;);
  }

  //->编译为CSS的结果
  .box1 {
      -webkit-transition: all 1s linear 0s;
      -moz-transition: all 1s linear 0s;
      -ms-transition: all 1s linear 0s;
      -o-transition: all 1s linear 0s;
      transition: all 1s linear 0s;
  }

  .box2 {
      -webkit-transition: all 2s linear 0s;
      -moz-transition: all 2s linear 0s;
      -ms-transition: all 2s linear 0s;
      -o-transition: all 2s linear 0s;
      transition: all 2s linear 0s;
  }

  .box3 {
      -webkit-transition: width 2s linear 0s;
      -moz-transition: width 2s linear 0s;
      -ms-transition: width 2s linear 0s;
      -o-transition: width 2s linear 0s;
      transition: width 2s linear 0s;
  }

```

此外我们需要值得注意的是，LESS中也有arguments。

```
  .transition(@property:all;@duration:1s;@function:linear;@delay:0s;) {
    -webkit-transition: @arguments;
    transition: @arguments;
  }

  .box1 {
    .transition;
  }

  //->编译为CSS的结果
  .box1 {
      -webkit-transition: all 1s linear 0s;
      transition: all 1s linear 0s;
  }
  
```

我们还可以把我们的变量像JS的函数一样操作，不仅仅有参数，还有返回值。

```
  .average(@x, @y) {
    @result: ((@x + @y) / 2);
  }

  div {
    .average(16px, 50px); //"call" the mixin
    padding: @result; //use its "return" value
  }

  //->编译为CSS的结果
  div {
      padding: 33px;
  }
```

## Mixin Guards

可以在mixin中设置条件；常用的条件运算符：>、>=、<、<=、=；我们设定的条件还可以使用IS函数：iscolor、isnumber、isstring、iskeyword、isurl、ispixel、ispercentage...

```
  .mixin (@a) when (lightness(@a) >= 50%) {
    background-color: black;
  }

  .mixin (@a) when (lightness(@a) < 50%) {
    background-color: white;
  }

  .box1{
    .mixin(#ddd);
  }

  .box2{
    .mixin(#555);
  }

  //->编译为CSS的结果
  .box1 {
      background-color: black;
  }

  .box2 {
      background-color: white;
  }

```

when是在设置条件，除了像上面的写法外，我们还可以通过when设置多个条件，而且条件中可以使用is函数。

```
  :使用IS函数
  .mixin (@a; @b: 0) when (isnumber(@b)) { ... }
  .mixin (@a; @b: black) when (iscolor(@b)) { ... }

  :多条件，可以使用and或者逗号间隔
  .mixin (@a) when (isnumber(@a)) and (@a > 0) { ... }
  .mixin (@a) when (isnumber(@a)) , (@a > 0) { ... }

  我们还可以通过与&特性结合实现'if'类型的语句。

  :这里的意思是如果为true,.box的文字颜色才是白色

  @my-option: true;
  & when (@my-option = true) {
    .box {
      color: white;
    }
  }

```

## Loops


在Less中，混合可以调用它自身。这样，当一个混合递归调用自己，再结合Guard条件表达式，就可以写出循环结构。使用递归循环最常见的情况就是生成栅格系统的CSS：

```
  .generate-columns(4);
  .generate-columns(@n, @i: 1) when (@i <= @n) {
    .column-@{i} {
      width: (@i * 100% / @n);
    }
    .generate-columns(@n, (@i + 1));
  }

  //->输出的CSS
  .column-1 {
      width: 25%;
  }

  .column-2 {
      width: 50%;
  }

  .column-3 {
      width: 75%;
  }

  .column-4 {
      width: 100%;
  }
```

## Merge

Merge特性可以从多个属性中将值，集合到某一个样式属性的列表中（也就是多样式效果）。在编写的时候，+代表以逗号分隔，+_代表多个之前以空格分隔。

```
  .mixin() {
    box-shadow+: inset 0 0 10px #555;
  }

  .myclass {
    .mixin;
    box-shadow+: 0 0 20px black;
  }

  .mixin2() {
    transform+_: scale(2);
  }

  .myclass2 {
    .mixin2;
    transform+_: rotate(45deg);
  }

  //->输出的CSS
  .myclass {
      box-shadow: inset 0 0 10px #555, 0 0 20px black;
  }

  .myclass2 {
      transform: scale(2) rotate(45deg);
  }

```

## Parent Selectors

&运算符其实就是让当前的选择器和父级选择器按照特定的规则进行连接，看下面的案例：

``` 
  .box {
    color: blue;
    &:hover {
      color: green;
    }

    &-top { height: 30px;}

    &-center { height: 500px;}

    //->多个&&
    & + &-top { color: red; }

    & &-top { color: grey; }

    &&-top { color: black; }

    &, &-top { color: orange;}
  }

  //->输出的CSS
  .box {  color: blue;}

  .box:hover { color: green;}

  .box-top { height: 30px;}

  .box-center { height: 500px; }

  .box + .box-top { color: red;}

  .box .box-top { color: grey;}

  .box.box-top { color: black; }

  .box, .box-top { color: orange;}

```

改变选择器顺序，下面的案例中，选择器.no-border-radius &会前置插入它的父选择器.header .menu，最后变成.no-border-radius .header .menu形式输出：

```
  .header {
    .menu {
      border-radius: 5px;
      .no-border-radius & {
        background-image: url('images/button-background.png');
      }
    }
  }

  //->输出的CSS
  .header .menu {
      border-radius: 5px;
  }

  .no-border-radius .header .menu {
      background-image: url('images/button-background.png');
  }

```

## Import Directives

从其他样式表中导入样式。

```
  @import "public.less";
  
  .box {
    &:after {
      .clear;
    }
  }

  //->输出的CSS:会把public中的样式也输出
  .clear {
      display: block;
      height: 0;
      content: "";
      clear: both;
      zoom: 1;
  }

  .box:after {
      display: block;
      height: 0;
      content: "";
      clear: both;
      zoom: 1;
  }

```
我们发现上述的操作虽然实现了调取使用，但是会把public中的less也编译到了自己的这个css中，如果不想编译的话，我们需要配置一些参数：

```
  @import (reference) "public.less";

  .box {
    &:after {
      .clear;
    }
  }

  //->输出的CSS:
  .box:after {
    display: block;
    height: 0;
    content: "";
    clear: both;
    zoom: 1;
  }

```
除了reference以外我们还可以配置一些其他的参数值： 
inline：在输出中包含源文件但不加工它  
less：将文件作为Less文件对象，无论是什么文件扩展名   
css：将文件作为CSS文件对象，无论是什么文件扩展名   
once：只包含文件一次（默认行为） multiple：包含文件多次  