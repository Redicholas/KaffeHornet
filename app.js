const products = [
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

const productGrid = document.querySelector("#product-grid")

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

// Fomulärsdelen 

// Kunden väljer betalsätt 
// Om kunden väljer faktura
// Visas ett formulär med personnummer.
// Kortforumuläret döljs 
// Om kunden väljer kort 
// Visas ett formulär med kortuppgifter 
// fakturaformuläret döljs

