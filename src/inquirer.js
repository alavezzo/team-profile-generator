const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "Employee ID",
            name: "id"
        },
        {
            type: "input",
            message: "Employee email?",
            name: "email"
        }
        ])
};