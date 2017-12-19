## karma

#### Intro
* 模拟在真实的浏览器上测试。甚至不同的环境、os等
* 集成工作流，避免了在：编辑器--浏览器--页面间来回切换（效率低下）的流程。一个命令进行控制
* 集成到 IDE 里面
* 一个提升测试效率的工具，能在多个环境(桌面、手机、平板)下执行测试代码. <br>
* 基于 Node.js 的 JavaScript 测试执行过程管理工具
* karma 不是一个测试框架，也没有断言库，只是运行了一个 http 服务，并生成一个测试入口 HTML 文件 Test Runner
* 它需要和其他库一起结合使用： Jasmine/Mocha/QUnit 
* 默认与 Jasmine 一起使用

#### 安装
```shell
npm i karma --save-dev
npm i karma -g
npm i karma-cli -g
npm i karma-jasmine karma-chrome-launcher --save-dev
```

#### 
