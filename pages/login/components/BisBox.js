import {useState, useEffect, useRef, useContext} from 'react';
import Link from 'next/link';
import Valid from 'components/Valid/index';
import {regExp} from "config";
const { loginNameReg, userPasReg} = regExp;
import axios from 'core/axios';
import {host} from "config";
import {hideLoading, showLoading} from "../../../core/loading";
import {message} from "antd/lib/index";
import { DataContext, LOGIN  } from "store/data";
import Router from "next/router";

const BisBox = (props) => {
    const nameRef = useRef();
    const pasRef = useRef();
    const { data, dispatch } = useContext(DataContext);
    const bisLogin = async (e) => {
        let nameBool = nameRef.current.check();
        let pasBool = pasRef.current.check();

        if(!nameBool || !pasBool) {
            return;
        }
        let name = nameRef.current.getVal();
        let pas = pasRef.current.getVal();
        // console.log(name);
        // console.log(pas);

        await new Promise((resolve, reject)=>{
            showLoading();
            let set = setTimeout(() => {
                message.success('登录成功');
                hideLoading();
                resolve({
                    name,
                });
                dispatch({ type: LOGIN, token:'asdasdasd', bis: { name }});
                Router.replace('/bis');
            }, 5000);
        })
        // const res = await axios.post('/login', {name, pas});
        // dispatch({ type: LOGIN, token:'asdasdasd', user: { name }});
        // Router.replace('/bis');
    }

    return <div id='bisBox'>
        <Valid className={'login-input'}
               spanTitle={'登录名'}
               inputPlaceholder={'请输入手机号/用户名'} inputType={'text'} inputMaxLength='15'
               regExp={ loginNameReg } nullMsg={'请输入手机号/用户名'} errorMsg={'请正确输入手机号和用户名'}
               ref={nameRef}
               onEnter={bisLogin}
        />
        <Valid className={'login-input mb20'}
               spanTitle={'登录密码'}
               inputPlaceholder={'请输入登录密码'} inputType={'password'} inputMaxLength='16'
               regExp={ userPasReg } nullMsg={'请输入登录密码'} errorMsg={'请正确输入密码'}
               ref={pasRef}
               onEnter={bisLogin}
        />
        <div className={'login-sign clearfix'}>
            <Link href={{ pathname: '/Security/FindPassword', query: { type: 'bis' } }}>
                <a className={'fr'}>忘记密码？</a>
            </Link>
        </div>
        <div className={'login-btn'}>
            <a onClick={bisLogin}>登录</a>
        </div>
        <div className={'login-sign clearfix'}>
            <Link href={{ pathname: '/regist', query: { type: 'bis' } }}>
                <a className={'red fr'}>注册</a>
            </Link>

            <span className={'fr mr5'}>没有账号？</span>
        </div>
    </div>
}

export default BisBox;