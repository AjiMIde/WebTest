## Use ES6
> 当测试脚本是 ES6 语法编写的话，使用 babel 转码来支持测试

```shell
# 安装 babel
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
