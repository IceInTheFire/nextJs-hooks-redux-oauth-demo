import Layout from 'layout/BaseLayout';

import {withRouter} from 'next/router';

import { bisAuthSync } from 'utils/auth';

import Link from 'next/link'

const Home = withRouter((props) => {


    return <Layout>
        {'我是商家'}
    </Layout>;

});

Home.getInitialProps = async function (context) {
    const {type} = context.query;    // 获取参数
    return {type};
}


export default bisAuthSync(Home);
