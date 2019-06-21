# css层叠样式表
- [验证工具](http://jigsaw.w3.org/css-vallidator/)
- [参考手册](http://css.doyoe.com/)；[手册2](http://css.cuishifeng.cn/index.html)

注释：/*...*/

property-value pairs        名值对

三大要点：
1. 简写代码
2. 易于维护
3. 重复使用

三大特性：
1. [继承](https://www.cnblogs.com/thislbq/p/5882105.html)，一般text font line开头的元素和color具有继承性
2. 层叠
3. 优先级，内部样式表和外部样式表之间没有优先级，后出现的样式优先级更高

三大重点：
1. 盒模型
2. 浮动
3. 定位

### 权重

  一般选择最后出现的规则

  样式优先顺序：读者重要声明，作者重要声明，作者声明，读者声明，用户代理

  带有!important声明的读者样式权重最高

  0 0 0 0 内联样式特殊性都是1000 每个id加100；每个类、伪类、属性加10；每个元素、伪元素加1。 *  0，继承 0。256进制

  【：not】否定伪类在优先级计算中不会被看做是伪类，但是，会把:not里面的选择器当普通选择器计数。这句话有点不好理解，其实就是忽略掉:not，其他伪类(如:hover)参与css优先级的计算，但是「:not」不参与计算。

### 选择器

类的第一个字符不能是数字，在HTML中多个类用空格隔开

#### 关系选择器
|选择器|说明||
|-|-|-|
|div,h2 {...}|同时选择|
|div.class {...}|并列选择|不加空格|
|div h2 {...}|后代选择器|
|.div > h2|子元素选择器|直接孩子|
|.div + p|相邻元素|紧跟类div后面的段落|
|.div ~ p|同父兄弟元素|类div后拥有共同父元素的所有兄弟元素p|
|* {...}|通配符|
#### 伪类选择器
##### 链接伪类
|选择器|说明||
|-|-|-|
|a:link {...}|未点击|
|a:visited {...}|已点击|
|a:focus {...}|可以接受键盘输入或者能以某种方式激活的元素|比如被聚焦的input|
|a:hover {...}|悬停|
|a:active {...}|被输入激活的元素|正在被点击|

注意：
- a:hover必须跟在a:link和a:visited后面
- a:active必须跟在a:hover后面
`img:hover .arr {...}`  鼠标经过类img时，后代类arr的样式

##### 结构（位置）伪类
|选择器|说明||
|-|-|-|
|:lang()|静态伪类|语言选择器。类似|\=|
|p:first-child {...}|父元素的第一个p元素|必须要满足第一个和p元素|
|:last-child {...}|父元素的最后一个元素|
|:nth-child(n) {...}|父元素的第n个子元素|
|:nth-last-child(n) {...}|父元素的倒数第n个子元素|
##### 目标伪类

`:target` 目标伪类选择器：可用于选取当前活动的目标元素
```
:target {
    color: red;
    font-size: 30px;
}
```

#### 伪元素

伪元素必须放在出现该伪元素的选择器后面

伪元素必须有 `content`

|选择器|说明|
|-|-|
|::first-letter {...}|首字母样式|
|::first-line {...}|首行样式|
|::before {...}|第一个子元素之前|
|p::after {...}|p元素的最后一个子元素之后|
#### 属性选择器
|选择器|说明||
|-|-|-|
|[class]|指定属性的元素|
|[class=value]|指定属性和值的元素|
|[class~=value]|属性值中包含指定词汇的元素|必须是整个单词|
|[class|\=value]|带有指定值开头的属性值的元素|必须是整个单词|
|[class^=value]|以指定值开头的每个元素|
|[class$=value]|以指定值结尾的每个元素|
|class*\=value]|包含指定值的每个元素|
### 插入样式
代入样式的三种方法：
1. 行内样式表：`<p style="color: #ccc"></p>`
2. 内部样式表：`<style rel="stylesheet"></style>

在内部样式表插入样式：`@impot url{...} screen`(指定设备)

必须放在样式表开头，放在其他内容后会被忽略

3. 外部样式表：`<link style="text/css" />
#### ico
```
<link rel="shortcut icon" href="http://example.com/favicon.ico" type="image/vnd.microsoft.icon" />
```

ico文件 image/vnd.microsoft.icon（或者亦可出于兼容性原因使用image/x-icon。然而最好使用IANA注册的MIME类型，因为多数主流浏览器现在支持它）

### 指定设备类型
```
@media screen and(min-device-width: 481px) {
    #guarantee {...}
}
@media screen and(max-device-width: 480px){
    #guarantee {...}
    @media print {
        body {...}
    }
}
```
### font

- **font:**			_简写不能变更顺序，必须有**`font-size`**和**`font-family`**_
- **font-style:**	_normal italic oblique_	
- **font-weight:**	_normal 100—400—700—900 bold lighter_
- **font-size / line-height:**	_继承的事计算后的值，并不是倍数em_
- **font-family:**	_serif sans-serif cursive fantasy monospace_
- 
无衬线用于计算机屏幕，有衬线用于报纸文字，等宽用于代码示例，手写字体用于标题，装饰性文字

1. 普遍使用14px+
2. 用偶数字号，老式浏览器对奇数有bug
3. 字体有先后顺序，符号用英文的，多个用逗号隔开
4. 英文字体必须在中文字体前面
5. 字体是中文，或者有特殊符号：空格，#，$等，需要加英文引号
6. 尽量使用系统默认字体

可以通过escape()来测试属于什么字体。

#### 常用字体表
|字体名称|英文名称|Unicode编码|
|-|-|-|
|宋体|SimSun|\5B8B\4F53|
|新宋体|NSimSun|\65B0\5B8B\4F53|
|黑体|SimHei|\9ED1\4F53|
|微软雅黑|Microsofa YaHei|\5FAE\8F6F\96C5\9ED1|
|楷体GB2312|KaiTi_GB2312|\6977\4F53_GB2312|
|隶书|LiSu|\96B6\4E66|
|幼圆|YouYuan|\5E7C\5706|
|华文细黑|STXihei|\534E\6587\7EC6\9ED1|
|细明体|MingLiU|\7EC6\660E\4F53|
|新细明体|PMingLiU|\65B0\7EC6\660E\4F53|

为了照顾不同电脑的字体安装问题，我们尽量只用宋体和微软雅黑中文字体

在 CSS 中设置字体名称，直接写中文是可以的。但是在文件编码（GB2312、UTF-8 等）不匹配时会产生乱码的错误。xp 系统不支持 类似微软雅黑的中文。_**尽量使用英文名称或Unicode编码**_
#### 添加字体

```
@font-face {	一般放在上面
    font-family:"文件名"
    src:url("文件位置"),
    url("文件位置");
}
```
#### 添加[字体图标](http://icomoon.io)
```
@font-face {
    font-family: 'icomoon';
    src:  url('fonts/icomoon.eot?7kkyc2');
    src:  url('fonts/icomoon.eot?7kkyc2#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?7kkyc2') format('truetype'),
    url('fonts/icomoon.woff?7kkyc2') format('woff'),
    url('fonts/icomoon.svg?7kkyc2#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
}
```
### text
- **color:** transparent;    _#000, rgb()256进制, 透明度安全色：20% 51,16进制33的倍数_
- **line-height:** 0.9em;    _指定最小距离，原始数字值指定了一个缩放因子，后代元素会继承这个缩放因子而不是计算值(0.9em)。行距比字号大7.8像素左右就可以了_
- **text-align:**     _centent / left / right**仅用作块元素**_
- **text-decoration:**    _line-through / overline / underline**css有条规则，要求关闭text-decoration，而使用边框建立链接下划线**_
- **text-indent:** 3em;
- **text-shadow:** _水平位置  垂直位置  模糊聚类  阴影颜色_
可以设定多组效果，每组参数以都和分隔；第一个阴影在最上面，以此类推。

##### 火焰文字效果
```
text-shadow: 0 0 5px #fff, 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
```
### background
- **background-color:**
- **background-inage:** uir();
- **background-repeat:** no-repeat;
- **background-attachment:** _fixed scroll_
- **background-position:**    _top rigth bottom left; 20% 20%; 20px 20px; 仅规定一个关键字，那么第二个的值是 center_

**(相对于左上角x，y轴)只给一个百分数意味着垂直定位于50%，(容器宽度-照片宽度)*百分比=像素值**

- **background-size:** 12px 20px;      _cover  contain  背景尺寸_

指定一个尺寸，另一个为width height自动

cover：等比缩放，超出部分剪裁；contain：等比缩放，不会超出

可以设置多个背景图片，用逗号隔开；前面的背景图会覆盖后面的背景图，避免背景色覆盖背景图，背景色定义在最后一组

### list
- **list-style-image:** url();
- **list-style-type:**    _disc circle square decimal leading zero upper lower roman alpha_
- **list-style-position:**    _inside outside_
### table
- **border-collapse:**    _separate  collspas_
- **border-spacing:** 1px 5px;    _水平  垂直_
- **empty-cells:**      _hide  show 是否绘制空白单元格_
- **caption-side:**
### boxes
```
box width = margin + border + padding + height
```

根据盒子布局的稳定性，建议 width > padding > margin

- **border-width:**
- **border-style:**     _none  hidden dotted dashed solid double_
- **border-color:**
- **border-radius:**     _**如果提欧共三个值，第一个用于上，第二个用于左-右，第三个用于下**_

_**可点击图像可能有边框，边框设为none**_

- **padding:**   _不可以是负数_
- **margin:** 0 auto;    在ie6中可能有双倍边距的bug
- **box-shadow:** h-shadow  v-shadow  blur sparead  colorinset;    _阴影水平  垂直模糊距离  尺寸  颜色  外部阴影改为内部阴影_外部阴影可以影响其他盒子

_**box-shadow 添加一个或多个阴影。该属性是由逗号分隔的阴影列表，每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略长度的值是 0。**_

- **box-sizing:** _content-box / border-box_
   - content-box：盒子大小为 width + padding + border；默认值，其让元素维持W3C的标准Box Mode
   - box-sizing：盒子大小为width；就是说 padding 和 border 是包含到width里面的
## 布局

_**浮动用来布局，定位用来做特效**_

		浮动布局、凝胶布局、绝对布局、表格显示布局
### 文本对齐
- **vertical-align:**     _垂直对齐  inherit  baseline  sub  super  top  middle  bottom  text-bottom_

应用于行内元素（行内，行内块）和表单元格

baseline在css2的文档中有这么一句解释，翻译过来也就是一个inline-block元素，如果里面没有inline元素，或者overflow不是visible，则该元素的基线就是其margin底边缘，否则，其基线就是元素里面最后一行内联元素的基线。

#### 盒子错位

盒子A  里面有 文本B、 浮动元素C

盒子的对齐方式为基线对齐，没有文本的盒子，基线为盒子内容区底部，有文本的盒子基线为最下方文本的基线，_**父盒子A里有文本B但是font-size: 0;（文本B不显示了）并且有浮动元素C，当浮动元素C有正常流父元素D时，基线为浮动元素C的父元素D的内容区底部，当浮动元素C没有父元素D时，基线为父盒子A的内容区顶部。**_当同时有浮动元素C的父元素D和文本时，以下面的基线为准（基线可超出父盒子A的内容区底部）。为需要对齐的盒子设置**vertical-align**，即可解决

### 浮动

让元素在某元素后面浮动，就把元素移动到那个元素下面

`.id { float：right / left / none }`    _多个同级元素在同一行显示需要都设置float_

_**float可以让元素默认转换为 inline-block（元素的大小取决于定义的大小或者内容的多少）**_

_**块元素不会考虑浮动元素的右边界，内联元素会避开 一般用于多个块元素在同行显示（意思是块元素会隐藏进浮动元素，内联元素会包围浮动元素，不会隐藏进去）**_

_**浮动会使元素脱离正常流，隐藏进正常流元素给浮动元素加个父元素设置 height 可以取消隐藏，因为父元素在正常流中有占位。**_

_**特别注意：浮动元素需要和正常流父元素搭配使用**_

解决包裹问题，设置外边距

所有浮动元素必须有一个宽度，不能设为auto（系统自定义）

```
top / bottom / left / right：200px;
```

`clear: left / right / both / none`元素某边不允许有浮动内容（只能指定左右两边)

### 定位

相对定位，绝对定位，固定定位，正常流；子绝父相

```
.id {
    position: relative / absolute / fixed /static;
    top:
    left:
    bottom:
    right: -12px;        负偏移量
}
```

`clip:rect(top,right,bottom,left);`     _剪裁：四个数值都是从上边边缘和左边边缘算起的_

文本回绕

**z-index: 1;**       _值越大，显示越高，可通过工具检测值（适用于定位元素）_

布局：流体（适应页面）、冻结（固定）、凝胶（内容固定，外边距随机）

### 溢出和隐藏
```
display: none/block/inline-block/table/table-cell/table-caption;
```

元素隐藏后不保留原有位置

_**解决inline-block元素因换行产生的空白：1.调整HTML换行；2.使用负外边距，但是需要调整 font-size；3.父元素设置font-size：0；4. 运用jQuery （Safari：letter-spacing： -4px。根据不同字体调整）**_

- **overflow:**     _溢出  visible / scroll / hidden / auto_
- **visibility:**    _元素可见性  visible / hidden / collapse   元素隐藏后保留原有位置_

####溢出显示省略号
1. `white-space: nowrap;`  文字一行显示不换行
2. `overfolow: hidden;`  溢出部分隐藏
3. `text-overflow: ellipsis;`  超出的部分以省略号显示

### 文本

基线：字母“X”的底部

- **vertical-align:**      _baseline / sub / super / top / middeen / bottom / text-bottom_  垂直对齐文本，应用于行内元素和表单元格
- **word-spacing:**     _单词间隔_
- **letter-spacing:**    _字母间隔_
- **text-teansform:**     _capitalize / uppercase / lowercase_  文本转换
- **white-space:**     _normal / nowrap / pre / pre-line / pre-wrap_   处理空白符
- **text-overfolw:**    _clip / ellipsis_  文本溢出**overflow需要设置为非visible**
- **direction:**    _rtl / ltr_
- **unicodr-bidi:**     _normal / embed / bidi-pverride_
- **cursor:** url()   _default, pointer, move, text;_
- **outline:** none;
- **resize:**     _none / both / vertical / horizontal_
```
<a href="#">shopcmd</a> |  
<a href="#">首页</a>
```

“|”后面换行会合成一个空格空格 前面也需要加个空格

### 过渡

**`transition`:要过渡的属性  花费时间  运动曲线  何时开始;**

_如果有多组属性变化，需要用逗号隔开_

|属性|描述|
|-|-|
|transition|简写属性，用于在一个属性中设置四个过渡属性。|
|transition-property|规定应用过渡的 CSS 属性的名称。|
|transition-duration|定义过渡效果花费的时间。默认是 0。|
|transition-timing-function|规定过渡效果的时间曲线。默认是 "ease"。|
|transition-delay|规定过渡效果何时开始。默认是 0。|

要所有的属性都变化过渡，写一个all

时间的单位西续写 s秒 ms毫秒

