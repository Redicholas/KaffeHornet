/*let products = [
    {
        "productId": 1,
        "img": "img/produkt-1-kaffepasar.jpg",
        "imgAlt": "",
        "name":  "Sibaristica",
        "desc": "Bönor från Guatemala och Colombia",
        "price": 129,
        "amount": 0
    },
    {
        "productId": 2,
        "img": "img/produkt-2-andrakaffapasar.jpg",
        "imgAlt": "",
        "name":  "Blue Magic",
        "desc": "Espressobönor",
        "price": 119,
        "amount": 0
    },
    {
        "productId": 3,
        "img": "img/produkt-3-merkaffe.jpg",
        "imgAlt": "",
        "name":  "Specialty Beans",
        "desc": '"Speciella" bönor från Ethiopien',
        "price": 129,
        "amount": 0
    },
    {
        "productId": 4,
        "img": "img/produkt-4-kopp.jpg",
        "imgAlt": "",
        "name":  "Rustik",
        "desc": "Svart kopp i keramik",
        "price": 49,
        "amount": 0
    },
    {
        "product-id": 5,
        "img": "img/produkt-5-kopp2.jpg",
        "imgAlt": "",
        "name":  "Grön",
        "desc": "Kopp i poppande grön färg",
        "price": 39,
        "amount": 0
    },
    {
        "productId": 6,
        "img": "img/produkt-6-v60.jpg",
        "imgAlt": "",
        "name":  "V60",
        "desc": "V60 bryggaren som tilltalar din inre hipster",
        "price": 599,
        "amount": 0
    },
    {
        "productId": 7,
        "img": "img/produkt-7-aeropress.jpg",
        "imgAlt": "",
        "name":  "Aeropress",
        "desc": "För dig som vill kunna göra kaffe var som helst!",
        "price": 499,
        "amount": 0
    },
    {
        "productId": 8,
        "img": "img/produkt-8-kopp3.jpg",
        "imgAlt": "",
        "name":  "Fancy",
        "desc": "För ditt finbesök",
        "price": 49,
        "amount": 0
    },
    {
        "productId": 9,
        "img": "img/produkt-9-franskpress.jpg",
        "imgAlt": "",
        "name":  "Franskpress",
        "desc": "Den klassiska Franskpressen går alltid hem",
        "price": 199,
        "amount": 0
    },
    {
        "productId": 10,
        "img": "img/produkt-10-kopp4.jpg",
        "imgAlt": "",
        "name":  "Orange",
        "desc": "En större kopp för dig med ett större beroende",
        "price": 39,
        "amount": 0
    },
]

let productGrid = document.getElementById("#product-grid")

function renderProducts() {
    for (let i = 0; i < products.length; i++) {
        productGrid.innerHTML +=
        `
        <div class="product-card" id="${products[i].productId}">
            <div class="image">
                <img
                    src="${products[i].img}"
                    height="100"
                    width="100"
                    alt=""
                />
            </div>
            <div class="product-info">
                <h3>${products[i].name}</h3>
                <p>${products[i].desc}</p>
                    <div class="product-selection">
                        <p>${products[i].price}</p>
                        <button>Köp</button>
                        <select name="amount">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        ` 
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




