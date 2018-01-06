## Use mocha.opts
> 使用 mocha.opts 可快速运行一命令行参数：

```shell
# 创建一个测试目录 test，并在目录下配置文件 mocha.opts，内容如下：
--reporter tap
--recursive
--growl

# 执行测试命令 mocha 即可
