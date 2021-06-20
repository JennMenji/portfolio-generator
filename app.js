// BEGINNING OF ACTUAL CODE
const inquirer = require("inquirer");
// const fs = require("fs");
// const generatePage = require("./src/page-template.js");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
  ])
  .then((answers) => console.log(answers));

// const pageHTML = generatePage(name, github);

// fs.writeFile("./index.html", pageHTML, (err) => {
//   if (err) throw err;

//   console.log("Portfolio complete! Checkout out index.html to see the output!");
// });

// NOTES AND/OR REFERENCES FOR THE BEGINNING OF NODE
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const printProfileData = (profileDataArr) => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log("================");

//   // Is the same as this...
//   profileDataArr.forEach((profileItem) => console.log(profileItem));
// };

// printProfileData(profileDataArgs);
