import Airport from "./Airport.js";
import Flight from "./Flight.js";
import Passenger from "./Passenger.js";

const leedsBradford = new Airport("Leeds Bradford");
const guatemalaFlight = new Flight(
    "GUAT1",
    "1400h",
    15,
    "Guatemala"
);
const tokyoFlight = new Flight(
    "TOK1",
    "1700h",
    15,
    "Tokya"
);
const australiaFlight = new Flight(
    "AUS1",
    "2100h",
    15,
    "Australia"
);

const Annika = new Passenger("Annika");
const Sophie = new Passenger("Sophie");

leedsBradford.addFlight(guatemalaFlight);
leedsBradford.addFlight(tokyoFlight);
leedsBradford.addFlight(australiaFlight);
console.log(leedsBradford.flights); //this won't show all three as the console is trying to be smart and evaluate including the bottom line

leedsBradford.removeFlight(australiaFlight);
console.log(leedsBradford.flights);

//debugger;

tokyoFlight.addPassenger(Annika);
guatemalaFlight.addPassenger(Sophie);
console.log(tokyoFlight.passengers);

console.log(leedsBradford.flights.passengers);

//console log all passengers on all flights at the airport

for (let i=0; i < leedsBradford.flights.length; i++){
    console.log(leedsBradford.flights[i].passengers);
}