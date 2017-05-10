module.exports = {
	entry: "./src/App.js",
	output: {
		path: __dirname,
		filename: "app.js"
	},
	devServer: {
        inline:true,
        port: 8080
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
