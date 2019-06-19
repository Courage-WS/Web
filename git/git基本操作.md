# 基本操作
git是世界上先进的分布式版本控制系统
## 安装和更新
### 安装
  在Windows上，从官网[下载安装程序](https://git-scm.com/downloads),默认安装后，在开始菜单里找到“Git Bash”，蹦出一个类似命令行窗口的东西，证明Git安装成功！
### 更新
  打开命令提示符CMD，输入“git -- version"查看当前git版本后，输入命令”git update-git-for-windows"进行升级，输入“y“并回车，开始下载并自动打开安装。
## 初步配置
  git自带一个Git config的工具来帮助设置控制git外观和行为的配置变量，这些变量储存在三个不同的位置：
1. /etc/gitconfig 文件: 包含系统上每一个用户及他们仓库的通用配置。 如果使用带有 --system 选项的 git config 时，它会从此文件读写配置变量。
2. ~/.gitconfig 或 ~/.config/git/config 文件：只针对当前用户。 可以传递 --global 选项让 Git 读写此文件。
3. 当前使用仓库的 Git 目录中的 config 文件（就是 .git/config）：针对该仓库。

每一个级别覆盖上一级的配置，所以.git/config的配置变量会覆盖/etc/gitconfig中的配置变量。
### 用户信息
```
git config --global user.name "John Doe"
git config --global user.email johndoe@example.com
```
  针对特定项目使用不同的用户名称与邮件地址时，可以在那个项目目录下运行没有 --global(全局变量) 选项的命令来配置。
  尽量让名字和邮址与注册GitHub时的一样
### 文本编辑器
```
git config --global core.editor "C:/Program Files/Sublime Text 2/sublime_text.exe' -n -w"
```
  重启git shell即可生效
### 显示颜色
```
git config --global color.ui true
```
### 忽略文件
  新建文件.gitignore，把需要忽略的文件编写进去。需要放进版本库
  检查规则：git check-ignore -v name,提交文件时，遇到被忽略的文件
## 本地仓库
![本地仓库](images/0.jpg)
### 基本
输入时显示`>`,可以用Ctrl+D返回
|代码|说明|
|-|-|
|git init|把当前目录变为仓库|
|mkdir name|创建文件夹|
|cd name|进入子文件夹|
### 查看
|代码|说明|
|-|-|
|pwd|查看当前位置|
|git reflog|查看命令记录|
|cat name|查看文件内容|
|ls|查看目录|
### 工作区
|代码|说明||
|-|-|-|
|git status|查看工作区和暂存区状态|
|git diff HEAD -- name|查看文件工作区和版本库最新版本的区别|
|git checkout -- name|取消工作区的修改并恢复|如果暂存区有 恢复为暂存区，否则恢复为分支当前状态|
|git add name|把文件添加到暂存|
|git add -f name|强制把文件添加到暂存|
|git add -A|提交所有变化,从工作区提交到暂存区|
|git add -u|提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)|
|git add . |提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件|
#### 储存工作区
|代码|说明|
|-|-|
|git stash|储存正在进行的工作区|
|git stash list|查看 stash|
|git stash apply|恢复 stash|
|git stash drop|删除 stash|
|git stash pop|恢复并删除 stash|
|git stash apply sthah@{0}|恢复指定的 stash|
### 暂存区
|代码|说明||
|-|-|
|git rese HEAD name|退回暂存区的修改|
|git rm name|删除暂存区文件|
|git commit -m"说明"|把文件提交到分支|-m后面是本次提交说明, 有中文会有未知错误，每次可以提交多次添加。从暂存区提交到分支|
|git log|查看提交日志|只能看最近三次|
|git log --pretty=oneline|查看提交日志的版本号|
|git rebase|把提交日志整理成直线|
### 分支版本
|代码|说明|
|-|-||
|git reset --hard HEAD^|返回前一个版本|上上个为HEAD^^, 上100个位HEAD~100，这里处理的事分支的版本。HEAD 表示当前版本|
|git reset --hard 102992|到某一特定版本|后面数字为版本号，前几位就可以了|
## 分支
  主分支：master；（先commit一些东西，否则master不存在）当前分支：HEAD
  一般工作思路：建立次分支，在次分支工作，与主分支合并（合并方法：次分支指向master），删除次分支
  master分支应该是非常稳定的，也就是仅用来发布新版本，平时不能在上面干活
  dev分支是不稳定的，到某个时候，比如1.0版本发布时，再把dev分支合并到master上，在master分支发布1.0版本；你和你的小伙伴们每个人都在dev分支上干活，每个人都有自己的分支，时不时地往dev分支上合并就可以了
|代码|说明|
|-|-||
|git branch name|创建分支|
|git branch|查看分支|
|git checkout name|切换分支|
|git checkout -b name|创建+切换分支|
|git merge name|合并某分支到当前分支|
|git merge --no-ff -m "说明“ name|合并强制禁用fast forward模式|这样，从分支历史就可以看出分支信息|
|git log --graph|查看分支合并图|
|git branch -d name|删除分支|
|git branch -D name|强行删除分支|
### 标签
|代码|说明|
|-|-||
|git tag tagname|新建标签|默认为HEAD，也可以指定一个commit id|
|git tag -a tagname -m "说明"|新建带有说明的标签|-a指定标签名，-m指定说明文字|
|git tag|查看所有标签|
|git tag -b tagname|删除本地标签|
## 远程仓库
### 链接
- 生成秘钥：用户主目录下须有.ssh目录，用cd~/.ssh检查是否有秘钥。
- 创建秘钥：ssh-keygen -t rsa -C "youremail@example.com"。id_rsa是私钥，不能泄露出去，id_rsa.pub是公钥
- 关联本地：登录github，打开“account settings”，“ssh keys”页面：点“add ssh key”，填上任义title，在key文本框里粘贴id_rsa.pub文件的内容
### 基本
|代码|说明|
|-|-||
|git remote add origin git@github,com:gitname/web.git|github库与本地仓库关联|
|git push -u origin master|本地分支推到远程库|origin为远程库默认名，master为本地分支名，首次推送加 -u，用来关联本地分支和远程分支，首次推送认证选yes|
|git clone git@github,com:gitname/web.git|克隆远程仓库|要从自己的账号克隆|
|git remote / 详细git remote -v|查看远程仓库|可以看到抓取（fetch）和推送（push）地址，没有权限看不到|
|git checkout -b branch-name origin/branch-name|创建远程仓库到本地|
|git branch --set-upstream branch-name origin/brabnch-name|建立本地分支和远程分支的关联|
|git pull|抓取远程的最新提交|远程仓库有变动后无法直接push，需要先pull|
###远程标签
|代码|说明|
|-|-||
|git push origin tagname|推送一个本地标签|
|git push origin --tags|推送所有本地标签|
`git push origin :refs/tags/tagname`
## github
- 克隆项目：在项目主页点击fork
- 给官方账户贡献代码：发起一个pullrequest
##配置别名
##搭建Git服务器