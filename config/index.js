export const errorMsg = {
    404: '找不到该页面哦',
    ECONNREFUSED: 'fetch请求失败，请联系我们'
}

export const name = '提莫淘';

export const baseURL = 'http://localhost:3001/api';

export const regExp = {
    phoneReg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
    userNameReg: /^(?=.*[A-Za-z_\u4E00-\u9FA5])[A-Za-z0-9_\u4E00-\u9FA5]{3,15}$/,
    userPasReg: /^\w{6,16}$/,
    qqReg: /^\d{6,16}$/,
    initCodeReg: /^[\w\W]{6,16}$/,
    wxReg: /^[^\s]{6,20}$/,
    loginNameReg: /(^[1][3,4,5,6,7,8,9][0-9]{9}$)|(^(?=.*[A-Za-z_\u4E00-\u9FA5])[A-Za-z0-9_\u4E00-\u9FA5]{3,15}$)/
}
