import instance from '@/utils/http'

export function getMessage(){
	const res =  instance({
		url:'/mangerGetGoodsrInstore'
	})
	return res
}
