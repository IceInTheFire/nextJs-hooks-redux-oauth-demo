import Head from 'next/head';
import { useState, useEffect } from 'react';
import { name } from '../../config/index'



const defaultMeta = {
    title: `【${name}】-试客信赖的免费试用平台-全新模式快速提升排名-官网`,
    description: `${name}，全新的免费试用模式，试客可通过平台免费领 取试用品，包邮且无需返还，每天海量产品在线，每日上新近千款新品。商家可通过提莫试客平台轻 松提升关键词排名，快速打造爆款。`,
    keyword: `${name}|试客|免费试用|试用|试用网|免费试用网|${name}试用网`,
    author: '灬安俱乐部--冰中焱'
}



const MyHead = (props) => {
    const hasMeta = props.meta;
    const [ meta, setMeta ] = useState(hasMeta?Object.assign(defaultMeta, props.meta): defaultMeta);

    return <Head>
        <meta charSet='utf-8'/>
        <meta httpEquiv='X-UA-Compatible' content='IE=edge, chrome=1'/>
        <meta name='viewport'
              content='width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no'/>
        <meta name='renderer' content='webkit'/>
        <meta httpEquiv='description' content={meta.description}/>
        <meta name='Keywords' content={meta.keyword}/>
        <meta name='author' content={meta.author}/>
        <link rel='stylesheet' href='/static/css/iconfont/iconfont.css'/>
        {/*<link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />*/}
        {/*<link rel='stylesheet' type='text/css' href='/static/css/antd.css' />*/}
        <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon" />

        {/*<script src='http://pv.sohu.com/cityjson?ie=utf-8'></script>*/}
        <title>{meta.title}</title>
    </Head>
}

export default MyHead

