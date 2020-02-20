export default class Animal {
    constructor(name,age,species,height,placeOfOrigin) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }

    get description() {
        return `The ${this.name} is ${this.age} years old, is part of the ${this.species} species and is from ${this.placeOfOrigin}.`
    }

    get html() {
        return `<article>
        <h3>${this.name}</h3>
        <p>${this.description}</p>
        </article>`
    }
}