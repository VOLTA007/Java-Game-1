const h1 = document.querySelector('.h1class');
const inputclass = document.querySelector('.inputclass');
const buttonclass = document.querySelector('.buttonclass');
const randomNumber = Math.floor(Math.random() * 10) + 1;


buttonclass.onclick = () => {
    let inputValue = inputclass.value;
    inputValue = Number(inputValue);
    playGame(inputValue);
};


function playGame(inputValue) {
    if (inputValue === randomNumber) {
        alert('Guess is right');
    } else {
        alert('Guess is Wrong');
    }
    inputclass.value = '';
};