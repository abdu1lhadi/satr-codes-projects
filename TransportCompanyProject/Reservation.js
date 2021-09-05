const Cars = require("./Cars.js");
const Planes = require("./Planes.js");
const Pilots = require("./Pilots.js");
const Drivers = require("./Drivers.js");

class Reservation {
    constructor( reservationDate, employeeId , vehiclesId ,reservationID){
        this.reservationDate = reservationDate
        this.employeeId = employeeId
        this.vehiclesId = vehiclesId
        this.reservationID = reservationID
    }   
}

//list cars
const car1 = new Cars("Camry","Toyota", 1 ,"car")
const car2 = new Cars("Corolla","Toyota", 2 ,"car")
const car3 = new Cars("Ferrari","Ferrari", 3 ,"car")
//list planes
const plane1 = new Planes("Boeing","Boeing", 4 ,"plane")
const plane2 = new Planes("Airbus","Airbus", 5 ,"plane")

let vehiclesList = [car1 , car2 , car3 , plane1 , plane2]

//list employees
const pilot1 = new Pilots('hadi', '01/11/1989' , 11111 , "pilot")
const pilot2 = new Pilots('ali', '01/05/1980' , 22222 , "pilot")
const driver1 = new Drivers('ahmed', '01/01/1979' , 33333 , "driver")
const driver2 = new Drivers('mohammed', '01/07/1995' , 44444 , "driver")

let employeesList = [pilot1 , pilot2, driver1 , driver2]

//Reservation
const reservation1 = new Reservation("01/09/2021", 11111 , 4 , 12345)
const reservation2 = new Reservation("05/05/2021", 22222 , 2 , 15456)
const reservation3 = new Reservation("13/02/2021", 33333 , 1 , 56897)
const reservation4 = new Reservation("20/06/2021", 44444 , 4 , 45784)

function reservationList(reservation){
    
    for(let i = 0 ; i < employeesList.length ; i++){
        if(employeesList[i].id === reservation.employeeId && employeesList[i].idLicense == "pilot"){
            for(let j = 0; j < vehiclesList.length ; j++){
                if(vehiclesList[j].id === reservation.vehiclesId && vehiclesList[j].typeVehicles == "plane")
                    return reservation
                continue
            }
        }else if(employeesList[i].id === reservation.employeeId && employeesList[i].idLicense == "driver"){
            for(let d = 0; d < vehiclesList.length ; d++){
                if(vehiclesList[d].id === reservation.vehiclesId && vehiclesList[d].typeVehicles == "car")
                    return reservation
                continue
            }
        }else{
            continue
        }
    }

    return 'There is an error in the data'  
    
}

//After confirming the reservations with approval or rejection
let reservationListdone = [
    reservationList(reservation1),
    reservationList(reservation2),
    reservationList(reservation3),
    reservationList(reservation4)
]

//Delete all rejected reservations from the list
let lestlist = reservationListdone.filter((v) => v !== "There is an error in the data");
console.log(lestlist)

