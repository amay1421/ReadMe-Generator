// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let selectedBadge = '';

  if(license === 'GNU AGPLv3') {
    selectedBadge =  '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'
  }

  switch (license) {
    case "GNU AGPLv3": selectedBadge =  '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'; break;
    case "GNU GPLv3": selectedBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`; break;
    case "GNU LGPLv3":
    case "Mozilla Public License 2.0":
    case "Apache License 2.0":
    case "MIT License":
    case "Boost Software License 1.0":
    case "The Unlicense":
      }

  return selectedBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return   `# ${data.repoTitle}
    
  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
 
 ## Credits
 
 ${data.contribution}

 ## License

 ${data.license}

 ## Badges 
 ${renderLicenseBadge(data.license)}

 ## Tests
 ${data.test}

 ## Questions
 ${data.inquiries}`;
}

module.exports = generateMarkdown;
