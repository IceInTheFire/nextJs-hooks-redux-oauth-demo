(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{LAiw:function(e,a,n){"use strict";var t=n("MM9K"),l=n.n(t),s=n("q1tI"),i=n.n(s),r=(n("wCKx"),n("VJ1Z"),i.a.createElement);a.a=function(){return r("div",{id:"loading"},r("div",{className:"loading-center"},r(l.a,{tip:"Loading..."})))}},M4sn:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/normal/post",function(){return n("vUb6")}])},"rLQ/":function(e,a,n){"use strict";var t=n("q1tI"),l=n.n(t),s=n("4+Qy"),i=n("YFqc"),r=n.n(i),c=n("rOcY"),u=(n("yG59"),l.a.createElement),o=function(){return u("div",{className:"inlineBlock"},u(r.a,{href:{pathname:"/login",query:{type:"user"}},replace:!0},u("a",{className:"red"},"\u7528\u6237\u767b\u5f55")),u("span",{className:"line"}),u(r.a,{href:{pathname:"/login",query:{type:"bis"}},replace:!0},u("a",null,"\u5546\u5bb6\u767b\u5f55")),u("span",{className:"line"}),u(r.a,{href:{pathname:"/regist",query:{type:"user"}},replace:!0},u("a",{className:"red"},"\u514d\u8d39\u6ce8\u518c")))},m=n("nOHt"),p=n.n(m),d=n("i5qa"),N=l.a.createElement,f=function(){var e=Object(t.useContext)(d.b),a=e.data,n=e.dispatch;return N("div",{className:"top_pm"},N(r.a,{href:{pathname:"/user"},replace:!0},N("a",{className:"top-nickname",title:a.user.name},N("span",{className:"sk_name"},a.user.name),N("i",{className:"top-down"}))),N("div",{className:"top-toggle"},N("a",{onClick:function(){n({type:d.d}),p.a.replace("/")}},N("i",{className:"exit"}),"\u9000\u51fa")),N("span",{className:"line"}))},h=l.a.createElement,v=function(){var e=Object(t.useContext)(d.b),a=e.data,n=e.dispatch;return h("div",{className:"top_pm"},h(r.a,{href:{pathname:"/bis"},replace:!0},h("a",{className:"top-nickname",title:a.bis.name},h("span",{className:"sk_name"},a.bis.name),h("i",{className:"top-down"}))),h("div",{className:"top-toggle"},h("a",{onClick:function(){n({type:d.d}),p.a.replace("/")}},h("i",{className:"exit"}),"\u9000\u51fa")),h("span",{className:"line"}))},g=l.a.createElement,b=function(e){e.cookies;var a=Object(t.useContext)(d.b),n=a.data;a.dispatch;return n.token?n.user?g(f,null):n.bis?g(v,null):g(o,null):g(o,null)},w=l.a.createElement,y=function(e){return w("div",{className:"header-top"},w("div",{className:"header-main clearfix"},w("div",{className:"header-left"},w(b,null),w("a",{className:"qq"},"\u5728\u7ebf\u5ba2\u670d"),w("div",{className:"xingxing"},w("i",{className:"iconfont icon-xingxing"}),"\u6536\u85cf",w("div",{className:"shou_toggle"},w("span",null,"Ctrl"),"\u6216",w("span",null,"Cmd+D"),"\u6536\u85cf\u672c\u7ad9"))),w("div",{className:"header-right"},w(r.a,{href:{pathname:"/"},replace:!0},w("a",{className:"red"},c.b,"\u9996\u9875")),w("span",{className:"line"}),w("a",null,"\u91d1\u5e01\u62bd\u5956"),w("span",{className:"line"}),w("a",null,"\u610f\u89c1\u53cd\u9988"),w("span",{className:"line"}),w("a",null,"\u5e2e\u52a9\u4e2d\u5fc3"))))},_=(n("Tv70"),l.a.createElement),k=function(){return _("div",{className:"footer"},_("div",{className:"footer_main"},_("div",{className:"fl"},_("div",{className:"footer_xy"},_("a",null,"\u8054\u7cfb\u6211\u4eec"),_("span",null,"|"),_("a",null,"\u5546\u52a1\u5408\u4f5c"),_("span",null,"|"),_("a",null,"\u7528\u6237\u534f\u8bae"),_("span",null,"|"),_("a",null,"\u5e2e\u52a9\u4e2d\u5fc3")),_("div",{className:"footer_fl"},_("span",null,"Copyright \xa9 2018 baidu.com"),"\u7696ICP\u590712345678\u53f7-1 \xa0\xa0 \u7696\u516c\u7f51\u5b89\u5907 12345678901234\u53f7   \xa0\xa0",c.b,"\u4fe1\u606f\u79d1\u6280\u6709\u9650\u516c\u53f8")),_("div",{className:"fr ac"},_("p",{className:"footer-right-p"},"\u5173\u6ce8",c.b,"\u516c\u4f17\u53f7"),_("img",{className:"footer-right-img",src:"/static/img/yonghu_code.png"}))))},x=n("Y0NT"),C=(n("k3dD"),n("LAiw")),q=l.a.createElement;a.a=function(e){return e.statusCode?q(x.default,{statusCode:e.statusCode}):q("div",null,q(s.a,{meta:e.meta}),q(y,null),e.children,q(k,null),q(C.a,null))}},vUb6:function(e,a,n){"use strict";n.r(a);var t=n("ln6h"),l=n.n(t),s=n("O40h"),i=n("9Jkg"),r=n.n(i),c=n("q1tI"),u=n.n(c),o=n("nOHt"),m=n("rLQ/"),p=u.a.createElement,d=Object(o.withRouter)(function(e){return p(m.a,null,p("h1",null,e.router.query.title),p("h2",null,r()(e.router)),p("h2",null,"props.title"),p("p",null,"This is the blog post content."))});d.getInitialProps=function(){var e=Object(s.a)(l.a.mark(function e(a){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.query.title,e.abrupt("return",{title:n});case 2:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),a.default=d}},[["M4sn",1,0,2]]]);