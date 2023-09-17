<script setup>
	import Son from './components/Son.vue'
	import { useCounterStore } from './stores/counter.js'
	const text='232323'
	const counter = useCounterStore()
</script>

<template>
	<div>
		<RouterView></RouterView>
	</div>
</template>

<style scoped>

</style>
