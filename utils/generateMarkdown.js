// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  if (license === "N/A") 
  {
    return "";
  }
  if (license === "Apache 2.0") 
  {
    return `[![License Apache 2.0](https://img.shields.io/badge/License-Apache2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } 
  else if (license === "GNU") 
  {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/lgpl-3.0.html)`;
  } 
  else if (license === "IBM") 
  {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
  } 
  else if (license === "ISC") 
  {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  } 
  else if (license === "MIT") 
  {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)`;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) 
{
  if (license === "N/A") 
  {
    return "";
  }
  if (license === "Apache 2.0") 
  {
    return `[https://opensource.org/licenses/Apache-2.0]`;
  } 

  else if (license === "GNU") 
  {
    return `[https://opensource.org/licenses/lgpl-3.0.html]`;
  } 

  else if (license === "IBM") 
  {
    return `[https://opensource.org/licenses/IPL-1.0]`;
  }

  else if (license === "ISC") 
  {
    return `[https://opensource.org/licenses/ISC]`;
  } 

  else if (license === "MIT") 
  {
    return `[https://opensource.org/licenses/MIT]`;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `${renderLicenseLink(license)}`
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## Project Title
  ${data.projectName}

  ${renderLicenseBadge(data.license)} 

  ## Project Description
  ${data.projectDesc}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License Badge](#license)
  * [Contributions](#contributions)
  * [Testing](#testing)
  * [Questions](#questions)
   
  ## Installation
  ${data.projectInst}

  ## Usage
  ${data.projectUsage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributions
  ${data.projectCont}

  ## Testing
  ${data.projectTest}

  ## Questions
  ${data.projectQuest}
`;
}

module.exports = generateMarkdown;
