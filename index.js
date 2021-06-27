// TODO: Include packages needed for this application
const package = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Enter title of project',
        validate: (title) => {if (title) {return true} else {return 'Please enter data'}},
    },
    {
        type: 'input',
        name: 'Table of Contents',
        message: 'add table of contents',
        validate: (title) => {if (title) {return true} else {return 'Please enter data'}},
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Please enter short description of project',
        validate: (title) => {if (title) {return true} else {return 'Please enter data'}},
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'Please enter Installation information',
        validate: (title) => {if (title) {return true} else {return 'Please enter data'}},
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'How does the user use this application?',
        validate: (title) => {if (title) {return true} else {return 'Please enter data'}},
    },
    {
        type: 'list',
        name: 'License',
        message: 'What kind of license do you need?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None',]
    },
    {
        type: 'input',
        name: 'Credits',
        message: 'Where did you get the matierial to complete this project?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'How is ',
        validate: (title) => {if (title) {return true} else {return 'Please enter a Title'}},
    },
    {
        type: 'input',
        name: 'Questions',
        message: 'If you have any questions please contact me by email at....',
        validate: (title) => {if (title) {return true} else {return 'Please enter a Title'}},
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
