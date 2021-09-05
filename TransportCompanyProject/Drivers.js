const Employee = require("./Employee.js");

class Drivers extends Employee{
    constructor(name , dateOfBirth , id , idLicense){
        super(name , dateOfBirth , id)
        this.idLicense = idLicense
    }
}

module.exports = Drivers;