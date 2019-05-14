const inquirer = require('inquirer');
const boiler = require('./commands/gen_boiler');

const Spinner = require('cli-spinner').Spinner; //spinner
const loader = new Spinner('processing...%s');
loader.setSpinnerString('|/-\\');

const index = () => {
    console.log("Welcome to the serverless custom CLI");
    inquirer.prompt([{
        type: "list",
        choices: ['Generate a boiler plate from serverless.com', 'Generate a full microservice', 'Generate multiple microservices'],
        name: "Answer"
    }]).then((res) => {
        let env = null;
        let cloud = null;
        switch (res.Answer) {
            case 'Generate a boiler plate from serverless.com':
                inquirer.prompt([{
                    type: "list",
                    choices: ['nodejs', 'java', 'python'],
                    name: "Environment"
                }]).then((res) => {
                    env = res.Environment;
                    inquirer.prompt([{
                        type: "list",
                        choices: ['aws', 'azure'],
                        name: "Cloud"
                    }]).then((res) => {
                        cloud = res.Cloud;
                        loader.start();
                        boiler(env, cloud, ((err, res) => {
                            loader.stop();
                            if (err) {
                                console.log("error creating boiler plate code", err)
                            } else {
                                console.log("successfully created files")
                            }
                        }))
                    })
                })
                break;
            case 'Generate a full microservice':
                console.log("2")
                break;
            case 'Generate multiple microservices':
                console.log("3")
                break;
        }
    })
}
index();