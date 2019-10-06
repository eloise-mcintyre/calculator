let oneBtn = document.getElementById('one');
let twoBtn = document.getElementById('two');
let threeBtn = document.getElementById('three');
let fourBtn = document.getElementById('four');
let fiveBtn = document.getElementById('five');
let sixBtn = document.getElementById('six');
let sevenBtn = document.getElementById('seven');
let eightBtn = document.getElementById('eight');
let nineBtn = document.getElementById('nine');
let zeroBtn = document.getElementById('zero');

let decimalBtn = document.getElementById('decimal');
let cancelBtn = document.getElementById('cancel');
let divideBtn = document.getElementById('divide');
let subtractBtn = document.getElementById('subtract');
let addBtn = document.getElementById('add');
let equalsBtn = document.getElementById('equals');
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
















// let input = [];
// let total = 0;
// let temp = '';

//let buttonArr = document.querySelectorAll("button");

//for (i = 0; i < buttonArr.length; i++) {
   // buttonArr[i].addEventListener('click', displayFunc)
   // }



//    document.addEventListener('click', function() {
//     let val = document.getElementById("display").value
//     document.getElementById("display").value = e.target.innerHTML;
//     function isNumber(val) {
    
//         if (!isNaN(val) || val === '.') {
//             temp += val;
//             document.querySelector("display").val(temp.substring(0,10))
//         } else if (val === 'C') {
//             temp = '';
//             document.querySelector("display").val('')
//         } else if (val === 'x') {
//             input.push(temp);
//             input.push('*');
//             temp = '';
//         } else if (val === '/') {
//             input.push(temp);
//             input.push('/');
//             temp = '';
//         } else if (val === '=') {
//             input.push(temp);
//             let firstNum = Number(input[0]);
//             for (var i = 1; i < entries.length; i++) {
//                 let secondNum = Number(entries[i+1])
//                 let mathOp = input[i];
                
//                 if (mathOp === '+') 
//                 { firstNum += secondNum; 
//                 } else if (mathOp === '-') { firstNum -= secondNum; 
    
//                 } else if (mathOp === '*') { firstNum *= secondNum; 
//                 } else if (mathOp === '/') { firstNum /= secondNum; }
                
//                 i++;
//               }
        
//          }
//     }
// })




// function numberThings(val) {
//     if (val === 'X') {
//         input.push('*')
//     }
//     console.log(input);
// }

// console.log(typeof(input));
