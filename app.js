const products = [
  {
    name: 'Sibaristica',
    img: ['img/produkt-1-kaffepasar.jpg', 'img/produkt-1-kaffepasar-mirror.jpg'],
    imgAlt: ['Två påsar med kaffebönor', 'Spegelvänd bild på två påsar med kaffebönor'],
    desc: 'Bönor från Guatemala och Colombia',
    price: 129,
    amount: 0,
    category: 'Bönor',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Blue Magic',
    img: ['img/produkt-2-andrakaffapasar.jpg', 'img/produkt-2-andrakaffapasar-mirror.jpg'],
    imgAlt: ['Kaffebönor i påse med blå etikett', 'Spegelvänd bild på kaffebönor i påse med blå etikett'],
    desc: 'Espressobönor',
    price: 119,
    amount: 0,
    category: 'Bönor',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Specialty Beans',
    img: ['img/produkt-3-merkaffe.jpg', 'img/produkt-3-merkaffe-mirror.jpg'],
    imgAlt: ['En arm som håller upp en påse kaffebönor', 'Spegelvänd bild på en arm som håller upp en påse kaffebönor'],
    desc: '"Speciella" bönor från Ethiopien',
    price: 129,
    amount: 0,
    category: 'Bönor',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Rustik',
    img: ['img/produkt-4-kopp.jpg', 'img/produkt-4-kopp-mirror.jpg'],
    imgAlt: ['En svart kaffekopp på ett träbord', 'Spegelvänd bild på en svart kaffekopp på ett träbord'],
    desc: 'Svart kopp i keramik',
    price: 49,
    amount: 0,
    category: 'Koppar',
    rating: rating3stars.innerHTML,
  },
  {
    name: 'Grön',
    img: ['img/produkt-5-kopp2.jpg', 'img/produkt-5-kopp2-mirror.jpg'],
    imgAlt: [
      'Grön kaffekopp med latteart, på ett vitt bort med kaffebönor strödda runt om',
      'Spegelvänd bild på grön kaffekopp med latteart, på ett vitt bort med kaffebönor strödda runt om',
    ],
    desc: 'Kopp i poppande grön färg',
    price: 39,
    amount: 0,
    category: 'Koppar',
    rating: rating5stars.innerHTML,
  },
  {
    name: 'V60',
    img: ['img/produkt-6-v60.jpg', 'img/produkt-6-v60-mirror.jpg'],
    imgAlt: [
      'V60 bryggare med kaffe som brygger i ett café',
      'Spegelvänd bild på V60 bryggare med kaffe som brygger i ett café',
    ],
    desc: 'V60 bryggaren som tilltalar din inre hipster',
    price: 599,
    amount: 0,
    category: 'Bryggare',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Aeropress',
    img: ['img/produkt-7-aeropress.jpg', 'img/produkt-7-aeropress-mirror.jpg'],
    imgAlt: ['En aeropress på en stubbe utomhus', 'Spegelvänd bild på en aeropress på en stubbe utomhus'],
    desc: 'För dig som vill kunna göra kaffe var som helst!',
    price: 499,
    amount: 0,
    category: 'Bryggare',
    rating: rating3stars.innerHTML,
  },
  {
    name: 'Fancy',
    img: ['img/produkt-8-kopp3.jpg', 'img/produkt-8-kopp3-mirror.jpg'],
    imgAlt: ['Liten kaffekopp med guld detaljer', 'Spegelvänd bild på liten kaffekopp med guld detaljer'],
    desc: 'För ditt finbesök',
    price: 49,
    amount: 0,
    category: 'Koppar',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Franskpress',
    img: ['img/produkt-9-franskpress.jpg', 'img/produkt-9-franskpress-mirror.jpg'],
    imgAlt: [
      'En franskpress med kaffe och en kaffekopp brevid',
      'Spegelvänd bild på en franskpress med kaffe och en kaffekopp brevid',
    ],
    desc: 'Den klassiska Franskpressen går alltid hem',
    price: 199,
    amount: 0,
    category: 'Bryggare',
    rating: rating5stars.innerHTML,
  },
  {
    name: 'Orange',
    img: ['img/produkt-10-kopp4.jpg', 'img/produkt-10-kopp4-mirror.jpg'],
    imgAlt: [
      'Hand som håller en stor orange kopp med rykande kaffe',
      'Spegelvänd bild på en hand som håller en stor orange kopp med rykande kaffe',
    ],
    desc: 'En större kopp för dig med ett större beroende',
    price: 39,
    amount: 0,
    category: 'Koppar',
    rating: rating3stars.innerHTML,
  },
];

