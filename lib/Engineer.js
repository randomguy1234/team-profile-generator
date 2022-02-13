//class inherits from employee
//properties: github(username), getGithub(display and give github link), getRole(override this one to engineer)

const Employee= require('./Employee');

class Engineer extends Employee
{
    constructor(name, id, email, github)
    {
        super();
        this.name= name;
        this.id= id;
        this.email= email;
        this.github= github;
    }

    //get github username and display it
    getGithub()
    {
        return this.github;
    }

    //override getRole for engineer
    getRole()
    {
        this.role= 'Engineer';
        return this.role;
    }
}

module.exports= Engineer;