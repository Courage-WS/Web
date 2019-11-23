# Sublime text 3

## 安装

百度出地址

注册码：
```
ZYNGA INC.
50 User License
EA7E-811825
927BA117 84C9300F 4A0CCBC4 34A56B44
985E4562 59F2B63B CCCFF92F 0E646B83
0FD6487D 1507AE29 9CC4F9F5 0A6F32E3
0343D868 C18E2CD5 27641A71 25475648
309705B3 E468DDC4 1B766A18 7952D28C
E627DDBA 960A2153 69A2D98A C87C0607
45DC6049 8C04EC29 D18DFA40 442C680B
1342224D 44D90641 33A3B9F2 46AADB8F
```

安装**Package Control**:

> 进入<https://packagecontrol.io/installation#st3>页面，选择“SUBLIME TEXT 3”选项卡，复制出里面的代码。快捷键 **Ctrl + `** 打开Sublime Text控制台，将之前复制的代码粘贴到控制台里，按下“**Eenter**”键，等待...
>
> ## 安装cnpm
>
> 在命令行输入：`npm install -g cnpm --registry=https://registry.npm.taobao.org`
>
> 等待安装完成即可。如果npm安装失败可以尝试使用 [cnpm](https://npm.taobao.org/)

## 插件

1. 安装“Install package”
2. 升级“upgrade packages”
3. 删除“remove package”

[配色方案](http://tmtheme-editor.herokuapp.com/)

[配置规则](http://echizen.github.io/tech/2016/08-07-code-space-standard)

ctrl + shift + p 选择 install package

1. [代码追踪](https://www.cnblogs.com/gushengyan/p/11064295.html)

2. 汉化：

   - **ChineseLocalizations**

3. 图标：

   - **A file icon**

4. 代码检查：

   - **SublimeLinter**
   - 运行cmd:通过 npm 安装jshint：**npm install -g jshint** 
     - **SublimeLinter-jshint**
   - 运行cmd:通过 npm 安装jshint：**npm install -g csslint**
     - **SublimeLinter-csslint**
   - 运行cmd:通过 npm 安装jshint：**npm install -g xg-htmlhint**
     - **SublimeLinter-contrib-htmlhint**

5. 代码格式化：快捷键：*ctrl +shift + h*

   - **HTML-CSS-JS Prettify**
     - 打开：菜单>tools>html/css/js prettify>set prettify preferences，设置一下nodejs的安装路径

6. JS格式化：快捷键：*ctrl +alt + f*

   - **JsFormat**

7. 代码补全：

   - **Emmet**

8. 代码提示、补全、跳转、查看（需[配置](https://www.cnblogs.com/hailong88/p/10522191.html)）

   - **SublimeCodeIntel**

9. css 颜色标识：

   - **color highlight**

10. css 拾色器：快捷键：*ctrl + shift + c*

   - **color highlighter**

11. css私有前缀补全：

    - **Autopfixer**

12. 比较文件差异：快捷键：开启 *CTRL+K*, *CTRL+D*；取消 *CTRL+K*, *CTRL+C*

    - **Diffy**

13. 转化为UTF-8：*ctrl + shift + alt + c*

    - **ConvertToUTF8**

14. **Markdown Preview**

15. **Git**

    - 打开菜单栏 **Preferences/Package Settings/Git/Settings - User**
      - 输入*"git_command": "git安装目录\\Git\\cmd\\git.exe"*

16. git修改提示（可能和**_css 拾色器：快捷键：*ctrl + shift + c*_**冲突)

    - **GitGutter**

      - 在[系统环境变量](https://jingyan.baidu.com/article/2a138328989a97074a134f06.html)里添加：

        D:\Program Files (x86)\Git\bin (安装git git位置下的bin目录)

        然后在sublime的preferences-PacKage Settings 下的GitGutter - Settings User添加

        {
            "git_binary": "D:\\Program Files (x86)\\Git\\bin\\git.exe"
        }

17. **less**

    - 安装 [node.js](https://nodejs.org/zh-cn/).打开命令行（ win+R  输入cmd 回车）

    - 安装cnpm。在命令行输入：`npm install -g cnpm --registry=https://registry.npm.taobao.org`

      npm安装失败可以尝试使用 [cnpm](https://npm.taobao.org/)

    - 全局安装 Less。命令行输入：npm install less -g。检查less环境是否配置完成：lessc -v

      npm安装失败，请尝试使用cnpm

    - 命令行输入：npm install less-plugin-clean-css -g。安装完成后重启sublime。

    - 安装sublime插件 Less2Css 

## 快捷键

- ctrl+f 查找内容

- ctrl+g 定位行

- ctrl+h 替换 

- ctrl+p 查找文件
- alt+shift+num 分栏显示(num=1，一栏，2两栏，3三栏，4四栏，5四宫格，8两横栏)
- 自动保存：设置里面找save_on_focus_lost，在user里改成true，但是只能失焦保存，没法儿像phpstorm那样停止输入就保存