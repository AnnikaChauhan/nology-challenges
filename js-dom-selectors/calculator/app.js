window.onload = () => {
    const firstNumber = document.getElementById('firstNumber');
    const secondNumber = document.getElementById('secondNumber');
    const dropdown = document.querySelector('select');
    const submit = document.getElementById('equals');
    const answer = document.querySelector('.answer');

    //inputs: first and second number and operator
    // return answer

    const calculate = (firstNumber,operator,secondNumber) => {
        const firstFloat = parseFloat(firstNumber);
        const secondFloat = parseFloat(secondNumber);
        switch (operator) {
            case "+":
                return firstFloat + secondFloat;
            case "-":
                return firstFloat - secondFloat;
            case "/":
                return firstFloat / secondFloat;
            case "*":
                return firstFloat * secondFloat;
        }
    }

    submit.addEventListener("click", (event) => {
        event.preventDefault();
        console.log('click');
        const result = calculate(firstNumber.value, dropdown.value, secondNumber.value);
        answer.innerHTML = result;
    })
}

