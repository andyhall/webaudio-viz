
var path = require('path')
var entryPath = path.resolve('.', 'demo.js')
var buildPath = path.resolve('..', 'docs')
var buildFilename = 'bundle.js'


module.exports = (env) => ({

    mode: (() => {
        return (env && env.production) ?
            'production' : 'development'
    })(),

    entry: entryPath,
    output: {
        path: buildPath,
        filename: buildFilename,
    },
    devServer: {
        contentBase: buildPath,
        inline: true,
        host: "0.0.0.0",
        stats: "minimal",
    },
})
