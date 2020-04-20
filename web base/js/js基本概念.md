# JS基本概念

## 组成

ECMAScript，由ECMA-262定义，提供核心语言功能

语法、类型、语句、关键字、保留字、操作符、对象。

DOM文档对象类型，提供访问和操作网页内容的方法和接口

DOM视图、DOM事件、DOM样式、DOM遍历和范围、SVG、MathML、SMIL

BOM浏览器对象类型，提供与浏览器交互的方法和接口

浏览器窗口和框架

## 联入

```html
   <script type=”text/javascript”>     </script>
   <script type=”text/javascript” src=”ecma.js”> </script>
```

属性：async 异步脚本，立即下载，不影响其他加载，加载顺序不一定

```html
   <script type+”text/javascript” src=”url” async></script>
```

defer 延迟脚本，立即下载，延迟到页面加载和显示后执行，加载顺序不一定

```html
   <script type=”text/javascript” src=”url” defer></script>
```

### JS 引擎机制

js 是单线程。所有的人物需要排队处理，当前任务结束，才能执行下一个任务

1. 所有同步任务都会在主线程上形成一个 执行栈
2. 在主线程外有一个 task queue ，只要异步任务有了运行结果，就在 task queue 中放置一个事件，进入等待状态等待状态
3. 当前执行栈所有同步任务执行结束后，系统会读取 task queue，这些异步任务结束等待状态，进入执行栈，开始执行
4. 主线程不断重复第三步

### 注释

- //开头，用于一行代码上
- /*……*/多行，用于函数或一段代码上
- /**……*/，用于系统

一般放在页面内容后面，</body>之前，按先后执行

浏览器在不支持或不启用脚本时用<noscript></noscript>可以包含除<script>的所有HTML元素

### 兼容XHTML

```js
   <script type=”text/javascript”>
    //<![CDATA[
    …]
    //]]>
  </script>
```

## 语法

代码块用“{ }“包裹，代码用” ；“分割

\+ - * / 前后加空格

使用代码块 

```js
    if （test） {
    test = false;
    }
```

### 标识符

第一个字符是：字母，下划线 _，美元字符 $。 后面可以有数字 一般采取驼峰式

不能用：关键字、保留字、true、false、null

1. 关键字

   |            |      |         |          |           |         |        |
   | ---------- | ---- | ------- | -------- | --------- | ------- | ------ |
   | breaak     | case | catch   | continue | debugger* | default | delete |
   | do         | else | finally | for      | function  | if      | in     |
   | instanceof | new  | return  | switch   | this      | throw   | try    |
   | trpeof     | var  | void    | while    | with      |         |        |

2. 保留字

   |          |           |         |             |         |           |            |        |
   | -------- | --------- | ------- | ----------- | ------- | --------- | ---------- | ------ |
   | abstract | boolean   | byte    | char        | class   | const     | debugger   | double |
   | enum     | export    | extends | final       | float   | goto      | implements | import |
   | int      | interface | long    | native      | package | private   | protected  | public |
   | short    | static    | super   | synchroized | throws  | transient | volatile   |        |

3. 严格模式添加
   ![保留字](保留字1.png)
   ![保留字](保留字2.png)

### 严格模式

“use strict” 切换为严格模式

```js
    function doSomething() {
    “us strict”;
    //函数体
    }
```

### 语法错误

解析错误，代码块无法加载

```js
   var a=19;
    document.write(a);
```

逻辑错误，错误代码后的内容不显示，不影响其他代码块，ps:不影响其他script标签里的内容。其他script标签内容可以引用错误代码后的内容

## 输出消息的五种方法

- **alert()** 弹出对话框
- **confirm()** 弹出带取消对话框，用于if
- **prompt()** 接受用户信息
- **console.log()** 在网页中控台输出消息
- **document.write()** 在页面输出消息，可输入HTML标签

## 变量

变量是程序在内存中申请一块用来存放数据的空间。

