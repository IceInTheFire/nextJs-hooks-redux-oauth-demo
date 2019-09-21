import fetch from 'isomorphic-unfetch';
// import Header from '../layout/Header';
import Link from 'next/link';


// import loadable from '@loadable/component'

// const Layout = loadable(() => import('../../layout/BaseLayout'))
import Layout from 'layout/BaseLayout';
const Fetch = (props) => (
    <Layout>
        <ul>
            {props.poetrys.map(( poetry, index ) => {
                return (
                    <li key={ index }>
                        <Link as={`/normal/p/${poetry}`} href={`/normal/post?title=${poetry}`}>
                            <a>{poetry}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    </Layout>
)


Fetch.getInitialProps = async function () {
    const res = await fetch('http://www.yueqingfang.cn/api/poetry.js');
    // const res = await fetch('http://localhost:3001/api/poetry');
    const data = await res.json();
    return {
        poetrys: data.poetry
    }
}
export default Fetch;