const productGrid = document.querySelector('#product-grid');
const basketGrid = document.querySelector('#basket-grid');
const sortSelector = document.querySelector('#sort-options');

const productPriceDisplay = document.querySelector('#productPriceDisplay');
const shippingPriceDisplay = document.querySelector('#shippingPriceDisplay');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const discountMessage = document.querySelector('#discountMessage');
const discountCode = document.querySelector('#discountCode');
const checkDiscountBtn = document.querySelector('#checkDiscountBtn');

const popup = document.querySelector('#popup');
const closePopupBtn = document.querySelector('#closePopup');
const buyBtn = document.querySelector('#buyBtn');

let productAmount;
let shippingPrice;
let totalPricePerProduct;
let totalPrice;

function renderBasket() {
  basketGrid.innerHTML = '';

  productAmount = 0;
  shippingPrice = 25;
  totalPricePerProduct = 0;
  totalPrice = 0;

  for (let i = 0; i < products.length; i += 1) {
    totalPricePerProduct = products[i].price * products[i].amount;
    totalPrice += totalPricePerProduct;
    productAmount += products[i].amount;

    productPriceDisplay.innerHTML = Math.round(totalPrice);
    shippingPriceDisplay.innerHTML = Math.round(shippingPrice);
    totalPriceDisplay.innerHTML = totalPrice + shippingPrice;

    if (products[i].amount > 0) {
      basketGrid.innerHTML += `
        <div class="item">
          <img src="${products[i].img[0]}" height="100" width="100" alt="${products[i].imgAlt[0]}" />
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
  if (productAmount < 10) {
    shippingPrice = 25 + totalPrice * 0.1;
    totalPriceDisplay.innerHTML = Math.round(totalPrice + shippingPrice);
    shippingPriceDisplay.innerHTML = Math.round(shippingPrice);
    discountMessage.innerHTML = '';
  } else if (productAmount < 15) {
    shippingPrice = 25 + totalPrice * 0.1;
    totalPrice *= 0.9;
    totalPriceDisplay.innerHTML = Math.round(totalPrice + shippingPrice);
    shippingPriceDisplay.innerHTML = Math.round(shippingPrice);
    discountMessage.innerHTML = '10% Rabatt!';
  } else {
    shippingPrice = 0;
    totalPrice *= 0.9;
    totalPriceDisplay.innerHTML = Math.round(totalPrice + shippingPrice);
    shippingPriceDisplay.innerHTML = Math.round(shippingPrice);
    discountMessage.innerHTML = '10% Rabatt och gratis frakt!';
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

function checkDiscountCode() {
  if (discountCode.value === 'a_damn_fine_cup_of_coffee') {
    totalPricePerProduct = 0;
    totalPrice = 0;
    shippingPrice = 0;
    productPriceDisplay.innerHTML = totalPricePerProduct;
    totalPriceDisplay.innerHTML = totalPrice;
    shippingPriceDisplay.innerHTML = shippingPrice;
    discountMessage.innerHTML = 'Allt gratis! Du måste ha bra kontakter....';
  } else {
    discountMessage.innerHTML = 'Det där är ingen giltig rabattkod!';
  }
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
  const sortOptions = sortSelector.value;

  let sortedProducts = products;

  if (sortOptions === 'priceHigh') {
    sortedProducts = sortedProducts.sort(byPriceRev);
  }

  if (sortOptions === 'priceLow') {
    sortedProducts = sortedProducts.sort(byPrice);
  }

  if (sortOptions === 'nameAtoZ') {
    sortedProducts = sortedProducts.sort(byName);
  }

  if (sortOptions === 'nameZtoA') {
    sortedProducts = sortedProducts.sort(byNameRev);
  }

  if (sortOptions === 'category') {
    sortedProducts = sortedProducts.sort(byCategory);
  }

  if (sortOptions === 'rating') {
    sortedProducts = sortedProducts.sort(byRating);
  }

  productGrid.innerHTML = '';

  for (let i = 0; i < sortedProducts.length; i += 1) {
    productGrid.innerHTML += `
        <div class="product-card" data-id="${i}">
            <div class="image">
                <img
                    src="${sortedProducts[i].img[0]}"
                    height="100"
                    width="100"
                    alt="${sortedProducts[i].imgAlt[0]}"
                />
            </div>
            <div class="product-info">
                <h3>${sortedProducts[i].name}</h3>
                <p>${sortedProducts[i].rating}</p>
                <p>${sortedProducts[i].desc}</p>
                    <div class="product-selection">
                        <p>${sortedProducts[i].price}kr</p>
                        <button class="button-remove" data-id="${i}">-</button>
                        <p>${sortedProducts[i].amount}</p>
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

function placeOrder() {
  if (popup.classList.contains('hidden')) {
    popup.classList.remove('hidden');
    getDeliveryTime();
    productConfirmation();
    // ToDo: Nollställ beställning och formulär
  } else {
    popup.classList.add('hidden');
  }
}

function productConfirmation() {
  const orderConfirmation = document.querySelector('#orderConfirmation');
  orderConfirmation.innerHTML = '';
  for (let i = 0; i < products.length; i += 1) {
    if (products[i].amount > 0) {
      orderConfirmation.innerHTML += `
        <div class="product-confirmation-display">
          <h4>${products[i].name}</h4>
          <p>${products[i].amount}st *</p>
          <p>${products[i].price}kr</p>
        </div>
        `;
    }
  }
  orderConfirmation.innerHTML += `
    <div class="product-confirmation-display-price">
      <p>Frakt: ${shippingPriceDisplay.textContent.valueOf()}kr</p>
      <p>Totalt: ${totalPriceDisplay.textContent.valueOf()}kr</p>
    </div>
    `;
}

function getDeliveryTime() {
  const deliveryTimeDisplay = document.querySelector('#deliveryTimeDisplay');
  const now = new Date();
  const today = now.getDay();
  const hourOfDay = now.getHours();

  if (hourOfDay >= 11 && hourOfDay < 15) {
    deliveryTimeDisplay.innerHTML = 'Din leverans beräknas vara framme ca. kl 15';
  } else if (hourOfDay > 22 && hourOfDay < 6) {
    deliveryTimeDisplay.innerHTML = 'Leveranstid beräknas till ca. 45 minuter';
  } else if (today === 6 || today === 0) {
    deliveryTimeDisplay.innerHTML = 'Leveranstid beräknas till ca. 1,5 timmar';
  } else {
    deliveryTimeDisplay.innerHTML = 'Leveranstid beräknas till ca. 20 minuter';
  }
}

function byPriceRev(a, b) {
  if (a.price > b.price) {
    return -1;
  } else if (b.price > a.price) {
    return 1;
  } else {
    return 0;
  }
}

function byPrice(a, b) {
  if (a.price > b.price) {
    return 1;
  } else if (b.price > a.price) {
    return -1;
  } else {
    return 0;
  }
}

function byName(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (b.name > a.name) {
    return -1;
  } else {
    return 0;
  }
}

function byNameRev(a, b) {
  if (a.name > b.name) {
    return -1;
  } else if (b.name > a.name) {
    return 1;
  } else {
    return 0;
  }
}

function byCategory(a, b) {
  if (a.category > b.category) {
    return 1;
  } else if (b.category > a.category) {
    return -1;
  } else {
    return 0;
  }
}

function byRating(a, b) {
  if (a.rating > b.rating) {
    return 1;
  } else if (b.rating > a.rating) {
    return -1;
  } else {
    return 0;
  }
}

// *****************FORMULÄRVALIDERING STARTAR HÄR***************************************

const nameError = document.getElementById('name-error');
const lastNameError = document.getElementById('lastname-error');
const adressError = document.getElementById('adress-error');
const zipError = document.getElementById('zip-error');
const cityError = document.getElementById('city-error');
const phoneError = document.getElementById('phone-error');
const emailError = document.getElementById('email-error');
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
const orderBtn = document.getElementById('buy-button');
const personalData = document.getElementById('personalData');

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
  if (cardNrField.value.length === 0) {
    cardNrIsOk = false;
    cardNrError.innerHTML = '*';
  }
  if (cardNrField.value.length < 16 || cardNrField.value.length > 16) {
    cardNrIsOk = false;
    cardNrError.innerHTML = '16 siffror tack';
  } else {
    cardNrError.innerHTML = '<i class="fa-solid fa-check"></i>';
    cardNrIsOk = true;
  }
  activateOrderButton();
}

function validateCvv() {
  if (cvvField.value.length === 0) {
    cvvIsOk = false;
    cvvError.innerHTML = '*';
  }
  if (cvvField.value.length < 3 || cvvField.value.length > 3) {
    cvvIsOk = false;
    cvvError.innerHTML = '3 siffror tack';
  } else {
    cvvIsOk = true;
    cvvError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateName() {
  if (firstNameField.value.length === 0) {
    fNameIsOk = false;
    nameError.innerHTML = 'Måste fyllas i';
  } else {
    fNameIsOk = true;
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateLastName() {
  if (lastNameField.value.length === 0) {
    lNameIsOk = false;
    lastNameError.innerHTML = 'Måste fyllas i';
  } else {
    lNameIsOk = true;
    lastNameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateAdress() {
  if (adressField.value.length === 0) {
    adressIsOk = false;
    adressError.innerHTML = 'Måste fyllas i';
  } else {
    adressIsOk = true;
    adressError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateZip() {
  if (zipCodeField.value.length === 0) {
    zipCodeIsOk = false;
    zipError.innerHTML = 'Måste fyllas i';
  } else {
    zipCodeIsOk = true;
    zipError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateCity() {
  if (cityField.value.length === 0) {
    cityIsOk = false;
    cityError.innerHTML = 'Måste fyllas i';
  } else {
    cityIsOk = true;
    cityError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validatePhone() {
  if (phoneField.value.length === 0) {
    phoneIsOk = false;
    phoneError.innerHTML = 'Måste fyllas i';
  }
  if (!phoneField.value.match(/^[0-9]{10}$/)) {
    phoneIsOk = false;
    phoneError.innerHTML = 'var god fyll i ett giltligt mobilnr';
  } else {
    phoneIsOk = true;
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateEmail() {
  if (emailField.value.length === 0) {
    emailIsOk = false;
    emailError.innerHTML = 'Måste fyllas i';
  }
  if (!emailField.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailIsOk = false;
    emailError.innerHTML = 'Ogiltlig mejl';
  } else {
    emailIsOk = true;
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validatePersonalNumber() {
  if (personalNrField.value.length === 0) {
    personalNrIsOk = false;
    personalNrError.innerHTML = '*';
  }
  if (!personalNrField.value.match(/^(\d{6}|\d{8})[-|(\s)]{0,1}\d{4}$/)) {
    personalNrIsOk = false;
    personalNrError.innerHTML = '10 siffror tack';
  } else {
    personalNrIsOk = true;
    personalNrError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function gdprCheck() {
  gdprIsOk = personalData.checked;
  activateOrderButton();
}

// ****************************VALIDERING SLUT*******************************************

function activateOrderButton() {
  if (
    fNameIsOk &&
    gdprIsOk &&
    lNameIsOk &&
    adressIsOk &&
    zipCodeIsOk &&
    cityIsOk &&
    phoneIsOk &&
    emailIsOk &&
    ((personalNrIsOk || (cardNrIsOk && cvvIsOk)))){
    orderBtn.removeAttribute('disabled');
  }else {
    orderBtn.setAttribute('disabled', '');
  }
}

document.querySelector('#paymentType_invoice').addEventListener('click', handleInvoiceClick);
document.querySelector('#paymentType_card').addEventListener('click', handleCardClick);

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

// Återställer formulären och tömmer varukorgen var 15e min och
// ger en alert att användaren är för långsam.

setInterval(orderTimeOut, 900000);

function orderTimeOut() {
  resetOrder();
  alert('För långsam!');
}


//********************************* 

renderProducts();
checkDiscountBtn.addEventListener('click', checkDiscountCode);
buyBtn.addEventListener('click', placeOrder);
closePopupBtn.addEventListener('click', placeOrder);
