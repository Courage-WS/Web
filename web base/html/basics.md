## HTML浏览器

   <a href="http://validator.w3.org">w3c验证工具</a>

默认文件名,通常为index.html/default.html

| 主流浏览器 | 内核 | JS引擎 |
|-----|----|----|
| IE | trident | chakra |
| Chrome | chromium / blink | V8 |
| Safari | webkit / webkit2 | JScore |
| Firefox | gecko |  |
| Opera | presto  / chromium / blink |  |
### 浏览器模式
- 标准模式   浏览器根据标准规约来渲染页面
- 兼容模式（混杂模式）
  - 向前兼容：应用发展超前系统
  - 向后兼容：系统发展超越应用

#### 区别：

兼容模式：

1. 盒宽 = width
2. 图片：
   1. padding 会失效
   2. 一个块元素div中包含的内容只有图片时，图片底部没有空白
3. span等行内元素设置 width 和 height 会生效
4. 若父元素没有设置高度，子元素设置一个百分比的高度是无效的。
5. margin：0 auto设置水平居中在IE下会失效，可以用：`body{text-align:center};#content{text-align:left}`
6. table的字体属性不能继承上层的设置
7. white-space：pre会失效

h4.01基于SGML,引用DTD.   有三种声明:Strict ,  Transitional , Frameset

## 网页

### 声明

告知浏览器的解析器，用什么文档类型规范解析这个文档

未设置 DOCTYPE 会以兼容模式呈现

### 组成
1. 图片，
2. 文字，
3. 超链接，
4. 可能有视频，音频，flash

### meta

#### charset

UTF-8

#### http-equiv

- X-UA-Compatible               浏览器兼容模式，必须有值“ `IE=edge`”
- content-security-policy-report-only         只报告，不禁止，必须与`report-uri`配合使用
- content-security-policy    (内容安全策略) 允许的服务器来源和脚本终结点，以帮助防范跨站点脚本攻击。
- refresh                             重载到另一个页面的秒数，`content`属性包含一个正整数，后跟字符串' `;url=`'和有效URL
- default-style                     默认样式

#### name

- description                 简介
- keywords                    关键词
- author                        作者姓名
- application-name      （慎用） 定义了在网页中运行的应用程序的名称，浏览器可以使用它来识别应用程序
- generator                  包含生成页面的软件的标识符
- color-scheme            配色方案
  - normal
  - [ light | dark ] +
  - only light
