const inquirer = require("inquirer");
const fs = require("fs");
const api = require("./utils/api");
const markDown = require("./utils/generateMarkdown");
// this var holds all questions prompts and writes answers to the index.js
const questions = [
    inquirer.prompt([{
        type: "input",
        message: "What is your Github username?",
        name: "username"
    }]).then(answers => {
        // answers is a variable that holds new html elements. Uses template literals with dot notation to insert user input 
        const bioAnswers = `
       <div>
       <p>
       <h2 class="username" style="color:pink;">${answers.username}</h2>
       <p class="location">${answers.location}</p>
       <p class="email">${answers.email}</p>
       </p>
    </div>
  `;
        // within main code block, index.html is created and the html elements and contents are inserted via bioanswers variable
        fs.writeFile("index.html", bioAnswers, () => console.log("File written"));
    }),
];

function writeToFile(fileName, data) {
}

function init() {

}

init();
// sample axios call grabbed from Day 3 activity 29
// inquirer
//   .prompt({
//     message: "Enter your GitHub username:",
//     name: "username"
//   })
//   .then(function({ username }) {
//     const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

//     axios.get(queryUrl).then(function(res) {
//       const repoNames = res.data.map(function(repo) {
//         return repo.name;
//       });

//       const repoNamesStr = repoNames.join("\n");

//       fs.writeFile("repos.txt", repoNamesStr, function(err) {
//         if (err) {
//           throw err;
//         }

//         console.log(`Saved ${repoNames.length} repos`);
//       });
//     });
//   });
