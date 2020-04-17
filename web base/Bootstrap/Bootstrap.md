# 响应式布局

### 响应式开发原理 

使用媒体查询针对不同宽度的设备进行布局和样式的设置，从而适配不同设备的目的。

### 布局容器

响应式需要一个父级做为布局容器，

在不同屏幕下，通过媒体查询来改变这个布局容器的大小，再改变里面子元素的排列方式和大小，从而实现不同屏幕下，看到不同的页面布局和样式变化。

## Bootstrap 框架

[中文网](http://www.bootcss.com/)  [官网](lhttp://getbootstrap.com/)  [推荐网站](http://bootstrap.css88.com/)

### 版本

3.x.x：目前使用最多,稳定,但是放弃了IE6-IE7。对 IE8 支持但是界面效果不好,偏向用于开发响应式布局、移动设备优先的WEB 项目。

4.x.x：最新版，目前还不是很流行

### HTML 骨架结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <!-- 使用 IE 浏览器最高版本的内核来渲染 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <!-- 上述3个meta标签*必须*放在最前面，任何其他内容都*必须*跟随其后！ -->
    <title>Bootstrap 101 Template</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shiv 和 Respond.js 解决 IE9 以下不识别 HTML5 新增标签和 CSS3 媒体查询 -->
    <!-- 警告：如果通过 file:// 查看文件，response.js 不工作 -->
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <h1>你好，世界！</h1>

    <!-- Query(用于引导的JavaScript插件) -->
    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
    <!-- 下面包括所有已编译的插件，或根据需要包括单个文件 -->
    <script src="js/bootstrap.min.js"></script>
  </body>
</html>
```

修改Bootstrap 原来的样式，注意权重问题

### bootstrap布局容器

Bootstrap 需要为页面内容和栅格系统包裹一个 .container 或者.container-fluid 容器

- .container （响应式布局的容器  固定宽度）

  | 尺寸                            | 布局容器宽度 | 类前缀   | 最大列宽 |
  | ------------------------------- | ------------ | -------- | -------- |
  | 超小屏幕（手机，<768px）        | 100%         | .col-xs- | auto     |
  | 小屏幕（平板，>=768px）         | 750px        | .col-sm- | ~62px    |
  | 中等屏幕（桌面显示器，>=992px） | 970px        | .col-md- | ~81px    |
  | 大屏 ( 大桌面显示器，>=1200px)  | 1170px       | .col-lg- | ~97px    |

- .container-fluid（流式布局容器 百分百宽度）

  - 占据全部视口（viewport）的容器。

### 栅格系统

通过一系列的类似 `.row` 和 `.col-xs-4` 这种预定义的类的组合来创建页面布局

- 按照不同屏幕划分为1~12 等份
- 每一列默认有左右15像素的 padding
- 行（row） 可以去除父容器作用15px的边距
- 列（column）大于 12，多余的“列（column）”会作为一个整体另起一行排列
- 列（column）小于12，会留有空白
- 可以同时为一列指定多个设备的类名，以便划分不同份数  例如 class="col-md-4 col-sm-6"

#### 基本使用

```html
<div class="col-sm-4">
    <div class="row">
         <div class="col-sm-6">小列</div>
         <div class="col-sm-6">小列</div>
    </div>
</div>
```

#### 列偏移

`.col-md-offset-*`：为当前元素增加左外边距，实现向右侧偏移。

```html
<!-- 列偏移 -->
<div class="row">
    <div class="col-lg-4">1</div>
    <div class="col-lg-4 col-lg-offset-4">2</div>
</div>
```

 #### 列排序

- `.col-md-push-*`
  - 推到右侧去
- `.col-md-pull-*`
  - 拉到左边来

```html
<!-- 列排序 -->
<div class="row">
    <div class="col-lg-4 col-lg-push-8">推到右侧去</div>
      <div class="col-lg-8 col-lg-pull-4">拉到左边来</div>
</div>
```

#### 响应式工具

针对不同设备展示或隐藏页面内容。

| 类名       | 超小屏 | 小屏 | 中屏 | 大屏 |
| ---------- | ------ | ---- | ---- | ---- |
| .hidden-xs | 隐藏   | 可见 | 可见 | 可见 |
| .hidden-sm | 可见   | 隐藏 | 可见 | 可见 |
| .hidden-md | 可见   | 可见 | 隐藏 | 可见 |
| .hidden-lg | 可见   | 可见 | 可见 | 隐藏 |

与之相反的是 `visible` 显示某内容