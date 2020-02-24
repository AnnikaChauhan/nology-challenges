export default class Flight {
    constructor(code, 
        departureTime, 
        duration, 
        destination){
        this.code = code;
        this.departureTime = departureTime;
        this.duration = duration;
        this.destination = destination;
        this.passengers = [];
    }

    addPassenger(passenger) {
        this.passengers.push(passenger);
    }
}