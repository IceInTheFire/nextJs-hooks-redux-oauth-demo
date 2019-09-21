// import loadable from '@loadable/component'

// const Layout = loadable(() => import('../layout/BaseLayout'))
import Layout from 'layout/BaseLayout';

import 'less/pages/login/index.less'
import {withRouter} from 'next/router';

import LoginBoxHeader from './components/LoginBoxHeader';
import Box from './components/Box';
import Link from 'next/link'

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
                <div className={'sign'}>欢迎登录</div>
            </div>
        </div>
        <div className={`login-main ${isUser ? 'user-main' : 'bis-main'}`}>
            <div className={'login-content clearfix'}>
                <div className={'login-box'} id='einfo_form'>
                    <LoginBoxHeader isUser={isUser}/>
                    <Box isUser={isUser}/>
                </div>
            </div>
        </div>
    </Layout>;

});

Home.getInitialProps = async function (context) {
    const {type} = context.query;    // 获取参数
    return {type};
}


export default Home;
