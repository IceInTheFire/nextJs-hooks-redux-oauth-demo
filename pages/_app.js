// import App, { Container } from 'next/app'
// ///pages/_app.js
// // 简单的
// export default class MyApp extends App {
//     render () {
//         const {Component, pageProps} = this.props
//         return (
//             <Container>
//                 <Component {...pageProps} />
//             </Container>
//         )
//     }
// }

// // 英文官网next.js官网推荐
// // https://github.com/zeit/next.js/tree/canary/examples/with-redux
// import App, { Container } from 'next/app'
// import React from 'react'
// import withReduxStore from '../store/with-redux-store'
// import { Provider } from 'react-redux'
// import Router from 'next/router'
// import NProgress from 'nprogress'
//
// class MyApp extends App {
//     render () {
//         Router.onRouteChangeStart = (url) => {
//             NProgress.start()
//         }
//         Router.onRouteChangeComplete = () => NProgress.done()
//         Router.onRouteChangeError = () => NProgress.done()
//         const { Component, pageProps, reduxStore } = this.props
//         return (
//             <Container>
//                 <Provider store={reduxStore}>
//                     <Component {...pageProps} />
//                 </Provider>
//             </Container>
//         )
//     }
// }
//
// export default withReduxStore(MyApp)



import App, { Container } from 'next/app'
import { Data } from "store/data";
import Router from 'next/router';
import NProgress from 'nprogress';
import nextCookie from "next-cookies";
import { withRouter } from 'next/router';
///pages/_app.js
// 简单的
export default class MyApp extends App {
    static async getInitialProps({ ctx }) {
        const cookies = nextCookie(ctx);
        return {
            cookies
        }
    }

    // constructor (props) {
    //     super(props)
    //     this.state = {}
    // }

    render () {
        const { Component, pageProps, cookies } = this.props;
        Router.onRouteChangeStart = (url, as, options) => {
            NProgress.start()
        }
        Router.onRouteChangeComplete = () => NProgress.done()
        Router.onRouteChangeError = () => NProgress.done()
        return (
            <Data cookies={cookies}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Data>
        )
    }
}
