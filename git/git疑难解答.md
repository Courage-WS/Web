#Git疑难解答
### Git输入时显示 >
<<<<<<< HEAD
  按Ctrl+D   表示你没有输入完成, 跟git无关, 是命令行的问题
### git pull时进入vim，提示让输入merge信息
  先按 i 切换到insert模式，就可以输入了，输入完之后先按esc，再输入:wq,回车就好了
#### 避免办法
  因为git pull的时候会自动进行merge操作
1. 方法一（推荐）：当你本地有commit的时候，建议使用git pull origin develop --rebase 进行拉取代码，就是拉取并rebase的意思，这样就不会出现您上面说的问题。
2. 方法二 ：当你本地修改还没有commit，那么你可以将本地的修改先暂存起来，git stash，然后git pull，这样不会有冲突，最后再git stash pop取出你的修改。
3. 方法三 ： 再或者你可以使用git fetch，fetch是不会自动merge的，fetch到一个本地的新的分支，然后rebase那个新分支。

  按Ctrl+D   表示你没有输入完成, 跟git无关, 是命令行的问题

### git pull时进入vim，提示让输入merge信息

  先按 i 切换到insert模式，就可以输入了，输入完之后先按esc，再输入:wq,回车就好了

#### 避免办法

  因为git pull的时候会自动进行merge操作

1. 方法一（推荐）：当你本地有commit的时候，建议使用git pull origin develop --rebase 进行拉取代码，就是拉取并rebase的意思，这样就不会出现您上面说的问题。
2. 方法二 ：当你本地修改还没有commit，那么你可以将本地的修改先暂存起来，git stash，然后git pull，这样不会有冲突，最后再git stash pop取出你的修改。
3. 方法三 ： 再或者你可以使用git fetch，fetch是不会自动merge的，fetch到一个本地的新的分支，然后rebase那个新分支。

### git push报错

**error: failed to push some refs to 'git@github.com:**

原因： 
GitHub远程仓库中的文件和本地仓库不一致。

解决方案：

 git pull --rebase origin master
 git push -u origin master

** To github.com:megamouthRen/Web.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'git@github.com:megamouthRen/Web.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.**

问题（Non-fast-forward）的出现原因在于：git仓库中已经有一部分代码，所以它不允许你直接把你的代码覆盖上去

解决方案：

强推：`git push -f` （简单粗暴）

先把git的东西fetch到你本地然后merge后再push：

``git fetch``

``git merge``

在使用的时候，git merge，又出现了以下的问题

``fatal: refusing to merge unrelated histories``

解决：`git pull origin master --allow-unrelated-histories `

从git add . 开始

### pull或push时出现:fatal: refusing to merge unrelated histories的解决办法

执行下面的命令:git pull origin master --allow-unrelated-histories。可以提交成功。

.再次push

### 多次commit时，git Your branch is ahead of 'origin/master' by X commits解决方法

git reset --hard origin/master        将当前hard的内容重置

# [git] git reset --hard后恢复操作

$ git reflog
b7057a9 HEAD@{0}: reset: moving to b7057a9
98abc5a HEAD@{1}: commit: more stuff added to foo
b7057a9 HEAD@{2}: commit (initial): initial commit



git reflog 后显示过多 点击“q“

所以，我们要找回我们第二commit，只需要做如下操作：
$ git reset –hard 98abc5a