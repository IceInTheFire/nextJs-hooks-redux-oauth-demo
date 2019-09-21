import { useEffect, useContext } from 'react';
import Router from 'next/router'

import nextCookie from "next-cookies";

export const withAuthSync = ({WrappedComponent, type}) => {
    const Wrapper = props => {
        return <WrappedComponent {...props} />
    }

    Wrapper.getInitialProps = async ctx => {
        const cookies = nextCookie(ctx);
        if(type == 'bis' && (!cookies.token || !cookies.bis)){  // 当type为bis时
            let url = '/login?type=bis';
            if (ctx.res) {
                ctx.res.response.redirect(url);
            } else {
                Router.replace(url)
            }
            return {};
        } else if(type == 'user' && (!cookies.token || !cookies.user)) {   // 当type为user时
            let url = '/login?type=user';
            if (ctx.res) {
                ctx.res.response.redirect(url);
            } else {
                Router.replace(url)
            }
            return {};
        }


        const componentProps =
            WrappedComponent.getInitialProps &&
            (await WrappedComponent.getInitialProps(ctx));

        return { ...componentProps }
    }

    return Wrapper
}


export const bisAuthSync = (WrappedComponent) => {
    return withAuthSync({WrappedComponent, type:'bis'})
}

export const userAuthSync = (WrappedComponent) => {
    return withAuthSync({WrappedComponent, type:'user'})
}