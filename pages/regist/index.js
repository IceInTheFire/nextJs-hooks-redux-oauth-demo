import Layout from '../../layout/baseLayout';
import {useState, useEffect} from 'react';
import Link from 'next/link'

import 'less/pages/regist/index.less'
import {withRouter} from "next/router";
import RegistBoxHeader from './components/RegistBoxHeader';
import Box from './components/Box';

const Home = withRouter((props) => {
    let type = props.router.query.type;
    if (type != 'user' && type != 'bis') {
        type = 'user';
    }
    let isUser = type == 'user' ? true : false;
    return <Layout>
        <div className={'regist-nav'}>
            <div className={'main'}>
                <Link href={{ pathname: '/'}} >
                    <a className={'logo'}></a>
                </Link>
                <div className={'line'}></div>
                <div className={'sign'}>欢迎注册</div>
                <div className={'right'}>
                    已有账号，
                    <Link href={{ pathname: '/login', query: { type: isUser?'user':'bis' }}} replace>
                        <a>立即登录</a>
                    </Link>
                </div>
            </div>
        </div>
        <div className={'regist-main'}>
            <RegistBoxHeader isUser={isUser}/>
            <Box isUser={isUser}/>
        </div>
    </Layout>;

});

Home.getInitialProps = async function (context) {
    const {type} = context.query;    // 获取参数
    return {type};
}


export default Home;
