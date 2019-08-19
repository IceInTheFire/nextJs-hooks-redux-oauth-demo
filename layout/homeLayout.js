// import loadable from '@loadable/component'

import Link from "next/link";

// import loadable from '@loadable/component'

// const Layout = loadable(() => import('./baseLayout'))
import Layout from './baseLayout';

const height = {
    height: '50px',
    lineHeight: '50px',
    padding: '0 10px'
};
const padding = {
    padding: '30px 100px',
};
const HomeLayout = (props) => (
    <Layout>
        <Link href="/normal">
            <a style={height}>url普通跳转</a>
        </Link>
        <Link href="/normal/about">
            <a style={height}>伪url跳转</a>
        </Link>
        <Link href="/normal/fetch">
            <a style={height}>动态获取数据</a>
        </Link>
        <div style={padding}>
            { props.children }
        </div>
    </Layout>
)

export default HomeLayout
