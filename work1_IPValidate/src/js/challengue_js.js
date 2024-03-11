// CREATE THE NECESSARY CONSTANTS.
const maxLenInput = 15;
const minLenInput = 7;
const maxDot = 3;

// CREATE THE NECESSARY VARIABLES.
let ipLimit = false;
let noDot = false;
let contDots = 0;
let realValue = 0;

// REGISTER THE DOM ELEMENTS.
let myForm = document.getElementById('myForm');
let ipAdd = document.getElementById('ipAdd');

// DEACTIVATE THE PASTE EVENT
ipAdd.addEventListener('paste', (e) =>{e.preventDefault();});
// DEACTIVATE THE COPY EVENT
ipAdd.addEventListener('copy', (e) =>{e.preventDefault();});
// DEACTIVATE THE CUT EVENT
ipAdd.addEventListener('cut', (e) =>{e.preventDefault();});

// ACTIVATE THE KEYPRESS EVENT
ipAdd.addEventListener('keypress', (e) =>{
    // 10. Prevent that other characters that aren't the dot and numbers are used.
    if(/\d|\./.test(e.key)){
        // 1. Avoid starting with a dot.
        if (e.key === '.' && ipAdd.value.length == 0) {
            e.preventDefault();
            showWarn('beginDotWarn','Una dirección IPv4 no inician con "."');
        } else{
            showWarn('beginDotWarn');
        }
        // 4. Avoid writing more than 3 points.
        if(e.key === '.' && noDot){
            e.preventDefault();
        }
    }else{
        e.preventDefault();
    }
});
// ACTIVATE THE INPUT EVENT
ipAdd.addEventListener('input', (e) => {
    contDots = ipAdd.value.match(/\./g) ? ipAdd.value.match(/\./g).length : 0;
    /*
        4. Avoid writing more than 3 dots.
        7. Verify that there are no consecutive dots.
    */
    if(contDots>maxDot || ipAdd.value.match(/\.\.$/)){
        ipAdd.value = ipAdd.value.slice(0, -1);
        showWarn('dotWarn','Una dirección IP tiene específicamente 3 puntos, los cuales no pueden ser consecutivos');
        noDot=true;
    }
    else{
        showWarn('dotWarn');
        noDot=false;
    }
    // 2. IPv4 Maximum Limit
    if(ipAdd.value.length >= maxLenInput){
        ipAdd.value = ipAdd.value.slice(0, 15);
        showWarn('maxIpWarn');
    }else{
        showWarn('maxIpWarn',`Para conseguir la máxima longitud restan ${maxLenInput-ipAdd.value.length} caracteres.`);
    }
    // 3. IPv4 minimum Limit
    if(ipAdd.value.length<minLenInput) {
        showWarn('minIpWarn',`Para conseguir la mínima longitud restan ${minLenInput-ipAdd.value.length} caracteres.`);
    }else{
        showWarn('minIpWarn');
    }
});

// CREATE A FUNCTION THAT SHOW A WARNING.
function showWarn(idWarn,warnMessage){
    // Check if the warning is displayed and delete.
    const existWarn = document.querySelector(`#myForm #${idWarn}`);
    if(existWarn){
        existWarn.remove();
    }
    // Check if a message exists.
    if(warnMessage){
        // Create a new span element.
        let newSpanWarn=document.createElement('span');
        // Put the identifier to the warning message.
        newSpanWarn.id=idWarn;
        // Put the message style.
        newSpanWarn.style.marginInline='30px';
        newSpanWarn.style.marginTop='10px';
        newSpanWarn.style.display='block';
        newSpanWarn.style.fontFamily='Times New Roman';
        newSpanWarn.style.fontSize='1.5vw';
        newSpanWarn.style.maxWidth='100%';
        newSpanWarn.style.color='rgb(144,144,52)';
        // Put the warning message.
        newSpanWarn.innerHTML=warnMessage;
        // Put the span element into the form element.
        myForm.appendChild(newSpanWarn);
    }
}

// Call the showWarn function to present the initial warning.
showWarn('maxIpWarn','Las direcciones IP tienen máximo 15 caracteres');
showWarn('minIpWarn','Las direcciones IP tienen mínimo 7 caracteres');