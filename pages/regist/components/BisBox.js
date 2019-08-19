import {useState, useEffect, useRef} from 'react';
import Link from 'next/link';
import { regExp, name } from 'config';

const { phoneReg, userNameReg, userPasReg, qqReg, initCodeReg } = regExp;
import Valid from 'components/Valid/index';
import { message } from 'antd';
import 'antd/lib/message/style/index.less';

const BisBox = (props) => {
    const firstRef = useRef();
    const rightRef = useRef();
    const secondRef = useRef();
    const successRef = useRef();


    const phoneRef = useRef();
    const codeRef = useRef();

    const bisNameRef = useRef();
    const bisPasRef = useRef();
    const bisQqRef = useRef();
    const bisWxRef = useRef();
    const bisInvitCodeRef = useRef();


    const [step, setStep] = useState(1);
    const [openEye, setOpenEye] = useState(false);
    // useEffect(() => {
    //     firstRef.current.style.display = "none";
    //     secondRef.current.style.display = "block";
    //     setStep( step+1 );
    // }, []);

    const onClickEye = () => {
        setOpenEye(!openEye);
    }

    const firstStepClick = (e) => {
        let phoneBool = phoneRef.current.check();
        let codeBool = codeRef.current.check();
        if (!phoneBool || !codeBool) {
            return;
        }
        let phone = phoneRef.current.getVal();
        let code = codeRef.current.getVal();
        console.log(phone);
        console.log(code);
        firstRef.current.style.display = "none";
        secondRef.current.style.display = "block";
        setStep(step + 1);
    };
    const secondSubmit = () => {
        let bisNameBool = bisNameRef.current.check();
        let bisPasBool = bisPasRef.current.check();
        let bisQqBool = bisQqRef.current.check();
        let bisWxBool = bisWxRef.current.check();
        let bisInvitCodeBool = bisInvitCodeRef.current.check();

        if (!bisNameBool || !bisPasBool || !bisQqBool || !bisWxBool || !bisInvitCodeBool) {
            return;
        }

        let bisName = bisNameRef.current.getVal();
        let bisPas = bisPasRef.current.getVal();
        let bisQq = bisQqRef.current.getVal();
        let bisWx = bisWxRef.current.getVal();
        let bisInvitCode = bisInvitCodeRef.current.getVal();

        message.warn('暂未开放注册功能，敬请期待');
        return;


        rightRef.current.style.display = "none";
        successRef.current.style.display = "block";
        setStep(step + 1);
    }
    return <div className={'content'}>
        <div ref={rightRef}>
            <div className={'left'}>
                <img src="/static/img/bis1.png"/>
            </div>
            <div className={'right'}>
                <div className={'step'}>
                    <p className={step >= 1 ? 'act' : ''}>
                        <span> 1 </span>
                        <span>验证手机号</span>
                    </p>
                    <div className={'step-arrow'}></div>
                    <p className={step >= 2 ? 'act' : ''}>
                        <span> 2 </span>
                        <span>填写账号信息</span>
                    </p>
                    <div className={'step-arrow'}></div>
                    <p className={step >= 3 ? 'act' : ''}>
                        <span> 3 </span>
                        <span>注册成功</span>
                    </p>
                </div>
                <div ref={firstRef}>
                    <Valid className={'regist-input'}
                           spanClass={'regist-input-86'} spanTitle={'+86'}
                           inputStyle={{'width': '321px'}} inputPlaceholder={'建议使用常用手机号'} inputType={'text'}
                           regExp={phoneReg} nullMsg={'请填写手机号码'} errorMsg={'请正确输入手机号码'}
                           ref={phoneRef}
                           onEnter={firstStepClick}
                    />

                    <Valid className={'regist-input'}
                           spanTitle={'手机验证码'}
                           inputStyle={{'width': '153px'}} inputPlaceholder={'输入验证码'} inputType={'text'}
                           nullMsg={'请填写手机验证码'}
                           ref={codeRef}
                           onEnter={firstStepClick}
                    >
                        <span className={'regist-input-btn'} onClick={()=>{message.warn('目前没有验证码，请随便输')}}>获取验证码</span>
                    </Valid>
                    <div className={'regist-btn'} onClick={firstStepClick}>下一步</div>
                </div>
                <div ref={secondRef} className={'hide'}>
                    <Valid className={'regist-input'}
                           spanTitle={'用户名'}
                           inputMaxLength="15" inputPlaceholder={'请设置用户名'} inputType={'text'}
                           regExp={userNameReg} nullMsg={'请填写用户名'} errorMsg={'3-15位，支持汉字、数字、字母、下划线组合，不能为纯数字！'}
                           ref={bisNameRef}
                           onEnter={secondSubmit}
                    />
                    <Valid className={'regist-input'}
                           spanTitle={'设置密码'}
                           inputMaxLength="16" inputPlaceholder={'请设置密码'} inputType={openEye ? 'text' : 'password'}
                           regExp={userPasReg} nullMsg={'请填写密码'} errorMsg={'请填写6到16位字符！'}
                           ref={bisPasRef}
                           onEnter={secondSubmit}
                    >
                        <div className={'iconfont ' + (openEye ? 'icon-zhengyan' : 'icon-biyan')}
                             onClick={onClickEye}></div>
                    </Valid>
                    <Valid className={'regist-input'}
                           spanTitle={'QQ'}
                           inputPlaceholder={'请输入QQ'} inputType={'text'}
                           regExp={qqReg} nullMsg={'请输入您的QQ'} errorMsg={'请正确输入QQ！'}
                           ref={bisQqRef}
                           onEnter={secondSubmit}
                    />
                    <Valid className={'regist-input'}
                           spanTitle={'微信'}
                           inputPlaceholder={'请输入微信号'} inputType={'text'}
                           nullMsg={'请输入微信号'}
                           ref={bisWxRef}
                           onEnter={secondSubmit}
                    >
                        <span className={'wx-look'}>查看示例
                            <img src="/static/img/weixinhao.png"/>
                        </span>
                    </Valid>
                    <Valid className={'regist-input'}
                           spanTitle={'邀请码'}
                           inputPlaceholder={'请输入邀请码'} inputType={'text'}
                           regExp={initCodeReg} nullMsg={'请输入邀请码'} errorMsg={'请正确输入邀请码！'}
                           ref={bisInvitCodeRef}
                           onEnter={secondSubmit}
                    />
                    <div className={'regist-btn'} onClick={secondSubmit}>提交</div>
                </div>
            </div>
        </div>

        <div className={'success hide'} ref={successRef}>
            <i className={'iconfont icon-tick'}></i>
            <p>恭喜您成功注册为{name}商家~</p>
        </div>
        <div className={'bis-sign'}>
            <div className={'bis-kuai'}>
                <img src="/static/img/bis2.png"/>
                <h3>旺旺账号验证</h3>
                <p>所有买家注册试客账号时需验号，保证每个账号安全，标签精准，权重高，验证性别/年龄/淘气值/购买记录/购买层级/标签。</p>
            </div>
            <div className={'bis-kuai'}>
                <img src="/static/img/bis3.png"/>
                <h3>用户操作行为可控</h3>
                <p>商家可在{name}后台看到用户的下单流程及浏览轨迹、搜索关键词、收藏、加购、货比多家、访问副宝贝、评价、晒图、晒视频、手淘问大家 等等。</p>
            </div>
            <div className={'bis-kuai'}>
                <img src="/static/img/bis4.png"/>
                <h3>关键词搜索流程核实</h3>
                <p>用户需要将指定关键词搜索的截图上传至后台供商家及系统审核，确保100%关键词被搜索过，增加关键词搜索权重，从而提升关键词排名。</p>
            </div>
            <div className={'bis-kuai'}>
                <img src="/static/img/bis5.png"/>
                <h3>指定手淘问大家</h3>
                <p>商家可以指定让用户去淘宝APP提问问题、回答问题、点赞答案、评论答案。买家通过分享可帮助店铺免费宣传，同时也能有效增强消费者购买欲。</p>
            </div>
            <div className={'bis-kuai'}>
                <img src="/static/img/bis6.png"/>
                <h3>安全不降权</h3>
                <p>用户均为{name}用户通过小区、地铁站、学校等地推邀请进来，均为平常淘宝主要购物人群。注册后，{name}会抓取买家帐号信息，筛选真实用户作为平台试客。</p>
            </div>
        </div>
    </div>
}

export default BisBox;