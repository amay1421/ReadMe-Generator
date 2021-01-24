// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "userAge",
        message: "What is your age?"
    }
];

inquirer.prompt(questions).then((answer) => {
    console.log(answer)

    fs.writeFileSync('./test-readme.md', '# This is the title');
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
