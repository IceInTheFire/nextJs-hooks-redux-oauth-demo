import {useState, useEffect} from 'react';
import Link from 'next/link';
const LoginBoxHeader = (props) => {
    const { isUser } = props;
    return <div className={'head'}>
        <Link href={{ pathname: '/regist', query: { type: 'user' }}} replace>
            <a className={isUser ? 'act' : ''}>
                <i className={'iconfont icon-yonghu'}></i>
                <span>用户注册</span>
            </a>
        </Link>
        <Link href={{ pathname: '/regist', query: { type: 'bis' }}} replace>
            <a className={isUser ? '' : 'act'}>
                <i className={'iconfont icon-shangjia'}></i>
                <span>商家注册</span>
            </a>
        </Link>
    </div>;
}

export default LoginBoxHeader;