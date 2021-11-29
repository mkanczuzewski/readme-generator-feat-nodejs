// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptQuestions = () => 
{
    return inquirer.prompt
    ([
        {
            type: 'input',
            name: 'projectName',
            message: 'Provide project name. (Required)',
            validate: nameInput => 
            {
                if (nameInput) 
                {
                    return true;
                }   else 
                    {
                        console.log('Please enter your project name!');
                        return false;
                    }
            },
        }
    ]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptQuestions();
