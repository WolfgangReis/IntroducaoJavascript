var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementsByName("adicionar")[0].addEventListener("click", increment, false);
document.getElementsByName("subtrair")[0].addEventListener("click", decrement, false);


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    }
    else{
        currentNumberWrapper.style.color = 'black';
    }
    
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0){
        currentNumberWrapper.style.color = "red";
    }
    else{
        currentNumberWrapper.style.color = 'black';
    }
}
