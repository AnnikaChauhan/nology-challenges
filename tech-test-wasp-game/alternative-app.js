//once a wasp has 0 points
    //use a query selector to find that wasp in the PHYSICAL SPACE
    //use a splice (?) to remove that wasp from the IMAGINARY SPACE (the wasps array from class)

    import waspData from "./data.js";
    import Wasp from "./Wasp.js";

    //keep an array of ones that aren't dead and maybe an array of wasps that are - to compare?

    const gameStartUp = () => {
        const nest = document.createElement("SECTION");
        let wasps = waspData.map((wasp) => new Wasp(wasp.type, wasp.startPoints));
        let waspHTML = wasps.map(wasp => (wasp.html));
        const button = document.createElement("BUTTON");
    
        const produceGamePieces = () => {
            nest.innerHTML = waspHTML;
            document.body.appendChild(nest);
        }
    
        const produceButton = () => {
            button.setAttribute('id','button');
            button.innerHTML = "HIT";
            document.body.appendChild(button);
        }
    
        produceGamePieces();
        produceButton();

        const physicalArray = document.querySelectorAll('.wasp');
    
        const removeZeros = (wasp, waspNumber) => {
            if(wasp.type === 'queen' && wasp.startPoints <1){
                console.log("All wasps to die!!");
                for(let i = 0; i < wasps.length; i++){
                    physicalArray[i].style.backgroundColor = 'orange';
                    physicalArray[i].innerHTML = 'dead';
                }
            } else if(wasp.startPoints < 1){
                console.log(`Wasp ${waspNumber} is dead!`);
                physicalArray[waspNumber].style.backgroundColor = 'red';
                physicalArray[waspNumber].innerHTML = 'dead';
                //this splice thing makes it super angry - do NOT splice, use a copied function
                //wasps.splice(waspNumber,1);
            }
        }

        const generateHit = () => {
            let getRandomWasp = Math.floor(Math.random() * (wasps.length));
            console.log(getRandomWasp);
            wasps[getRandomWasp].startPoints = wasps[getRandomWasp].hit();
            console.log(wasps[getRandomWasp]);
            physicalArray[getRandomWasp].innerHTML = `<h3>${wasps[getRandomWasp].type}</h3><h4>${wasps[getRandomWasp].startPoints}</h4>`;
            removeZeros(wasps[getRandomWasp], getRandomWasp);
        }
    
        document.getElementById('button').onclick = () => { generateHit() }
    }
    
    window.onload = gameStartUp;