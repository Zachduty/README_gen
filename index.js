// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
},
{
    type: "input",
    name: "email",
    message: "What is your email?"
},
{
    type: "input",
    name: "project",
    message: "What is your project name?"
},
{
    type: "input",
    name: "description",
    message: "Please write a description of your project"
},
{
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["Apache 2.0", 
    "Boost Software 1.0", 
    "BSD 3-Clause", 
    "BSD 2-Clause", 
    "CC 0", 
    "CC Attribution 4.0 International",
    "CC Attribution-ShareAlike 4.0 International", 
    "CC Attribution-NonCommercial 4.0 International", 
    "CC Attribution-NoDerivates 4.0 International", 
    "CC Attribution-NonCommmercial-ShareAlike 4.0 International", 
    "CC Attribution-NonCommercial-NoDerivatives 4.0 International", 
    "Eclipse Public License 1.0", 
    "GNU GPL v3",
    "GNU GPL v2",
    "GNU AGPL v3", 
    "GNU LGPL v3", 
    "GNU FDL v1.3",
    "IBM Public License Version 1.0",
    "ISC License",
    "The MIT License",
    "Mozilla Public License 2.0",
    "ODP BY",
    "ODP ODbL",
    "ODP PDDL", 
    "The Perl License",
    "The Artistic License 2.0",
    "SIL Open Font License 1.1",
    "The Unlicense",
    "The Do What the Fuck You Want to Public License",
    "zlib/libpng"]
},
{
    type: "input",
    name: "dependencies",
    message: "What command should be run to install dependencies?"
},
{
    type: "input",
    name: "test",
    message: "What command should be run to run test?"
},
{
    type: "input",
    name: "repo",
    message: "What does the user need to know about using the repo?"
},
{
    type: "input",
    name: "contribute",
    message: "What does the user need to know about contributing to the repo?"
},
{
    type: "input",
    name: "contributers",
    message: "Who contributed on this project?"
}
]


   


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((questions) => {
        writeToFile("./utils/generatedREADME/README.md", generateMarkdown(questions));
    })
}

// Function call to initialize app
init();
