import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
Vue.use(Router);

window.router =  new Router({
    routes: [
        // {
        //     path: '/',
        //     name: 'Hello',
        //     component: Hello,
        // },
        {
            path: '/home',
            name: '主页',
            component: require('../views/home.vue'),
        },
    ]
});
export default window.router;
