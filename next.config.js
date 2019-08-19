// /* eslint-disable */
const withLess = require('@zeit/next-less')

module.exports =   withLess(
    {
        lessLoaderOptions: {
            // javascriptEnabled: true,

            javascriptEnabled : true,
            // importLoaders: 1,
            // localIdentName: "[local]___[hash:base64:5]",

        },
        distDir: 'build'
    }
)
//
// const withLess = require('@zeit/next-less')
//
// module.exports = withLess({
//     webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
//         // Perform customizations to webpack config
//
//         // Important: return the modified config
//         config.module.rules.push({
//             test: /\.less$/,
//             use: [{
//                 loader: "style-loader"
//             }, {
//                 loader: "css-loader"
//             }, {
//                 loader: "less-loader", options: {
//                     sourceMap: true
//                 }
//             }]
//         })
//         console.log(config.module.rules, '--')
//         return config
//     },
//     webpackDevMiddleware: config => {
//         // Perform customizations to webpack dev middleware config
//         // console.log(config, '@@')
//         // Important: return the modified config
//         return config
//     }
// })