/*
1、Node引入模块的步骤：路径分析、文件定位、编译执行
2、Node模块分类：核心模块、文件模块
    部分核心模块会直接加载进内存 加载速度最快
3、Node模块加载过程：
    优先从缓存加载
    路径分析：模块标识符分析（速度快慢区别） 文件定位：文件扩展名分析 js node json 后两个加扩展名速度更快
    模块编译：
        js __filename __dirname
        node（c/c++） process.dlopen()
        json(fs)
 */
