class House {
    constructor(occupants, rooms, roof, windows){
        this.occupants = [occupants];
        this.rooms = rooms;
        this.roof = roof;
        this.windows = windows;
    }

    shelter () {
        return `comforts and warms ${this.occupants}.`
    }

    createBill (billtype, billamount) {
        return `please pay your ${billtype} of £${billamount}.`
    }

    fallDown (event) {
        // a method that removes all occupants, rooms, the roof and the windows
        this.rooms = 0;
        return `The ${event} destroyed the ${this.roof} roof and smashed all of the ${this.windows} windows. Leaving the occupants with ${this.rooms} rooms.`
    }

    rebuild (rooms, roof, windows) {
        //recreates the destroyed parameters
        this.rooms = rooms;
        this.roof = roof;
        this.windows = windows;
        return `The new house has ${this.rooms} rooms, a ${this.roof} roof and ${this.windows} windows.`
    }

    addHousemate (newName) {
        this.occupants = this.occupants.push(newName);
    }

    removeHousemate (occupantToRemove) {
        const index= this.occupants.indexOf(occupantToRemove);
        this.occupants.splice(index,1);
    }
}

const annika = new House(10,"straw",20);
const jonny = new House(4,25,"lead",38);
console.log(annika.shelter());
//console.log(jonny.createBill('electric',120.03));
console.log(annika.fallDown("thunderstorm"));
//rebuild
console.log(annika.rebuild(4, 20, "lead",400));

//change your code so that occupants is an array of names
// add two methods:
    //one adds a new house mate
    //another removes a housemate from the house
// extension: change the array to be an array of People objects (it's own class)

annika.addHousemate('annika');
console.log(annika.occupants);