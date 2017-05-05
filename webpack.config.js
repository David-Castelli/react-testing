var webpack = require("webpack");
var folder = __dirname;

module.exports = {
    entry: "./src/index.js",
    output: {
        path: folder + "/dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
 		contentBase: './dist',
       port: 3000
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ['latest', 'stage-0', 'react'],
                }
            },
			{
				test: /\.json$/,
				exclude: /(node_modules)/,
				loader: "json-loader"
			},
			// aggiungo il loader per 
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!autoprefixer-loader' // aggiungo i vari tool per css
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader' // aggiungo i vari tool per pre-processare scss in css
			}
       ]
    }
}