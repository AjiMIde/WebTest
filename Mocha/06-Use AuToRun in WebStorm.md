## Use Auto run in webstorm 
> 厌倦了在命令行重复地执行测试命令了吗？还记得 PHPStorm是怎么执行 Debug 命令的？WebStorm 一样可以，解决双手，自动化跑用例

**使用 WebStorm 执行 mocha run/debug**

* 打开 *Run > Edit configurations* (或在 WebStorm 右上角一排工具按钮上选择)
* 点击 *+ 号*，选择 mocha，新建一套 configuration
* 指定 *Name*, *Extra Mocha options*, *Test directory*, *Working directory*, 等重要参数
* *Node interpreter*, *Node options*, *Environment variables*, *Mocha package*, *User interface* 等其他参数看需求添加修改
* 保存 configuration，并运行即可
* **注意** 可使用 *Extra Mocha options* 等参数指定自动运行、超时时间、输入格式等，如使用 '-w' 则会建立监听服务器，监听文件变化并自动运行用例 
