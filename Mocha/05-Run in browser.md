## Run in browser
> mocha 不仅可以在命令行里运行，也可以在浏览器上跑

```shell
# 使用 mocha init 在指定目录上生成初使化文件
mocha init mocha-test

# 以上命令会生成 html 文件及 css 文件，打开 html 文件，并添加：
<script src="add.js"></script>  待测试的文件
<script src="http://chaijs.com/chai.js"></script> chai断言库
<script src="tests.js"></script> 测试脚本
---按之前的方法编写测试脚本，刷新页面测试即可

# 使
npm install babel-core babel-preset-es2015 --save-dev

# 如运行失败，尝试全局安装
npm install babel-core babel-preset-es2015 -g

# 在项目目录新建一个 .bablerc 配置文件，并配置：
{
    "presets": [ "es2015" ]
}

# 运行（compilers 已被官方移除，请查看其他使用方法）
mocha --compilers js:babel-core/register

# Babel默认不会对Iterator、Generator、Promise、Map、Set等全局对象，以及一些全局对象的方法（比如Object.assign）转码。如果你想要对这些对象转码，就要安装babel-polyfill。
# 一般会提醒错误如下： Promise undefined variable 等
npm install babel-polyfill --save-dev

# 在测试脚本头部加入
import 'babel-polyfill'
```
