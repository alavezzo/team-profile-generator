const inquirer = require('inquirer')

const promptUser = () => {
    return inquirer.prompt([
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
        ])
};

const promptAddTeamMember = () => {
    return inquirer.prompt([
{
    type: "list",
    message: "Would you like to add a member to the team?",
    name: "teamMember",
    choices: ['Add Engineer', 'Add Intern', 'Finished building team']
}
])
};

const promptEngineer = () => {
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
    ])
}

const promptIntern = () => {
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
        name: 'school'
    }
    ])
}

const promptNextTeamMate = () => {
    promptAddTeamMember()
    .then(data => {
        if (data.teamMember === 'Add Engineer') {
            promptEngineer().then(promptNextTeamMate)
        } else if (data.teamMember === 'Add Intern') {
            promptIntern().then(promptNextTeamMate)
        } else {
            console.log('Your team is complete! Visit /dist/index.html to see the finished product!')
        }
    })
}

const buildTeam = () => {
    promptUser()
    .then(promptNextTeamMate)
}

module.exports = buildTeam