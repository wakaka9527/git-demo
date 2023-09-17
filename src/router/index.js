import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
import SonPage from '@/views/User/sonpage.vue'
import Child1 from '@/components/child1.vue'
import Child2 from '@/components/child2.vue'
import Child3 from '@/components/child3.vue'
import Child4 from '@/components/child4.vue'
const routes = [
  {path:'/',redirect:'/login'},
  {path:'/login',component:Login,
	children:[
		{path:'/login/child1',component:Child1},{path:'/login/child2',component:Child2},{path:'/login/child3',component:Child3},{path:'/login/child4',component:Child4}
	]
	},
  {path:'/home',component:Home,redirect:'/home/sonpage',
	children:[
		{path:'/home/sonpage',component:SonPage}
	]}
]

const router = createRouter({
history: createWebHashHistory(),
routes,
})
export default router
