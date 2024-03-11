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
        // 2. Limit the Ipv4
        if(ipAdd.value.length == maxLenInput || ipLimit){
            e.preventDefault();
            showWarn('maxIp');
        }else{
            showWarn('maxIp',`Para completar la dirección restan ${maxLenInput-ipAdd.value.length} caracteres.`);
        }
    }else{
        e.preventDefault();
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
        newSpanWarn.style.marginInline='5%';
        newSpanWarn.style.marginTop='1%';
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
showWarn ('maxIp','Las direcciones IP tienen un total de 15 caracteres');