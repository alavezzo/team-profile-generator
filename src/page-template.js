const managerCard = teamData => {
    let manager = teamData.manager
    let {name, id, email, officeNumber } = manager

    return `<div class="card col-sm-6 col-med-4 col-lg-3" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">Manager</h5>
       <p class="card-text">${name}</p>
      </div>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">Employee ID: ${id}</li>
         <li class="list-group-item">Email: <a href="#" class="card-link">${email}</a></li>
          <li class="list-group-item">Office Number: ${officeNumber}</li>
      </ul>
   </div>`
}

const engineerCard = teamData => {
    if (teamData.engineers.length > 0) { 
    let engineers = teamData.engineers
    return `
        ${engineers.map(({ name, id, email, github }) => {
        return `
            <div class="card col-sm-6 col-med-4 col-lg-3" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <p class="card-text">${name}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Employee ID: ${id}</li>
            <li class="list-group-item">Email: <a href="#" class="card-link">${email}</a></li>
            <li class="list-group-item">GitHub: <a href="#" class="card-link">${github}</a></li>
            </ul>
        </div>`;
    }).join('')}
    `
    }
}
const internCard = teamData => {
    if (teamData.interns.length > 0) { 
    let interns = teamData.interns
    return `

        ${interns.map(({ name, id, email, school }) => {
        return `
            <div class="card col-sm-6 col-med-4 col-lg-3" style="width: 18rem;">
            <div class="card-body">
            <h5 class="card-title">Intern</h5>
            <p class="card-text">${name}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">Emplyee ID: ${id}</li>
            <li class="list-group-item">Email: <a href="#" class="card-link">${email}</a></li>
            <li class="list-group-item">Education: ${school}</li>
            </ul>
        </div>`;
    }).join('')}
    `
    }
}

module.exports = teamData => {
   
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./style.css" />
        <title>Document</title>
    </head>
    <body>
    <header>
        <div class="jumbotron">
            <h1 class="display-4">MY TEAM</h1>
      </div>
    </header>
    <div class = "container">
    <div class = "row">
    ${managerCard(teamData)}
    ${engineerCard(teamData)}
    ${internCard(teamData)}
    </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
    </body>
   
    </html>
`
}


