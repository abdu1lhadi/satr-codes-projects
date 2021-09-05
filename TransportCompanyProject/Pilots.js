const Employee = require("./Employee.js");

class Pilots extends Employee{
    constructor(name , dateOfBirth , id , idLicense){
        super(name , dateOfBirth , id)
        this.idLicense = idLicense
    }
}

module.exports = Pilots;