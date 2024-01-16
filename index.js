const fs = require("fs"); // node module that uses file
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// 1. Come up with Readme Structure 
// 2. Decide which questions you want to ask and the question format
// e.g. Licence should be a select box, description may be a text entry box 
// 3. Generate the README.md content based on the user input 
// 4. write to README.md file 

// When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
// The title of my project
// Sections entitled:
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// When a user enters the project title then it is displayed as the title of the README
// When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
// When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
// When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README



const questions = [
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please include the steps and installation instructions for your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select a license',
            choices: ["MIT_License","Creative_Commons", "GNU_License", "Mozilla_Public_License 2.0", "Apache","None"],
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If applicable, please provide guidelines for contributing to this project ',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide any tests for your application and examples on how to run them.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },

]


// function to write README file
function writeToFile(fileName, answers) {
    return new Promise((resolve,reject)=> {
    fs.writeFile(fileName, answers, (err) =>{
        if (err){
            reject (err);
        } else {
            resolve();
        }
    });
    
}); 
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileName = path.join("./results",`${answers.title}_README.md`);
        writeToFile(fileName, generateMarkdown(answers))
        .then (()=> {
            console.log("Your README.md file has been succesfully generated!"); 
        })
        .catch((err) => {
            console.error(err);
        });

    })
}

// function call to initialize program
init();
