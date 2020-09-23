const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const Team = [];

const showBanner = require("node-banner");

(async() => {
    await showBanner("Team Builder", "", "red");
    starterQuestions();
})();

function starterQuestions() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter employee's name:"
        },
        {
            type: "input",
            name: "eyedee",
            message: "Enter employee's i.d.:"
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee's email:"
        },
        {
            type: "checkbox",
            name: "role",
            message: "Choose the employee's role:",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        }
    ]).then(function(initialInfo){
        if (initialInfo.role == "Engineer") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "Enter your GitHub username:"
                },
                {
                    type: "checkbox",
                    name: "addMember",
                    message: "Would you like to add another team member?",
                    choices: [
                        "yes",
                        "no"
                    ]
                }
            ]).then(function(res){
                initialInfo.github = res.github;
                //Engineers.push(initialInfo);

                const engineer = new Engineer(initialInfo.name, initialInfo.eyedee, initialInfo.email, initialInfo.github);
                
                Team.push(engineer);

                if (res.addMember == "yes") {
                    starterQuestions();
                } else {
                    fs.writeFile(outputPath, render(Team), function(err){
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
        } else if (initialInfo.role == "Intern") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "Enter the school you are attending:"
                },
                {
                    type: "checkbox",
                    name: "addMember",
                    message: "Would you like to add another team member?",
                    choices: [
                        "yes",
                        "no"
                    ]
                }
            ]).then(function(res){
                initialInfo.school = res.school;

                const intern = new Intern(initialInfo.name, initialInfo.eyedee, initialInfo.email, initialInfo.school);
                Team.push(intern);

                if (res.addMember == "yes") {
                    starterQuestions();
                } else {
                    fs.writeFile(outputPath, render(Team), function(err){
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
        } else if (initialInfo.role == "Manager") {
            inquirer.prompt([
                {
                    type: "input",
                    name: "office",
                    message: "Enter your office number:"
                },
                {
                    type: "checkbox",
                    name: "addMember",
                    message: "Would you like to add another team member?",
                    choices: [
                        "yes",
                        "no"
                    ]
                }
            ]).then(function(res){
                initialInfo.office = res.office;

                const manager = new Manager(initialInfo.name, initialInfo.eyedee, initialInfo.email, initialInfo.office);
                Team.push(manager);
            
                if (res.addMember == "yes") {
                    starterQuestions();
                } else {
                    fs.writeFile(outputPath, render(Team), function(err){
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
        }
    });
}

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
