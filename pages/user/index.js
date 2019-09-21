import Layout from 'layout/BaseLayout';

import {withRouter} from 'next/router';

import { userAuthSync } from 'utils/auth';

import Link from 'next/link'

const Home = withRouter((props) => {
    return <Layout>
        {'我是用户'}
    </Layout>;

});


export default userAuthSync(Home);
