import App, { Container } from 'next/app'
import { Data } from "store/data";
import Router from 'next/router';
import NProgress from 'nprogress';
import nextCookie from "next-cookies";


export default class MyApp extends App {
    static async getInitialProps({ ctx, Component }) {
        const cookies = nextCookie(ctx);

        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        pageProps.cookies = cookies;
        return {
            pageProps
        }
    }

    render () {
        const { Component, pageProps } = this.props;
        Router.onRouteChangeStart = (url, as, options) => {
            NProgress.start()
        }
        Router.onRouteChangeComplete = () => NProgress.done()
        Router.onRouteChangeError = () => NProgress.done()
        return (
            <Data cookies={pageProps.cookies}>
                <Container>
                    <Component {...pageProps} />
                </Container>
            </Data>
        )
    }
}
