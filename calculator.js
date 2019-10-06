
let decimalBtn = document.getElementById('decimal');
let cancelBtn = document.getElementById('cancel');
let displayElement = document.getElementById('top-display');

let numBtns = document.getElementsByClassName("num-btn");
let oppBtns = document.getElementsByClassName("opp-btn");

var displayVal = '0';
var pendingVal;
var evalStringArray = [];


var updateDisplayVal = (clickObj) => {
    var btnText = clickObj.target.innerText;

    if (displayVal == '0') 
        displayVal = '';
    displayVal += btnText;
    displayElement.innerText = displayVal;
}

var calculateFunc = (clickObj) => {
    var operator = clickObj.target.innerText;
    switch (operator) {
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            evalStringArray.push(pendingVal)
            evalStringArray.push('+')
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            evalStringArray.push(pendingVal)
            evalStringArray.push('-')
            break;
        case 'X':
            pendingVal = displayVal;
            displayVal = '0';
            evalStringArray.push(pendingVal)
            evalStringArray.push('*')
            break;
        case '/':
            pendingVal = displayVal;
            displayVal = '0';
            evalStringArray.push(pendingVal)
            evalStringArray.push('/')
            break;
        case '=':
            evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayElement.innerText = displayVal;
            evalStringArray = [];
            break;
        default:
            break;
    }
}


cancelBtn.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayElement.innerHTML = displayVal;
}

decimalBtn.onclick = () => {
    if(!displayVal.includes('.'))
    displayVal += '.';
}

for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener('click', updateDisplayVal)
}

for (let i = 0; i < oppBtns.length; i++) {
    oppBtns[i].addEventListener('click', calculateFunc)
} 

