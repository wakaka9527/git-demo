<script  setup>
import { ref } from 'vue'
const count = ref(0)
const load = () => {
  count.value += 2
}
</script>

<template>
	<div class="outerBox">
		 <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto;">
		     <li v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</li>
		   </ul>
	</div>
</template>

<style scoped>
	div.outerBox{
		width: 350px;
		height: 350px;
		background-color: aliceblue;
	}
	.infinite-list {
	  height: 300px;
	  padding: 0;
	  margin: 0;
	  list-style: none;
	}
	.infinite-list .infinite-list-item {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  height: 50px;
	  background: tan;
	  margin: 10px;
	  color: var(--el-color-primary);
	}
	.infinite-list .infinite-list-item {
	  margin-top: 10px;
	}
</style>
