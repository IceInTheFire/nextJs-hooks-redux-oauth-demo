const Koa = require('koa');
const next = require('next');
const Router = require('koa-router');

// const dev = process.env.NODE_ENV !== 'production';
const dev = false;
console.log("dev:",dev)
const app = next({ dev });
const handle = app.getRequestHandler();

let router = new Router();

app.prepare()
    .then(() => {
        const server = new Koa();
        // 路由伪装
        router.get('/normal/p/:id', (ctx, next) => {
            const actualPage = '/normal/post';
            const queryParams = { title: ctx.params.id };
            ctx.res.response = ctx.response;
            app.render(ctx.req, ctx.res, actualPage, queryParams);
            ctx.respond = false;
        });
        // router.get('*', async (ctx, next) => {
        //     await handle(ctx.req, ctx.res);
        //     ctx.respond = false
        // });

        // 如果没有配置nginx做静态文件服务，下面代码请务必开启
        server.use(async (ctx, next) => {
            ctx.res.response = ctx.response;
            await handle(ctx.req, ctx.res);
            ctx.respond = false
        });
        // // 防止出现控制台报404错误
        // server.use(async (ctx, next) => {
        //     ctx.res.statusCode = 200
        //     await next()
        // })
        server.use(router.routes());

        server.listen(80, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost');
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });




