/* eslint-disable no-use-before-define */
const products = [
  {
    img: ['img/produkt-1-kaffepasar.jpg', 'img/produkt-1-kaffepasar-mirror.jpg'],
    imgAlt: '',
    name: 'Sibaristica',
    desc: 'Bönor från Guatemala och Colombia',
    price: 129,
    amount: 0,
  },
  {
    img: ['img/produkt-2-andrakaffapasar.jpg', 'img/produkt-2-andrakaffapasar-mirror.jpg'],
    imgAlt: '',
    name: 'Blue Magic',
    desc: 'Espressobönor',
    price: 119,
    amount: 0,
  },
  {
    img: ['img/produkt-3-merkaffe.jpg', 'img/produkt-3-merkaffe-mirror.jpg'],
    imgAlt: '',
    name: 'Specialty Beans',
    desc: '"Speciella" bönor från Ethiopien',
    price: 129,
    amount: 0,
  },
  {
    img: ['img/produkt-4-kopp.jpg', 'img/produkt-4-kopp-mirror.jpg'],
    imgAlt: '',
    name: 'Rustik',
    desc: 'Svart kopp i keramik',
    price: 49,
    amount: 0,
  },
  {
    img: ['img/produkt-5-kopp2.jpg', 'img/produkt-5-kopp2-mirror.jpg'],
    imgAlt: '',
    name: 'Grön',
    desc: 'Kopp i poppande grön färg',
    price: 39,
    amount: 0,
  },
  {
    img: ['img/produkt-6-v60.jpg', 'img/produkt-6-v60-mirror.jpg'],
    imgAlt: '',
    name: 'V60',
    desc: 'V60 bryggaren som tilltalar din inre hipster',
    price: 599,
    amount: 0,
  },
  {
    img: ['img/produkt-7-aeropress.jpg', 'img/produkt-7-aeropress-mirror.jpg'],
    imgAlt: '',
    name: 'Aeropress',
    desc: 'För dig som vill kunna göra kaffe var som helst!',
    price: 499,
    amount: 0,
  },
  {
    img: ['img/produkt-8-kopp3.jpg', 'img/produkt-8-kopp3-mirror.jpg'],
    imgAlt: '',
    name: 'Fancy',
    desc: 'För ditt finbesök',
    price: 49,
    amount: 0,
  },
  {
    img: ['img/produkt-9-franskpress.jpg', 'img/produkt-9-franskpress-mirror.jpg'],
    imgAlt: '',
    name: 'Franskpress',
    desc: 'Den klassiska Franskpressen går alltid hem',
    price: 199,
    amount: 0,
  },
  {
    img: ['img/produkt-10-kopp4.jpg', 'img/produkt-10-kopp4-mirror.jpg'],
    imgAlt: '',
    name: 'Orange',
    desc: 'En större kopp för dig med ett större beroende',
    price: 39,
    amount: 0,
  },
];

const productGrid = document.querySelector('#product-grid');
const basketGrid = document.querySelector('#basket-grid');

function renderBasket() {
  basketGrid.innerHTML = '';
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].amount > 0) {
      basketGrid.innerHTML += `
	    <div class="item">
        <img src="${products[i].img[0]}" height="100" width="100" alt="${products[i].imgAlt}" />
        <div class="item-content">
          <div class="item-info">
            <h3>${products[i].name}</h3>
            <p>${products[i].desc}</p>
            <p>${products[i].price * products[i].amount}kr</p>
          </div>
          <div class="item-selection">
            <button class="button-add" data-id="${i}">+</button>
            <p>${products[i].amount}</p>
            <button class="button-remove" data-id="${i}">-</button>
          </div>
        </div>
      </div>
	  `;
    }
  }
  const addBtn = document.querySelectorAll('.button-add');
  addBtn.forEach(btn => {
    btn.addEventListener('click', add);
  });
  const removeBtn = document.querySelectorAll('.button-remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', remove);
  });
}

// eslint-disable-next-line no-unused-vars
function clearBasket() {
  basketGrid.innerHTML = '';

  for (let i = 0; i < products.length; i += 1) {
    products[i].amount = 0;
  }
  renderProducts();
}

