# xst-frontend
校视通工程前端部分

**2016-02-27更新：**使用gulp+browser-sync进行实时开发

## 如何搭建环境
前端开发部分使用gulp+livereload+http-server的形式

### 依赖
* node 
* npm
* gulp
* livereload
* http-server
* livereload Chrome或Firefox插件

### node.js安装
该部分自行百度或谷歌，最后要实现能够使用`node`和`npm`即可
```
$ node -v
$ 5.0.0
$ npm -v
$ 3.3.6
```

### fork项目
这部分和之前所测试相同，fork到自己的仓库，然后**remote改为这个仓库**，`pull`和`push`到这个仓库来

### 安装依赖
```
$ npm install -g gulp http-server
$ npm install 
```
**Note:**若npm速度过慢，可以自行百度npm如何换源，使用国内源安装

### 实时更新

现在已经改为gulp配合browser-sync进行开发，我已经修改好了gulp.js，开发的时候只要执行gulp serve就OK了

