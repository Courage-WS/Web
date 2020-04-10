## less

安装 node

### 命名规范

- 以 @ 为前缀
- 不能包含特殊字符
- 不能以数字开头
- 区分大小写

### less 变量声明

`@变量名：值；`

### 插入变量

- 选择器，属性，图片资源，链接默认地址，使用的时候 @ 后面的变量名要用中括号
- 一个变量的值用另一个变量（在变量名前加 @），使用的时候正常单 @ 引用就好
- 一个变量的值用另一个变量名（变量名前不加 @），使用的时候要用双 @@ ，这样就可以引用另一个变量的值
- 多次定义一个变量，选择当前/父范围内的最后一个属性作为“最终”值
- 属性作为变量，选择当前/父范围内的最后一个属性作为“最终”值
-  `&`，解释为 父元素自身或父元素伪类。
  - `&`代表所有父选择器（而不仅仅是最接近的祖先）
  - 遇到（交集 | 伪类 | 伪元素）选择器需要使用
  - 可以前置父选择器：`.no-borderradius &`

#### 选择器

```less
// Variables
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

#### 属性

```less
@property: color;
.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}

// 编译为
.widget {
  color: #0ee;
  background-color: #999;
}
```

#### 值

```less
@primary:  green;
.section {
  @color: primary;

  .element {
    color: @@color;
  }
}

// 编译为
.section .element {
  color: green;
}
```



#### 资源定位符

```less
// Variables
@images: "../img";

// Usage
body {
  color: #444;
  background: url("@{images}/white-sand.png");
}
```

#### 导入默认地址

```less
// 变量
@themes: "../../src/themes";

// 使用
@import "@{themes}/tidal-wave.less";
```

#### 多次定义变量

```less
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}

// 编译为
.class {
  one: 1;
}
.class .brass {
  three: 3;
}
```

```less
.header {
  --color: white;
  color: var(--color);  // the color is black
  --color: black;
}
```

#### 属性作为变量

```less
.widget {
  color: #efefef;
  background-color: $color;
}

// 编译为
.widget {
  color: #efefef;
  background-color: #efefef;
}
```

#### 父选择器

```less
a {
  color: blue;
  &:hover {
    color: green;
  }
}
```

多父选择器

```less
.grand {
  .parent {
    & > & {
      color: red;
    }

    & & {
      color: green;
    }

    && {
      color: blue;
    }

    &, &ish {
      color: cyan;
    }
  }
}

//编译为
.grand .parent > .grand .parent {
  color: red;
}
.grand .parent .grand .parent {
  color: green;
}
.grand .parent.grand .parent {
  color: blue;
}
.grand .parent,
.grand .parentish {
  color: cyan;
}

```

组合父元素

```less
p, a, ul, li {
  border-top: 2px dotted #366;
  & + & {
    border-top: 0;
  }
}
// 可以扩展为 p a ul li 相互16种组合（p + p,p + a,p + ul,p + li,a + p,a + a,a + ul,a + li,ul + p,ul + a,ul + ul,ul + li,li + p,li + a,li + ul,li + li ）
```

### extend 伪类

`div:extend(p)`：

- 匹配`div`选择器，复制匹配到的选择器并新建并列选择器，把`p`替换为`div`选择器
- `div:extend(p all)`：匹配项加 `all` 关键字表示模糊匹配，所有包含`p`元素的选择器都可以
- 括号中的匹配项或者被匹配项不可以包含变量，否则extend将忽略它。但是可以将`:extend`附加到变量
- 一个`:extend`在一个`@media`声明将只匹配同一`media`中的选择器，嵌套在里面的`media`都不行。
- 写在`@media`外面的`:extend`可以匹配所有的`media`中的元素

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}

// 编译为
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```

```less
.a.b.test,
.test.c {
  color: orange;
}
.test {
  &:hover {
    color: green;
  }
}

.replacement:extend(.test all) {}

// 编译为
.a.b.test,
.test.c,
.a.b.replacement,
.replacement.c {
  color: orange;
}
.test:hover,
.replacement:hover {
  color: green;
}
```



