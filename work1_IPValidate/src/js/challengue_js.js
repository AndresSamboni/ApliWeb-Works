// CREATE THE NECESSARY CONSTANTS.
const maxLenInput = 15;
const minLenInput = 7;
const maxDot = 3;

// CREATE THE NECESSARY VARIABLES.
let ipLimit = false;
let noDot = false;
let contPoints = 0;
let realValue = 0;

// REGISTER THE DOM ELEMENTS.
let myForm = document.getElementById('myForm');
let ipAdd = document.getElementById('ipAdd');

// ACTIVATE THE KEYPRESS EVENT
ipAdd.addEventListener('keypress', (e) =>{
    // 10. Prevent that other characters that aren't the dot and numbers are used.
    if(/\d|\./.test(e.key)){

    }else{
        e.preventDefault();
    }
});