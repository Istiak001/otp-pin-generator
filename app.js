// Verification pin generator 
function getPin (){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4){
        // console.log(pin);
        return pin;
    }
    else{
        // console.log('komi geche reee... ' + pin);
        return getPin;
    }
};
// verrification pin generator display part 
function generatePin() {
    const pintus = getPin();
    document.getElementById('input-pin').value = pintus;
};
// number-pad
document.getElementById('number-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const output = document.getElementById('output-display');
    if (isNaN(number)){
        if (number == 'C'){
            output.value = '';
        }
    }
    else{
        const priviusNumber = output.value;
        const newNumber = priviusNumber + number;
        output.value = newNumber;
    }
    
});
// button Click and varifi pin 
function verifypin (){
    const numberPad = document.getElementById('output-display').value;
    const numberPadValue = document.getElementById('input-pin').value;

    const notifacationRong = document.getElementById('notifacition-rong');
    const notifacationRight = document.getElementById('notifacition-right');

    if (numberPad == numberPadValue){
        notifacationRight.style.display = 'block';
        notifacationRong.style.display = 'none';
    }
    else{
        notifacationRong.style.display = 'block';
        notifacationRight.style.display = 'none';
    }
};