import Vue from 'vue'
import VueResource from 'vue-resource'
import services from './services'
import interceptors from './interceptors'



Vue.use(VueResource)

const http = Vue.http

http.options.root = 'http://54.197.32.150:8080/'

http.interceptors.push(interceptors)

Object.keys(services).map(service => {
  services[service] = Vue.resource('',{}, services[service])
})

const setBearerJwt = jwt => {
  http.headers.common['Authorization'] = `Bearer ${jwt}`
}


export default services
export { http, setBearerJwt }