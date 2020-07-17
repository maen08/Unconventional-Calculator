const defaltValue = 0;
let prevAns = defaltValue;

  //get the user input from the frontend form

function getNum(){
    return parseInt(userInput.value)  // it must be integer
}

function generalOperator(operator, firstNum, secondNum){
    const enteredNum = getNum();
    const existingAns = prevAns;
    generalDescription = `${firstNum} ${operator} ${secondNum}`;
    outputResult(prevAns, generalDescription); 
}

/* 
    the function before apply the generalOperator was:

    function addition(){
        const enteredNum = getNum();
        const existingAns = prevAns;
        prevAns += enteredNum;
        calcStatement = `${existingAns} + ${enteredNum}`;
        outputResult(prevAns, calcStatement)
    }
*/

function addition(){
    prevAns += enteredNum;
    generalOperator('+', existingAns, enteredNum);
}

function subtraction(){
    prevAns -= enteredNum;
    generalOperator('-', existingAns, enteredNum);
}

function multiplication(){
    prevAns *= enteredNum;
    generalOperator('*', existingAns, enteredNum);
}

function division(){
    prevAns /= enteredNum;
    generalOperator('/', existingAns, enteredNum);

}

addBtn.addEventListener('click', addition);
multiplyBtn.addEventListener('click', multiplication);
subtractBtn.addEventListener('click', subtraction);
divideBtn.addEventListener('click', division);