类似于酒店的房间

### 局部变量和全局变量

```js
    var a = 1;
    function b(){
        a = 2;  // 有函数相当于赋值给函数a()
        console.log(a);
        //有函数，a不变；没函数，a变2
        function a(){};
    }
    b();//输出2
    console.log(a);//输出1
```

```js
var a = 1;

function test(a) {
    a=100;
    console.log(a);//打印结果为100
    return a;        // 会输出函数结果，如果没有这句话，函数结果为 undefined
}     
test(a);   // 会输出一遍函数a()
a=test(a); // 会输出一遍函数a(),并把函数结果赋值给变量 a
console.log(a);//打印结果为1
```



### var 操作符

在函数内定义的变量属于该函数中的局部变量。函数退出后就会被销毁

```js
    function test() {
        var message = "hi"; // 局部变量
    }
    Test ();
```

严格模式需要在函数外声明函数

将var去除即为全局变量，有意忽略 var 操作符，会因为变量不会马上有定义导致不必要的混乱。未声明在严格模式中会抛出 ReferenceErroror 错误

```js
    function test() {
        message = "hi"; // 全局变量
    }
    Test ();
```

定义多个变量，用逗号隔开

```js
    var message = “hi”,
        found = false,
        age = 29;
```

声明： `var mess`在 环境/上下文 中指定一个变量的名字。有var和变量名

初始化： `var mess=1,found=2,age=3;`给一个声明后尚未初始化的变量一个有意义的初始值,多个变量用“ ，“隔开.有var,变量名和值

赋值： `mess=1;mess=2;`销毁一个变量原来的值，并赋予一个新值，相当于改变了一个变量的状态。有变量名和值

注意：应注意区分初始化和赋值，在初始化之前不应该允许对变量进行赋值操作,变量初始化之后不建议改变数据类型

## 数据类型

### 操作符

*typeof()* 返回数据类型:typeof(...) / typeof ...

### 简单数据类型

原始值stack（栈）

- undefined  变量未初始化。接受的函数没有明确返回值

  ```js
  var x
  ```

- null  值为空。

  ```js
  var x=null
  ```

  如果变量用于保存对象，将变量初始化为null，明确的让该变量保存null值

- boolean  布尔值

  ```js
  var x=true   var x=false
  ```

  boolean()  转布尔值

  |           |                         |           |
  | --------- | ----------------------- | --------- |
  | boolean   | ture                    | false     |
  | string    | 非空字符串              | 空字符串  |
  | number    | 任何非0数值，包括无穷大 | 0和NaN    |
  | Object    | 任何对象                | null      |
  | undefined | N/A（不适用）           | undefined |

- number  数值

  ```js
  var x=2
  ```

  进制： 十进制，八进制（前面加0，严格模式下无效），十六进制（前面加0x）

  最大值和最小值

  ```js
      conlose.log(Number.MAN_VALUE);
      console.log(Number.MIN_VALUE);
  ```

  浮点数：最高精确小数点后17位，（注意：不要测试特定的浮点数值0.1+0.2==0.3）

  无穷大：Infinity

  非数值：NaN ，（不等于任何值），`IsNaN() `判断是不是非数值

  科学记数法：3.125e5 = 312500 0.000003=3e-6

  转换成数值

  1. Number()

     | undefined | null | boolean,ture and false | number | string                                                       | 对象                                                 |
     | --------- | ---- | ---------------------- | ------ | ------------------------------------------------------------ | ---------------------------------------------------- |
     | NaN       | 0    | 1 and 0                | 不变   | 纯数字转化为数值，16进制转化为10进制，（保留符号-+及小数，忽略前导0） 。包含其他字符，转化为NaN 。空字符串转化为0 | 调用valueOf()方法，如果结果是NaN，调用toString()方法 |

  2. ParseInt()

     处理整数字符串

     从第一个字符开始到第一个非数字字符结束，（认识符号，不认识小数，认识整数格式（各种进制）） 。空字符串和第一个字符非数字的字符串返回NaN

     可使用转换基数 var num = parseInt(“af”,16) 16为转换基数（多少进制）

  3. ParseFloat()

     和parseInt()类似，区别：1 识别有效浮点数字字符，2 只解析10进制

