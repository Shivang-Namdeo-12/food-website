/*var swiper = new Swiper(".mySwiper", {
    loop:true,
    navigation: {
        nextEl: "#next",
        prevEl: "#prev",
    },
});


const cartIcon=document.querySelector('.cart-icon');
const cartTab=document.querySelector('cart-tab');
const closeBtn=document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const cartList = document.querySelector('.cart-list');
const cartTotal = document.querySelector('cart-total');
const cartValue = document.querySelector('cart-value');
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const bars = document.querySelector('.fa-bars');

cartIcon.addEventListener('click',()=> cartTab.classList.add('cart-tab-active'));

cartIcon.addEventListener('click', ()=> cartTab.classList.remove('cart-tab-active'));
hamburger.addEventListener('click',()=>mobileMenu.classList.toggle('mobile-menu-active'));
hamburger.addEventListener('click',()=>bars.classList.toggle('fa-xmark'));
let productList=[];
let cartproduct=[];

const updateTotal =() =>{
    let totalPrice=0;
    let totalQuantity =0;

    document.querySelectorAll('.item').forEach(item =>{

        const quantity = parseInt(item.querySelector('.quantity-value').textContent);
        const price = parseFloat(item.querySelector('.item-total').textContent.replace('$',''));

        totalPrice += price;
        totalQuantity += quantity;
    });

    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    cartValue.textContent = totalQuantity;
}
const showCards= () =>{

    productList.forEach(product=>{
        const orderCard = document.createElement('div');
        orderCard.classList.add('order-card');

        orderCard.innerHTML = `
         <div class="card-image">
             <img src="${product.image}">
         </div>
         <h4>${product.name}</h4>
         <h4 class="price">${product.price}>$20</h4>
         <a href="#" class="btn">Add to cart</a>
        `;

        cardList.appendChild(orderCard);

        const cardBtn = orderCard.querySelector('card-btn');
        cardBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            addToCart(product);
            
        });
    })
};

const addToCart = (product) =>{

    const existingProduct = cartProduct.find(item => item.id=== product.id);
    if(existingProduct){
        alert('Item already in your cart!');
        return;
    }

    cartProduct.push(product);4

    let quantity = 1;

    let price = parseFloat(product.price.replace('$',''))

    const cartItem = document.createElement('div');
    cartItem.classList.add('item');

    cartItem.innerHTML=`
      <div class="item-image">
            <img src="${product.image}">
      </div>
       <div class="detail">
           <h4>${product.name}</h4>
           <h4 class="item-total">${product.price}</h4>
       </div>
       <div class="flex">
          <h4 class="quantity-value">${quantity}</h4>
             <a href="#" class="quantity-btn minus">
              <i class="fa-solid fa-minus"></i>
             </a>
             <a href="#" class="quantity-btn plus">
              <i class="fa-solid fa-plus"></i>
             </a>
      </div>
    `;

    cartList.appendChild(cartItem);
    updateTotals();


    const plusBtn = cartItem.querySelector('.plus');
    const quantityValue =cartItem.querySelector('quantity-value');
    const itemTotal = cartItem.querySelector('.item-total');
    const minusBtn= cartItem.querySelector('.minus');

    plusBtn.addEventListener('click',()=>{

        e.preventDefault();
        quantity++;
        quantityValue.textContent = quality;
        itemTotal.textContent = `$${(price *quantity).toFixed(2)}`;
        updateTotals();
    });

    minusBtn.addEventListener('click',()=>{

        e.preventDefault();

        if(quantity > 1){

         quantity--;
        quantityValue.textContent = quantity;
        itemTotal.textContent = `$${(price * quantity).toFixed(2)}`;
        updateTotals();
        }

        else{
            cartItem.classList.add('slide-out')
        
            setTimeout(()=>{
                cartItem.remove();
                cartProduct = cartProduct.filter(item=> item.id!==product.id);
                updateTotals();
            },300)
        }
    })
}
const initApp = () =>{

    fetch('products.json').then
    (response => response.json()).then
    (data =>{
        productList = data;
        console.log(productList);
        showCards();
    })
}

initApp();*/

/* ------------------  SWIPER  ------------------ */
var swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: {
        nextEl: "#next",
        prevEl: "#prev",
    },
});

