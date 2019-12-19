### 布局流程

1. 确定版心（可视区或者网页主体），常见宽度960，980，1000，1200
2. 分析页面中的行模块，和行模块中的列模块
3. 制作html结构
4. css初始化，运用盒子模型原理，通过div + css控制网页模块

html需要设置最小尺寸，浏览器放大或缩小时会改变html尺寸

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

![轮播](image\轮播.png)

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