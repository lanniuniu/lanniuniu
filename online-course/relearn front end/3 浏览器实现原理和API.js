/*
1、尽可能流式进行上一步输出 DNS、http、DOM、css计算、渲染合成、绘制到页面
2、http put delete head（只返回请求头） connect（用于https websocket）
301永久转移 302暂时转移 304 前提是本地有缓存 通过request告诉服务端 服务端通过时间或tag 发现没得更新 就返回304
 */
