const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    productionSourceMap: true,
    devServer: {
        port: 8080,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
              '@': resolve('src')
            }
        }
    }
}