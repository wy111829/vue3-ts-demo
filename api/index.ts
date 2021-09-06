import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? `/` : '/api'
})
// 请求拦截器

// 相应拦截器
