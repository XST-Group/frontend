# xst-frontend
校视通工程前端部分

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

### 安装livereload插件
这个可能需要翻墙，自行安装

### 运行
进入项目目录，运行http-server,默认端口为8080，若冲突可以加参数`-p 8000(自行修改）`修改
```
$ http-client
```

然后使用gulp
```
$ gulp 
$ gulp watch
```
之后gulp就开始监听了

然后打开chrome或者firefox，点击安装好的livereload插件（图标从空心变成实心）
然后所有的步骤就运行完毕了，可以直接开始编码了，所有的修改不用刷新直接会出现在浏览器中了
