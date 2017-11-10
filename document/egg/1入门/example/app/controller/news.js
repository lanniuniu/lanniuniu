/**
 * Created by 懒牛牛 on 2017/11/9.
 */

module.exports = app =>{
    class NewsController extends app.Controller{
        * list(){
            const dataList = {
                list: [
                    { id: 1, title: '百度', url: 'https://www.baidu.com' },
                    { id: 2, title: '谷歌', url: 'https://www.google.com' }
                ]
            };
            yield this.ctx.render('news/list.tpl', dataList);
        }
    }
    return NewsController;
};




