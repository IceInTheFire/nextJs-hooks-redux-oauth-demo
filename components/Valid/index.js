import {useState, useEffect, useRef, forwardRef, useImperativeHandle} from 'react';
import "./less/index.less";

const valid = (props, ref) => {

    let {
        className,
        spanClass, spanStyle, spanTitle,
        inputStyle, inputPlaceholder, inputType, inputMaxLength,
        regExp, nullMsg, errorMsg,
        onEnter,
    } = props;
    regExp = regExp || /\*?/;
    const [ val, setVal ] = useState('');
    const [ valMsg, setValMsg ] = useState('');

    const onChange = (e) => {
        setVal(e.target.value);
    };

    const check = (e) => {
        if(!val){
            setValMsg(nullMsg);
            return false;
        } else if(!regExp.test(val)){
            setValMsg(errorMsg);
            return false;
        } else {
            setValMsg(null);
            return true;
        }
    }
    /*
    * 暴露给父组件使用的方法和参数
    * */
    useImperativeHandle(ref, () => ({
        getVal() {
            return val;
        },
        check
    }))

    const onBlur = (e) => {
        check();
    };
    const onKeyDown = (e) =>{
        if(e.nativeEvent.keyCode == 13) {
            onEnter();
        }
    };

    let inputDom;
    if(inputMaxLength) {
        inputDom =  <input className={valMsg ? 'Validform_error' : ''} style={{'width': '321px'}} style={inputStyle} type={inputType} placeholder={inputPlaceholder} onBlur={ onBlur } onChange={onChange} value={val} maxLength={inputMaxLength} onKeyDown={onKeyDown}/>
    } else {
        inputDom = <input className={valMsg ? 'Validform_error' : ''} style={{'width': '321px'}} style={inputStyle} type={inputType} placeholder={inputPlaceholder} onBlur={ onBlur } onChange={onChange} value={val} onKeyDown={onKeyDown}/>
    }

    return (
        <div className={ className } ref={ref}>
            <span className={spanClass} style={spanStyle}>{spanTitle}</span>
            {inputDom}
            { props.children }
            <span className={ valMsg ? 'Validform_wrong' : (valMsg == null?'Validform_right':'')}>{valMsg}</span>
        </div>
    )
}

export default forwardRef(valid)
