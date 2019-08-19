import Link from 'next/link';

const Login = () => (
    <div className={'inlineBlock'}>
        <Link href={{ pathname: '/login', query: { type: 'user' }}} replace>
            <a className={'red'}>用户登录</a>
        </Link>
        <span className={'line'}></span>
        <Link href={{ pathname: '/login', query: { type: 'bis' }}} replace>
            <a>商家登录</a>
        </Link>
        <span className={'line'}></span>
        <Link href={{ pathname: '/regist', query: { type: 'user' }}} replace>
            <a className={'red'}>免费注册</a>
        </Link>
    </div>
);

export default Login;