class Wasp {
    constructor(type, startPoints){
        this.type = type;
        this.startPoints = startPoints;
    }

    hit(){
        if(this.type === 'queen'){
            this.startPoints -= 7;
        } else if (this.type === 'worker'){
            this.startPoints -= 10;
        } else if (this.type === 'drone'){
            this.startPoints -= 12;
        }
        return this.startPoints;
    }

    //this currently does nothing but would be great

    get html() {return `<div class="wasp"><h3>${this.type}</h3><h4>${this.startPoints}</h4></div>`}
}

export default Wasp;