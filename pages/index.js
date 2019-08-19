// import loadable from '@loadable/component'

// const Layout = loadable(() => import('../layout/baseLayout'))
import Layout from 'layout/baseLayout';
import { name } from 'config';
import { useState, useEffect, useContext } from 'react';
// import Loading from 'components/loading'
// import { Spin } from 'antd';
import 'antd/lib/spin/style/index.less';
import { DataContext, UPDATE_ID  } from "store/data";

function Home() {
    const [ title, setTitle ] = useState( name + '首页');
    const { data, dispatch } = useContext(DataContext);
    return <Layout>
        <div onClick={() => {
            dispatch({ type: UPDATE_ID, id: 5});
        }}>
            {title}
            <div>{ data.id }</div>
            <div>{ data.user.name}</div>
        </div>
    </Layout>;
}

export default Home;
