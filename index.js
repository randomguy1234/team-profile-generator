//runs the inquirer code and outputs a html file
//html file goes to dist folder(might need fs and path)

const inquirer = require('inquirer');
//const fs= require('fs');
//const path= require('path');





const askAdditionalInfo= team =>
{
    if (!team.members)
    {
        team.members= [];
    }

    return inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'Would you like to add a Engineer, Intern, or finish the team here?',
            choices: ['Engineer', 'Intern', 'Finish']     
        },
        
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter your engineer"s name.',
            when: ({option}) => 
            {
                if (option === 'Engineer')
                {
                    return true;
                }
                return false;
            }
        },
    
        {
            type: 'input',
            name: 'engineerId',
            message: 'Please enter your engineer"s id number.',
            when: ({option}) => 
            {
                if (option === 'Engineer')
                {
                    return true;
                }
                return false;
            }
        },
    
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter your engineer"s email.',
            when: ({option}) => 
            {
                if (option === 'Engineer')
                {
                    return true;
                }
                return false;
            }
           
        },
    
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Please enter your engineer"s github username.',
            when: ({option}) => 
            {
                if (option === 'Engineer')
                {
                    return true;
                }
                return false;
            }
            
        },

        {
            type: 'input',
            name: 'internName',
            message: 'Please enter your intern"s name.',
            when: ({option}) => 
            {
                if (option === 'Intern')
                {
                    return true;
                }
                return false;
            }
        },
    
        {
            type: 'input',
            name: 'internId',
            message: 'Please enter your intern"s id number.',
            when: ({option}) => 
            {
                if (option === 'Intern')
                {
                    return true;
                }
                return false;
            }
            
        },
    
        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter your intern"s email.',
            when: ({option}) => 
            {
                if (option === 'Intern')
                {
                    return true;
                }
                return false;
            }
            
        },
    
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter your intern"s school.',
            when: ({option}) => 
            {
                if (option === 'Intern')
                {
                    return true;
                }
                return false;
            }
        },

        {
            type: 'confirm',
            name: 'addMember',
            message: 'Would you like to add another team member?'
        }
    ]).then(member =>
        {
            team.members.push(member);
            if (member.addMember)
            {
                return askAdditionalInfo(team);
            }
            return member;
        });
}

const askManagerInfo= () =>
{
    //console log to give welcome message to user
    console.log(`
        ===========================
        Welcome to the Team Profile 
        Generator.

        We will start with asking 
        for the manager's
        information.
        ===========================
            `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter your name.'
        },
    
        {
            type: 'input',
            name: 'managerId',
            message: 'Please enter your id number.'
        },
    
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter your email.'
        },
    
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Please enter your office number.'
        },
     
    ])
}


askManagerInfo()
    .then(askAdditionalInfo)
    .then(team =>
        {
            console.log(team);
        })
    .catch(err =>
        {
            console.log(err);
        });