```less
.a:extend(.b) {}

// 上面的块与下面的块执行相同的操作
.a {
  &:extend(.b);
}
```

```less
.c:extend(.d all) {
  // 扩展 ".d" 的所有方式： ".x.d" 或者 ".d.x"
}
```

```less
.e:extend(.f, .g) {
    // 扩展多个类用逗号分隔
}
```

```less
.e:extend(.f):extend(.g) {}
.e:extend(.f, .g) {}
// 这两个效果是一样的
```

```less
pre:hover :extend(div pre) {
    // 选择器和扩展之间允许有空格,效果是一样的
}
```

```less
.noQuote:extend([title=identifier]) {}
.singleQuote:extend([title='identifier']) {}
.doubleQuote:extend([title="identifier"]) {}
// 属性选择器中的引用类型无关紧要，这些都是等效的
```

### 混合

- Mixins将所有属性复制到选择器中
- 想创建一个混合，但又不想在您的CSS输出中出现，请在混合定义后面加上括号。

```less
.my-mixin {
  color: black;
}
.my-other-mixin() {
  background: white;
}
.class {
  .my-mixin();
  .my-other-mixin();
}

// 编译为
.my-mixin {
  color: black;
}
.class {
  color: black;
  background: white;
}
```

可以包含选择器

```less
.my-hover-mixin() {
  &:hover {
    border: 1px solid red;
  }
}
button {
  .my-hover-mixin();
}

// 编译为
button:hover {
  border: 1px solid red;
}
```

```less
// 结果是一样的
#outer > .inner();
#outer .inner();
#outer.inner();
```

#### when

关键字When,来实现有条件的执行，那么只有当保护条件返回true时，才使用它定义的mixins。命名空间保护的计算方式与mixin上的保护完全相同

> 比较运算符：>, >=, =, =<, <。参数之间也可以进行比较。
>
> 逻辑运算符：'and' ,','(相当于or),'not'。
>
> 类型校验函数：iscolor，isnumber，isstring，iskeyword，isurl。
>
> 是否包含单位函数：ispixel，ispercentage，isem，isunit。

```less
#namespace when (@mode = huge) {
  .mixin() { /* */ }
}

#namespace {
  .mixin() when (@mode = huge) { /* */ }
}

// 两种mixin的工作方式相同
```

#### default

`default()则可匹配所有条件`

假设函数对于所有嵌套的命名空间和mixin都具有相同的值。下面的mixin永远不会被评估，它的一个保护被保证是假的

```less
#sp_1 when (default()) {
  #sp_2 when (default()) {
    .mixin() when not(default()) { /* */ }
  }
}
```



#### important

`!important`关键字将它继承的所有属性标记为`!important`

```less
.foo (@bg: #f5f5f5, @color: #900) {
  background: @bg;
  color: @color;
}
.unimportant {
  .foo();
}
.important {
  .foo() !important;
}

// 编译为
.unimportant {
  background: #f5f5f5;
  color: #900;
}
.important {
  background: #f5f5f5 !important;
  color: #900 !important;
}
```

#### 传递参数

Mixins还可以接受参数，这些参数是在混合时传递给选择器块的变量。

```less
@radius: 5px;
.border-radius(@radius) {
  -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
          border-radius: @radius;
}
```

多参数用逗号或者分号分隔，建议用分号，

### 合并属性

该`merge`功能允许将多个属性中的值聚合到单个属性下的逗号或空格分隔的列表中。`merge`对于背景和变换等属性很有用。

为了避免任何无意的连接，`merge`需要明确的声明`+`或者`+_`标志。

#### 逗号

```less
.mixin() {
  box-shadow+: inset 0 0 10px #555;
}
.myclass {
  .mixin();
  box-shadow+: 0 0 20px black;
}

// 编译为
.myclass {
  box-shadow: inset 0 0 10px #555, 0 0 20px black;
}
```

#### 空格

```less
.mixin() {
  transform+_: scale(2);
}
.myclass {
  .mixin();
  transform+_: rotate(15deg);
}

// 编译为
.myclass {
  transform: scale(2) rotate(15deg);
}
```

### 

```less

```

