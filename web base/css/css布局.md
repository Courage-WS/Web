_**浮动用来布局，定位用来做特效**_

## 布局流程

```
浮动布局、凝胶布局、绝对布局、表格显示布局
流体（适应页面）、冻结（固定）、凝胶（内容固定，外边距随机）
```

1. 确定版心（可视区或者网页主体），常见宽度960，980，1000，1200
2. 分析页面中的行模块，和行模块中的列模块
3. 制作 html 结构，
4. css 初始化，运用盒子模型原理，通过 div + css 控制网页模块

html需要**设置最小尺寸**，浏览器放大或缩小时会改变html尺寸

对齐是排版最重要的因素, **别让什么都居中**

### html

```
<a href="#">shopcmd</a> |  
<a href="#">首页</a>
```

“|”后面换行会合成一个空格空格 前面也需要加个空格

- p，dt 和 h1里面不可以放块级元素，
- a 元素里可以放块元素

### input空间和button上下不对齐的原因

button在高度计算上始终使用了Quirks模式。在Quirks模式下，边框的计算是在元素的宽度内的，而不像标准模式一样计算在外部（button的高度包含边框的高度

由于【button元素】在浏览器中属性默认为inline-block，因此代码中空格会被显示为的空白

### 解决img下方空白

在HTML5与CSS3中，DIV标签中的图片也就是IMG标签的默认vertical-align属性为baseline，文字分为顶线，中线，基线，底线。图片的下边缘是基线，所以在下方会留出基线和底线这一段距离的空白

1. display：block
2. vertical-align: middle / bottom / top；      _推荐_
3. 负外边距
4. 父元素font-size：0；
5. 父元素line-height: 0；

### 溢出显示省略号

1. `white-space: nowrap;`  文字一行显示不换行
2. `overfolow: hidden;`  溢出部分隐藏
3. `text-overflow: ellipsis;`  超出的部分以省略号显示

使用 __text-indent__ 时，文本是先变成省略号再缩进，所以可能会把省略号剪裁掉。

### `display`: [布局]( https://developer.mozilla.org/en-US/docs/Web/CSS/display#Guides_and_Examples  )

### 导航栏

``` css
a {
	width: 200px;
	height: 50px;
	/* background-color: orange; */
	display: inline-block;  /* 把a 行内元素转换为行内块元素 */
	text-align: center;  /* 文字水平居中 */
	line-height: 50px;  /* 我们设定行高等于盒子的高度，就可以使文字垂直居中 */
	color: #fff;
	font-size: 22px;
	text-decoration: none;  /* 取消下划线 文本装饰 */
}
a:hover {  /* 鼠标经过 给我们的链接添加背景图片*/
	background: url(images/h.png) no-repeat; 
}
```



### 轮播图

![轮播](images\轮播.png)

轮播盒子，两个链接左右两边定位，有序列表是下方的定位点，无序列表的可点击链接是图片

### tab 栏切换

tab 栏盒子，分两块

### 图片边框

图片的边框一般用伪元素定位上去

### 滑动门

1. a 设置 背景左侧，padding撑开合适宽度。    
2. span 设置背景右侧， padding撑开合适宽度 剩下由文字继续撑开宽度。
3. 之所以a包含span就是因为 整个导航都是可以点击的。

```html
<li>
  <a href="#">
    <span>导航栏内容</span>
  </a>
</li>
```

```css
a {
  display: inline-block;
  padding-left: 16px;
  height: 33px;
  float: left;
  line-height: 33px;
  margin:0  10px;
  background: url(./images/to.png) no-repeat left ;
}
span {
  padding-right: 16px;
  height: 33px;
  display: inline-block;
  color:#fff;
  background: url(./images/to.png) no-repeat       right ;
  text-decoration: none;
}
a:hover,
a:hover span {
  background-image:url(./images/ao.png);
}
```

### css 三角形

### 

~~~css
 div {

 	width: 0; 

    height: 0;
    line-height:0；
    font-size: 0;
	border-top: 10px solid red;

	border-right: 10px solid green;

	border-bottom: 10px solid blue;

	border-left: 10px solid #000; 

 }

~~~

1. 我们4个边框都要写， 只保留需要的边框颜色，其余的不能省略，都改为 transparent 透明就好了
2. 为了照顾兼容性 低版本的浏览器，加上 font-size: 0;  line-height: 0;