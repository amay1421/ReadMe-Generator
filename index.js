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
        name: "repository",
        message: "What is your name of your GitHub repository?"
    },
    {
        type: "input",
        name: "repoTitle",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        description: "questions",
        message: "What technology was used?",
    
    },
    {
        type: "input",
        description: "usage",
        message: "What is the project usage for?",
    
    },
    {
        type: "input",
        description: "descrption",
        message: "How would you describe this project?"
    },
    {
        type: "input",
        description: "installation",
        message: "What steps are required for installation?"
    },
    {
        type: "input",
        description: "contribution",
        message: "How can other developers contribute to your project?"
    },
    {
        type: "list",
        description: "licensing",
        message: "What licensing would you like for your project?",
        choices: []
    },
    {
        type: "input",
        description: "questions",
        message: "What is your email address for any future inquiries?",
    
    },
    
   
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
