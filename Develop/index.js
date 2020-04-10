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
        let data = {...answers}
        const queryUrl = `https://api.github.com/users/${data.username}`;

        axios.get(queryUrl).then(function (res) {
            console.log(res.data);
            const email = res.data.email;
            console.log(email);
            const image = res.data.avatar_url;
            const infoToHTML = `
        <div>
        <img class="bio-image" style="width:400px;height:500px;" src="${image}">
        <p class="email" style="font-size: 24px;">${email}</p>
        <h1>${data.title}</h1>
        <p>${data.description}</p>
        <div>Table of Contents
            <ol>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#usage">Usage</a></li>
                <li><a href="#license">License</a></li>
                <li><a href="#contributing">Contributers</a></li>
                <li><a href="#tests">Tests</a></li>
                <li><a href="#questions">Questions</a></li>
            </ol>
        </div>
        <p id='installation'>
        <h1>Installation: </h1>${data.installation}</p>
        <p id='usage'>
        <h1>Usage: </h1>${data.usage}</p>
        <p id='license'>
        <h1>License: </h1>${data.license}</p>
        <p id='contributing'>
        <h1>Contributers: </h1>${data.contributing}</p>
        <p id='tests'>
        <h1>Tests: </h1>${data.tests}</p>
        <p id='questions'>
        <h1>Questions: </h1>${data.questions}</p>
        </div>`;
        // make prompt to ask a series of questions and store user responses
        // make function that generates html? 

            fs.writeFile("index.html", infoToHTML, function (err) {
                if (err) {
                    throw err;
                }

            })
        });
        
    });
