## HTML浏览器
| 主流浏览器 | 内核 | JS引擎 |
|-----|----|----|
| IE | trident | chakra |
| Chrome | chromium / blink | V8 |
| Safari | webkit / webkit2 | JScore |
| Firefox | gecko |  |
| Opera | presto  / chromium / blink |  |
## 浏览器模式
- 标准模式
- 兼容模式
  - 向前兼容：应用发展超前系统
  - 向后兼容：系统发展超越应用
## 注意事项
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
## 常见元素
常见的块元素：
div、p、h1、ol、ul、dl、table、address、blockquote、form

常见的内联元素：
a、span、br、i、em、strong、label、q、var、cite、code

常见的内联块元素：
img、input

## 属性顺序
HTML属性应该按照特定的顺序出现，以保证易读性
1. class
2. id
3. name
4. data-*
5. src, for, type, value, max-length, max, min, pattern
6. placeholder, title, alt
7. aria-*, role
8. required, readonly, disbled

class是为高可复用组件设计的，应放在第一位，id更加具体而且尽量少用，所以放在第二位。