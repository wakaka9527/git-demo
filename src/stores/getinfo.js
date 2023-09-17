import { defineStore } from 'pinia'
import {ref} from 'vue'
import {getMessage} from '@/apis/testapi'
export const useInfoStore = defineStore('getinfo', () => {
  let info = ref([])
  const getInfo =async ()=>{
		let res = await getMessage()
		info.value = res.data
	}
  return { info, getInfo }
})