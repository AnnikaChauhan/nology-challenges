export default class Airport {
    constructor(name) {
        this.name = name;
        this.flights = [];
    }

    addFlight (flight) {
        this.flights.push(flight);
    }

    removeFlight (flight) {
        let flightIndex = this.flights.indexOf(flight);
        this.flights.splice(flightIndex,1); //the one means take one out of that position
    }
}