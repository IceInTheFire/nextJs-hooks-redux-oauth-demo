import Link from 'next/link';
import { name } from 'config/index';
import './less/headerTop.less'



import Box from './components/Box';
const Index = (props) => {
    return <div className={'header-top'}>
        <div className={'header-main clearfix'}>
            <div className={'header-left'}>
                <Box/>
                <a className={'qq'}>在线客服</a>
                <div className="xingxing">
                    <i className={'iconfont icon-xingxing'}></i>
                    收藏
                    <div className={'shou_toggle'}>
                        <span>Ctrl</span>
                        或
                        <span>Cmd+D</span>
                        收藏本站
                    </div>
                </div>
            </div>
            <div className={'header-right'}>
                <Link href={{ pathname: '/' }} replace>
                    <a className={'red'}>{ name }首页</a>
                </Link>
                <span className={'line'}></span>
                <a>金币抽奖</a>
                <span className={'line'}></span>
                <a>意见反馈</a>
                <span className={'line'}></span>
                <a>帮助中心</a>
            </div>
        </div>
    </div>
}


export default Index;
