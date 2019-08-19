import axios from 'axios';
import {showLoading, hideLoading} from "./loading";
import qs from 'qs';


import { message } from 'antd';
import 'antd/lib/message/style/index.less';
import { baseURL } from 'config';

axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 10000;
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
delete axios.defaults.headers.common.Authorization;
delete axios.defaults.headers.get.Authorization;
    // application/x-www-form-urlencoded
//添加请求拦截器
axios.interceptors.request.use(function(config){
    showLoading();
    if(config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
},function(error){
    //请求错误时做些事
    hideLoading();
    message.error('请求异常，请稍后重试！');
    return Promise.reject(error);
});

//添加一个响应拦截器
axios.interceptors.response.use(function (response) {
    hideLoading();
    return response;
}, function () {
    hideLoading();
    // 4.系统错误，比如500、404等
    message.error('系统异常，请稍后重试！');
    return Promise.reject({
        messageCode: 'sysError'
    });
});

export default axios;