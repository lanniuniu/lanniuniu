/**
 * Created by 懒牛牛 on 2017/11/9.
 */

module.exports = app => {
    app.get('/', app.controller.home.index);
    app.get('/news', app.controller.news.list);
};

