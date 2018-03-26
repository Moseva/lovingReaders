import Vue from 'vue'
import Router from 'vue-router'
import MainContainer from '@/components/MainContainer'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app',
            redirect: '/mainContainer'
        },
        {
            path: '/mainContainer',
            name: 'MainContainer',
            component: MainContainer
        }
    ]
})
