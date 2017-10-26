import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
// in development env not use Lazy Loading,because Lazy Loading too many pages will cause webpack hot update too slow.so only in production use Lazy Loading

/* layout */
import Layout from '../views/layout/Layout'

Vue.use(Router)

/**
 * icon : the icon show in the sidebar
 * hidden : if `hidden:true` will not show in the sidebar
 * redirect : if `redirect:noredirect` will not redirct in the levelbar
 * noDropdown : if `noDropdown:true` will not has submenu in the sidebar
 * meta : `{ role: ['admin'] }`  will control the page role
 **/
export const constantRouterMap = [
  {path: '/login', component: _import('login/index'), hidden: true},
  {path: '/404', component: _import('404'), hidden: true},
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{path: 'dashboard', component: _import('dashboard/index')}]
  },

  {
    path: '/example',
    component: Layout,
    redirect: 'noredirect',
    name: 'Example',
    icon: 'zujian',
    children: [
      {path: 'highlight', name: 'Highlight', icon: 'zonghe', component: _import('example/highlight')},
      {path: 'form', name: 'Form', icon: 'zonghe', component: _import('example/form')},
      {path: 'table', name: 'Table', icon: 'zonghe', component: _import('example/table')},
      {path: 'http', name: 'Http', icon: 'zonghe', component: _import('example/http')},
      {path: 'httpOpen', name: 'HttpOpen', icon: 'zonghe', component: _import('example/httpOpen')},
      {path: 'http2', name: 'Http', icon: 'zonghe', component: _import('example/table')}
    ]
  },

  {
    path: '/push',
    component: Layout,
    redirect: 'noredirect',
    name: 'Push',
    icon: 'zujian',
    children: [
      {path: 'push', name: 'Push', icon: 'zonghe', component: _import('push/push')},
      {path: 'http2', name: 'Http', icon: 'zonghe', component: _import('example/table')}
    ]
  },

  {
    path: '/form',
    component: Layout,
    redirect: 'noredirect',
    name: 'form',
    icon: 'zujian',
    children: [
      {path: 'index', name: 'Form', icon: 'zonghe', component: _import('page/form')},
      {path: 'form2', name: 'Form2', icon: 'zonghe', component: _import('page/form2')}
    ]
  },

  {
    path: '/data',
    component: Layout,
    redirect: 'noredirect',
    name: 'data',
    icon: 'zujian',
    children: [
      // { path: 'index', name: 'dataLs', icon: 'zonghe', component: _import('table2/index') },
      {path: 'inline', name: 'tableIn', icon: 'zonghe', component: _import('table/inlineEditTable')}
    ]
  },

  {
    path: '/table',
    component: Layout,
    redirect: '/table/index',
    icon: 'tubiao',
    noDropdown: true,
    children: [{path: 'index', name: 'Table', component: _import('table/index'), meta: {role: ['admin']}}]
  },

  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

