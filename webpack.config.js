const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/ReactFlicker.js',
    output: {
        path: path.resolve('lib'),
        filename: 'ReactFlickerElement.js',
        libraryTarget: 'commonjs2'
    },
    externals: ['react', 'react-dom'],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }

                },
            }
        ]
    }
}