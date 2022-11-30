const products = [
  {
    name: 'Sibaristica',
    img: [
      {
        url: 'img/produkt-1-kaffepasar.jpg',
        alt: 'Två påsar med kaffebönor',
      },
      {
        url: 'img/produkt-1-kaffepasar-mirror.jpg',
        alt: 'Spegelvänd bild på två påsar med kaffebönor',
      },
    ],
    desc: 'Bönor från Guatemala och Colombia',
    price: 129,
    amount: 0,
    category: 'Bönor',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Blue Magic',
    img: [
      {
        url: 'img/produkt-2-andrakaffapasar.jpg',
        alt: 'Kaffebönor i påse med blå etikett',
      },
      {
        url: 'img/produkt-2-andrakaffapasar-mirror.jpg',
        alt: 'Spegelvänd bild på kaffebönor i påse med blå etikett',
      },
    ],
    desc: 'Espressobönor',
    price: 119,
    amount: 0,
    category: 'Bönor',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Specialty Beans',
    img: [
      {
        url: 'img/produkt-3-merkaffe.jpg',
        alt: 'En arm som håller upp en påse kaffebönor',
      },
      {
        url: 'img/produkt-3-merkaffe-mirror.jpg',
        alt: 'Spegelvänd bild på en arm som håller upp en påse kaffebönor',
      },
    ],
    desc: '"Speciella" bönor från Ethiopien',
    price: 129,
    amount: 0,
    category: 'Bönor',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Rustik',
    img: [
      {
        url: 'img/produkt-4-kopp.jpg',
        alt: 'En svart kaffekopp på ett träbord',
      },
      {
        url: 'img/produkt-4-kopp-mirror.jpg',
        alt: 'Spegelvänd bild på en svart kaffekopp på ett träbord',
      },
    ],
    desc: 'Svart kopp i keramik',
    price: 49,
    amount: 0,
    category: 'Koppar',
    rating: rating3stars.innerHTML,
  },
  {
    name: 'Grön',
    img: [
      {
        url: 'img/produkt-5-kopp2.jpg',
        alt: 'Grön kaffekopp med latteart, på ett vitt bort med kaffebönor strödda runt om',
      },
      {
        url: 'img/produkt-5-kopp2-mirror.jpg',
        alt: 'Spegelvänd bild på grön kaffekopp med latteart, på ett vitt bort med kaffebönor strödda runt om',
      },
    ],
    desc: 'Kopp i poppande grön färg',
    price: 39,
    amount: 0,
    category: 'Koppar',
    rating: rating5stars.innerHTML,
  },
  {
    name: 'V60',
    img: [
      {
        url: 'img/produkt-6-v60.jpg',
        alt: 'V60 bryggare med kaffe som brygger i ett café',
      },
      {
        url: 'img/produkt-6-v60-mirror.jpg',
        alt: 'Spegelvänd bild på V60 bryggare med kaffe som brygger i ett café',
      },
    ],
    desc: 'V60 bryggaren som tilltalar din inre hipster',
    price: 599,
    amount: 0,
    category: 'Bryggare',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Aeropress',
    img: [
      {
        url: 'img/produkt-7-aeropress.jpg',
        alt: 'En aeropress på en stubbe utomhus',
      },
      {
        url: 'img/produkt-7-aeropress-mirror.jpg',
        alt: 'Spegelvänd bild på en aeropress på en stubbe utomhus',
      },
    ],
    desc: 'För dig som vill kunna göra kaffe var som helst!',
    price: 499,
    amount: 0,
    category: 'Bryggare',
    rating: rating3stars.innerHTML,
  },
  {
    name: 'Fancy',
    img: [
      {
        url: 'img/produkt-8-kopp3.jpg',
        alt: 'Liten kaffekopp med gulddetaljer',
      },
      {
        url: 'img/produkt-8-kopp3-mirror.jpg',
        alt: 'Spegelvänd bild på liten kaffekopp med gulddetaljer',
      },
    ],
    desc: 'För ditt finbesök',
    price: 49,
    amount: 0,
    category: 'Koppar',
    rating: rating4stars.innerHTML,
  },
  {
    name: 'Franskpress',
    img: [
      {
        url: 'img/produkt-9-franskpress.jpg',
        alt: 'En franskpress med kaffe och en kaffekopp brevid',
      },
      {
        url: 'img/produkt-9-franskpress-mirror.jpg',
        alt: 'Spegelvänd bild på en franskpress med kaffe och en kaffekopp brevid',
      },
    ],
    desc: 'Den klassiska Franskpressen går alltid hem',
    price: 199,
    amount: 0,
    category: 'Bryggare',
    rating: rating5stars.innerHTML,
  },
  {
    name: 'Orange',
    img: [
      {
        url: 'img/produkt-10-kopp4.jpg',
        alt: 'Hand som håller en stor orange kopp med rykande kaffe',
      },
      {
        url: 'img/produkt-10-kopp4-mirror.jpg',
        alt: 'Spegelvänd bild på en hand som håller en stor orange kopp med rykande kaffe',
      },
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
const imgContainer = document.querySelectorAll('.imgContainer');

const productPriceDisplay = document.querySelector('#productPriceDisplay');
const shippingPriceDisplay = document.querySelector('#shippingPriceDisplay');
const totalPriceDisplay = document.querySelector('#totalPriceDisplay');
const discountMessage = document.querySelector('#discountMessage');
const discountCode = document.querySelector('#discountCode');
const checkDiscountBtn = document.querySelector('#checkDiscountBtn');

const miniBasket = document.querySelector('#miniBasket');
const numberOfProductsInMiniBasket = document.querySelector('#numberOfProductsInMiniBasket');
const totalPriceInMiniBasket = document.querySelector('#totalPriceInMiniBasket');

const popup = document.querySelector('#popup');
const closePopupBtn = document.querySelector('#closePopup');
const buyBtn = document.querySelector('#buy-button');

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
          <img src="${products[i].img[0].url}" height="100" width="100" alt="${products[i].img[0].alt}" />
          <div class="item-content">
            <div class="item-info">
              <h3>${products[i].name}</h3>
              <p>${products[i].desc}</p>
              <p class="tomten">${products[i].price * products[i].amount}kr</p>
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
  numberOfProductsInMiniBasket.innerHTML = `${productAmount}st`;
  totalPriceInMiniBasket.innerHTML = `${totalPrice}kr`;

  if (productAmount > 0) {
    miniBasket.classList.remove('hidden');
  } else {
    miniBasket.classList.add('hidden');
  }
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
                class=""
                id="img1-${i}"
                src="${sortedProducts[i].img[0].url}"
                height="100"
                width="100"
                alt="${sortedProducts[i].img[0].alt}"
              />
              <img
                class="hidden"
                id="img2-${i}"
                src="${sortedProducts[i].img[1].url}"
                height="100"
                width="100"
                alt="${sortedProducts[i].img[1].alt}"
              />
            <button id="prevImg-${i}" class="prevImg"> <- </button>         
            <button id="nextImg-${i}" class="nextImg"> -> </button>
        </div>
            <div class="product-info">
                <h3>${sortedProducts[i].name}</h3>
                <p>${sortedProducts[i].rating}</p>
                <p>${sortedProducts[i].desc}</p>
                    <div class="product-selection">
                        <p class="tomten">${sortedProducts[i].price}kr</p>
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

  const prevBtns = document.querySelectorAll('.prevImg');
  const nextBtns = document.querySelectorAll('.nextImg');

  prevBtns.forEach(btn => {
    btn.addEventListener('click', switchImage);
  });
  nextBtns.forEach(btn => {
    btn.addEventListener('click', switchImage);
  });

  renderBasket();
}

function switchImage(e) {
  console.log(e.currentTarget.id);
  const imgIndex = e.currentTarget.id.replace('prevImg-', '').replace('nextImg-', '');
  const img1 = document.querySelector(`#img1-${imgIndex}`);
  const img2 = document.querySelector(`#img2-${imgIndex}`);

  if (img1.classList.contains('hidden')) {
    img1.classList.remove('hidden');
    img2.classList.add('hidden');
  } else {
    img1.classList.add('hidden');
    img2.classList.remove('hidden');
  }
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

function clearBasket() {
  basketGrid.innerHTML = '';

  for (let i = 0; i < products.length; i += 1) {
    products[i].amount = 0;
  }
  renderProducts();
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

function christmas() {
  const date = new Date();
  const backgroundImage = document.getElementById('landing-page');
  const title = document.getElementById('landing-page-title');

  if (date.getDate() === 24 && date.getMonth() === 11) {
    document.body.classList.add('xmas');

    backgroundImage.style.background = "url('./img/kate-laine-9kNC6g-emEQ-unsplash (1).jpg')";
    backgroundImage.style.backgroundSize = 'cover';
    backgroundImage.style.width = '100%';
    backgroundImage.style.height = '100vh';
    title.style.color = 'solid $col-beige;';
    title.style.width = '350px';
    title.style.height = '140px';
    title.style.position = 'relative';
    title.style.margin = 'auto';
    title.style.background = 'black';
    title.style.top = '100px';
    title.style.paddingTop = '0';
    title.style.borderRadius = '2.5rem';
    title.style.border = '3px solid #dcbfa1';
  }
}

christmas();

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
    nameError.innerHTML = 'Obligatoriskt';
  } else {
    fNameIsOk = true;
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateLastName() {
  if (lastNameField.value.length === 0) {
    lNameIsOk = false;
    lastNameError.innerHTML = 'Obligatoriskt';
  } else {
    lNameIsOk = true;
    lastNameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateAdress() {
  if (adressField.value.length === 0) {
    adressIsOk = false;
    adressError.innerHTML = 'Obligatoriskt';
  } else {
    adressIsOk = true;
    adressError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateZip() {
  if (zipCodeField.value.length === 0) {
    zipCodeIsOk = false;
    zipError.innerHTML = 'Obligatoriskt';
  } else {
    zipCodeIsOk = true;
    zipError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validateCity() {
  if (cityField.value.length === 0) {
    cityIsOk = false;
    cityError.innerHTML = 'Obligatoriskt';
  } else {
    cityIsOk = true;
    cityError.innerHTML = '<i class="fa-solid fa-check"></i>';
  }
  activateOrderButton();
}

function validatePhone() {
  if (phoneField.value.length === 0) {
    phoneIsOk = false;
    phoneError.innerHTML = 'Obligatoriskt';
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
    emailError.innerHTML = 'Obligatoriskt';
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
    (personalNrIsOk || (cardNrIsOk && cvvIsOk))
  ) {
    orderBtn.removeAttribute('disabled');
  } else {
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

// products.forEach((product, index) => {
//   imgContainer.innerHTML = `
//   <img
//     class=""
//     id="img1-${index}"
//     src="${product.img[0].url}"
//     height="100"
//     width="100"
//     alt="${product.img[0].alt}"
//   />
//   <img
//     class="hidden"
//     id="img2-${index}"
//     src="${product.img[1].url}"
//     height="100"
//     width="100"
//     alt="${product.img[1].alt}"
//   />
//   <button id="nextImg-${index}" class="nextImg"> -> </button>
//   <button id="prevImg-${index}" class="prevImg"> <- </button>
//   `;
// });
