<script setup>
	import {ref,watch} from 'vue'
	import { useMouseInElement } from '@vueuse/core'
	const srcs = ["src/assets/images/image (9).png","src/assets/images/image (10).png","src/assets/images/image (11).png","src/assets/images/image (12).png"]
	const activeSub = ref(0)
	const target = ref(null)
	const { elementX, elementY, isOutside } = useMouseInElement(target)
	//鼠标进入右侧小图标
	const liEnter = function(i){
		console.log(i)
		activeSub.value = i
		/* target.src=srcs[i] */
	}
	//控制滑块位置
	let left = ref(0)
	let top = ref(0)
	watch([elementX,elementY],()=>{
		/* if(isOutside){return} */
		if(elementX.value>100&&elementX.value<300){
			left.value=elementX.value-100
		}
		if(elementY.value>100&&elementY.value<300){
			top.value=elementY.value-100
		}
		if(elementX.value>300){left.value=200}
		if(elementX.value<100){left.value=0}
		if(elementY.value>300){top.value=200}
		if(elementY.value<100){top.value=0}
	})
</script>

<template>
	<div class="outerBox">
		
		<div class="showBox" ref="target">
			<img src="src/assets/images/image (9).png" alt="" >
			<div class="layer" :style="{left:`${left}px`,top:`${top}px`}">
				
			</div>
		</div>
		<!-- 放大图BOX -->
		<div class="bigPicBox" v-if="!isOutside">
		</div>
		
		<ul class="leftUl">
			<li v-for="(item,i) in srcs" :key="i" @mouseenter="liEnter(i)" :class="{active:activeSub==i}">
				<img :src=item alt="">
			</li>
		</ul>
		{{left}},{{top}}{{isOutside}}
	</div>
</template>

<style scoped lang="less">
  div.outerBox{
		width: 1200px;
		height: 600px;
		background-color: aliceblue;
		display: flex;
	}
	div.showBox{
		position: relative;
		width: 400px;
		height: 400px;
		border: 5px black solid;
		img{
			width: 100%;
			height: 100%;
		}
		.layer{
			position: absolute;
			width: 200px;
			height: 200px;
			background-color: black;
			opacity: 0.5;
		}
	}
	//右侧放大BOX
	.bigPicBox{
		position: absolute;
		width: 400px;
		height: 400px;
		border: 5px black solid;
		left: 420px;
		z-index: 99;
		background-repeat: no-repeat;
		background-size: 800px 800px;
		
	}
	.leftUl{
		position: relative;
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 20px;
		li{
			list-style: none;
			width: 80px;
			height: 80px;
			img{
				width: 80px;
				height: 80px;
			}
		}
		li.active img{
			width: 80px;
			height: 80px;
			border: 1px red solid;
			box-sizing:border-box;
		}
	}
</style>