- string  字符串

  ```js
  var x="2";
  x=x+”4”         //输出”24”
  ```

  转义字符

  | 代码 | \ '    | \ "    | \ &  | \\   | \n     | \r     | \t     | \b     | \f     |
  | ---- | ------ | ------ | ---- | ---- | ------ | ------ | ------ | ------ | ------ |
  | 输出 | 单引号 | 双引号 | 和号 | 斜杠 | 换行符 | 回车符 | 制表符 | 退格符 | 换页符 |

  转成字符串

  1. .toString()

     后面可以写基数，不支持null和undefined

  2. String()

     几乎所有值都可以 ,有toString()方法，调用该方法, Null返回”null”,undefined返回”undefined”

### 复杂数据类型

引用值heap（堆）

**Object**

对象有时候被叫做关联数组，是属性和方法的集合，属性包含一个名和一个值，值为函数时，叫做方法。

*New*操作符

创建对象：` var o = new Object ();` new操作符后面跟创建的对象类型的名称，

另一种方法：`var o = {name:value,name2:value}`

Object有的对象和方法会存在更具体的对象里

- **constructor**：保存着用于创建当前对象的函数。对于前面的例子而言，构造函数（constructor）就是 Object()。
- **hasOwnProperty(propertyName)**：用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。其中，作为参数的属性名（propertyName）必须以字符串形式指定（例如：o.hasOwnProperty("name")）。
- **isPrototypeOf(object)**：用于检查传入的对象是否是传入对象的原型
- **propertyIsEnumerable(propertyName)**：用于检查给定的属性是否能够使用 for-in 语句来枚举。与 hasOwnProperty()方法一样，作为参数的属性名必须以字符 串形式指定。
- **toLocaleString()**：返回对象的字符串表示，该字符串与执行环境的地区对应。
- **toString()**：返回对象的字符串表示。
- **valueOf()**：返回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值 相同。

## 操作符

用于操作数据值：算术操作符、位操作符、关系操作符、相等操作符

### 一元操作符

只能操作一个值

#### 递增、递减

```js
++age;     age=age+1
age--;     age=age-1
```

**前置**

```js
Var age=34;
Var dse=2
Var cde = --age + dse      //等于35
Var esd = age + dse       //等于35
```

**后置**

```js
Var age=34;
Var dse=2
Var cde= age-- + dse      //等于36
Var esd = age + dse       //等于35
```

#### 加、减操作符

```js
var num = 25;
num = +num;      //仍然是25
var num = 25;
num = -num;      //值为-25
```

其他数据类型运用Number()转化为数值变量，如数字值或NaN

### 位操作符

数值以64位格式储存。位操作符将64位转换位32位操作，再将值转换为64位。NaN和Infinity会被转化成0，非数值用Number()函数转换

有符号整数：前31位表示数值，第32位为符号位，0为正，1为负

无符号整数：32位数值，只有正数。

正数用纯二进制格式，负数用二进制补码:1 求绝对值 2 求反码 3 加1

1. 按位非(NOT)

   由波浪线（~）表示，结果是返回数值的反码。一位操作数

   ```js
   var num1=25;
   var num2=~num1;         //输出-26
   ```

   本质：操作数的负值减1。

2. 按位与(AND)

   由和号字符表示(&)。两位操作数

   将两个数的每一位对齐，同为1时返回1，否则返回0。

3. 按位或(OR)

   由竖线符号表示（|）。两位操作数

   至少有一位是1，返回1，否则返回零

4. 按位异或(XOR)

   由一个插入符号表示（^）。两位操作数

   只有一位是1，返回1，两位都是1或0，返回0

