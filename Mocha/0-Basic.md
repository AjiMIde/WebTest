## mocha

#### 介绍
* 有名的多功能 js 测试框架，可以在 node/browser 上跑
* 支持异步测试(promise)
* 输出精确的报告
* 支持覆盖率测试
* 高亮显示
* 全局变量泄露检测
* 可选的正则检测
* 支持使用配置文件
* 支持使用任何断言库
* --
* 阮一峰：http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html
* 官网：http://mochajs.org/

#### 安装
```shell
* npm install -g mocha
* npm install mocha --save-dev
* npm install chai --save-dev
```

#### 普通命令行
```shell
* mocha a.test.js 
> 运行一个测试文件

* mocha a.test.js b.test.js c.test.js 
> 运行多个测试

* mocha
> 运行这个目录下的test

* mocha test/{a, b}.js
* mocha test/unit/*.js
> 使用通配符拥抱更多可能性

```

#### 命令行参数
```shell
* mocha --recursive
> 运行这个目录下的test下面，所有的测试文件（递归）

* mocha -h/--help
>..

* mocha --reporter/-R spec
> 指定格式输出，spec是默认格式，此外还有：doc/nyan/list/tap 等

* mocha --reporters
> 查看所有支持输出的格式

* mocha --growl/-G
> 将测试结果显示在桌面

* mocha --watch/-w
> 持续监听测试

* mocha --bail/-b
> 只要有一个用例没过，就停止测试
```

#### 特别的
* 在 test 的目录下面，可使用配置文件：mocha.opts，将命令行写在里面


