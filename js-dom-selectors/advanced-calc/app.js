window.onload = () => {

    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine");
    const zero = document.getElementById("zero");
    const equals = document.getElementById("equals");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const multiple = document.getElementById("multiply");
    const divide = document.getElementById("divide");
    const problem = document.getElementById('calc');
    const solution = document.getElementById('solution');
    const dot = document.getElementById(".");

    one.onclick = () => {
        problem.innerText += 1;
    }

    two.onclick = () => {
        problem.innerText += 2;
    }

    three.onclick = () => {
        problem.innerText += 3;
    }

    four.onclick = () => {
        problem.innerText += 4;
    }

    five.onclick = () => {
        problem.innerText += 5;
    }

    six.onclick = () => {
        problem.innerText += 6;
    }

    seven.onclick = () => {
        problem.innerText += 7;
    }

    eight.onclick = () => {
        problem.innerText += 8;
    }

    nine.onclick = () => {
        problem.innerText += 9;
    }

    zero.onclick = () => {
        problem.innerText += 0;
    }

    plus.onclick = () => {
        problem.innerText += '+';
    }

    minus.onclick = () => {
        problem.innerText += '-';
    }

    multiple.onclick = () => {
        problem.innerText += '*';
    }

    divide.onclick = () => {
        problem.innerText += '/';
    }

    dot.onclick = () => {
        problem.innerText += ".";
    }

    equals.onmousedown = () => {
        equals.style.backgroundColor = 'green';
    }

    equals.onmouseup = () => {
        equals.style.backgroundColor = '#4285f4';
    }

    equals.onclick = () => {
        const calc = problem.innerText;
        solution.innerText = calc;
        let split;

        console.log(eval(calc));

        if(calc.includes("+")){
            split = problem.innerText.split("+",2);
            console.log(split);
            const result = Number(split[0]) + Number(split[1]);
            solution.innerText = result;
        } else if(calc.includes("-")){
            split = problem.innerText.split("-",2);
            console.log(split);
            const result = Number(split[0]) - Number(split[1]);
            solution.innerText = result;
        } else if(calc.includes("*")){
            split = problem.innerText.split("*",2);
            console.log(split);
            const result = Number(split[0]) * Number(split[1]);
            solution.innerText = result;
        } else if(calc.includes("/")){
            split = problem.innerText.split("/",2);
            console.log(split);
            const result = Number(split[0]) / Number(split[1]);
            solution.innerText = result;
        }
    }
}