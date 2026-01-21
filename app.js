'use strict';


'use strict';

'use strict';

const API_URL = 'http://web4.informatics.ru:82/api/6436d49e668672662d90796413659540';

const products = [
    { id: 1, name: "Пылающий Клинок", price: "1,200 Gold", desc: "Легендарный меч, наносящий урон огнем.", img: "479943.jpg" },
    { id: 2, name: "Щит Дракона", price: "2,500 Gold", desc: "Защищает от любого магического воздействия.", img: "479943.jpg" },
    { id: 3, name: "Кольцо Удачи", price: "800 Gold", desc: "Увеличивает шанс выпадения редкого лута.", img: "479943.jpg" },
    { id: 4, name: "Шлем Валькирии", price: "1,800 Gold", desc: "Дарует владельцу невероятную скорость.", img: "479943.jpg" }
];

const catalogContainer = document.getElementById('catalog');
const searchInput = document.getElementById('username-input');
const cartCountElem = document.getElementById('cart-count');
let count = 0;

function renderProducts(itemsToRender) {
    catalogContainer.innerHTML = '';

    itemsToRender.forEach(item => {
        const card = document.createElement('div');
        card.className = 'product-card'; //
        
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="product-img">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <div class="price">${item.price}</div>
            <button class="product-btn">В корзину</button>
        `;

        const btn = card.querySelector('.product-btn');
        btn.addEventListener('click', () => {
            count++;
            cartCountElem.textContent = count;
            btn.textContent = "В корзине!";
            btn.style.backgroundColor = "#ff0055"; //
        });

        catalogContainer.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    const searchText = e.target.value.toLowerCase();

    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(searchText)
    );
    
    renderProducts(filtered);
});

renderProducts(products);

