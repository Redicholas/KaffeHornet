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

function renderProducts() {
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
                        <button onclick="remove()" data-id="${i}">-</button>
                        <p id="test">${products[i].amount}</p>
                        <button class="button-add" data-id="${i}">+</button>
                    </div>
            </div>
        </div>
        `;
    console.log(products[i].amount);
  }
  const addbtn = document.querySelectorAll('.button-add');
  addbtn.forEach(btn => {
    btn.addEventListener('click', add);
  });
}

function add() {
  products[this.dataset.id].amount += 1;
  console.log(document.querySelector('#test'));
  renderProducts();
}

function remove() {
  products[this.dataset.id].amount -= 1;
  renderProducts();
}

renderProducts();

/* <form>
  <input type="submit">Köp</input>
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
  </form> 
*/
