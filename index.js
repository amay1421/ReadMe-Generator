// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "repository",
        message: "What is your name of your GitHub repository?",
    },
    {
        type: "input",
        name: "repoTitle",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
    
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe this project?",
    },
    {
        type: "input",
        name: "technology",
        message: "What technology was used?",
    
    },
    {
        type: "input",
        name: "installation",
        message: "What steps are required for installation?",
    },
    {
        type: "input",
        name: "contribution",
        message: "Please list any collaborators, if any, along with any third-party assets that require attribution.",
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like for your project?",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License","Boost Software License 1.0", "The Unlicense",]
    },
    {
        type: "input",
        name: "test",
        message: "Please provide examples on how to run tests",
    
    },
    {
        type: "input",
        name: "inquiries",
        message: "What is your email address for any future inquiries?",
    
    },
   
];


inquirer.prompt(questions).then((answer) => {
    console.log(answer)
    fs.writeFileSync('./output/READme.md',generateMarkdown(answer))

})


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
