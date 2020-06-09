import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Cards from './views/Cards.vue'
import Simple from './views/Simple.vue'
import Stagger from './views/Stagger.vue'
import States from './views/States.vue'
import Timeline from './views/Timeline.vue'
import Master from './views/Master.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/drawer',
      name: 'drawer',
      component: () =>
        import(/* webpackChunkName: "list" */ './views/Drawer.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards
    },
    {
      path: '/simple',
      name: 'simple',
      component: Simple
    },
    {
      path: '/stagger',
      name: 'stagger',
      component: Stagger
    },
    {
      path: '/states',
      name: 'states',
      component: States
    },
    {
      path: '/timeline',
      name: 'timeline',
      component: Timeline
    },
    {
      path: '/master',
      name: 'master',
      component: Master
    }
  ]
})