5. 左移

   由两个小于号表示（<<），一位操作数

   所有位向左移动指定位数，不会影响符号位，空白用0填充。

6. 有符号右移

   由两个大于号表示（>>）,一位操作数

   所有位向右移动指定位数，不会影响符号位，空白用0填充。

7. 无符号右移

   由三个大于号表示（>>>）

   所有位向右移动指定位数，（包括符号位），空白用0填充。

### 布尔操作符

#### 逻辑非(NOT)

由一个叹号（!）表示，将操作数转换成布尔值，再对其求反。

1. 对象，返回false
2. 空字符串，返回true
3. 非空字符串，返回false
4. 数值0，返回true
5. 非0数值（包括Infinity），返回false
6. null，返回true
7. NaN，返回true
8. undefined，返回true

```js
alert(!false);      //true
```

同时使用两个逻辑非操作符，相当于模拟Boolean()转型函数行为。

```js
alert(!!false);     //false
```

#### 逻辑与(AND)

由两个和号(&&)表示，有两个操作数。

同为true,返回true；否则返回false。

有一个数不是布尔值，结果不一定返回布尔值

1. 第一个操作数是对象，返回第二个操作数
2. 第二个操作数是对象，只有在第一个操作数值为true时返回对象
3. 两个操作数都是对象，返回第二个操作数
4. 有一个null，返回null
5. 有一个NaN，返回NaN
6. 有一个undefined，返回undefined

属于**短路操作**，第一个操作数能决定结果，不会对第二个操作数求值（即使是错误也会忽略）

#### 逻辑或(OR)

由两个竖线符号表示（||），有两个操作数

同为false，返回false，否则返回true。

有一个数不是布尔值，结果不一定返回布尔值

1. 第一个操作数是对象，返回第一个操作数
2. 第一个操作数结果为false，返回第二个操作数
3. 两个都是对象，返回第一个操作数
4. 两个都是null，返回null
5. 两个都是NaN，返回NaN
6. 两个都是undefined，返回undefined

属于**短路操作**，第一个操作数能决定结果，不会对第二个操作数求值（即使是错误也会忽略）

### 乘性操作符

#### 乘法

由一个星号表示(*),计算两个数值的乘积。

1. 超过表示范围用Infinity或-Infinity
2. 有一个是NaN，结果是NaN
3. Infinity与0相乘，结果是NaN
4. Infinity与非0相乘，结果是Infinity
5. Infinity与Infinity相乘，结果是Infinity
6. 如果有操作数不是数值，则调用Number()

#### 除法

由一个斜线符号表示(/)

1. 超过表示范围用Infinity或-Infinity
2. 有一个是NaN，结果是NaN
3. Infinity被Infinity除，结果是NAN
4. 非0的有限数被0除，结果是Infinite
5. 0被0除，结果是NaN
6. Infinity被任何非0数值除，结果是Infinity
7. 如果有操作数不是数值，则调用Number()

#### 求模

（余数）由一个百分号表示(%)

1. 都是数值正常计算
2. 被除数是Infinity，除数是有限数值，结果是NaN
3. 被除数是有限大，除数是0，结果是NaN
4. Infinity被Infinity除，结果是NaN
5. 被除数是有限大，除数是Infinity，结果是被除数
6. 被除数是0，结果是0
7. 有一个不是数值，调用Number()

### 加性操作符

"(",")"括号可以改变算术顺序

#### 加法

1. 两个都是数值，有一个是NaN，结果是NaN
2. Infinity加Infinity，结果是Infinity
3. \- Infinity加 - Infinity，结果是 - infinity
4. INfinity加 - Infinity，结果是NaN
5. 0加0，结果是0
6. \- 0加 - 0，结果是 - 0
7. 0加 - 0，结果是0
8. 两个都是字符串，就拼接起来
9. 有一个操作数是字符串，将另一个操作数转换成字符串

#### 减法

