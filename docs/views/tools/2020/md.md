---
title: Markdown
date: 2020-04-06
sidebar: 'auto'
categories:
 - 工具
tags:
 - md
publish: true
---

Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。
<!-- more -->

::: tip
1, 不同编译器对md编译样式不一样

2, 使用---作为水平分割线时，要在它的前后都空一行，防止---被当成标题标记的表示方式

3, 只要 * 或者- 大于等于三个就可组成一条平行线
:::


## 超链接

```
[很好教程1链接](https://www.jianshu.com/p/191d1e21f7ed)  
[很好教程2链接](https://www.cnblogs.com/crazyant007/p/4220066.html#fnref1)  

页内锚点：
[导航聚合](#导航聚合)&#160;&#160;
<a id="导航聚合">导航聚合</a>  
```

## 列表

```
- 列表内容
+ 列表内容
* 列表内容

注意：- + * 跟内容之间都要有一个空格

1.列表内容
2.列表内容
3.列表内容

注意：序号跟内容之间要有空格

* 无序列表的项目符号是按照实心圆、空心圆、实心方格的层级关系递进的
```


## 文字样式

```
*这是倾斜的文字*  
**这是加粗的文字**  
***这是斜体加粗的文字***  
~~这是加删除线的文字~~  
<mark>高亮  
<br>换行  
<font face="黑体" color=green size=5>我是黑体，绿色，尺寸为5</font>  
```
*这是倾斜的文字*  
**这是加粗的文字**  
***这是斜体加粗的文字***  
~~这是加删除线的文字~~  


## 标题

```
# 这是一级标题
## 这是二级标题
### 这是三级标题
#### 这是四级标题
##### 这是五级标题
###### 这是六级标题
```

## 背景色

```
<table>
  <tr>
    <td bgcolor=yellow>背景色yellow</td>
    <td bgcolor=blue>背景色blue</td>
  </tr>
</table>
```

<table>
  <tr>
    <td bgcolor=pink>背景色yellow</td>
    <td bgcolor=blue>背景色blue</td>
  </tr>
</table>


## 图片

* alt显示在图片下面的文字，相当于对图片内容的解释。 
* title是标题，鼠标移图片上显示的内容。 
* `title可不加`  
* `![随便写什么]()`
* `<img src=" " width="50%" height="50%"> 图片设置大小 可以是具体像素也可以是百分比`


## 换行
```
1. 一行文字后敲两个空格  
2. 两行之间空一行
3. </br>
```

## 引用

```
在引用的文字前加>即可。
引用也可以嵌套，如加两个>> 三个>>> 等等，越多>>表示层级越深
```

>这是引用的内容1
>>这是引用的内容2
>>>>这是引用的内容4

## 分割线

三条或三条以上都可以

```
---
----
***
*****
```

## 超链接

```
[超链接名](超链接地址 "超链接title")  
`title可加可不加` 

[简书](http://jianshu.com)  
[Baidu](www.baidu.com "百度一下，你就知道" )  
```

## 块引用、代码块

::: tip

代码: `

代码块: ```

:::

## 表格

```
表头1|表头2|表头3
---|:--:|---:
内容1|内容2|内容3
内容3|内容4|内容5
```

表头1|表头2|表头3
---|:--:|---:
内容1|内容2|内容3
内容3|内容4|内容5

**第二行用来分割表头和内容。**

- :---代表左对齐（默认），---:代表右对齐，:---:代表居中对齐


## 注脚
  使用 [^footer] 表示注脚。
  这是一个注脚测试[^footer1]。  
  脚注不是标准 MarkDown的范畴,各个扩展的定义可能有所不同

## 流程图

指定 mermaid（样式流程图） 或 flow （标准流程图）解析语言

::: tip
原生 markdown 是不支持流程图的，很多的语法，是一些特定的编辑器或者解析库自己实现的。  

>**tag=>type: content:>url**  

tag：就是一个标签，在第二段连接元素时用  
type：是这个标签的类型，有6中类型: start、 
end、operation、subroutine、condition、inputoutput  
content：流程语句中放置的内容，type:与content之间一定要有一个空格  
url：链接，与流程语句绑定  

在editor.md编辑器中，内置的流程图是基于flowchart.js语法的。
 
开始  
st=>start: 开始  
操作  
op1=>operation: 操作、执行说明  
条件  
cond=>condition: 确认？  
子程序  
sub1=>subroutine: 子程序操作说明  
用户输入或输出  
io1=>inputoutput: 输入密码  
结束  
e=>end: 结束  

:::

```flow
st=start:Start
i=inputoutput:输入年份n
cond1=condition:n能否被4整除？
cond2=condition:n能否被100整除？
cond3=condition:n能否被400整除？
o1=inputoutput:输出非闰年
o2=inputoutput:输出非闰年
o3=inputoutput:输出闰年
o4=inputoutput:输出闰年
e=end

st-i-cond1
cond1(no)-o1-e
cond1(yes)-cond2
cond2(no)-o3-e
cond2(yes)-cond3
cond3(yes)-o2-e
cond3(no)-o4-e
```

## 时序图

— 指定 sequence（标准时序图） 或 mermaid（样式时序图） 解析语言

## 甘特图

— 指定 mermaid 解析语言