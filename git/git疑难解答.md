#Git疑难解答
### Git输入时显示 >

  按Ctrl+D   表示你没有输入完成, 跟git无关, 是命令行的问题

### git pull时进入vim，提示让输入merge信息

  先按 i 切换到insert模式，就可以输入了，输入完之后先按esc，再输入:wq,回车就好了

#### 避免办法

  因为git pull的时候会自动进行merge操作

1. 方法一（推荐）：当你本地有commit的时候，建议使用git pull origin develop --rebase 进行拉取代码，就是拉取并rebase的意思，这样就不会出现您上面说的问题。
2. 方法二 ：当你本地修改还没有commit，那么你可以将本地的修改先暂存起来，git stash，然后git pull，这样不会有冲突，最后再git stash pop取出你的修改。
3. 方法三 ： 再或者你可以使用git fetch，fetch是不会自动merge的，fetch到一个本地的新的分支，然后rebase那个新分支。

### git push报错error: failed to push some refs to 'git@github.com:

原因： 
GitHub远程仓库中的文件和本地仓库不一致。

解决方案：

 git pull --rebase origin master
 git push -u origin master

