import Link from 'next/link';
import { name } from 'config';
import './less/white.less'
const Index = () => (
    <div className={'footer'}>
        <div className={'footer_main'}>
            <div className={'fl'}>
                <div className={'footer_xy'}>
                    <a>联系我们</a><span>|</span>
                    <a>商务合作</a><span>|</span>
                    <a>用户协议</a><span>|</span>
                    <a>帮助中心</a>

                </div>
                <div className={'footer_fl'}>
                    <span>Copyright © 2018 baidu.com</span>皖ICP备12345678号-1 &nbsp;&nbsp; 皖公网安备 12345678901234号   &nbsp;&nbsp;{name}信息科技有限公司
                </div>
            </div>

            <div className={'fr ac'}>
                <p className={'footer-right-p'}>关注{name}公众号</p>
                <img className={'footer-right-img'} src="/static/img/yonghu_code.png"/>
            </div>
        </div>
    </div>
)

export default Index;