1. 有一个是NaN，返回NaN
2. Infinity减Infinity，结果是NaN
3. \- Infinity减 - Infinity，结果是NaN
4. Infinity减 - Infinity，结果是Infinity
5. \- Infinity减Infinity，结果是 - Infinity
6. 0-0，结果是0
7. 0-(-0），结果是0
8. -0-(0)，结果是0
9. 有一个是其他类型，调用Number()函数
10. 有一个是对象，调用对象的valueOf()方法，如果没有，调用toString()方法

### 关系操作符

#### "<" ">" "<=" ">="。

1. 两个数都是字符串，比较两个字符串每个字符的字符编码值，位置越靠后越大
2. 只有一个是数值，将另一个转换为数值
3. 有一个是对象，先调用valueOf()方法，没有则调用toString()方法
4. 有一个是布尔值，先转化为数值

### 相等操作符

#### 相等（==）不相等（!=)

（比较前强制转型）

1. 有一个操作数是布尔值，比较前转换为数值
2. 有一个是字符串，另一个是数值，先将字符串转换为数值
3. 有一个是对象，另一个不是，先调用valueOf()

比较中

1. 不能将null和undefined转换为其他值
2. null和undefined是相等的
3. 有一个是NaN，相等返回false，不相等返回true
4. 两个都是对象，是同一个对象，返回true，否则返回false

#### 全等(===)和不全等(!==)

在比较之前不转换操作数

### 条件操作符（三元运算符）

```js
var max = (num1 > num2) ? num1 : num2;
```

如果 num1 大于 num2（关 系表达式返回 true），则将 num1 的值赋给 max；如果 num1 小于或等于 num2（关系表达式返回 false）， 则将 num2 的值赋给 max。

### 赋值操作符

由等于号表示(=)

复合赋值操作。使用它们不会带来任何性能的提升。

```js
var num = 10;
num = num + 10;
var num = 10;
num += 10; 
```

1. *=
2. /=
3. %=
4. +=
5. -=
6. <<=
7. \>>=
8. \>>>=

### 逗号操作符

用于声明多个变量

```js
var num1=1, num2=2, num3=3;
```

用于赋值，会返回表达式中的最后一项

```js
var num = (5, 1, 4, 8, 0); // num 的值为 0
```

## 语句

流控制语句通常使用一或多个关键字来完成给定任务

### if语句

```js
if (condition1) statement1 else if (condition2) statement2 else statement3
```

最常用的分支语句，条件可以是任意表达式，自动调用 Boolean()转换函数将这个表达式的结果转换为一个布尔值。结果是true，执行语句1，结果是false，执行语句2。

```js
if (i > 25) {
    alert("Greater than 25.");
} else if (i < 0) {
    alert("Less than 0.");
} else {
    alert("Between 0 and 25, inclusive.");
} 
```

### switch语句

是分支语句，也是在其他语言中普遍使用的一种流控制语句,一般判断值

```js
switch (expression) {
 case value: statement
 break;
 case value: statement
 break;
 case value: statement
 break;
 case value: statement
 break;
 default: statement
} 
```

### do-while语句

是一种后测试循环语句，即只有在循环体中的代码执行之后，才会测试出口条件

```js
do {
    statement
} while (expression); 
var i = 0;
do {
    i += 2;
} while (i < 10);
alert(i); 
```

后测试循环语句最常用于循环体中的代码至少要被执行一次的情形

### while语句

前测试循环语句，也就是说，在循环体内的代码被执行之前，就会对出口条件求值。

```js
while(expression) statement
var i = 0;
while (i < 10) {
    i += 2;
} 
```

### for语句

for 语句也是一种前测试循环语句，但它具有在执行循环之前初始化变量和定义循环后要执行的代码的能力，在 for 循环的变量初始化表达式中，也可以不使用 var 关键字。该变量的初始化可以在外部执行

```js
for (initialization; expression; post-loop-expression) statement
var count = 10;
for (var i = 0; i < count; i++){
    alert(i);
}
```

这个 for 循环语句与下面的 while 语句的功能相同。使用 while 循环做不到的，使用 for 循环同样也做不到。也就是说，for 循环只是把与循环有关 的代码集中在了一个位置。

```js
var count = 10;
var i = 0;
while (i < count){
    alert(i);
    i++;
}
```

ECMAScript 中不存在块级作用 域，因此在循环内部定义的变量也可以在外部访问到

```js
var count = 10;
for (var i = 0; i < count; i++){
    alert(i);
}
alert(i); //10 
```

### for-in语句

是一种精准的迭代语句，可以用来枚举对象的属性

```js
for (property in expression) statement
for (var propName in window) {
    document.write(propName);
} 
```

使用 for-in 循环来显示了 BOM 中 window 对象的所有属性。每次执行循环 时，都会将 window 对象中存在的一个属性名赋值给变量 propName。这个过程会一直持续到对象中的 所有属性都被枚举一遍为止。与 for 语句类似，这里控制语句中的 var 操作符也不是必需的。但是， 为了保证使用局部变量，我们推荐上面例子中的这种做法

在使用 for-in 循环之前，先检测确认该对象的值不是 null 或 undefined

### label语句

可以在代码中添加标签，以便将来使用

```js
label: statement
start: for (var i=0; i < count; i++) {
    alert(i);
} 
```

定义的 start 标签可以在将来由 break 或 continue 语句引用。加标签的语句一般都 要与 for 语句等循环语句配合使用

### break和continue语句

用于在循环中精确地控制代码的执行。break 语句会立即退出循环， 强制继续执行循环后面的语句。而 continue 语句虽然也是立即退出循环，但退出循环后会从循环的顶部继续执行

```js
var num = 0;
for (var i=1; i < 10; i++) {
    if (i % 5 == 0) {
        break;
    }
    num++;
}
alert(num); //4
```

for 循环会将变量 i 由 1 递增至 10。在循环体内，有一个 if 语句检查 i 的值是否 可以被 5 整除（使用求模操作符）。如果是，则执行 break 语句退出循环。另一方面，变量 num 从 0 开 始，用于记录循环执行的次数。在执行 break 语句之后，要执行的下一行代码是 alert()函数，结果 显示 4。也就是说，在变量 i 等于 5 时，循环总共执行了 4 次

### with语句

将代码的作用域设置到特定的对象中。

```js
with (expression) statement; 
```

主要是为了简化多次编写同一个对象的工作

```js
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href; 
```

使用 with 语句

```js
with(location){
 var qs = search.substring(1);
 var hostName = hostname;
 var url = href;
} 
```

## 函数

使用 function 关键字来声明，后跟一组参数以及函数体

```js
function functionName(arg0, arg1,...,argN) {
 statements
} 
```

示例：

```js
function sayHi(name, message) {
 alert("Hello " + name + "," + message);
}
        sayHi("Nicholas", "how are you today?");
```

### return

函数在任何时候都可以通过 return 语句后跟要返回的值来实现返回值

示例：

```js
function sum(num1, num2) {
 return num1 + num2;
}
        var result = sum(5, 10); 
```

未指定返回值的函数返回的是一个特殊的 undefined 值

### 参数

1. 在函数体内可以通过 arguments 对象来访问这个参数数组，从而获取传递给函数的每一个参数
2. 位于 return 语句之后结束大括号之前的任何代码 都永远不会执行
3. 第一个元素是 arguments[0]，第二个元素是 argumetns[1]
4. arguments 对象的长度是由传入的参数个数决定的，不是由定义函数时的 命名参数 的个数决定的
5. 没有传递值的命名参数将自动被赋予 undefined 值
6. ECMAScript 中的所有参数传递的都是值，不可能通过引用传递参数。
7. 重写 arguments 的值会导致语法错误

### 没有重载

没有函数签名的概念,在 ECMAScript 中定义了两个名字相同的函数，则该名字只属于后定义的函数