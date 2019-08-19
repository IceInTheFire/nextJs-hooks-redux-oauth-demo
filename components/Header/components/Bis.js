import { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { DataContext, LOGOUT  } from 'store/data';

const Bis = () => {
    let { data, dispatch } = useContext(DataContext);

    const Logout = () =>{
        dispatch({type: LOGOUT});
        Router.replace('/');
    }

    return  <div className={'top_pm'}>
        <Link href={{ pathname: '/bis' }} replace>
            <a className={'top-nickname'} title={data.bis.name}>
                <span className={'sk_name'}>{data.bis.name}</span>
                <i className={'top-down'}></i>
            </a>
        </Link>
        <div className={'top-toggle'}>
            <a onClick={Logout}>
                <i className={'exit'}></i>
                退出
            </a>
        </div>
        <span className={'line'}></span>
    </div>
}



export default Bis;