function renderProducts() {
  productGrid.innerHTML = '';

  for (let i = 0; i < products.length; i += 1) {
    productGrid.innerHTML += `
        <div class="product-card" data-id="${i}">
            <div class="image">
                <img
                    src="${products[i].img[0]}"
                    height="100"
                    width="100"
                    alt="${products[i].imgAlt}"
                />
            </div>
            <div class="product-info">
                <h3>${products[i].name}</h3>
                <p>${products[i].desc}</p>
                    <div class="product-selection">
                        <p>${products[i].price}kr</p>
                        <button class="button-remove" data-id="${i}">-</button>
                        <p>${products[i].amount}</p>
                        <button class="button-add" data-id="${i}">+</button>
                    </div>
            </div>
        </div>
        `;
  }
  const addBtn = document.querySelectorAll('.button-add');
  addBtn.forEach(btn => {
    btn.addEventListener('click', add);
  });
  const removeBtn = document.querySelectorAll('.button-remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', remove);
  });
  renderBasket();
}

function add() {
  products[this.dataset.id].amount += 1;
  renderProducts();
}

function remove() {
  if (products[this.dataset.id].amount > 0) {
    products[this.dataset.id].amount -= 1;
    renderProducts();
  }
}

renderProducts()

// *****************FORMULÄRVALIDERING STARTAR HÄR***************************************

