//once a wasp has 0 points
    //use a query selector to find that wasp in the PHYSICAL SPACE
    //use a splice to remove that wasp from the IMAGINARY SPACE (the wasps array from class)

import waspData from "./data.js";
import Wasp from "./Wasp.js";

const gameStartUp = () => {
    const nest = document.createElement("SECTION");
    let wasps = waspData.map((wasp) => new Wasp(wasp.type, wasp.startPoints));
    let waspHTML = wasps.map(wasp => (wasp.html));
    //attempt to rerender without the commas
    //let waspHTML2 = wasps.map(wasp => wasp);
    //let waspIndividual = waspHTML2.forEach(wasp => wasp.html);
    //console.log(waspIndividual);

    const produceGamePieces = () => {
        nest.innerHTML = waspHTML;
        document.body.appendChild(nest);
    }

    const produceButton = () => {
        const button = document.createElement("BUTTON");
        button.setAttribute('id','button');
        button.innerHTML = "HIT";
        document.body.appendChild(button);
    }

    produceGamePieces();
    produceButton();

    const physicalArray = document.querySelectorAll('.wasp');

    const removeZeros = (wasp, waspNumber) => {
        if(wasp.startPoints < 1){
            console.log(`Remove Wasp ${waspNumber} from the array!`);
            physicalArray[waspNumber].style.backgroundColor = 'red';
        }
    }

    const generateHit = () => {
        let getRandomWasp = Math.floor(Math.random() * (wasps.length - 1));
        if (wasps[getRandomWasp].type === 'drone'){
            wasps[getRandomWasp].startPoints -= 12;
        } else if (wasps[getRandomWasp].type === 'worker'){
            wasps[getRandomWasp].startPoints -= 10;
        } else if (wasps[getRandomWasp].type === 'queen'){
            wasps[getRandomWasp].startPoints -= 8;
        }
        wasps[getRandomWasp].startPoints = wasps[getRandomWasp].startPoints;
        console.log(wasps[getRandomWasp]);
        removeZeros(wasps[getRandomWasp], getRandomWasp);
    }

    document.getElementById('button').onclick = () => {
        generateHit();
    }
}

window.onload = gameStartUp;