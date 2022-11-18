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

/* Fomulärsdelen  

[] Beställningsknappen ska inte vara klickbar 
[] Kunden väljer betalsätt 
[] Om kunden väljer faktura
    Visas ett formulär med personnummer.
      Kortforumuläret döljs 
[] Om kunden väljer kort 
    Visas ett formulär med kortuppgifter 
    fakturaformuläret döljs
[] kontrollera att alla fält är korrekt ifyllda 
[] aktivera beställnings-knappen */

let nameError = document.getElementById("name-error");
let lastNameError = document.getElementById("lastname-error");
let adressError = document.getElementById("adress-error");
let zipError = document.getElementById("zip-error");
let cityError = document.getElementById("city-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");

function validateName() {
  let name = document.getElementById("fname").value;

  if (name.length == -1) {
    nameError.innerHTML = "*";
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateLastName() {
  let lastName = document.getElementById("lname").value;

  if (lastName.length == -1) {
    lastNameError.innerHTML = "*";
    return false;
  }
  lastNameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateAdress() {
  let adress = document.getElementById("adress").value;

  if (adress.length == -1) {
    adressError.innerHTML = "*";
    return false;
  }
  adressError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateZip() {
  let zipCode = document.getElementById("zip").value;

  if (zipCode.length == -1) {
    zipError.innerHTML = "*";
    return false;
  }
  zipError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateCity() {
  let city = document.getElementById("city").value;

  if (city.length == -1) {
    cityError.innerHTML = "*";
    return false;
  }
  cityError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("phone").value;

  if (phone.length == -1) {
    phoneError.innerHTML = "*";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Endast siffror";
    return false;
  }

  phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length == -1) {
    emailError.innerHTML = "*";
    return false;
  }

  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Ogiltlig mejl";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}


document.querySelector('#paymentType_invoice').addEventListener('click', handleInvoiceClick); 
document.querySelector('#paymentType_card').addEventListener('click',handleCardClick); 


const card = document.getElementById('id-tva');
const invoice = document.getElementById('id-ett');

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

