const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    exportPathMap: function (defaultPathMap) {
        return {
            '/': { page: '/index' },
            '/SignIn': { page: '/SignIn' },
            '/home': { page: '/home' },
        }
    }
})
