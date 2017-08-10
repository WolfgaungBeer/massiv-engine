const path = require("path");

module.exports = {

    entry: "./test/index.js",

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "test")
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            }
        ]
    }

};
