const nodeCmd = require("node-cmd");
const command = "serverless create --template"
const fs = require('fs');
const filePath = "./serverless-ms";
const packageFile = require('../data/package');
const lint = require('../data/eslint');

const genMs = (data, callback) => {
    nodeCmd.get("npm install -g serverless", (err, data, stdErr) => {
        if (err) {
            return callback(`Something went wrong ${err}`)
        } else {
            nodeCmd.get(`${command} ${data.cloud}-${data.platform} --path ${filePath}`, (err, data, stdErr) => {
                if (err || stdErr) {
                    let error = err ? err : stdErr;
                    return callback(error, null)
                } else {
                    fs.writeFile(`${filePath}/package.json`, packageFile.package(), (err) => {
                        if (err) {
                            return callback(`error creating package.json file, ${err}`)
                        } else {
                            fs.writeFile(`${filePath}/.eslint.json`, lint.eslint(), (err) => {
                                if (err) {
                                    return callback(`error creating lint file, ${err}`)
                                }
                                fs.mkdir(`${filePath}/resources`);
                                fs.mkdir(`${filePath}/services`);
                                nodeCmd.get(`cd ${filePath} && npm install`, (err, data, stdErr) => {
                                    if (err) {
                                        // let error = err ? err : stdErr;
                                        return callback(error, null);
                                    } else {
                                        return callback(null, true)
                                    }
                                })

                            })
                        }
                    })
                }
            });
        }
    })

}

module.exports = genMs;