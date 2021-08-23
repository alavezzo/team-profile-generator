const inquirer = require('inquirer')
const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')
const generateHTML = require('../src/page-template')
const { writeFile, copyFile } = require('../utils/generate-page')

function Team () {
    this.manager;
    this.engineers = [];
    this.interns = [];
}

Team.prototype.addManager = function() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the team Manager's name",
            name: "name"
        },
        {
            type: "input",
            message: "Enter the manager's Employee ID",
            name: "id"
        },
        {
            type: "input",
            message: "Enter the manager's email address.",
            name: "email"
        },
        {
            type: "input",
            message: "Enter the manager's office number.",
            name: 'officeNumber'
        }
        ]).then(({name, id, email, officeNumber}) => {
            this.manager = new Manager (name, id, email, officeNumber)
            this.confirmAdd();
        })
};

 Team.prototype.confirmAdd = function() {
    inquirer.prompt([
{
    type: "list",
    message: "Would you like to add a member to the team?",
    name: "teamMember",
    choices: ['Add Engineer', 'Add Intern', 'Finished building team']
}
]).then(data => {
    if (data.teamMember === 'Add Engineer') {
        this.addEngineer();
    } else if (data.teamMember === 'Add Intern') {
        this.addIntern();
    } else {
        console.log('Your team is complete! Visit /dist/index.html to see the finished product!')
        let pageHTML = generateHTML(this)
        writeFile(pageHTML).then(writeFileResponse => {
                console.log(writeFileResponse);
                return copyFile();
            })
            .then(copyFileResponse => {
                console.log(copyFileResponse);
            })
            .catch(err => {
                console.log(err);
            })
    };
})
}

Team.prototype.addEngineer = function () {
    return inquirer.prompt([
    {
        type: "input",
        message: "Enter the engineer's name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the engineer's Employee ID",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the engineer's email address.",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the engineer's github username.",
        name: 'github'
    }
    ]).then(({name, id, email, github}) => {
        this.engineers.push(new Engineer (name, id, email, github))
        this.nextTeamMate();
    })
};

Team.prototype.addIntern = function () {
    return inquirer.prompt([
    {
        type: "input",
        message: "Enter the intern's name",
        name: "name"
    },
    {
        type: "input",
        message: "Enter the intern's Employee ID",
        name: "id"
    },
    {
        type: "input",
        message: "Enter the intern's email address.",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the intern's school.",
        name: "school"
    }
    ]).then(({name, id, email, school}) => {
        this.interns.push(new Intern (name, id, email, school))
        this.nextTeamMate();
    })
}

Team.prototype.nextTeamMate = function() {
        this.confirmAdd()
    };

Team.prototype.buildTeam = function() {
    this.addManager()
};

module.exports = Team