const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    bundle: [
      "webpack-hot-middleware/client?reload=true?path=http://localhost:6000/__webpack_hmr",
      "react-hot-loader/patch",
      "@babel/polyfill",
      "./src/main.jsx",
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "dist"),
    publicPath: "/ui/",
    filename: "[name].js",
    globalObject: "this",
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              plugins: [
                "@babel/plugin-syntax-dynamic-import",
                "@babel/plugin-syntax-import-meta",
                "@babel/plugin-proposal-class-properties",
                "@babel/plugin-proposal-json-strings",
                [
                  "@babel/plugin-proposal-decorators",
                  {
                    legacy: true,
                  },
                ],
                "@babel/plugin-proposal-function-sent",
                "@babel/plugin-proposal-export-namespace-from",
                "@babel/plugin-proposal-numeric-separator",
                "@babel/plugin-proposal-throw-expressions",
                "@babel/plugin-proposal-export-default-from",
                "@babel/plugin-proposal-logical-assignment-operators",
                "@babel/plugin-proposal-optional-chaining",
                [
                  "@babel/plugin-proposal-pipeline-operator",
                  {
                    proposal: "minimal",
                  },
                ],
                "@babel/plugin-proposal-nullish-coalescing-operator",
                "@babel/plugin-proposal-do-expressions",
                "@babel/plugin-proposal-function-bind",
                [
                  "module-resolver",
                  {
                    root: ["./src"],
                    alias: {
                      underscore: "lodash",
                    },
                  },
                ],
              ],
            },
          },
          {
            Loader: 'eslint-loader?{rules:{"no-console":0}}',
          },
          {
            loader: "stylelint-custom-processor-loader ",
          },
        ],
        include: path.resolve(__dirname, " ..", "src"),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.css$/1,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  resolve: {
    modules: ["src", "node_modules"],
    alias: {
      Assets: path.resolve(_dirname, " ../src/assets/"),
      react: path.resolve(_dirname, "../node_modules", "react"),
      "react-dom": "Shot-loader/react-dom",
      "@date-fns/upgrade": path.resolve(
        _dirname,
        "..",
        "node_modules",
        "@date-fns",
        "upgrade"
      ),
      "@date-io/date-fns": path.resolve(
        _dirname,
        "..",
        "node_modules",
        "@date-to",
        "date-fns"
      ),
      "@hot-loader/react-dom": path.resolve(
        _dirname,
        "..",
        "node_modules",
        "@hot-loader",
        "react-dom"
      ),
      "@material-ul/core": path.resolve(
        _dirname,
        "..",
        "node_modules",
        "@material-ui",
        "core"
      ),
      "@material-ul/icons": path.resolve(
        _dirname,
        "..",
        "node_modules",
        "@material-ui",
        "icons"
      ),
      "@material-ui/lab": path.resolve(
        _dirname,
        " ",
        'node_modules", "@material-ui',
        "lab"
      ),
      "@material-ui/pickers": path.resolve(
        _dirname,
        "..",
        "node_modules",
        "@material-ul",
        "pickers"
      ),
      "@reach/router ": path.resolve(
        _dirname,
        "..",
        "node_modules', 'Sreach",
        "router"
      ),
      formik: path.resolve(_dirname, "..", "node_modules", "formik"),
      "immutability-helper": path.resolve(
        _dirname,
        "..",
        "node_modules",
        "immutability-helper"
      ),
      lodash: path.resolve(_dirname, "..", "node_modules", "lodash"),
      "prop-types": path.resolve(_dirname, "..", "node_modules", "prop-types"),
      "react-dnd": path.resolve(_dirname, " ..", "node_modules", "react-and"),
      "react-dnd-html5-backend": path.resolve(
        _dirname,
        "..",
        "mode_modules",
        "react-and-html5-backend"
      ),
      "react-virtualized": path.resolve(
        _dirname,
        "..",
        "node_modules",
        "react- virtualized"
      ),
      "styled-components": path.resolve(
        _dirname,
        ".. ",
        "node_modules",
        "styled-components"
      ),
    },
    extensions: [".js", ".jsx", ".css", ".scss"],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new webpack.DefinePlugin({
      // 'process. env.API_URL' : JSON.stringify('https://Localhost:6001")
    }),
    new webpack.DefinePlugin({
      "process.env.BASE_URL": JSON.stringify("/newui"),
    }),
    new webpack.DefinePlugin({
      "process.env.WORKER_PLUGIN_BUILD_HASH": JSON.stringify(""),
    }),
    //Menu configuration
    new webpack.HotModuleReplacementPlugin(),
    new webpack.lioEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        eslint: {
          configFile: ".eslintrc",
          extensions: [".js", ".jsx"],
          IgnorePath: ".gitignore",
          cache: true,
          formatter: require("eslint-friendly-formatter"),
        },
        debug: true,
      },
    }),
  ],
};
