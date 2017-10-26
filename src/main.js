import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App'
import router from './router'
import store from './store'
import Highlight from './utils/highlight'
import '@/icons' // icon
import '@/permission' // 权限
import hljs from 'highlight.js';

Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre code');
  Array.prototype.forEach.call(blocks, hljs.highlightBlock);
});


Vue.use(ElementUI, {locale}, Highlight)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App}
})
