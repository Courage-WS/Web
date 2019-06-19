#Git疑难解答
### Git输入时显示 >
  按Ctrl+D
### git pull时提示让输入merge信息
  先按 i 切换到insert模式，就可以输入了，输入完之后先按esc，再输入:wq,回车就好了
#### 避免办法
  因为git pull的时候会自动进行merge操作
1. 方法一（推荐）：当你本地有commit的时候，建议使用git pull origin develop --rebase 进行拉取代码，就是拉取并rebase的意思，这样就不会出现您上面说的问题。
2. 方法二 ：当你本地修改还没有commit，那么你可以将本地的修改先暂存起来，git stash，然后git pull，这样不会有冲突，最后再git stash pop取出你的修改。
3. 方法三 ： 再或者你可以使用git fetch，fetch是不会自动merge的，fetch到一个本地的新的分支，然后rebase那个新分支。