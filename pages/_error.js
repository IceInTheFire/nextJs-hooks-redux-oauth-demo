import React from 'react';
import Link from 'next/link';
import { errorMsg, name } from 'config';
import 'less/error.less';
import MyHead from 'components/MyHead';

const meta = {
    title: '出错啦~~'
};
export default class Error extends React.Component {
    static getInitialProps({res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return {statusCode}
    }

    render() {
        const { statusCode } = this.props;
        return (
            <div className={'clearfix _error'}>
                <MyHead meta={meta}/>
                <div className={'wrong'}>
                    <div align="center">
                        <img src="/static/img/error.jpg" />
                    </div>
                    <div className={'wrong_mian clearfix'}>
                        <div className={'wrong_left'}>
                            Error
                        </div>
                        <div className={'wrong_right'}>
                            <div className={'wrong_top'}>
                                抱歉，程序出错了，请联系客服
                            </div>
                            <div className={'wrong_ttt'}>
                                <Link href={{ pathname: '/'}} replace>
                                    <em>不如试试：</em>
                                </Link>
                                <Link href={{ pathname: '/'}} replace>
                                    <a>到{name}首页</a>
                                </Link>
                                <span>|</span>
                                <Link href={{ pathname: '/'}} replace>
                                    <a>到首页专区</a>
                                </Link>
                                {/*<span>|</span>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )}
}