<script setup>
	import { useScroll } from '@vueuse/core'	
  import {useRouter} from 'vue-router'
	import {ref} from 'vue'
  const router=useRouter()
	const {y} = useScroll(window)
	const list = ref([1,2,3,4])
  import {RouterLink,onBeforeRouteUpdate} from 'vue-router'
	onBeforeRouteUpdate((to)=>{
		console.log(to);
	})
	function jump(){
		router.push("/home")
	}
</script>

<template>
	<div class="Box">
		登录页面<i class="iconfont icon-busy"></i>{{y}}
		<ul>
			<li>
				<router-link active-class="active" to="/login/child1">跳转</router-link>
			</li>
			<li>
				<router-link active-class="active" to="/login/child2">跳转</router-link>
			</li>
			<li>
				<router-link active-class="active" to="/login/child3">跳转</router-link>
			</li>
			<li>
				<router-link active-class="active" to="/login/child4">跳转</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
	<el-button type="primary">Primary</el-button>
</template>

<style scoped>
.active{
	color: green;
}
div.Box{
	color:red ;
	height: 2000px;
	width: 100px;
}	
</style>

