// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptQuestions = [
        {
            type: 'input',
            name: 'projectName',
            message: 'Provide project name. (Required)',
            validate: projectNameInput => 
            {
                if (projectNameInput) 
                {
                    return true;
                }   else 
                    {
                        console.log('Please enter your project name!');
                        return false;
                    }
            }
        },
        {
            type: 'input',
            name: 'projectDesc',
            message: 'Create project Description. (Required)',
            validate: projectDescInput => 
            {
                if (projectDescInput) 
                {
                    return true;
                }   else 
                    {
                        console.log('Please enter your project description!');
                        return false;
                    }
            }
        },
        {
            type: 'confirm',
            name: 'confirmToc',
            message: 'Would you like to provide a table of contents?',
            default: true  //need to handle this at Readme generation
        },
        {
            type: 'input',
            name: 'projectInst',
            message: 'Input installation instructions.',
        },
        {
            type: 'input',
            name: 'projectUsage',
            message: 'Discuss usage information.',
        },
        {
            type: "list",
            name: "license",
            message: "Please select the license you chose.",
            choices: ["N/A", "MIT", "Apache 2.0", "GNU", "ISC", "IBM"]
        },
        {
            type: 'input',
            name: 'projectCont',
            message: 'Discuss contribution guidelines.',
        },
        {
            type: 'input',
            name: 'projectTest',
            message: 'Review test instructions.',
        },
        {
            type: 'input',
            name: 'projectQuest',
            message: 'Insert questions.',
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${fileName}`, data, err => {
        if (err) {
            throw err
        };
        console.log("README has been created.")
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(promptQuestions);
};

// Function call to initialize app
init()
    .then(ReadMeAns => generateMarkdown(ReadMeAns))
    .then(NewReadMe => writeToFile("README.md", NewReadMe))
    .catch(err => {
        console.log(err);
});