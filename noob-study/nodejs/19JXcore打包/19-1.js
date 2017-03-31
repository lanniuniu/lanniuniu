/**
 * Created by 懒牛牛 on 2017/2/9.
 */
// Node.js 是一个开放源代码、跨平台的、用于服务器端和网络应用的运行环境。
// JXcore 是一个支持多线程的 Node.js 发行版本，
// 基本不需要对你现有的代码做任何改动就可以直接线程安全地以多线程运行

// JXcore 安装
// 下载 JXcore 安装包，并解压，在解压的的目录下提供了 jx 二进制文件命令，接下来我们主要使用这个命令。
// 步骤1、下载
// 下载 JXcore 安装包 https://github.com/jxcore/jxcore-release，你需要根据你自己的系统环境来下载安装包。
//     1、Window 平台下载：Download(Windows x64 (V8))。
// 2、Linux/OSX 安装命令：
// $ curl http://jxcore.com/xil.sh | bash
//     如果权限不足，可以使用以下命令：
// curl http://jxcore.com/xil.sh | sudo bash
//     以上步骤如果操作正确，使用以下命令，会输出版本号信息：
// $ jx --version
// v0.10.32
// 包代码
// 例如，我们的 Node.js 项目包含以下几个文件，其中 entry.js 是主文件：
// drwxr-xr-x  2 root root  4096 Nov 13 12:42 images
// -rwxr-xr-x  1 root root 30457 Mar  6 12:19 index.htm
// -rwxr-xr-x  1 root root 30452 Mar  1 12:54 entry.js
// drwxr-xr-x 23 root root  4096 Jan 15 03:48 node_modules
// drwxr-xr-x  2 root root  4096 Mar 21 06:10 scripts
// drwxr-xr-x  2 root root  4096 Feb 15 11:56 style
// 接下来我们使用 jx 命令打包以上项目，并指定 entry.js 为 Node.js 项目的主文件：
// $ jx package entry.js index
// 以上命令执行成功，会生成以下两个文件：
// index.jxp 这是一个中间件文件，包含了需要编译的完整项目信息。
// index.jx 这是一个完整包信息的二进制文件，可运行在客户端上。
// 载入 JX 文件
// 我们使用 jx 命令打包项目：
// $ node entry.js command_line_arguments
// 使用 JXcore 编译后，我们可以使用以下命令来执行生成的 jx 二进制文件：
// $ jx index.jx command_line_arguments















