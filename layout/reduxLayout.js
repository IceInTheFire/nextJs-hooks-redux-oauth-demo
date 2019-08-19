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
    <Layout statusCode={props.statusCode}>
        <Link href="/redux">
            <a style={height}>计算器状态存储</a>
        </Link>
        <Link href="/redux/clock">
            <a style={height}>时钟状态存储</a>
        </Link>
        <div style={padding}>
            { props.children }
        </div>
    </Layout>
)

export default HomeLayout
