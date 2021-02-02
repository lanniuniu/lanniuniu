/*
应用程序放置范围
    linux和window: electron/resources/app/
    OS X: electron/Electron.app/Contents/Resources/app/

将你的应用程序打包成一个文件 app.asar
    linux和window: electron/resources/app.asar
    OS X: electron/Electron.app/Contents/Resources/app.asar

更换名称与下载二进制文件
    Windows：任意名字、使用像 rcedit 编辑它的 icon 和其他信息
    OS X: 任意名字、需要修改CFBundleDisplayName， CFBundleIdentifier 以及 CFBundleName 字段
    Linux：任意名字

通过重编译源代码来更换名称
修改 atom.gyp 文件并彻底重编译一次。

grunt打包脚本
手动检查 Electron 代码并重编译是很复杂晦涩的，因此有一个 Grunt 任务可以自动的处理这些内容 grunt-build-atom-shell.
这个任务会自动的处理编辑 .gyp 文件，从源代码进行编译，然后重编译你的应用程序的本地 Node 模块以匹配这个新的可执行文件的名称。
 */
