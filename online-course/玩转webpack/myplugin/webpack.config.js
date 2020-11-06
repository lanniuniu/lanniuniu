const path = require('path')
const MyPlugins = require('./plugins/my-plugin')
module.exports = {
    entry: path.join(__dirname, './src/index'),
    plugins: [
        new MyPlugins({
            name: 'qinqin'
        })
    ]
}
