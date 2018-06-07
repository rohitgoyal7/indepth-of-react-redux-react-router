const dev = process.env.NODE_ENV !== "production";
const webpack = require( "webpack" );
const path = require( "path" );
//const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );

const plugins = [
    new webpack.optimize.CommonsChunkPlugin( {
        name: "lib",
        minChunks: Infinity,
        filename: "[name].bundle.js",
    } ),
];

module.exports = {
    context: path.join( __dirname, "src" ),
    devtool: dev ? "source-map" : "source-map",
    entry: {
        app: "./js/app.js",
        lib: [ "react", "react-dom" ],
    },
    resolve: {
        modules: [
            path.resolve( "./src" ),
            "node_modules",
        ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: "pre",
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: "eslint-loader",
                        options: {
                            failOnWarning: false,
                            failOnError: true,
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
        ],
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    plugins,
};
