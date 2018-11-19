import Vue from 'vue'
import Router from 'vue-router'
import Stickers from '@/components/Stickers'
import Sticker from '@/components/Sticker'
import 'bootstrap/dist/css/bootstrap.css'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Stickers',
      component: Stickers
    }, {
      path: '/:number',
      name: 'Sticker',
      component: Sticker
    }
  ]
})
