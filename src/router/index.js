import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Stickers from '@/components/Stickers'
import Sticker from '@/components/Sticker'
import CreateSticker from '@/components/CreateSticker'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/stickers',
      name: 'Stickers',
      component: Stickers
    }, {
      path: '/stickers/:number',
      name: 'Sticker',
      component: Sticker
    }, {
      path: '/stickers/create',
      name: 'CreateSticker',
      component: CreateSticker
    }
  ]
})
