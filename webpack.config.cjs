const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: argv.mode || 'development',
        entry: './src/index.jsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/react-js-practice/',
            filename: 'bundle.[contenthash].js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', { runtime: 'automatic', development: !isProduction }]
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(png|jpe?g|gif|svg)$/i,
                    type: 'asset/resource',
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './public/index.html'
            })
        ],
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            hot: true,
            open: true,
            port: 3000,
            historyApiFallback: true,
        },
    };
};
