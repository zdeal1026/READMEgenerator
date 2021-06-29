// TODO: Include packages needed for this application
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter title of project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter short description of project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license do you need?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None',]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'allow other users to contribute to the application using industry standard Contributor Convenant ',
        default: 'Allow users to contribute to the application using Contributor Covenant (https://www.contributor-covenant.org/)',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you run the test from the command line? ',
        default: 'npm run test'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter email',
    },
    {
        type: 'input',
        name: 'github',
        message: 'enter github repo',
    },
    {
        type: 'input',
        name: 'links',
        message: 'additional links',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
//^^ return fileSystem and function *writeTofile using path.join to join the "current working directory" to the file
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('applying qustions to README.md..');
      //message in command line to show readme is being generated
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
      //calling writeToFile function where README.md is destination file and logs info using generateMarkdown file
    });
  }


// Function call to initialize app
init();
