import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bulma/css/bulma.css'

// Import the Auth0 configuration 配置
import { domain, clientId } from '../auth_config.json'

// Import the plugin  插件
import { Auth0Plugin } from '@/auth'

// Install the authentication plugin 注入插件
Vue.use(Auth0Plugin, {
  domain,
  clientId,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl ? appState.targetUrl : window.location.pathname()
    )
  }

})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
