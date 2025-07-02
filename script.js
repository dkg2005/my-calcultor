const display = document.getElementById('display');

function appendToDisplay(val){
    if(display.innerText === '0'){
        display.innerText = val;
    }
    else display.innerText += val;
    adjustFontSize();
}

function calculate(){
    try {
        display.innerText = eval(display.innerText);
    } catch (error) {
        alert('Invalid expression');
        clearDisplay();
    }
    adjustFontSize();
}

function clearDisplay(){
    display.innerText = '0';
    adjustFontSize();
}

function deleteLast(){
    if(display.innerText.length > 1){
        display.innerText = display.innerText.slice(0, display.innerText.length - 1);   // for deleting last character we can also use slice(0, -1)
    } else {
        display.innerText = '0';
    }
    adjustFontSize();
}

function adjustFontSize() {
    const length = display.innerText.length;

    if (length <= 13) {
        display.style.fontSize = '1.7rem';
    } else if (length <= 18) {
        display.style.fontSize = '1.3rem';
    } else if (length > 15) {
        alert('Expression too long, resetting to 0');
        display.innerText = '0'; 
        display.style.fontSize = '1.2rem';
    }
}

adjustFontSize();