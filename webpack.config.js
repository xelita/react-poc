module.exports = {
    entry: [
        "./js/main.js",
        "./js/hello.js",
        "./js/counter.js"
    ],
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: { // 'babel-loader' is also a legal name to reference
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
