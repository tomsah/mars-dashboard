const path = require('path')

module.exports = {
  entry: './src/public/index.js',
  output: {
    path: path.resolve('dist'),
    // path: path.resolve(__dirname, './dist'),
    // publicPath: '/dist/',
    filename: 'bundle.js',
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jp?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            // only if the img is =< 5000 bytes is ok to inline it as a
            // base 64 url else add the file to our dist directory and
            // return the hashed url
            // options: {
            //   limit: 5000,
            // },
          },
        ],
      },
      {
        test: /\.(scss|css)$/,
        exclude: /\.module\.css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.module\.css$/,
        use: [
          {loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: {exportLocalsConvention: 'camelCaseOnly'},
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader',
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        include: /images/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
  },
}
