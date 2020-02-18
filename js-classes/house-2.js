class House {
    constructor(occupants, rooms, roof, windows) {
        this.occupants = occupants;
        this.rooms = rooms;
        this.roof = roof;
        this.windows = windows;
    }
    
    shelter() {
        return "I provide warmth and shelter to my occupants.";
    }
    createBill(billType, amount) {
        return `Your ${billType} bill amounts to £${amount}.`;
    }
    demolish() {
        this.occupants = 0;
        this.rooms = 0;
        this.roof = "";
        this.windows = 0;
    }
    rebuild(occupants, rooms, roof, windows) {
        constructor(occupants, rooms, roof, windows);
    }
    addHousemate(person) {
        this.occupants.push(person);
    }
    removeHousemate(name) {
        this.occupants = this.occupants.filter(person => person.name !== name);
    }
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const people = [];
people.push(new Person("Andy", 26));
people.push(new Person("Nasir", 21));
people.push(new Person("Stephen", 27));
people.push(new Person("Ji", 13));
const mansion = new House(people, 17, "Expensive", 328);
mansion.addHousemate(new Person("Enrique", 24));
mansion.removeHousemate("Stephen");
console.log(mansion);