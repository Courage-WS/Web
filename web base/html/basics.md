## HTML浏览器

   w3c验证工具http://validator.w3.org

默认文件名,通常为index.com/default.com

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
  - 向前兼容：应用发展超前系统 应用发展超前系统了
  - 向后兼容：系统发展超越应用 系统发展超越应用

#### 区别：

兼容模式：

- 盒模型 = width
- 一个块元素div中包含的内容只有图片时，图片底部没有空白
- span等行内元素设置 width 和 height 会生效
- 若父元素没有设置高度，子元素设置一个百分比的高度是无效的。
- margin：0 auto设置水平居中在IE下会失效，可以用：text-align
- table的自提属性不能继承上层的设置
- white-space：pre会失效

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

- content-security-policy   允许的服务器来源和脚本终结点，以帮助防范跨站点脚本攻击。
- refresh  重定向到另一个页面的秒数，`content`属性包含一个正整数，后跟字符串' `;url=`'和有效URL

#### name

- description                 简介
- keyword                     关键词
- author                        作者姓名
- application-name       定义了在网页中运行的应用程序的名称，浏览器可以使用它来识别应用程序
- generator                  包含生成页面的软件的标识符
- creator      （*）        文档创建者的名称
- publisher   （*）        文档发布者的名称
- viewport                    窗口初始大小（仅作用于移动设备）
  - width                        设备宽度（device-width）
  - initial-scale              窗口比例（`0.0`与10.0之间的正数）
  - maximum-scale       放大最大量
  - minimum-scale      （`0.0`与10.0之间的正数）
  - user-scalable           允许用户调整（yes / no）
  - viewport-fit
    - auto	  不影响初始布局视口，并且整个网页都是可见的。
    - contain      缩放以适合显示在显示屏上的最大矩形。
    - cover        缩放以填充设备显示。强烈建议使用[安全区域插入](https://developer.mozilla.org/en-US/docs/Web/CSS/env)变量，以确保重要内容不会出现在显示屏之外。

### 注意事项

class：以字母开头，同一属性两个及以上用空格隔开
id：以数字或字母开头，不能纯数字。都不能有空格
所有的logo都是可以点击的链接
每行代码尽量少于80字符
删除多余的空行和缩进
为逻辑块加空行
用两空格，不建议使用tab

推荐：
```
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
a、span、br、em、strong、label、q、var、cite、code

常见的内联块元素2项：
img、input

内联元素里面放内联元素，块元素里都可以放。p,dt和h1里面不可以放块级元素，a元素里可以放块元素

时间           <time datetime="2012-02-08">2/08/2012</time> 官方格式：2012-02-08 05:00
内容用官方格式就不需要datetime；时间或日期后加z表示UTC时间（UTC=GMT）

### <a href="https://dev.w3.org/html5/html-author/charref">

### H5 标签

多用于移动端

header、nav、article、section、aside、footer、figure、figcaption    在 ie9 中需要转换为块级元素

### 实体字符大全</a>

| 结果 | 描述               | 实体名称 | 实体编号 |
| :--- | :----------------- | :------- | :------: |
|      | non-breaking space | \&nbsp;  | \&#160;  |
| &    | ampersand          | \&amp;   |  \&#38;  |
| <    | less-than          | \&lt;    |  \&#60;  |
| >    | greater-than       | \&gt;    |  \&#62;  |

### 属性顺序
HTML属性应该按照特定的顺序出现，以保证易读性
1. class
2. id
3. name
4. data-*
5. src, for, type, value, max-length, max, min, pattern
6. placeholder, title, alt
7. aria-*, role
8. required, readonly, disbled

第一序列标签名称，第二序列标签资源，第三序列资源说明，第四序列标签状态

class是为高可复用组件设计的，应放在第一位，id更加具体而且尽量少用，所以放在第二位。