import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import List from './views/List.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'init',
            component: Home
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/list',
            name: 'list',
            component: List
        },
        {
            path: '*',
            name: 'error',
            component: Error
        }
    ]
});