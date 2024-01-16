const fs = require("fs"); // node module that uses file
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// 1. Come up with Readme Structure 
// 2. Decide which questions you want to ask and the question format
// e.g. Licence should be a select box, description may be a text entry box 
// 3. Generate the README.md content based on the user input 
// 4. write to README.md file 



// array of questions for user
const questions = [
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project',
        }
])
// then // ... set the answers to constants 

.then((answers)) => {
    const titleAnswer = answers.title
    console.log(titleAnswer)
    // call the write to file function 

}

];


// 
// parseInt()?
// function to write README file
function writeToFile(fileName, data) {
    // pass user answers to the generate markdown function 
    // generateMarkdown 

    fs.writeFile(fileName, answers, (err)) => 
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
