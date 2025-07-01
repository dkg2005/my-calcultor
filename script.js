const display = document.getElementById('display');

function appendToDisplay(val){
    if(display.innerText === '0'){
        display.innerText = val;
    }
    else display.innerText += val;
}

function calculate(){
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = 'Error';
    }
}

function clearDisplay(){
    display.innerText = '0';
}

function deleteLast(){
    if(display.innerText.length > 1){
        display.innerText = display.innerText.slice(0, display.innerText.length - 1);   // for deleting last character we can also use slice(0, -1)
    } else {
        display.innerText = '0';
    }
}