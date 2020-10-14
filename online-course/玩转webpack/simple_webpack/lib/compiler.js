const {getAST, getDependencies, transform} = require('../lib/parser')
const fs = require('fs')
const path = require('path')
module.exports = class Compiler {
    constructor (options) {
        const {entry, output} = options
        this.entry = entry
        this.output = output
        this.modules = []
    }

    run () {
        const entryModule = this.buildModule(this.entry, true)
        this.modules.push(entryModule)
        this.modules.map(_module => {
            _module.dependencies.map(dependency => {
                this.modules.push(this.buildModule(dependency))
            })
        })

        this.emitFiles()
        console.log(this.modules)
    }

    buildModule (fileName, isEntry) {
        let ast
        if (isEntry) {
            ast = getAST(fileName)
        } else {
            const absolutePath = path.join(process.cwd(), './src', fileName)
            ast = getAST(absolutePath)
        }

        return {
            fileName,
            dependencies: getDependencies(ast),
            source: transform(ast)
        }
    }

    emitFiles () {
        const outputPath = path.join(this.output.path, this.output.fileName)

        let modules = ''
        this.modules.map(_module => {
            console.log(_module)
            modules += `'${_module.fileName}': function (require, module, exports) {${_module.source}},`
        })
        const bundle = `(function (modules) {
            function require(filename) {
                var fn = modules[filename]
                var module = {exports: {}}
                fn(require, module, module.exports)
                return module.exports
            }
            require('${this.entry}')
        })({${modules}})`
        fs.writeFileSync(outputPath, bundle, 'utf-8')
    }
}
