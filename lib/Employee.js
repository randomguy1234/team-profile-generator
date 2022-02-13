//parent class object, other 3 classes inherit methods from here
//properties to define: name, id, email, getName, getId, getEmail, getRole

class Employee
{
    //set employee name, employee id, email address
    constructor(name, id, email)
    {
        this.name= name;
        this.id= id;
        this.email= email;
    }

    //get name property and returns it
    getName()
    {
        return this.name;
    }

    //get id property and returns it
    getId()
    {
        return this.id;
    }

    //get email property and returns it
    getEmail()
    {
        return this.email;
    }

    //get the role of the person and return it
    getRole()
    {
        this.role= 'Employee';
        return this.role;
    }
    
}

module.exports= Employee;