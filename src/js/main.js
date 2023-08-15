let popupRequest = document.querySelector('.popup-request'),
    popupForm = document.querySelector('.popup-form'),
    popupInputs = document.querySelectorAll('.popup-form__input'),
    termsCheckbox = document.querySelector('.popup-form__terms-checkbox'),
    terms = document.querySelector('.popup-form__terms'),
    passwordBtn = document.querySelector('.popup-form__password-btn'),
    passwordInput = document.querySelector('.popup-form__password-input');


popupForm.addEventListener('submit', function (e) {
 e.preventDefault();
 
 for (const input of popupInputs) {
  if (checkInput(input) == false) {
   return;
  }
 }
 if(termsCheckbox.checked == false){
  terms.classList.add('error');
  setTimeout(() => {
   terms.classList.remove('error');
  }, "1200");
 } 
 this.submit();
});


function checkInput(input) {
  if (input.value.length < 1) {
   input.parentElement.classList.add('error');
   setTimeout(() => {
    input.parentElement.classList.remove('error');
   }, "1200");
   return false;
  }
  return true;
}

passwordBtn.addEventListener('click', function (e) {
 e.preventDefault();
 passwordInput.value = generatePass();
});

function generatePass() {
 let pass = '';
 let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
     'abcdefghijklmnopqrstuvwxyz0123456789@#$';

 for (let i = 1; i <= 8; i++) {
     let char = Math.floor(Math.random()
         * str.length + 1);

     pass += str.charAt(char)
 }

 return pass;
}

document.addEventListener("DOMContentLoaded", function() {
 setTimeout(() => {
  popupRequest.classList.add('open');
 }, "30000");
});

document.querySelector('.popup-request-bg').addEventListener("click", function() {
 popupRequest.classList.remove('open');
});

document.querySelector('.popup-crypto-bg').addEventListener("click", function() {
 document.querySelector('.popup-crypto').remove('open');
});

let cryptoArr = ['bitcoin', 'ethereum', 'dogecoin', 'toncoin']

fetch('https://api.cryptorank.io/v1/currencies?api_key=e0f87181331a03b4f1d5d8870cd693d64ea570963a08ed67dcaac0d0fdaa')
.then((resp) => resp.json())
.then(function(data) {
  cryptoArr.forEach(element => {
   let crypto = data.data.find(e => e.slug === element);
   document.querySelector('.popup-crypto-main').innerHTML += `<div><p>${crypto.name}</p><p>${Math.round(crypto.values.USD.price*100)/100} USD</p><div>`
  });
})
.catch(function(error) {
  console.log(error);
});
