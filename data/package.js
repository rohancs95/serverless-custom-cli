module.exports.package = () => {
    let packageFile = `{
        "name": "ms",
        "version": "1.0.0",
        "description": "microservice",
        "main": "handler.js",
        "scripts": {
          "test": ""
        },
        "author": "",
        "repository":"",
        "license": "ISC",
        "dependencies":{
            "aws-sdk": "^2.422.0",
            "lambda-log": "^2.2.0",
            "serverless-offline": "^4.9.1"

        }       
      }
      `
    return packageFile;
}