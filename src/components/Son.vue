<script setup>
	import { useScroll } from '@vueuse/core'
	const {y} = useScroll(window)
</script>

<template>
	<div class="sonOuterBox" :class="{'show':y>80}">
		子组件{{y}}
	</div>
</template>
<style>
	div.sonOuterBox{
		width: 100%;
		background-color: red;
		height: 80px;
		position: fixed;
		left: 0px;
		top: 0px;
		transform: translateY(-100%);
		opacity: 0;
	}
	div.show{
		transition: all 0.3s linear;
		opacity: 1;
		transform: translateY(0);
	}
</style>