// A class is a template to describe an object
// You never have a class that's plural in name
class Animal {
    // the method that runs when you type new, like a function but methods are functions attached to objects
    constructor(name,dob) {
        this.isAlive = true;
        this.name = name;
        this.dob = dob;
    }

    breathe () {
        return "In...and out.";
    }

    sleep () {
        return "zzzzzzzz";
    }

    eat (food) {
        // write a method that takes good as an argument
        return `I've just eaten ${food}.`
    }

}

// instantiation of class
const ollie = new Animal("ollie", "12/11/64");
const ellen = new Animal("ellen", "02/01/97");
console.log(ollie.name);
console.log(ollie.dob);
console.log(ollie.breathe());
console.log(ellen.eat("bread"));
console.log(ellen.sleep());

// changing part of an already existing object
ollie.dob = "12/11/78";
console.log(ollie.dob);


