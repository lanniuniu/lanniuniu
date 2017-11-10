/**
 * Created by 懒牛牛 on 2017/11/9.
 */

module.exports = app =>{
    class HomeController extends app.Controller{
        * index(){
            this.ctx.body = "呆宝宝好乖呀";
        };
    }
    return HomeController;
};

