/*
渲染进程中探测
在渲染进程中， Online and offline 事件检测，是通过标准 HTML5 API 中 navigator.onLine 属性来实现的。

 脱机时 (从网络断开), navigator.onLine 属性将返回 false， 除此之外都返回true 。
 由于所有其他条件都返回 true, 因此必须警惕信息误报, 因为我们不能保证 true 的情况下 Electron 一定可以访问 internet。
  例如当软件运行在一个虚拟网络适配器始终为“connected”的虚拟机中时，Electron就不能访问Internet。
   因此，如果你想确保 Electron 真实的网络访问状态，你应该开发额外的检测方法。

主进程探测
使用主进程和渲染进程通信  将渲染进程获得的信息  传给主进程使用
 */
