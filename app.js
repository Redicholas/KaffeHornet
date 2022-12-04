const products = [
  {
    name: 'Sibaristica',
    imgs: [
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
    category: 'Kategori: Bönor',
    rating: rating4stars.innerHTML,
    productID: 1,
  },
  {
    name: 'Blue Magic',
    imgs: [
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
    category: 'Kategori: Bönor',
    rating: rating4stars.innerHTML,
    productID: 2,
  },
  {
    name: 'Specialty Beans',
    imgs: [
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
    category: 'Kategori: Bönor',
    rating: rating4stars.innerHTML,
    productID: 3,
  },
  {
    name: 'Rustik',
    imgs: [
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
    category: 'Kategori: Koppar',
    rating: rating3stars.innerHTML,
    productID: 4,
  },
  {
    name: 'Grön',
    imgs: [
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
    category: 'Kategori: Koppar',
    rating: rating5stars.innerHTML,
    productID: 5,
  },
  {
    name: 'V60',
    imgs: [
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
    category: 'Kategori: Bryggare',
    rating: rating4stars.innerHTML,
    productID: 6,
  },
  {
    name: 'Aeropress',
    imgs: [
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
    category: 'Kategori: Bryggare',
    rating: rating3stars.innerHTML,
    productID: 7,
  },
  {
    name: 'Fancy',
    imgs: [
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
    category: 'Kategori: Koppar',
    rating: rating4stars.innerHTML,
    productID: 8,
  },
  {
    name: 'Franskpress',
    imgs: [
      {
        url: 'img/produkt-9-franskpress.jpg',
        alt: 'En franskpress med kaffe och en kaffekopp brevid',
      },
      {
        url: 'img/produkt-9-franskpress-mirror.jpg',
        alt: 'Spegelvänd bild på en franskpress med kaffe och en kaffekopp brevid',
      },
    ],
    desc: 'En franskpress går alltid hem',
    price: 199,
    amount: 0,
    category: 'Kategori: Bryggare',
    rating: rating5stars.innerHTML,
    productID: 9,
  },
  {
    name: 'Orange',
    imgs: [
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
    category: 'Kategori: Koppar',
    rating: rating3stars.innerHTML,
    productID: 10,
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
const invoiceLabel = document.querySelector('#invoiceLabel');
const invoiceOption = document.querySelector('#paymentType_invoice');
const paymentSection = document.querySelector('#payment-section');

const miniBasket = document.querySelector('#miniBasket');
const numberOfProductsInMiniBasket = document.querySelector('#numberOfProductsInMiniBasket');
const totalPriceInMiniBasket = document.querySelector('#totalPriceInMiniBasket');

const popup = document.querySelector('#popup');
const closePopupBtn = document.querySelector('#closePopup');
const buyBtn = document.querySelector('#buy-button');

const date = new Date();
const startDate = new Date(date.getFullYear(), 0, 1);
const day = date.getDay();
const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
const hour = date.getHours();
const month = date.getMonth();
const weekNumber = Math.ceil(days / 7);

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
    let adjustedPrice = totalPricePerProduct;
    adjustedPrice = products[i].price * products[i].amount;
    productAmount += products[i].amount;

      //Weekend price
  if ((day === 5 && hour > 15) || day === 6 || day === 0 || (day === 1 && hour < 3)) {
    adjustedPrice = Math.round(adjustedPrice * 1.15);
  }
  
    if (products[i].amount >= 10) {
      adjustedPrice *= 0.9;
      totalPriceDisplay.innerHTML = Math.round(totalPrice + shippingPrice);
    }
    totalPrice += adjustedPrice;
    productPriceDisplay.innerHTML = Math.round(totalPrice);
    shippingPriceDisplay.innerHTML = Math.round(shippingPrice);
    totalPriceDisplay.innerHTML = totalPrice + shippingPrice;

    if (products[i].amount > 0) {
      basketGrid.innerHTML += `
        <div class="item">
          <img src="${products[i].imgs[0].url}" height="100" width="100" alt="${products[i].imgs[0].alt}" />
          <div class="item-content">
            <div class="item-info">
              <h3>${products[i].name}</h3>
              <p>${products[i].desc}</p>
              <p class="tomten">${Math.round(adjustedPrice)}kr</p>
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
  if (productAmount > 0) {
    shippingPrice = 25 + totalPrice * 0.1;
    totalPriceDisplay.innerHTML = Math.round(totalPrice + shippingPrice);
    shippingPriceDisplay.innerHTML = Math.round(shippingPrice);
    discountMessage.innerHTML = '';
  }
  if (productAmount >= 15) {
    shippingPrice = 0;
    totalPriceDisplay.innerHTML = Math.round(totalPrice + shippingPrice);
    shippingPriceDisplay.innerHTML = Math.round(shippingPrice);
    discountMessage.innerHTML += 'Gratis frakt!' + '<br />';
  }

  //Lucia
  function lucia() {
    if (date.getDate() === 13 && month === 11) {
      discountMessage.innerHTML +=
        'Glad lucia! Vi på Kaffe Hörnan bjuder idag på en gratis luciakaffe vid varje beställning!' + '<br />';
    }
  }
  lucia();

  const addBtn = document.querySelectorAll('.button-add');
  addBtn.forEach(btn => {
    btn.addEventListener('click', add);
  });
  const removeBtn = document.querySelectorAll('.button-remove');
  removeBtn.forEach(btn => {
    btn.addEventListener('click', remove);
  });
  numberOfProductsInMiniBasket.innerHTML = `${productAmount}st`;
  totalPriceInMiniBasket.innerHTML = `${Math.round(totalPrice)}kr`;

  if (productAmount > 0) {
    miniBasket.classList.remove('hidden');
  } else {
    miniBasket.classList.add('hidden');
  }

  //Monday discount
  if (day === 1 && hour < 10) {
    discountMessage.innerHTML += 'Måndagsrabatt: 10 % på hela beställningen' + '<br />';
    productPriceDisplay.innerHTML = Math.round(totalPrice * 0.9);
    shippingPriceDisplay.innerHTML = Math.round(shippingPrice * 0.9);
    totalPriceDisplay.innerHTML = Math.round((totalPrice + shippingPrice) * 0.9);
  }

  //Biweekly tuesday discount
  if (weekNumber % 2 === 0 && date.getDay() === 2 && totalPrice > 25) {
    discountMessage.innerHTML +=
      'Lägg din beställning idag och få 25 kr rabatt (gäller endast vid beställningar över 25 kr)!' + '<br />';
    totalPriceDisplay.innerHTML = Math.round(totalPrice + shippingPrice - 25);
  }

  //Invoice option removed for orders > 800
  if (Math.round(totalPrice + shippingPrice) > 800) {
    document.getElementById('paymentType_invoice').disabled = true;
  }
  else {
    document.getElementById('paymentType_invoice').disabled = false;
  }
}

function checkDiscountCode() {
  if (discountCode.value === 'a_damn_fine-cup_of-coffee') {
    totalPricePerProduct = 0;
    totalPrice = 0;
    shippingPrice = 0;
    productPriceDisplay.innerHTML = totalPricePerProduct;
    totalPriceDisplay.innerHTML = totalPrice;
    shippingPriceDisplay.innerHTML = shippingPrice;
    discountMessage.innerHTML = 'Allt gratis! Du måste ha bra kontakter...';
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

  let sortedProducts = [...products];

  if (sortOptions === 'standard') {
    sortedProducts = filteredProductsInPriceRange;
  }

  if (sortOptions === 'priceHigh') {
    sortedProducts = filteredProductsInPriceRange.sort(byPriceRev);
  }

  if (sortOptions === 'priceLow') {
    sortedProducts = filteredProductsInPriceRange.sort(byPrice);
  }

  if (sortOptions === 'nameAtoZ') {
    sortedProducts = filteredProductsInPriceRange.sort(byName);
  }

  if (sortOptions === 'nameZtoA') {
    sortedProducts = filteredProductsInPriceRange.sort(byNameRev);
  }

  if (sortOptions === 'category') {
    sortedProducts = filteredProductsInPriceRange.sort(byCategory);
  }

  if (sortOptions === 'rating') {
    sortedProducts = filteredProductsInPriceRange.sort(byRating);
  }

  productGrid.innerHTML = '';

  for (let i = 0; i < sortedProducts.length; i += 1) {
    let adjustedPrice = sortedProducts[i].price;

    //Weekend price
    if ((day === 5 && hour > 15) || day === 6 || day === 0 || (day === 1 && hour < 3)) {
      adjustedPrice = Math.round(adjustedPrice * 1.15);
    }

    productGrid.innerHTML += `
        <div class="product-card" data-id="${i}">
            <div class="image">  
              <img
                class=""
                id="img1-${i}"
                src="${sortedProducts[i].imgs[0].url}"
                height="100"
                width="100"
                alt="${sortedProducts[i].imgs[0].alt}"
              />
              <img
                class="hidden"
                id="img2-${i}"
                src="${sortedProducts[i].imgs[1].url}"
                height="100"
                width="100"
                alt="${sortedProducts[i].imgs[1].alt}"
              />
              <div class="btnHolder">
              <button aria-label="next image" id="prevImg-${
                sortedProducts[i].productID - 1
              }" class="prevImg imgBtn"> <i class="fa-solid fa-chevron-left"></i> </button>         
              <button aria-label="previous image" id="nextImg-${
                sortedProducts[i].productID - 1
              }" class="nextImg imgBtn"> <i class="fa-solid fa-chevron-right"></i> </button>
              </div>
          </div>
            <div class="product-info">
                <h3>${sortedProducts[i].name}</h3>
                <p>${sortedProducts[i].rating}</p>
                <p>${sortedProducts[i].category}</p>
                <p>${sortedProducts[i].desc}</p>
                    <div class="product-selection">
                        <p class="grinch">${adjustedPrice}kr</p>
                        <button class="button-remove" data-id="${sortedProducts[i].productID - 1}">-</button>
                        <p>${sortedProducts[i].amount}</p>
                        <button class="button-add" data-id="${sortedProducts[i].productID - 1}">+</button>
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

const priceRangeSlider = document.querySelector('#priceRange');
const currentRangeValue = document.querySelector('#currentRangeValue');

let sortedProducts = products;
let filteredProductsInPriceRange = [...products];

function changePriceRange() {
  const currentPrice = priceRangeSlider.value;
  currentRangeValue.innerHTML = currentPrice;

  filteredProductsInPriceRange = sortedProducts.filter(products => products.price <= currentPrice);
  console.log(filteredProductsInPriceRange);
  renderProducts();
}

priceRangeSlider.addEventListener('input', changePriceRange);

function switchImage(e) {
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

  if (day === 5 && hour >= 11 && hour < 13) {
    deliveryTimeDisplay.innerHTML = 'Din leverans beräknas vara framme ca. kl 15';
  } else if (hour >= 22 || hour < 6) {
    deliveryTimeDisplay.innerHTML = 'Leveranstid beräknas till ca. 45 minuter';
  } else if (day === 6 || day === 0) {
    deliveryTimeDisplay.innerHTML = 'Leveranstid beräknas till ca. 1,5 timmar';
  } else {
    deliveryTimeDisplay.innerHTML = 'Leveranstid beräknas till ca. 30 minuter';
  }
}

function placeOrder() {
  if (popup.classList.contains('hidden')) {
    popup.classList.remove('hidden');
    getDeliveryTime();
    productConfirmation();
    resetOrder();
  } else {
    popup.classList.add('hidden');
  }
}

//Christmas background
function christmas() {
  const backgroundImage = document.getElementById('landing-page');
  const title = document.getElementById('landing-page-title');

  if (date.getDate() === 24 && month === 11) {
    document.body.classList.add('xmas');

    backgroundImage.style.background = "url('./img/kate-laine-9kNC6g-emEQ-unsplash (1).jpg')";
    backgroundImage.style.backgroundSize = 'cover';
    backgroundImage.style.width = '100%';
    backgroundImage.style.height = '100vh';
    title.style.color = 'solid $col-beige;';
    title.style.width = '80vw';
    title.style.height = '30wh';
    title.style.position = 'relative';
    title.style.margin = 'auto';
    title.style.background = 'black';
    title.style.top = '100px';
    title.style.paddingTop = '0';
    title.style.borderRadius = '2.5rem';
    title.style.border = '3px solid #dcbfa1';
    productPriceDisplay.style.color = 'red';
    shippingPriceDisplay.style.color = 'red';
    totalPriceDisplay.style.color = 'red';
  }
}

christmas();

// ***********************************************************************
//             Validation for all the forms
//      Har påbörjat refaktorering av koden men inte blivit klart.
//          Finns att se i branchen refaktorering 
// ***********************************************************************

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

const formMsg = 'Obligatoriskt';

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
    cardNrError.removeAttribute('hidden', '');
  }
  if (cardNrField.value.length < 16 || cardNrField.value.length > 16) {
    cardNrIsOk = false;
    cardNrError.innerHTML = '16 siffror tack';
    cardNrError.removeAttribute('hidden', '');
  } else {
    cardNrError.innerHTML = '<i class="fa-solid fa-check"></i>';
    cardNrError.removeAttribute('hidden', '');
    cardNrIsOk = true;
  }
  activateOrderButton();
}

function validateCvv() {
  if (cvvField.value.length === 0) {
    cvvIsOk = false;
    cvvError.innerHTML = '*';
    cvvError.removeAttribute('hidden', '');
  }
  if (cvvField.value.length < 3 || cvvField.value.length > 3) {
    cvvIsOk = false;
    cvvError.innerHTML = '3 siffror tack';
    cvvError.removeAttribute('hidden', '');
  } else {
    cvvIsOk = true;
    cvvError.innerHTML = '<i class="fa-solid fa-check"></i>';
    cvvError.removeAttribute('hidden', '');
  }
  activateOrderButton();
}

function validateName() {
  if (firstNameField.value.length === 0) {
    fNameIsOk = false;
    nameError.innerHTML = formMsg;
    nameError.removeAttribute('hidden', '');
  } else {
    fNameIsOk = true;
    nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    nameError.removeAttribute('hidden', '');
  }
  activateOrderButton();
}

function validateLastName() {
  if (lastNameField.value.length === 0) {
    lNameIsOk = false;
    lastNameError.innerHTML = formMsg;
    lastNameError.removeAttribute('hidden', '');
  } else {
    lNameIsOk = true;
    lastNameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    lastNameError.removeAttribute('hidden', '');
  }
  activateOrderButton();
}

function validateAdress() {
  if (adressField.value.length === 0) {
    adressIsOk = false;
    adressError.innerHTML = formMsg;
    adressError.removeAttribute('hidden', '');
  } else {
    adressIsOk = true;
    adressError.innerHTML = '<i class="fa-solid fa-check"></i>';
    adressError.removeAttribute('hidden', '');
  }
  activateOrderButton();
}

function validateZip() {
  if (zipCodeField.value.length === 0) {
    zipCodeIsOk = false;
    zipError.innerHTML = formMsg;
    zipError.removeAttribute('hidden', '');
  } else {
    zipCodeIsOk = true;
    zipError.innerHTML = '<i class="fa-solid fa-check"></i>';
    zipError.removeAttribute('hidden', '');
  }
  activateOrderButton();
}

function validateCity() {
  if (cityField.value.length === 0) {
    cityIsOk = false;
    cityError.innerHTML = formMsg;
    cityError.removeAttribute('hidden', '');
  } else {
    cityIsOk = true;
    cityError.innerHTML = '<i class="fa-solid fa-check"></i>';
    cityError.removeAttribute('hidden', '');
  }
  activateOrderButton();
}

function validatePhone() {
  if (phoneField.value.length === 0) {
    phoneIsOk = false;
    phoneError.innerHTML = formMsg;
    phoneError.removeAttribute('hidden', '');
  }
  if (!phoneField.value.match(/^[0-9]{10}$/)) {
    phoneIsOk = false;
    phoneError.innerHTML = 'var god fyll i ett giltligt mobilnr';
    phoneError.removeAttribute('hidden', '');
  } else {
    phoneIsOk = true;
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    phoneError.removeAttribute('hidden', '');
  }
  activateOrderButton();
}

function validateEmail() {
  if (emailField.value.length === 0) {
    emailIsOk = false;
    emailError.innerHTML = formMsg;
    emailError.removeAttribute('hidden', '');
  }
  if (!emailField.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailIsOk = false;
    emailError.innerHTML = 'Ogiltlig mejl';
    emailError.removeAttribute('hidden', '');
  } else {
    emailIsOk = true;
    emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
    emailError.removeAttribute('hidden', '');
  }
  activateOrderButton();
}

function validatePersonalNumber() {
  if (personalNrField.value.length === 0) {
    personalNrIsOk = false;
    personalNrError.innerHTML = '*';
    personalNrError.removeAttribute('hidden', '');
  }
  if (!personalNrField.value.match(/^(\d{6}|\d{8})[-|(\s)]{0,1}\d{4}$/)) {
    personalNrIsOk = false;
    personalNrError.innerHTML = '10 siffror tack';
    personalNrError.removeAttribute('hidden', '');
  } else {
    personalNrIsOk = true;
    personalNrError.innerHTML = '<i class="fa-solid fa-check"></i>';
    personalNrError.removeAttribute('hidden', '');
  }
  activateOrderButton();
}

function gdprCheck() {
  gdprIsOk = personalData.checked;
  activateOrderButton();
}

// ***********************************************************************
//     To activate the orderbtn when the form validation is complete
// ***********************************************************************

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

// ***********************************************************************
//   Function to show vs hide the forms for card and invoice option
// ***********************************************************************

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

// ***********************************************************************
//            Reset forms
// ***********************************************************************

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

  nameError.setAttribute('hidden', '');
  lastNameError.setAttribute('hidden', '');
  adressError.setAttribute('hidden', '');
  zipError.setAttribute('hidden', '');
  cityError.setAttribute('hidden', '');
  phoneError.setAttribute('hidden', '');
  emailError.setAttribute('hidden', '');
  personalNrError.setAttribute('hidden', '');
  cardNrError.setAttribute('hidden', '');
  cvvError.setAttribute('hidden', '');
}
// ***********************************************************************
//    Reset the forms and empty the basket after 15 min and gives the
//    user a alertmsg
// ***********************************************************************

setInterval(orderTimeOut, 900000);

function orderTimeOut() {
  if (
    firstNameField.value.length > 0 ||
    lastNameField.value.length > 0 ||
    adressField.value.length > 0 ||
    zipCodeField.value.length > 0 ||
    emailField.value.length > 0 ||
    phoneField.value.length > 0 ||
    cityField.value.length > 0 ||
    personalNrField.value.length > 0 ||
    cardNrField.value.length > 0 ||
    cvvField.value.length > 0
  ) {
    resetOrder();
    alert('För långsam!');
  }
}

// *************************************************
// Function to switch between dark and light theme
// ************************************************

const changeThemeBtn= document.getElementById('darkThemeBtn');
changeThemeBtn.addEventListener('click', darkTheme);

function darkTheme() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

// Dark theme ends 

renderProducts();
checkDiscountBtn.addEventListener('click', checkDiscountCode);
buyBtn.addEventListener('click', placeOrder);
closePopupBtn.addEventListener('click', placeOrder);
