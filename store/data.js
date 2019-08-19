// data.js
import Cookies from 'js-cookie';
import { createContext, useReducer } from "react";

// 创建 context
export const DataContext = createContext({});

// 定义 参数
// let state = {
//     id: 1234,
//     token: Cookies.get('token') || '',
//     user: Cookies.get('user') ? JSON.parse(Cookies.get('user')) : '',
//     bis: Cookies.get('bis') ? JSON.parse(Cookies.get('bis')) : '',
//     loading: false,
// };

const initState = (cookies) => {
    let state = {
        id: 1234,
        token: '',
        user: '',
        bis: '',
        loading: false
    };
    cookies.token && (state.token = cookies.token);
    cookies.user && (state.user = JSON.parse(cookies.user));
    cookies.bis && (state.bis = JSON.parse(cookies.bis));
    return state;
}


// reducer
export const UPDATE_ID = "UPDATE_ID";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const INIT_COOKIES = "INIT_COOKIES";


const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_ID:
            state.id += (parseInt(action.id) || 1);
            return { ...state }
            break;
        case LOGIN:
            state.token = action.token;
            state.user = action.user || '';
            state.bis = action.bis || '';
            Cookies.set('token', action.token, { expires: 7 });            // 失效时间7天
            !action.user ?  Cookies.remove('user', {path: '' }) : Cookies.set('user', JSON.stringify(action.user), { expires: 7 });      // 对整个站点有效
            !action.bis ? Cookies.remove('bis', {path: '' }) : Cookies.set('bis', JSON.stringify(action.bis), { expires: 7});   //对当前路径有效

            return { ...state }
            break;
        case LOGOUT:
            state.token = '';
            state.user = '';
            state.bis = '';
            Cookies.remove('token', {path: '' }); // fail!
            Cookies.remove('user', {path: '' }); // removed!
            Cookies.remove('bis', {path: '' }); // removed!
            return { ...state };
            break;
        case INIT_COOKIES:
            if(action.cookies) {
                let objArr = Object.keys(action.cookies);
                objArr.forEach((value, indx) => {
                    Cookies.set(value, action.cookies[value], { expires: 7 });
                });
            }
            return
            break;
        default:
            return state
    }
}

/**
 * 创建一个 Data 组件
 * Data 组件包裹的所有子组件都可以通过调用 DataContext 访问到 value
 */
export const Data = props => {

    const [ data, dispatch ] = useReducer(reducer, initState(props.cookies));
    return (
        <DataContext.Provider value={{ data, dispatch }}>
            {props.children}
        </DataContext.Provider>
    );
};
