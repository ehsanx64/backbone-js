const path = require('path');

module.exports = {
    // This is the entry script
    entry: './src/index.js',
    mode: 'development',
    // Where output (bundle) file is located
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'js')
    },
    optimization: {
        // Don't minimize sources
        minimize: false
    },
    watch: true
}
