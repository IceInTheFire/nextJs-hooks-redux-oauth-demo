import {useState, useEffect, useRef, useContext} from 'react';
import Link from 'next/link';
import Valid from 'components/Valid/index';
import {regExp} from "config";
import axios from "core/axios";
const { loginNameReg, userPasReg} = regExp;

import {showLoading, hideLoading} from "core/loading";
import { message } from 'antd';
import 'antd/lib/message/style/index.less';
import Router from 'next/router';
import { DataContext, LOGIN  } from "store/data";

const UserBox = (props) => {
    const nameRef = useRef();
    const pasRef = useRef();
    const { data, dispatch } = useContext(DataContext);
    const userLogin = async () => {
        let nameBool = nameRef.current.check();
        let pasBool = pasRef.current.check();

        if(!nameBool || !pasBool) {
            return;
        }
        let name = nameRef.current.getVal();
        let pas = pasRef.current.getVal();
        console.log(name);
        console.log(pas);

        await new Promise((resolve, reject)=>{
            showLoading();
            let set = setTimeout(() => {
                message.success('登录成功');
                hideLoading();
                resolve({
                    name,
                });
                dispatch({ type: LOGIN, token:'asdasdasd', user: { name }});
                Router.replace('/user');
            }, 5000);
        })

        // const res = await axios.post('/login', {name, pas});
        // dispatch({ type: LOGIN, token:'asdasdasd', user: { name }});
        // Router.replace('/user');
        // console.log(res);
    }

    return  <div id='userBox'>
        <Valid className={'login-input'}
               spanTitle={'登录名'}
               inputPlaceholder={'请输入手机号/用户名'} inputType={'text'} inputMaxLength='15'
               regExp={ loginNameReg } nullMsg={'请输入手机号/用户名'} errorMsg={'请正确输入手机号和用户名'}
               ref={nameRef}
               onEnter={userLogin}
        />
        <Valid className={'login-input mb20'}
               spanTitle={'登录密码'}
               inputPlaceholder={'请输入登录密码'} inputType={'password'} inputMaxLength='16'
               regExp={ userPasReg } nullMsg={'请输入登录密码'} errorMsg={'请正确输入密码'}
               ref={pasRef}
               onEnter={userLogin}
        />


        <div className={'login-sign clearfix'}>
            <Link href={{ pathname: '/Security/FindPassword', query: { type: 'user' } }}>
                <a className={'fr'}>忘记密码？</a>
            </Link>
        </div>
        <div className={'login-btn'}>
            <a onClick={userLogin}>登录</a>
        </div>
        <div className={'login-sign clearfix'}>
            {/*<span>第三方登录：</span>*/}
            {/*<a className={'wx-icon'} ></a>*/}
            <Link href={{ pathname: '/regist', query: { type: 'user' }}} replace>
                <a className={'red fr'} >注册</a>
            </Link>

            <span className={'fr mr5'}>没有账号？</span>
        </div>
    </div>
}


export default UserBox;