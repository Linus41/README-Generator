const inquirer = require("inquirer");
const fs = require("fs");
// this var holds all questions prompts and writes answers to the index.js
const questions = [
    inquirer.prompt([{
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "Where are you located?",
        name: "location"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }]).then(answers => {
        const bioAnswers = `
       <div>
       <p>
       <h2 class="username" style="color:pink;">${answers.username}</h2>
       <p class="location">${answers.location}</p>
       <p class="email">${answers.email}</p>
       </p>
    </div>
  `;
        fs.writeFile("index.html", bioAnswers, () => console.log("File written"));
    }),
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
