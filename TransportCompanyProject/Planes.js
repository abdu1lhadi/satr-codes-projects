const Vehicles = require("./Vehicles.js");

class Planes extends Vehicles{
    constructor(nameVehicles , manufacture , id , typeVehicles){
        super(nameVehicles , manufacture , id)
        this.typeVehicles = typeVehicles
    }
}

module.exports = Planes;