import {useState, useEffect, useRef} from 'react';
import Link from 'next/link';

import { regExp, name } from 'config';
const { phoneReg, userNameReg, userPasReg, qqReg, initCodeReg } = regExp;
import Valid from 'components/Valid/index';
import { message } from 'antd';
import 'antd/lib/message/style/index.less';

const UserBox = (props) => {
    const firstRef = useRef(null);
    const rightRef = useRef(null);
    const secondRef = useRef(null);
    const successRef = useRef(null);


    const phoneRef = useRef();
    const codeRef = useRef();

    const userNameRef = useRef();
    const userPasRef = useRef();
    const userQqRef = useRef();
    const userInvitCodeRef = useRef();



    const [ step, setStep ] = useState(1);
    const [ openEye, setOpenEye] = useState(false);


    const onClickEye = () => {
        setOpenEye(!openEye);
    }

    const firstStepClick = () => {
        let phoneBool = phoneRef.current.check();
        let codeBool = codeRef.current.check();
        if(!phoneBool || !codeBool) {
            return;
        }
        let phone = phoneRef.current.getVal();
        let code = codeRef.current.getVal();
        console.log(phone);
        console.log(code);
        firstRef.current.style.display = "none";
        secondRef.current.style.display = "block";
        setStep( step+1 );
    };

    // useEffect(()=>{
    //     firstRef.current.style.display = "none";
    //     secondRef.current.style.display = "block";
    //     setStep( step+1 );
    // } , []);    //空数组就是只执行一次

    const secondSubmit = () => {
        let userNameBool = userNameRef.current.check();
        let userPasBool = userPasRef.current.check();
        let userQqBool = userQqRef.current.check();
        let userInvitCodeBool = userInvitCodeRef.current.check();

        if(!userNameBool || !userPasBool || !userQqBool || !userInvitCodeBool) {
            return;
        }

        let userName = userNameRef.current.getVal();
        let userPas = userPasRef.current.getVal();
        let userQq = userQqRef.current.getVal();
        let userInvitCode = userInvitCodeRef.current.getVal();


        message.warn('暂未开放注册功能，敬请期待');
        return;
        rightRef.current.style.display = "none";
        successRef.current.style.display = "block";
        setStep( step+1 );
    }


    return <div className={'content'}>
        <div ref={rightRef}>
            <div className={'left'} >
                <img src="/static/img/regist-user.png"/>
            </div>
            <div className={'right'}>
                <div className={'step'}>
                    <p className={'act'}>
                        <span> 1 </span>
                        <span>验证手机号</span>
                    </p>
                    <div className={'step-arrow'}></div>
                    <p className={step>=2?'act':''}>
                        <span> 2 </span>
                        <span>填写账号信息</span>
                    </p>
                    <div className={'step-arrow'}></div>
                    <p className={step>=3?'act':''}>
                        <span> 3 </span>
                        <span>注册成功</span>
                    </p>
                </div>
                <div ref={ firstRef }>
                    <Valid className={'regist-input'}
                           spanClass={'regist-input-86'} spanTitle={'+86'}
                           inputStyle={{'width':'321px'}} inputPlaceholder={'建议使用常用手机号'} inputType={'text'}
                           regExp={ phoneReg } nullMsg={'请填写手机号码'} errorMsg={'请正确输入手机号码'}
                           ref={ phoneRef }
                           onEnter={firstStepClick}
                    />
                    <Valid className={'regist-input'}
                           spanTitle={'手机验证码'}
                           inputStyle={{'width':'153px'}} inputPlaceholder={'输入验证码'} inputType={'text'}
                           nullMsg={'请填写手机验证码'}
                           ref={codeRef}
                           onEnter={firstStepClick}
                    >
                        <span className={'regist-input-btn'} onClick={()=>{message.warning('目前没有验证码，请随便输')}}>获取验证码</span>
                    </Valid>
                    <div className={'regist-btn'} onClick={firstStepClick}>下一步</div>
                </div>
                <div className={'hide'} ref={secondRef}>
                    <Valid className={'regist-input'}
                           spanTitle={'用户名'}
                           inputMaxLength="15" inputPlaceholder={'请设置用户名'} inputType={'text'}
                           regExp={ userNameReg } nullMsg={'请填写用户名'} errorMsg={'3-15位，支持汉字、数字、字母、下划线组合，不能为纯数字！'}
                           ref={userNameRef}
                           onEnter={secondSubmit}
                    />
                    <Valid className={'regist-input'}
                           spanTitle={'设置密码'}
                           inputMaxLength="16" inputPlaceholder={'请设置密码'} inputType={openEye?'text':'password'}
                           regExp={ userPasReg } nullMsg={'请填写密码'} errorMsg={'请填写6到16位字符！'}
                           ref={userPasRef}
                           onEnter={secondSubmit}
                    >
                        <div className={'iconfont ' + (openEye ? 'icon-zhengyan' : 'icon-biyan')}  onClick={ onClickEye }></div>
                    </Valid>
                    <Valid className={'regist-input'}
                           spanClass={'regist-input-span'} spanTitle={'QQ'}
                           inputPlaceholder={'请输入QQ'} inputType={'text'}
                           regExp={ qqReg } nullMsg={'请输入您的QQ'} errorMsg={'请正确输入QQ！'}
                           ref={userQqRef}
                           onEnter={secondSubmit}
                    />
                    <Valid className={'regist-input'}
                           spanClass={'regist-input-span'} spanTitle={'邀请码'}
                           inputPlaceholder={'请输入邀请码'} inputType={'text'}
                           regExp={ initCodeReg } nullMsg={'请输入邀请码'} errorMsg={'请正确输入邀请码！'}
                           ref={userInvitCodeRef}
                           onEnter={secondSubmit}
                    />
                    <div className={'regist-btn'} onClick={secondSubmit}>提交</div>
                </div>
            </div>
        </div>

        <div className={'success hide'} ref={successRef}>
            <i className={'iconfont icon-tick'}></i>
            <p>恭喜您成功注册为{name}用户~</p>
        </div>
    </div>
}


export default UserBox;