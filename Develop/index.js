const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
    .prompt({
        message: "Enter your GitHub username:",
        name: "username"
    })
    .then(function ({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;

        axios.get(queryUrl).then(function (res) {
            console.log(res.data.avatar_url);
            const image = res.data.avatar_url;
            const imageToHTML = `
        <div>
        <img class="bio-image" style="width:400px;height:500px;" src="${image}">
        </div>`;
            fs.writeFile("index.html", imageToHTML, function (err) {
                if (err) {
                    throw err;
                }

            })
        });
    });
