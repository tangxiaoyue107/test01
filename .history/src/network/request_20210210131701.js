import axios from "axios"
export function request(config){
  const instance = axios.create({
    baseURL:'http://47.97.155.31:8080',
    timeout:30000,
    headers:{
      "Content-Type":'application/json',
    }
  })
  return instance(config)
}