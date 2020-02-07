const onload = () => {
    const $firstDiv = $('div').first();
    const $newDiv = $('<div></div>').text('new div');
    
    for (let i = 0; i < 16 ; i++){
        // Write the code to create 16 divs and give each a random background color
        if(i < 16){
            let randomNum1 = Math.floor(Math.random() * 20);
            let randomNum2 = Math.floor(Math.random() * 20);
            let randomNum3 = Math.floor(Math.random() * 20);
            // this is a random hex code generator off the internet
            //let randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
            const $newDiv = $('<div></div>').css("background-color",`rgb(${randomNum1 * i * 10},${randomNum2 * i * 5}, ${randomNum3 * i})`);
            $('section').append($newDiv);
        }
    }

    // the newDiv creates the div and the section thing adds it to the page
    //timeout does something once and interval does repeated
    const $allDivs = $('div'); //this moves to here as if its at the top it's selected all the divs at the start - but there are none at the beginning
    $allDivs.each(function(index) {
        setInterval(() => {
            //const $newDiv = $('<div></div>').text("Ma new div");
            //$('section').append($newDiv);
            $(this).fadeOut();
        }, (500 * index));
    })

    //loop, you need to NOT use the arrow function, when you use "this" you need to use a normal function "declarative function"
    $allDivs.each(function() {
        $(this).click(function() {
            $(this).addClass("green");
            $(this).text($(this).index());
        })
    });
    // $allDivs.click(() => {
    // })
}

$(onload);
