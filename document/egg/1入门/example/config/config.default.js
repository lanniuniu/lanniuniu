/**
 * Created by 懒牛牛 on 2017/11/9.
 */
//cookie安全自负攒
exports.keys = 'love';
//添加view配置
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};
exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
};
exports.middleware = [
    'robot'
];
// robot's configurations
exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
};
