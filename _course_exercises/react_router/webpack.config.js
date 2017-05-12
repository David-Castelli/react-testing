module.exports = {
	entry: "./index.js",
	output: {
		path: __dirname,
		filename: "app.js"
	},
    devServer: {
        inline:true,
        port: 3000
    },
	module: {
		loaders: [{
			test: /\.js$/,
            exclude: /(node_modules)/,
			loader: "babel-loader",
			query: {
				presets: ["es2015", "react"]
			}
		}]
	}
}