/* ------------------ DOM ELEMENTS ------------------ */
const cartIcon = document.querySelector('.cart-icon');
const cartTab = document.querySelector('.cart-tab');
const closeBtn = document.querySelector('.close-btn');
const cardList = document.querySelector('.card-list');
const cartList = document.querySelector('.cart-list');
const cartTotal = document.querySelector('.cart-total');
const cartValue = document.querySelector('.cart-value');

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const bars = document.querySelector('.fa-bars');

/* ------------------ MOBILE MENU ------------------ */
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-active');
    bars.classList.toggle('fa-xmark');
});

/* ------------------ CART OPEN / CLOSE ------------------ */
cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    cartTab.classList.add('cart-tab-active');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartTab.classList.remove('cart-tab-active');
});

/* ------------------ CART DATA ------------------ */
let productList = [];
let cartProducts = [];

/* ------------------ UPDATE TOTAL ------------------ */
function updateTotal() {
    let totalPrice = 0;
    let totalQty = 0;

    document.querySelectorAll('.item').forEach(item => {
        const qty = parseInt(item.querySelector('.quantity-value').textContent);
        const price = parseFloat(item.querySelector('.item-total').textContent.replace('$', ''));

        totalQty += qty;
        totalPrice += price;
    });

    cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    cartValue.textContent = totalQty;
}

/* ------------------ SHOW DYNAMIC CARDS ------------------ */
function showCards() {
    productList.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('order-card');

        card.innerHTML = `
            <div class="card-image">
                <img src="${product.image}">
            </div>
            <h4>${product.name}</h4>
            <h4 class="price">${product.price}</h4>
            <a href="#" class="btn add-btn">Add to cart</a>
        `;

        cardList.appendChild(card);

        // ADD TO CART BTN
        card.querySelector('.add-btn').addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(product);
        });
    });
}

/* ------------------ ADD TO CART ------------------ */
function addToCart(product) {

    const existing = cartProducts.find(item => item.id === product.id);

    if (existing) {
        alert("Item already in cart!");
        return;
    }

    cartProducts.push(product);

    let qty = 1;
    let price = parseFloat(product.price.replace('$', ''));

    const cartItem = document.createElement('div');
    cartItem.classList.add('item');

    cartItem.innerHTML = `
        <div class="item-image">
            <img src="${product.image}">
        </div>
        <div class="detail">
            <h4>${product.name}</h4>
            <h4 class="item-total">$${price.toFixed(2)}</h4>
        </div>
        <div class="flex">
            <h4 class="quantity-value">${qty}</h4>

            <a href="#" class="quantity-btn minus">
                <i class="fa-solid fa-minus"></i>
            </a>

            <a href="#" class="quantity-btn plus">
                <i class="fa-solid fa-plus"></i>
            </a>
        </div>
    `;

    cartList.appendChild(cartItem);
    updateTotal();

    /* ------------------ PLUS BUTTON ------------------ */
    const plusBtn = cartItem.querySelector('.plus');
    const qtyValue = cartItem.querySelector('.quantity-value');
    const itemTotal = cartItem.querySelector('.item-total');

    plusBtn.addEventListener('click', (e) => {
        e.preventDefault();
        qty++;
        qtyValue.textContent = qty;
        itemTotal.textContent = `$${(price * qty).toFixed(2)}`;
        updateTotal();
    });

    /* ------------------ MINUS BUTTON ------------------ */
    const minusBtn = cartItem.querySelector('.minus');

    minusBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (qty > 1) {
            qty--;
            qtyValue.textContent = qty;
            itemTotal.textContent = `$${(price * qty).toFixed(2)}`;
            updateTotal();
        } else {
            // REMOVE ANIMATION
            cartItem.classList.add('slide-out');

            setTimeout(() => {
                cartItem.remove();
                cartProducts = cartProducts.filter(item => item.id !== product.id);
                updateTotal();
            }, 300);
        }
    });
}

/* ------------------ FETCH PRODUCTS ------------------ */
function initApp() {
    fetch("products.json")
        .then(res => res.json())
        .then(data => {
            productList = data;
            showCards();
        })
        .catch(err => console.log("Error loading products.json", err));
}

initApp();
