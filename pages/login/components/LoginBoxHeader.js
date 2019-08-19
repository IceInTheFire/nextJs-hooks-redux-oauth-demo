import {useState, useEffect} from 'react';
import Link from 'next/link';
const LoginBoxHeader = (props) => {
    const { isUser } = props;
    return <div className={'login-box-header'}>
        <Link href={{ pathname: '/login', query: { type: 'user' }}} replace>
            <a className={isUser ? 'act' : ''}>用户登录</a>
        </Link>
        <Link href={{ pathname: '/login', query: { type: 'bis' }}} replace>
            <a className={isUser ? '' : 'act'}>商家登录</a>
        </Link>
    </div>;
}

export default LoginBoxHeader;