// generate license badge 
function generateLicense(license) {
  if (license !== "none"){
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return ""; 
  }
}

// function to generate markdown for README
// Must include: Table of Contents, Description, Installation, Usage, License, Contributing, Tests, Questions

function generateMarkdown(answers) {
  return `
  # ${answers.title}
  ${generateLicense(answers.license)}

  # Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description 
  ${answers.description}

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}

  ## License
  This project is licensed under ${answers.license}

  ## Contributing
  ${answers.contributing}

  ## Tests
  ${answers.tests}

  ## Questions
  If you have any questions, please feel free to reach out on my GitHub [github/${answers.github}](https://github.com/${answers.github}) or email me by clicking [here.](mailto:${answers.email})

`;
}

module.exports = generateMarkdown;
