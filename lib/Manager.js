//class inherits from employee
//properties: officeNumber, getRole(override this one to manager)
const Employee= require('./Employee');

class Manager extends Employee
{
    constructor(name, id, email, officeNumber)
    {
        super();
        this.name= name;
        this.id= id;
        this.email= email;
        this.officeNumber= officeNumber;
    }

    //override getRole for manager
    getRole()
    {
        this.role= 'Manager';
        return this.role;
    }
    
}

module.exports= Manager;