- viewport                    窗口初始大小（仅作用于移动设备）
  - width                          设备宽度（device-width）
  - initial-scale                 窗口比例（`0.0`与10.0之间的正数）
  - maximum-scale          放大最大量
  - minimum-scale         （`0.0`与10.0之间的正数）
  - user-scalable              允许用户调整（yes / no）
  - viewport-fit
    - auto	  不影响初始布局视口，并且整个网页都是可见的。
    - contain      缩小以适合显示在显示屏上的最大矩形。
    - cover        放大以填充设备显示。强烈建议使用[安全区域插入](https://developer.mozilla.org/en-US/docs/Web/CSS/env)变量，以确保重要内容不会出现在显示屏之外。
- creator      （*）        文档创建机构的名称
- publisher   （*）        文档发布机构的名称

### 注意事项

class：以字母开头，同一属性两个及以上用空格隔开
id：以数字或字母开头，不能纯数字。都不能有空格
所有的logo都是可以点击的链接
每行代码尽量少于80字符
删除多余的空行和缩进
为逻辑块加空行
不建议使用tab

推荐：
```html
<body>

<h1>标题</h1>

<h2>标题</h2>
<p>学习的不仅是技术，更是梦想</p>

</body>

```
### 常见元素
常见的块元素8项：
div、p、h1、ol、ul、dl、table、address、blockquote、form

常见的内联元素：（width，height 全无效。margin 上下无效，padding 有效 但是上下不会撑开内容）
a、span、em、strong、label、q、var、cite、code

常见的内联块元素2项：
img、input

内联元素里面放内联元素，块元素里都可以放。p,dt和h1里面不可以放块级元素，a元素里可以放块元素

时间           <time datetime="2012-02-08">2/08/2012</time> 官方格式：2012-02-08 05:00
内容用官方格式就不需要datetime；时间或日期后加z表示UTC时间（UTC=GMT）

### H5 标签

多用于移动端

header、nav、article、section、aside、footer、figure、figcaption    在 ie9 中需要转换为块级元素

video：webm mpeg4 ogg

audio：wav  mpeg  ogg

### <a href="https://dev.w3.org/html5/html-author/charref">实体字符大全</a>

| 结果 | 描述               | 实体名称 | 实体编号 |
| :--- | :----------------- | :------- | :------: |
|      | non-breaking space | \&nbsp;  | \&#160;  |
| &    | ampersand          | \&amp;   |  \&#38;  |
| <    | less-than          | \&lt;    |  \&#60;  |
| >    | greater-than       | \&gt;    |  \&#62;  |

## src和href的区别

src和href之间存在区别，能混淆使用。src：，。

1. src：用于替换当前元素
   - 常用在script、img、iframe标签
   - src是source的缩写，指向外部资源的位置，表示的是对资源的**引用**。
   - 指向的内容将会嵌入到文档中当前标签所在的位置；在请求src资源时，会将其指向的资源下载，并应用到文档内。
   - 当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、变异、执行完毕。类似于将所指向资源嵌入当前标签内。
   - 这也是为什么 js脚本放在底部而不是头部。
2. href：用于当前页面和引用资源之间确立联系
   - 常用在a、link等标签
   - href是Hypertext Reference的缩写，指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的**链接关系**
   - 遇到 href 会并行下载资源并且不会停止对当前文档的处理。
   - 这也是为什么建议用link方式来加载CSS，而不是使用@import方式。
     link标签本身并不包含十几单元素意义来做内容，他需要rel明确的表示被链接的文档是做什么的。至于说为什么当初就觉得外部样式表用link href来链接，而不是用style src来载入，可能是先贤认为样式表更符合外部链接资源的特征，他更接近附属的资源，而不是内嵌的内容。

## url

uniform resource locator

相对路径：www/1.jpg      ../1.jpg       1.jpg
绝对路径：D:\www\1.jpg   http://www.1.jpg
file:///***
localhost：***
磁盘绝对路径用反斜线
URL统一资源定位符/web地址 绝对路径 文件URL有三个斜线
  HTTP超文本传输协议

URL 只能使用 ASCII 字符集，用 "%" 其后跟随两位的十六进制数来替换非 ASCII 字符。
http://www.w3school.com.cn:80/html/index.asp
acheme://host.domain:port/path/filename
acheme   -因特网服务类型（常见：http）
host     -域主机（http默认主机：www)
domain   -因特网域名
:port    -主机上的端口号（http默认：80）
path     -服务器上的路径
filename -文档/资源名称

主流acheme：
http      超文本传输协议（不加密）
https     安全超文本传输协议（加密）
ftp       文件传输协议（文件传输）
file      计算机上的文件



在使用webstorm过程中，使用某张图片的绝对路径始终显示不出来，各种百度无果，貌似根本就没有人出现过这个问题。。。
比如：<img src="file://D:\Pictures\holo.jpg" >   显示不出来，设置相对路径就可以显示了。但是绝对路径不管怎么样都显示不出来。

在webstorm中，它帮你虚拟了一个服务器（可以认为在此虚拟服务器外的文件相当于在另一个电脑里），因此你点击webstorm右上角的浏览器图标打开网页时，网页路径是localhost:****而你的图片也显示不出来；你可以摁住Shift再点击右上浏览器图标使用本地打开的方式，此时打开的网页路径是file:///****，这时候你的图片应该就能显示出来了。