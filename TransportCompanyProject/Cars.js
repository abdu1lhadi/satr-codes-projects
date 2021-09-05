const Vehicles = require("./Vehicles.js");

class Cars extends Vehicles{
    constructor(nameVehicles , manufacture , id , typeVehicles){
        super(nameVehicles , manufacture , id)
        this.typeVehicles = typeVehicles
    }
}

module.exports = Cars;