const nameError = document.getElementById("name-error");
const lastNameError = document.getElementById("lastname-error");
const adressError = document.getElementById("adress-error");
const zipError = document.getElementById("zip-error");
const cityError = document.getElementById("city-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const personalNrError = document.getElementById('personalNumber-Error');
const cardNrError = document.getElementById('cardNrError');
const cvvError = document.getElementById('cvvError');

const firstNameField = document.querySelector('#fname');
const lastNameField = document.querySelector('#lname');
const adressField = document.querySelector('#adress');
const zipCodeField = document.querySelector('#zip');
const cityField = document.querySelector('#city');
const phoneField = document.querySelector('#phone');
const emailField = document.querySelector('#email');
const personalNrField = document.querySelector('#personalNumber');
const cardNrField = document.querySelector('#cardNr');
const cvvField = document.querySelector('#cvv');
const orderBtn = document.getElementById('buy-button')
const personalData = document.getElementById('personalData')

let fNameIsOk = false;
let lNameIsOk = false;
let adressIsOk = false;
let zipCodeIsOk = false;
let cityIsOk = false;
let phoneIsOk = false;
let emailIsOk = false;
let personalNrIsOk = false;
let cardNrIsOk = false;
let cvvIsOk = false;
let gdprIsOk = false;

personalData.addEventListener('click', gdprCheck);
firstNameField.addEventListener('focusout', validateName);
lastNameField.addEventListener('focusout', validateLastName);
adressField.addEventListener('focusout', validateAdress);
zipCodeField.addEventListener('focusout', validateZip);
cityField.addEventListener('focusout', validateCity);
phoneField.addEventListener('focusout', validatePhone);
emailField.addEventListener('focusout', validateEmail);
personalNrField.addEventListener('focusout', validatePersonalNumber);
cardNrField.addEventListener('focusout', validateCardNr);
cvvField.addEventListener('focusout', validateCvv);


function validateCardNr() {
  if(cardNrField.value.length === 0) {
    cardNrIsOk = false;
    cardNrError.innerHTML ="*"
  }
  if(cardNrField.value.length < 16 || cardNrField.value.length > 16) {
    cardNrIsOk = false;
    cardNrError.innerHTML ="16 siffror tack"
  } else {
  cardNrError.innerHTML = '<i class="fa-solid fa-check"></i>';
  cardNrIsOk = true;
  }
  activateOrderButton();
}

function validateCvv() {
  if(cvvField.value.length === 0) {
    cvvIsOk = false;
    cvvError.innerHTML = "*"
  }
  if(cvvField.value.length < 3 || cvvField.value.length > 3) {
    cvvIsOk = false;
    cvvError.innerHTML = "3 siffror tack"
  } else {
    cvvIsOk = true;
    cvvError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateName() {
  if (firstNameField.value.length === 0) {
    fNameIsOk = false;
    nameError.innerHTML = "Måste fyllas i";
  } else {
  fNameIsOk = true;
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateLastName() {
  if (lastNameField.value.length === 0) {
    lNameIsOk = false;
    lastNameError.innerHTML = "Måste fyllas i";
  } else {
    lNameIsOk = true;
    lastNameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateAdress() {
  if (adressField.value.length === 0) {
    adressIsOk = false;
    adressError.innerHTML = "Måste fyllas i";
  } else {
    adressIsOk = true;
    adressError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateZip() {
  if (zipCodeField.value.length === 0) {
    zipCodeIsOk = false;
    zipError.innerHTML = "Måste fyllas i";
  } else {
    zipCodeIsOk = true;
    zipError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateCity() {
  if (cityField.value.length === 0) {
    cityIsOk = false;
    cityError.innerHTML = "Måste fyllas i";
  } else {
    cityIsOk = true;
    cityError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validatePhone() {
  if (phoneField.value.length === 0) {
    phoneIsOk = false;
    phoneError.innerHTML = "Måste fyllas i";
  }
  if (!phoneField.value.match(/^[0-9]{10}$/)) {
    phoneIsOk = false;
    phoneError.innerHTML = "var god fyll i ett giltligt mobilnr";
  }  else {
    phoneIsOk = true;
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateEmail() {
  if (emailField.value.length === 0) {
    emailIsOk = false;
    emailError.innerHTML = "Måste fyllas i";
  }
  if (!emailField.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailIsOk = false;
    emailError.innerHTML = "Ogiltlig mejl";
  } else {
    emailIsOk = true;
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validatePersonalNumber() {
  if (personalNrField.value.length === 0) {
    personalNrIsOk = false;
    personalNrError.innerHTML = "*";
  }
  if (!personalNrField.value.match(/^(\d{6}|\d{8})[-|(\s)]{0,1}\d{4}$/)) {
    personalNrIsOk = false;
    personalNrError.innerHTML = "10 siffror tack";
  } else {
    personalNrIsOk = true;
    personalNrError.innerHTML = '<i class="fa-solid fa-check"></i>'; 
  }
  activateOrderButton();
}

function gdprCheck(){
  gdprIsOk = personalData.checked;
  activateOrderButton();
}

// ****************************VALIDERING SLUT*******************************************


// *********FÖR AKTIVERA BESTÄLLNINGSKNAPPEN NÄR VALIDERINGSVILLKOREN ÄR UPPFYLLDA***************

function activateOrderButton(){
  if (fNameIsOk && gdprIsOk && lNameIsOk && adressIsOk && zipCodeIsOk && cityIsOk && phoneIsOk && emailIsOk && ((personalNrIsOk) || (cardNrIsOk && cvvIsOk))){
      orderBtn.removeAttribute('disabled');    
  } else {
      orderBtn.setAttribute('disabled', ''); 
  }
}


document.querySelector('#paymentType_invoice').addEventListener('click', handleInvoiceClick); 
document.querySelector('#paymentType_card').addEventListener('click',handleCardClick); 


const card = document.getElementById('creditCard');
const invoice = document.getElementById('invoice');

// **************AKTIVERING BESTÄLLNINGSKNAPP SLUT******************************

//***********FÖR ATT DÖLJA/VISA FORMULÄREN FÖR KORT OCH FAKTURA************

function handleCardClick() {
  if (document.getElementById('paymentType_card').checked) {
    card.style.display = 'block';
    invoice.style.display = 'none';
  } else {
    card.style.display = 'none';
  }
}

function handleInvoiceClick() {
  if (document.getElementById('paymentType_invoice').checked) {
    invoice.style.display = 'block';
    card.style.display = 'none';
  } else {
    invoice.style.display = 'none';
  }
}

//**********RENSA FORMULÄR******************

document.querySelector('#eraseBtn').addEventListener('click', resetOrder);

function resetOrder() {
  document.getElementById('form').reset();
  document.getElementById('invoice').reset();
  document.getElementById('creditCard').reset();

  clearBasket();
  validateCardNr();
  validatePersonalNumber();
  validateCvv();
  validateName();
  validateLastName();
  validateAdress();
  validateZip();
  validateCity();
  validatePhone();
  validateEmail();
}

// Återstället formulären efter 15 min. 

let timerID = null;
let timeoutDuration = 900000; // 15 minuter

window.addEventListener('keydown', function(e) {
    if(timerID !== null) {
        clearTimeout(timerID);
        timerID = null;
    }
    
    timerID = setTimeout(function() {
        // Clear all the fields here
        resetOrder();
        alert('Pga inaktivitet rensas din beställning')
    }, timeoutDuration);
}, false);
