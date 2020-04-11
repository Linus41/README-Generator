const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const questionList = [{
    type: "input",
    message: "Enter your GitHub username:",
    name: "username"
},
{
    type: "input",
    message: "What is the title of your project?",
    name: "title",
},
{
    type: "input",
    message: "Please enter project description",
    name: "description",
},
{
    type: "input",
    message: "Are there any required installations for the project?",
    name: "installation",
},
{
    type: "input",
    message: "What is the usage?",
    name: "usage",
},
{
    type: "input",
    message: "Would you like to include a license?",
    name: "license"
},
{
    type: "input",
    message: "Who is contributing to this project?",
    name: "contributing"
},
{
    type: "input",
    message: "Are there any tests?",
    name: "tests"
},
{
    type: "input",
    message: "Are there any questions?",
    name: "questions",
}];

inquirer
    .prompt(questionList)

    .then(function (answers) {
        console.log(answers);
        let data = { ...answers }
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function (res) {
            console.log(res.data);
            const email = res.data.email;
            console.log(email);
            const image = res.data.avatar_url;
            // const image = "https://avatars1.githubusercontent.com/u/59541141?v=4";
            // const badge = `https://img.shields.io/badge/2020-green`;
            const infoToREADME = `
# Unit 09 Node.js and ES6+ Homework: Good README Generator

![picture of Linus Schief](${image})

${email}

![picture of badge](https://img.shields.io/badge/2020-green) 

# Title: ${data.title}

## Description: ${data.description}

## Table of Contents: 

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributers](#contributing)
- [Tests](#tests)
- [Questions](#questions)

### Installation: ${data.installation}

### Usage: ${data.usage}

### License: ${data.license}

### Contributers: ${data.contributing}

### Tests: ${data.tests}

### Questions: ${data.questions}`;

            fs.writeFile("README.md", infoToREADME, function (err) {
                if (err) {
                    throw err;
                }
            })
        });
    })


