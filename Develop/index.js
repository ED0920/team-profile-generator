const inquirer = require("inquirer");
const fs = require("fs");
const details = [];

const generateCard = (name, id, email, contact, position) => {
  var contactLine = "";
  var icon = "";
  if (position === "Manager") {
    icon = '<i class="fas fa-mug-hot"></i>';
    contactLine = `Phone number: ${contact}`;
  } else if (position === "Engineer") {
    icon = '<i class="fas fa-glasses"></i>';
    contactLine = `GitHub: <a href="https://github.com/${contact}">${contact}</a>`;
  } else if (position === "Intern") {
    icon = '<i class="fas fa-graduation-cap"></i>';
    contactLine = `School: ${contact}`;
  }

  const html = `<div class="card">
          <div class="top-card">
            <div id="name">${name}</div>
            <div id="position">${icon} ${position}</div>
          </div>
          <div class="bottom-card">
            <div class="detail-box" id="idNum">ID:${id}</div>
            <div class="detail-box"  id="email">Email: <a href="mailto:${email}">${email}</a></div>
            <div class="detail-box"  id="github">${contactLine}</div>
          </div>
        </div>`;
  details.push(html);
};

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the team manager's emplyee ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the team manager's email address?",
  },
  {
    type: "input",
    name: "officeNum",
    message: "What is the manager's phone number?",
  },
];

const roleQuest = [
  {
    type: "list",
    name: "role",
    message: "What is the employees title or would you like to finish?",
    choices: ["engineer", "intern", "finish"],
  },
];

const engineerQuest = [
  {
    type: "input",
    name: "name",
    message: "what is the engineer's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is engineer's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "what is the engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is their GitHub Username",
  },
];

const internQuest = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's ID?",
  },
  {
    type: "input",
    name: "email",
    message: "what is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "Where did the intern go to school?",
  },
];

inquirer.prompt(managerQuestions).then((answers) => {
  generateCard(
    answers.name,
    answers.id,
    answers.email,
    answers.officeNum,
    "Manager"
  );

  callRoleQuestRecursively();
});

const callRoleQuestRecursively = () => {
  inquirer.prompt(roleQuest).then(({ role }) => {
    if (role === "finish") {
      generateHtml();
      return;
    } else if (role === "engineer") {
      inquirer.prompt(engineerQuest).then((answers) => {
        generateCard(
          answers.name,
          answers.id,
          answers.email,
          answers.github,
          "Engineer"
        );
        callRoleQuestRecursively();
      });
    } else if (role === "intern") {
      inquirer.prompt(internQuest).then((answers) => {
        generateCard(
          answers.name,
          answers.id,
          answers.email,
          answers.school,
          "Intern"
        );

        callRoleQuestRecursively();
      });
    }
  });
};

function generateHtml() {
  const html = `<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="reset.css" />
    <link rel="stylesheet" href="style.css" />
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  />
  </head>

  <body>
    <header>
      <h1 class="header">My Team</h1>
    </header>

    <main class="main">
      <div class="card-container">

        ${details.join("\n")}

        </div>
      </div>

    </main>
  </body>
</html>`;
  fs.writeFile("index.html", html, (err) =>
    err ? console.log(err) : console.log("Successfully created index.html!")
  );
}
