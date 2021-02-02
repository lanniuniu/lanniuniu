module.exports = class MyPlugins {
    constructor (options) {
        this.options = options
    }
    apply (compiler) {
        console.log(`this is a plugin`)
        console.log(compiler)
    }
}
