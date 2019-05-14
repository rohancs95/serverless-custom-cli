const nodeCmd = require("node-cmd");
const command = "serverless create --template"
const genBoiler = (platform, cloud, callback) => {
    nodeCmd.get("npm install -g serverless", (err, data, stdErr) => {
        if (err) {
            return callback(`Something went wrong ${err}`)
        } else {
            nodeCmd.get(`${command} ${cloud}-${platform} --path ./serverless-template`, (err, data, stdErr) => {
                if (err || stdErr) {
                    let error = err ? err : stdErr;
                    return callback(error, null)
                } else {
                    return callback(null, true)
                }
            })
        }
    })
}
module.exports = genBoiler;