module.exports.eslint = () => {
    let lint = `{
        "env": {
            "browser": true,
            "commonjs": true,
            "es6": true
        },
        "extends": "eslint:recommended",
        "globals": {
            "Atomics": "readonly",
            "SharedArrayBuffer": "readonly",
            "process": true
        },
        "parserOptions": {
            "ecmaVersion": 2018
        },
        "rules": {
            "no-unused-vars": "off",
            "no-console": "off"
        }
    }    
      
      `
    return lint;
}