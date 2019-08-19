import Layout from 'layout/baseLayout';

import {withRouter} from 'next/router';

import Link from 'next/link'

const Home = withRouter((props) => {
    return <Layout>
        {'我是用户'}
    </Layout>;

});


export default Home;
