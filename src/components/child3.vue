<script setup>
import { onMounted, ref } from 'vue'


const state1 = ref('')
const inputStyle={
	width:"600px",
	border:"3px blue solid",
	margin:'20px'
}

const restaurants = ref([])
const querySearch = (queryString) => {
  const results = queryString
    ? restaurants.value.filter(createFilter(queryString))
    : restaurants.value
  return results
}
const createFilter = (queryString) => {
  return (restaurant) => {
    return (
      restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
    )
  }
}
const loadAll = () => {
  return [
    { value: 'vue'},
    { value: 'element'},
    { value: 'cooking'},
    { value: 'mint-ui' },
    { value: 'vuex'},
    { value: 'vue-router' },
    { value: 'babel' },
  ]
}

const handleSelect = (item) => {
  console.log(item)
}

onMounted(() => {
  restaurants.value = loadAll()
})
</script>

<template>
	<div class="outerBox">
		<el-autocomplete
		        v-model="state1"
		        :fetch-suggestions="querySearch"
		        clearable
		        class="autoInput"
		        placeholder="Please Input"
		        @select="handleSelect"
						:style="inputStyle"
		/>
	</div>
</template>

<style scoped>
	div.outerBox{
		width: 750px;
		height: 550px;
		background-color: aliceblue;
	}
</style>