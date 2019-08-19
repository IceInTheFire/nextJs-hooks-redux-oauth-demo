## demo介绍
```
这个demo是next.js的一个练习项目，使用的是react16.8以后的hooks函数写法。

用useReducer和useContext封装了一个redux方法，不像以前的class写法一样，还要引入一个react-redux库以及第三方异步操作redux的库。

这个demo为了验证redux是否可用，做了一个登录的oauth验证。（无论是商家登录还是用户登录，账号密码随便输）

同时也封装了请求方法，也定义了错误页面等一些基础的东西。

预览地址：http://212.64.78.88:1234

对于想学习next.js和hooks函数的人来说，这个例子，应该算一个很好的启蒙例子。

```
## 使用之前
```
    确保电脑上下载了node，并有npm和yarn
    部署项目之前，确保有pm2
```
## 使用
```
1、下载依赖
yarn
2、开发模式
yarn dev
3、测试发布模式
yarn prd-test
4、部署发布
yarn prd
```

## 效果预览
![image](https://github.com/IceInTheFire/nextJs-hooks-redux-oauth-demo/blob/master/zReadMe/1.jpg)
![image](https://github.com/IceInTheFire/nextJs-hooks-redux-oauth-demo/blob/master/zReadMe/2.jpg)
![image](https://github.com/IceInTheFire/nextJs-hooks-redux-oauth-demo/blob/master/zReadMe/3.jpg)