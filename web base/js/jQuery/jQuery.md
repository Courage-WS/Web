本质是学习调用这些函数（方法）。提高开发效率。

优点：https://code.jquery.com/

- 轻量级。核心文件才几十kb，不会影响页面加载速度
- 跨浏览器兼容。基本兼容了现在主流的浏览器
- 链式编程、隐式迭代
- 对事件、样式、动画支持，大大简化了DOM操作
- 支持插件扩展开发。有着丰富的第三方的插件
  - 树形菜单、日期控件、轮播图等
- 免费、开源

各版本：[下载](https://code.jquery.com/)，[官网]( https://jquery.com/)

1. 1x ：兼容 IE 678 等低版本浏览器， 官网不再更新
2. 2x ：不兼容 IE 678 等低版本浏览器， 官网不再更新
3. 3x ：不兼容 IE 678 等低版本浏览器， 是官方主要更新维护的版本

### 对象

- 顶级对象

  - $ 是 jQuery 的别称，在代码中可以使用 jQuery 代替 $，但一般为了方便，通常都直接使用 $
  - $ 是jQuery 的顶级对象， 相当于原生JavaScript中的 window。把元素利用$包装成jQuery对象，就可以调用jQuery 的方法。

-  jQuery 对象

  -  jQuery 方法获取的元素就是 jQuery 对象。用原生 JS 获取来的对象就是 DOM 对象
  -  jQuery 对象本质是： 利用$对DOM 对象包装后产生的对象（**伪数组**形式存储）
  - 只有 jQuery 对象才能使用 jQuery 方法，DOM 对象则使用原生的 JavaScirpt 方法。

- 对象转换

  1.  DOM 对象转换为 jQuery 对象： `$(DOM对象)`

     - ```js
       $('div')    // 是个数组，可以隐式迭代
       ```

  2.  jQuery 对象转换为 DOM 对象（两种方式）

     - ```js
       $('div') [index]    // index 是索引号 
       ```

     - ```js
       $('div') .get(index)      // index 是索引号 
       ```

### 文档加载

- 等页面文档加载完在执行（推荐 1）

  1. ```js
     $(function () {
      ... // 此处是页面 DOM 加载完成的入口
     }) ; 
     ```

     - 等着 DOM 结构渲染完毕即可执行内部代码，相当于原生 js 中的 DOMContentLoaded。
     - 不同于原生 js 中的 load 事件是等页面文档、外部的 js 文件、css文件、图片加载完毕才执行内部代码。

  2. ```js
     $(document).ready(function(){
      ... // 此处是页面DOM加载完成的入口
     }); 
     ```

### 隐式迭代

遍历内部 DOM 元素（伪数组形式存储）的过程就叫做隐式迭代。

- 给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，
  方便我们调用

### 选择器

```js
$(“选择器”)      // 里面选择器直接写 CSS 选择器即可，但是要加引号 
```

- 基础选择器

  | 用法            | 名称 | 描述           |
  | --------------- | ---- | -------------- |
  | `$('#id')       | ID   | 获取指定ID元素 |
  | `$('*')`        | 全选 | 匹配所有元素   |
  | `$('.class')`   | 类   | 获取指定类元素 |
  | `$('div')`      | 标签 | 获取指定标签   |
  | `$('div,p,li')` | 并集 | 获取多个元素   |
  | `$('li.class')` | 交集 | 交集元素       |

- 层级选择器

  | 用法         | 名称 | 描述         |
  | ------------ | ---- | ------------ |
  | `$('ul>li')` | 子代 | 获取子级元素 |
  | `$('ul li')` | 后代 | 获取后代元素 |

- 筛选选择器

  | 语法         | 用法            | 描述                      |
  | ------------ | --------------- | ------------------------- |
  | `:first`     | `$('li:first')` | 获取第一个元素 li         |
  | `:last`      | `$('li:last')`  | 获取最后一个元素 li       |
  | `:eq(index)` | `$('li:eq(2)')` | 获取索引号为 2 的元素 li  |
  | `:odd`       | `$('li:odd')`   | 获取索引号为奇数的元素 li |
  | `:even`      | `$('li:even')`  | 获取索引号为偶数的元素 li |

- **筛选方法**（重点）

  | 语法                 | 用法                             | 描述                                        |
  | -------------------- | -------------------------------- | ------------------------------------------- |
  | `parent()`           | `$('li').parent()`               | 查找父级                                    |
  | `children(selector)` | `$('li').children('li')`         | 获取子级元素                                |
  | `find(selector)`     | `$('ul').find('li')`             | 获取后代元素                                |
  | `sibling(selector)`  | `$('.first').sibling('li')`      | 获取兄弟节点，不包括自己                    |
  | `nextAll([expr])`    | `$('.first').nextAll()`          | 获取之后的兄弟元素                          |
  | `prevtAll([expr])`   | `$('last').prevAll()`            | 获取之前的兄弟元素                          |
  | `hasClass(class)`    | `$('div').hasClass('protected')` | 查找当前元素是否含有特定的类，有就返回 true |
  | `eq(index)`          | `$('li').eq(2)`                  | 获取索引号为 2 的元素 li                    |

  - 重点记住：
    1. `parent()`
    2. ` children()` 
    3. `find()`
    4. ` siblings()`
    5. ` eq()`

- 排他思想

  ```js
  $(this).css(“color”,”red”);                // 当前元素设置样式
  $(this).siblings(). css(“color”,””);       // 其余的兄弟元素清除样式
  ```

- 链式编程

  ```js
  // 节省代码量，看起来更优雅
  $(this).css('color', 'red').sibling().css('color', ''); 
  ```

### 样式操作

- 操作 css
  1. 获取属性值

      - ```js
        $(this).css('color');
        ```

    2. 设置样式

       - ```js
         $(this).css('color','red');
         ```

    3. 设置多组样式

       - ```js
         // 对象内的属性可以不加引号，如果值是字符串需要加引号。复合属性采用驼峰命名法
         $(this).css({width:20, 'fontSize':'20px'});
         ```

- 操作类（不影响原先的类名）

  1. 添加类

     - ```js
       $('div').addClass('class');
       ```

  2. 移除类

     - ```js
       $('div').removeClass('class');
       ```

  3. 切换类

     - ```js
       $('div').toggleClass('class');
       ```

### 效果

- 显示隐藏

  1. 显示

     ```js
     // 适用于所有效果元素
     show([{options}])
     // 示例
     show({duration:1000})
     ```

     - `duration`  （常用）                    持续时间
     - `easing`      （常用）                 用于过渡的缓动函数
     - `queue`      （常用）                    是否将动画放置在效果队列，布尔值或字符串。默认值：`true`
       - 如果为false，则动画将立即开始
       - 1.7开始，queue选项还可以接受一个字符串，动画将添加到该字符串表示的队列中，必须打电话`.dequeue("queuename")`来启动它
     - `specialEasing`               一个对象，包含一个或多个由properties参数及其相应的缓动函数定义的CSS属性
     - `step`                             为每个动画元素的每个动画属性调用的函数。类型： [Function](http://api.jquery.com/Types/#Function)( [Number](http://api.jquery.com/Types/#Number) now, [Tween](http://api.jquery.com/Types/#Tween) tween )
       - 可以在设置属性之前修改Tween对象以更改属性的值
     - `progress`                       动画的每个步骤之后要调用的函数
       - 每个动画元素仅调用一次，无论动画属性的数量如何
     - `conplete`       （常用）                元素上的动画完成后调用的函数。
     - `start`                           元素上的动画开始时要调用的函数
     - `done`                              元素上的动画完成（解析其Promise对象）时要调用的函数
     - `fail`                             当元素上的动画未能完成（拒绝其Promise对象）时要调用的函数
     - `always`                          当元素上的动画完成或停止而没有完成时（其Promise对象已解析或拒绝）而调用的函数

  2. 隐藏

     ```js
     // 适用于所有效果元素
     hide([speed,[easing],[fn]])
     // 示例
     hide(1000)
     ```

     - 参数可以省略
     - speed ：动画时长的字符串(“slow”,“normal”, or “fast”)，或 Number 毫秒数值（默认 400）
     - easing：(Optional) 用于过渡的缓动函数。指定动画在动画中不同点处进行的速度，默认是“swing”，可用参数固定速度“linear”
     - fn : 回调函数，在动画完成时执行的函数，每个元素执行一次

  3. 切换

     ```js
     toggle([speed,[easing],[fn]])
     ```

     - ：一般不带参数，直接显示隐藏即可。

- 滑动

  1. 下滑

     ```js
     slideDown([speed,[easing],[fn]])
     ```

  2. 上滑

     ```js
     slideUp([speed,[easing],[fn]])
     ```

  3. 滑动切换

     ```js
     slideToggle([speed,[easing],[fn]])
     ```

- 淡入淡出

  1. 淡入（不透明度增加到指定透明度 100%，一般用来取消淡出效果）

     ```js
     fadeIn([speed,[easing],[fn]])
     ```

     - 可以取消 `display:none;`

  2. 淡出（不透明度降低）

     ```js
     fadeOUt([speed,[easing],[fn]])
     ```

     - 不透明度为 0 时，`display:none;`

  3. 淡入淡出切换

     ```js
     fadeToggle([speed,[easing],[fn]])
     ```

  4. 调整到指定透明度

     ```js
     fadeTo([speed],opacity,[easing],[fn])
     ```

     - speed、opacity 必须写	
     - opacity 透明度，取值 0~1 之间
     - 取消隐藏元素，并始终淡入100％的不透明度（所以淡入无效）

- 动画

  ```js
  animate(params,[speed],[easing],[fn])
  ```

  - params: 想要更改的样式属性，以对象形式传递，必须写。 属性名可以不用带引号， 如果是复合属性则需要采取驼峰命名法 borderLeft。其余参数都可以省略
  - speed：三种预定速度之一的字符串(“slow”,“normal”, or “fast”)或表示动画时长的毫秒数值(如：1000)。
  - easing：(Optional) 用来指定切换效果，默认是“swing”，可用参数“linear”
  - fn: 回调函数，在动画完成时执行的函数，每个元素执行一次。

### 属性操作

- 固有属性

  1. 获取

     ```js
     prop('属性')
     ```

  2. 设置

     ```js
     prop('属性', '属性值')
     ```

- 自定义属性

  1. 设置

     ```js
     attr(''属性'') // 类似原生 getAttribute()
     ```

  2. 获取

     ```js
     attr('属性', '值') // 类似原生 setAttribute()
     ```

     - 可以获取 H5 自定义属性

- 数据缓存

  1. 附加数据语法

     ```js
     data('name','value') // 向被选元素附加数据
     ```

  2. 获取数据语法

     ```js
     date('name') // 向被选元素获取数据 
     ```

     - 还可以读取 HTML5 自定义属性 data-index ，得到的是数字型

- 内容文本值

  1. 元素内容 html()（ 相当于原生inner HTML)

     ```js
     html() // 获取元素的内容
     
     html(''内容'') // 设置元素的内容
     ```

  2. 文本内容 text() (相当与原生 innerText)

     ```js
     text() // 获取元素的文本内容
     
     text(''文本内容'') // 设置元素的文本内容
     ```

  3.  表单的值 val()（ 相当于原生value)

     ```js
     val() // 获取表单的值
     
     val(''内容'') // 设置表单的值
     ```

- 元素操作

  1. 遍历元素

     jQuery 隐式迭代是对同一类元素做了同样的操作。 如果想要给同一类元素做不同操作，就需要用到遍历。

     ```js
     $("div").each(function (index, domEle) { xxx; }） 
     ```

     1.  index 是每个元素的索引号的形参; 
     2. demEle 是每个DOM元素对象的形参，不是jquery对象
     3. each() 方法遍历匹配的每一个元素。主要用DOM处理。 each 每一个
     4. 使用 jquery 方法，需要给这个 dom 元素转换为 jquery 对象 $(domEle)

     ```js
     $.each(object，function (index, element) { xxx; }） 
     ```

     1.  object 被遍历的对象
     2. index 是每个元素的索引号;
     3.  element 遍历对应索引号的内容
     4.  $.each()方法可用于遍历任何对象。主要用于数据处理，比如数组，对象

  2. 创建元素

     ```js
     $('<li></li>');      // 动态的创建了一个 <li> 
     ```

  3. 添加元素

     -  内部添加

       ```js
       element.append(''内容'')   // 把内容放入匹配元素内部最后面，类似原生 appendChild
       
       element.prepend(''内容'')   // 把内容放入匹配元素内部最前面
       ```

       - 生成之后，它们是父子关系

     - 外部添加

       ```js
       element.after(''内容'') // 把内容放入目标元素后面
       
       element.before(''内容'') // 把内容放入目标元素前面
       ```

       - 生成之后，他们是兄弟关系

  4. 删除元素

     1. ```js
        element.remove() // 删除匹配的元素（本身）
        ```

     2. ```js
        element.empty() // 删除匹配的元素集合中所有的子节点
        ```

     3. ```js
        element.html('''') // 清空匹配的元素内容
        ```

        - empt() 和 html('''') 作用等价，都可以删除元素里面的内容，只不过 html 还可以设置内容。

- 尺寸

  | 语法                                  | 用法                                  |
  | ------------------------------------- | ------------------------------------- |
  | `width() / height()`                  | 获取宽高 width / height               |
  | `innerWidth() / innerHight()`         | 获取宽高 包含 padding                 |
  | `outerWidth() / outerHight()`         | 获取宽高 包含 padding、border         |
  | `outerWidth(true) / outerWidth(true)` | 获取宽高 包含 padding、border、margin |

  - 参数为空，则是获取相应值，返回的是数字型
  - 参数为数字，则是修改相应值
  - 参数不必写单位

- 位置

  1. offset()   设置或获取元素偏移
     1. 设置或返回被选元素相对于文档的偏移坐标，跟父级没有关系
     2. offset().top 用于获取距离文档顶部的距离
     3. offset().left 用于获取距离文档左侧的距离
     4. 可以设置元素的偏移：offset({ top: 10, left: 30 });
  2. position()   获取元素偏移
     1. 返回被选元素相对于带有定位的父级偏移坐标，如果父级都没有定位，则以文档为准
     2. position().top 用于获取距离定位父级顶部的距离，
     3. position().left 用于获取距离定位父级左侧的距离
  3. `scrollTop()/scrollLeft() `  设置或获取元素被卷去的头部和左侧
     - 不跟参数是获取，参数为不带单位的数字则是设置被卷去的头部

### 事件

- 单个事件注册

  ```js
  element.事件(function(){}) 
  $(“div”).click(function(){ 事件处理程序 }) 
  ```

  - 其他事件和原生基本一致

- 事件处理

  1.  on() 

     - 在匹配元素上绑定一个或多个事件的事件处理函数，

       ```js
       element.on(events,[selector],fn) 
       // 或者
       element.on({events: fn}，{events: fn}) 
       ```

       -  events:一个或多个用空格分隔的事件类型，如"click"或"keydown" 
       -  selector: 元素的子元素选择器，过滤触发事件的所选元素的后代    （用来事件委派）
       -  fn:回调函数 即绑定在元素身上的侦听函数

     - 优势：

       1. 绑定多个事件

          ```js
          $(“div”).on(“mouseover mouseout”, function() {
           $(this).toggleClass(“current”);
           }); 
          
          // 如果事件处理程序相同
          $(“div”).on({
           mouseover: function(){},
          mouseout: function(){},
          click: function(){}
          }); 
          ```

       2. 用来事件委派

          ```js
          $('ul').on('click', 'li', function() {
           alert('hello world!');
          });
          ```

          - 把原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素

       3. 给动态生成的元素绑定事件（click 不行）

          ```js
          $(“div").on("click",”p”, function(){
           alert("俺可以给动态生成的元素绑定事件")
          }); 
          $("div").append($("<p>我是动态创建的p</p>"));
          ```

  2. one() 

     - 如果有的事件只想触发一次， 可以使用 one() 来绑定事件

  3. off()

     - 移除通过 on() 方法添加的事件处理程序

       ```js
       $("p").off() // 解绑p元素所有事件处理程序
       $("p").off( "click") // 解绑p元素上面的点击事件 空格分隔
       $("ul").off("click", "li"); // 解绑事件委托
       ```

  4. trigger() 

     - 有些事件希望自动触发, 比如轮播图自动播放功能跟点击右侧按钮一致。可以利用定时器自动触发右侧按钮点击事件，不必鼠标点击触发

       1. ```js
          $('element').on('click', function() {})
          // 自动触发
          element.click() // 第一种简写形式
          ```

       2. ```js
          $('element').on('click', function() {})
          // 自动触发
          element.trigger("click") // 第二种自动触发模式
          ```

       3. ```js
          $('element').on('click', function() {})
          // 自动触发
          element.triggerHandler(type) // 第三种自动触发模式
          ```

          - `triggerHandler`模式不会触发元素的默认行为，这是和前面两种的区别。

- 事件对象

  - 事件被触发，就会有事件对象的产生

    ```js
    element.on(events,[selector],function(event) {}) 
    ```

    1. 阻止默认行为

       ```js
       event.preventDefault(); 
       // 或者 
       return false 
       ```

    2. 阻止冒泡

       ```js
       event.stopPropagation(); 
       ```

### 对象拷贝

- *将两个或更多对象的内容合并到第一个对象中*

  ```js
  $.extend([deep], target, object1, [objectN]) 
  ```

  1. deep: 设为true 为深拷贝， 默认为false 浅拷贝
  2. target: 将接收新属性的对象，
  3. object1: 待拷贝到第一个对象的对象。
  4. objectN: 包含要合并的属性的其他对象。
  5. 如果对象的属性重复，后面的会覆盖前面的属性

### 多库共存

- 问题：

  - jQuery使用$作为标示符，随着jQuery的流行,其他 js 库也会用这$作为标识符， 这样一起使用会引起冲突。

- 需求：

  - 需要一个解决方案，让jQuery 和其他的js库不存在冲突，可以同时存在，这就叫做多库共存。

- 解决：

  1. 把里面的 $ 符号 统一改为 jQuery。 比如 jQuery(''div'')

  2. jQuery 变量规定新的名称`$.noConflict()`

     ```js	
     // 代替 $ 
     var xx = $.noConflict();
     // 或者
     var xx = jQuery.noConflict();
     ```

### 插件

- jQuery 插件常用的网站
  1. jQuery 插件库 http://www.jq22.com/
  2. jQuery 之家 http://www.htmleaf.com/ 
- jQuery 插件使用步骤：
  1. 引入相关文件。（jQuery 文件 和 插件文件）
  2. 复制相关html、css、js (调用插件)。

### 图片懒加载

- 当我们页面滑动到可视区域，再显示图片。（只加载可视区域的图片）
  - 使用jquery 插件库 EasyLazyload。 
  - 注意，此时的js引入文件和js调用必须写到 DOM元素（图片）最后面
  - 能帮助减轻服务器负载