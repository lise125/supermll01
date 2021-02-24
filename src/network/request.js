import axios from 'axios'
//封装请求
export function request(config){
  const instance=axios.create({
    baseURL:'http://152.136.185.210:7878/api/m5',
    timeout:5000
  })

  //响应拦截
  instance.interceptors.response.use(res=>{

    return res.data
  },err=>{
    console.log(err);
  })
  return instance(config)
}