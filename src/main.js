import { createApp } from 'vue'
import { createPinia } from 'pinia'
/* import './style.css' */
import App from './App.vue'
import { getMessage } from '@/apis/testapi'
import router from './router/index'
import './assets/css/icon.css'
import '@/styles/element/common.scss'
/* getMessage().then((res)=>{
	console.log(res)
}) */

createApp(App).use(createPinia()).use(router).mount('#app')
