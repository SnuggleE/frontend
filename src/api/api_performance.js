/**
 * Created by ljk on 17/2/26.
 */
import axios from 'axios'
import qs from 'querystring'
import * as api_config from './api_config'
const TIME_OUT=10000;


const auth=function (data) {
  return axios.request({
    url:api_config.AUTH(),
    data:data,
    method:'POST',
    timeout:TIME_OUT,
    headers : {
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    transformRequest: [function (data) {
      return qs.stringify(data);
    }]
  })
}
const getuser=function () {
  return axios.request({
    url:api_config.GET_USER(),
    method:'GET'
  })
}


export {auth,getuser}
