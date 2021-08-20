const fs = require('fs');
const inq = require('inquirer');

inq
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'locale',
            message: 'Where are you located?',
        },
        {
            type: 'input',
            name: 'bio',
            message: 'Tell us about yourself!',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn URL?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub URL?',
        }

    ])
    .then((data) => {
        
        const htmlFile = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="style.css" /><title>Generated HTML Portfolio Page</title></head><body><header>HTML Prompt Results</header><div id="name">Name : <div id="name-response">${data.name} </div></div><div id="location">Location : <div id="location-response">${data.locale} </div></div><div id="bio">Bio : <div id="bio-response">${data.bio}</div></div><div id="linkedin">LinkedIn URL : <div id="linkedin-response">${data.linkedin}</div></div><div id="github">GitHub URL : <div id="github-response">${data.github}</div></div><script src="script.js"></script></body>`;
        
        
        
        fs.writeFile('index.html', htmlFile, function () { })

    });













