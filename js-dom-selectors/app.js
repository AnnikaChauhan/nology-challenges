// window.onload = () => {
//     const div = document.getElementsByTagName('div')[0];
//     const orangeDiv = document.querySelector('.orange');
//     const blueDiv = document.getElementById('blue');
//     const allDivs = document.querySelectorAll('div');

//     const lastDiv = document.getElementsByTagName('div')[2];
//     // adds a class of green to the element
//     lastDiv.classList += "green";
//     console.log(allDivs);

//     allDivs.forEach((div) => {
//         div.style.border = '10px solid black';
//     })
    
//     div.style.backgroundColor = 'aquamarine';
//     orangeDiv.style.backgroundColor = 'orange';
//     blueDiv.style.backgroundColor = 'blue';

//     orangeDiv.innerHTML = "<p>Sneaky JS text</p>";
//     orangeDiv.innerHTML += "<p>More text</p>";
// }

// Mini challenge 1:
    // Make a shopping list of items
    // Make every other item in the list present with bold text
    // Make the font size increase as the list goes down

window.onload = () => {
    const allDivs = document.querySelectorAll('div');

    for(let i = 0; i < allDivs.length; i++){
        if(i % 2 == 0){
            allDivs[i].style.fontWeight = 'bold';
        }
        allDivs[i].style.fontSize = (12*(i+1)) + 'px';
    }

    const dice = document.querySelector('.dice');
    const randomNumber = Math.ceil(Math.random() *6);
    dice.style.fontSize = '30px';
    dice.innerHTML = `<h1>${randomNumber}</h1>`;
}