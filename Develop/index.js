const inquirer = require("inquirer");
const fs = require("fs");

const mangerQuestions = [
  {
    type: "input",
    name: "Name",
    message: "What is the team manager's name?",
  },
  {
    type: "input",
    name: "idNum",
    message: "What is the team manager's emplyee ID?",
  },
  {
    type: "input",
    name: "What is the team manager's email address?",
    message: "email",
  },
  {
    type: "input",
    name: "officeNum",
    message: "What is the team mangers number?",
  },
]
const roleQuest = [
  {
    type: "choice",
    name: "role",
    message: "What is the employees title?",
    choice: ["engineer", "intern"],
  }
];
const engineerQuest= [
  {
    type: "input",
    name: "name",
    message: "what is the engineer's name?",
  },
  {
    type: "input",
    name: "idNum",
    message: "What is engineer's ID?",
  },
  {
    type: "input",
    name: "github",
    message: "What is their GitHub Username",
  },
];

const interQuest = [
    {
        type: "input",
        name: "name",
        message: "What is the inter's name?",
      },
      {
        type: "input",
        name: "idNum",
        message: "What is the intern's ID?",
      },
      {
        type: "input",
        name: "What is their school?",
        message: "",
      },
    ];
]
