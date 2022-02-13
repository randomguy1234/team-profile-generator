//class inherits from employee
//properties: school(name), getSchool(display school), getRole(override this one to intern)

const Employee = require("./Employee");

class Intern extends Employee
{
    constructor(name, id, email, school)
    {
        super();
        this.name= name;
        this.id= id;
        this.email= email;
        this.school= school;
    }

    //get school name and return it
    getSchool()
    {
        return this.school;
    }

    //override getRole for intern
    getRole()
    {
        this.role= 'Intern';
        return this.role;
    }
}

module.exports= Intern;