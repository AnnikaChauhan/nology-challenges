console.log('hello');

class Company {
    constructor(name, infectedEmployees){
        this.name = name,
        this.infectedEmployees = infectedEmployees,
        this.trainees = [],
        this.employees = []
    }

    infect(virus){
        this.infectedEmployees += 4;
        return `The number of people infected with ${virus} is ${this.infectedEmployees}.`;
    }

    hireEmployee(employee){
        if(employee.infected) this.infectedEmployees +=1;
        this.employees.push(employee);
    }
}

const nology = new Company("nology",0);

// console.log(nology.name);
// console.log(nology.infect("coronavirus"));
// console.log(nology.infectedEmployees);

class User {
    constructor(name){
        this.name = name
    }

    breathe(){
        console.log('breathing');
    }
}

class Employee extends User {
    // 1. Constructor that gives an employee a health rating (Number), performance rating (Number), name (String)
    // 2. Method, "getInfected" that halves the health rating, takes 20 off the performance rating
    // 3. EXTENSION - Add the employee to a company. If they're infected, add one to "nfectedEmployees"
    constructor(name,healthRating,performanceRating){
        super(name);
        this.healthRating = healthRating,
        this.performanceRating = performanceRating
        this.infected = false
    }

    getInfected = () => {
        this.infected = true;
        this.healthRating /= 2;
        this.performanceRating -= 20;
    }
}

const ollie = new Employee("Ollie",8,100);
nology.hireEmployee(ollie);
console.log(ollie.name);
console.log(ollie.healthRating);
console.log(ollie.performanceRating);
ollie.getInfected();
console.log(ollie.healthRating);
console.log(ollie.performanceRating);
ollie.breathe();

