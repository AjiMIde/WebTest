## 目录
* mochawesome
* mocha.opts
* shell 命令进阶
* Run in browser 在浏览器上运行 mocha

#### mochawesome
**介绍**
* 一个可定制、生成漂亮的、可读的测试报告的工具，为 mocha 而生
* 带图表、带百分比图、自带过滤、追踪等
* Github: https://github.com/adamgruber/mochawesome

**安装**
```shell
* npm install --save-dev mochawesome
* npm install -g mochawesome
```

**使用**
```shell
* maocha test.js -R mochawsome
```


#### Use mocha.opts
> 使用 mocha.opts 可快速运行一命令行参数：

**使用**
```shell
# 创建一个测试目录 test，并在目录下配置文件 mocha.opts，内容如下：
--reporter tap
--recursive
--growl
# 执行测试命令 mocha 即可
```

#### shell 命令进阶
**使用-t或--timeout参数防止超时操作**
```shell
* mocha -t 5000 timeout.test.js
```

**使用-s或--slow调整默认会高亮显示超过75毫秒的测试用例** 
```shell
* mocha -s 500
```


#### Run in browser
> mocha 不仅可以在命令行里运行，也可以在浏览器上跑

**使用 mocha init 在指定目录上生成初使化文件**
```shell
mocha init mocha-test
```

**以上命令会生成 html 文件及 css 文件，打开 html 文件，并添加：**
```html
<!--按之前的方法编写测试脚本，刷新页面测试即可-->
<script src="add.js"></script>  待测试的文件
<script src="http://chaijs.com/chai.js"></script> chai断言库
<script src="tests.js"></script> 测试脚本
```

