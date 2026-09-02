/* =========================================================
   SHOPVERSE - COMPLETE APP.JS
   100 PRODUCTS + CART + WISHLIST + PRODUCT FUNCTIONS
========================================================= */

const IMG = {

  /* FASHION */
  sneaker1: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  sneaker2: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80',
  jacket: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80',
  hoodie: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=900&q=80',
  tshirt: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  fashion: 'https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=900&q=80',

  /* ELECTRONICS */
  headphones: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
  phone: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  speaker: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80',
  keyboard: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80',
  gaming: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80',
  laptop: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
  tv: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80',

  /* BEAUTY */
  skincare: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=80',
  cream: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=900&q=80',
  perfume: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  makeup: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80',
  beauty: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=80',

  /* HOME */
  lamp: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=80',
  chair: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80',
  decor: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80',
  coffee: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
  table: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=900&q=80',

  /* SPORTS */
  football: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?auto=format&fit=crop&w=900&q=80',
  running: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=900&q=80',
  gym: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
  yoga: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=80',
  backpack: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',

  /* ACCESSORIES */
  watch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  watch2: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=80',
  sunglasses: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
  earbuds: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=900&q=80',
  travelbag: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80'
};


var products = [

/* =========================================================
   FASHION - 17 PRODUCTS
========================================================= */

{id:1,name:'Premium Red Sneakers',cat:'Fashion',price:89,image:IMG.sneaker1,desc:'Modern premium sneakers designed for everyday comfort and style.'},

{id:2,name:'Classic White Sneakers',cat:'Fashion',price:75,image:IMG.sneaker2,desc:'Clean white sneakers with a timeless everyday design.'},

{id:3,name:'Urban Street Sneakers',cat:'Fashion',price:95,image:IMG.sneaker1,desc:'Comfortable street sneakers with a bold modern look.'},

{id:4,name:'Classic Leather Jacket',cat:'Fashion',price:149,image:IMG.jacket,desc:'Premium leather jacket designed for a timeless look.'},

{id:5,name:'Modern Black Jacket',cat:'Fashion',price:135,image:IMG.jacket,desc:'A stylish jacket with a premium modern finish.'},

{id:6,name:'Premium Everyday Hoodie',cat:'Fashion',price:69,image:IMG.hoodie,desc:'Comfortable premium hoodie for everyday wear.'},

{id:7,name:'Essential Black Hoodie',cat:'Fashion',price:72,image:IMG.hoodie,desc:'Minimal and comfortable hoodie for your wardrobe.'},

{id:8,name:'Minimal White T-Shirt',cat:'Fashion',price:35,image:IMG.tshirt,desc:'A clean everyday essential with premium comfort.'},

{id:9,name:'Premium Cotton T-Shirt',cat:'Fashion',price:39,image:IMG.tshirt,desc:'Soft cotton t-shirt made for daily comfort.'},

{id:10,name:'Designer Casual Outfit',cat:'Fashion',price:119,image:IMG.fashion,desc:'A stylish modern fashion piece for everyday life.'},

{id:11,name:'Modern Denim Style',cat:'Fashion',price:99,image:IMG.fashion,desc:'Premium casual fashion with a clean modern appearance.'},

{id:12,name:'Luxury Streetwear',cat:'Fashion',price:129,image:IMG.fashion,desc:'Contemporary streetwear designed with premium details.'},

{id:13,name:'Sport Lifestyle Shoes',cat:'Fashion',price:105,image:IMG.sneaker2,desc:'Lightweight shoes combining comfort and style.'},

{id:14,name:'Premium Running Sneakers',cat:'Fashion',price:115,image:IMG.sneaker1,desc:'High-quality sneakers designed for active everyday use.'},

{id:15,name:'Classic Casual Jacket',cat:'Fashion',price:125,image:IMG.jacket,desc:'A versatile premium jacket for every season.'},

{id:16,name:'Comfort Fit Hoodie',cat:'Fashion',price:64,image:IMG.hoodie,desc:'Relaxed comfort with a clean minimalist design.'},

{id:17,name:'Everyday Premium Shirt',cat:'Fashion',price:49,image:IMG.tshirt,desc:'A stylish shirt built for everyday comfort.'},


/* =========================================================
   ELECTRONICS - 17 PRODUCTS
========================================================= */

{id:18,name:'Wireless Noise Canceling Headphones',cat:'Electronics',price:129,image:IMG.headphones,desc:'Immersive sound with a premium comfortable design.'},

{id:19,name:'Premium Bluetooth Headphones',cat:'Electronics',price:149,image:IMG.headphones,desc:'High-quality wireless audio for music and entertainment.'},

{id:20,name:'Ultra Premium Smartphone',cat:'Electronics',price:899,image:IMG.phone,desc:'Powerful performance with a beautiful modern design.'},

{id:21,name:'Flagship Smart Phone',cat:'Electronics',price:999,image:IMG.phone,desc:'Advanced camera, premium display and fast performance.'},

{id:22,name:'Portable Bluetooth Speaker',cat:'Electronics',price:79,image:IMG.speaker,desc:'Portable premium sound for every room and trip.'},

{id:23,name:'Mini Wireless Speaker',cat:'Electronics',price:59,image:IMG.speaker,desc:'Compact speaker with powerful everyday sound.'},

{id:24,name:'Wireless Mechanical Keyboard',cat:'Electronics',price:89,image:IMG.keyboard,desc:'A modern wireless keyboard for productive workspaces.'},

{id:25,name:'Premium Office Keyboard',cat:'Electronics',price:65,image:IMG.keyboard,desc:'Clean and comfortable typing for everyday work.'},

{id:26,name:'Gaming Performance Mouse',cat:'Electronics',price:59,image:IMG.gaming,desc:'Precision and speed designed for gaming performance.'},

{id:27,name:'Professional Gaming Mouse',cat:'Electronics',price:79,image:IMG.gaming,desc:'Advanced control with a comfortable ergonomic design.'},

{id:28,name:'Premium Work Laptop',cat:'Electronics',price:1299,image:IMG.laptop,desc:'Powerful laptop designed for work and creativity.'},

{id:29,name:'Ultra Slim Laptop',cat:'Electronics',price:1099,image:IMG.laptop,desc:'A lightweight laptop with premium everyday performance.'},

{id:30,name:'Ultra HD Smart TV',cat:'Electronics',price:699,image:IMG.tv,desc:'Enjoy movies and entertainment in stunning quality.'},

{id:31,name:'Premium Entertainment TV',cat:'Electronics',price:899,image:IMG.tv,desc:'Large premium display for your complete entertainment setup.'},

{id:32,name:'Studio Wireless Headset',cat:'Electronics',price:179,image:IMG.headphones,desc:'Professional quality sound with premium comfort.'},

{id:33,name:'Smart Portable Speaker',cat:'Electronics',price:99,image:IMG.speaker,desc:'Modern wireless audio designed for every space.'},

{id:34,name:'Modern Home Computer',cat:'Electronics',price:1199,image:IMG.laptop,desc:'Premium computing power for home and office.'},


/* =========================================================
   BEAUTY - 16 PRODUCTS
========================================================= */

{id:35,name:'Luxury Skin Care Set',cat:'Beauty',price:65,image:IMG.skincare,desc:'A curated daily skincare routine for a fresh glow.'},

{id:36,name:'Premium Face Cream',cat:'Beauty',price:42,image:IMG.cream,desc:'Nourishing face cream for everyday skincare.'},

{id:37,name:'Luxury Signature Perfume',cat:'Beauty',price:120,image:IMG.perfume,desc:'A sophisticated fragrance for every occasion.'},

{id:38,name:'Professional Makeup Kit',cat:'Beauty',price:95,image:IMG.makeup,desc:'A complete collection of premium beauty essentials.'},

{id:39,name:'Beauty Essentials Collection',cat:'Beauty',price:85,image:IMG.beauty,desc:'Everything you need for a complete beauty routine.'},

{id:40,name:'Hydrating Skin Set',cat:'Beauty',price:59,image:IMG.skincare,desc:'Daily hydration products designed for healthy looking skin.'},

{id:41,name:'Daily Moisture Cream',cat:'Beauty',price:35,image:IMG.cream,desc:'Lightweight daily moisture for your skincare routine.'},

{id:42,name:'Premium Evening Perfume',cat:'Beauty',price:145,image:IMG.perfume,desc:'A luxurious fragrance with a sophisticated character.'},

{id:43,name:'Professional Beauty Set',cat:'Beauty',price:110,image:IMG.makeup,desc:'Premium beauty products for a complete look.'},

{id:44,name:'Natural Beauty Collection',cat:'Beauty',price:75,image:IMG.beauty,desc:'A carefully selected collection of beauty essentials.'},

{id:45,name:'Advanced Skincare Routine',cat:'Beauty',price:99,image:IMG.skincare,desc:'Premium skincare products for your daily routine.'},

{id:46,name:'Luxury Night Cream',cat:'Beauty',price:58,image:IMG.cream,desc:'Rich overnight skincare with a premium formula.'},

{id:47,name:'Fresh Everyday Fragrance',cat:'Beauty',price:89,image:IMG.perfume,desc:'A clean fragrance designed for everyday confidence.'},

{id:48,name:'Complete Makeup Collection',cat:'Beauty',price:130,image:IMG.makeup,desc:'Everything needed to create your perfect look.'},

{id:49,name:'Premium Self Care Set',cat:'Beauty',price:79,image:IMG.beauty,desc:'Beautiful everyday products for your self care routine.'},

{id:50,name:'Luxury Glow Skincare',cat:'Beauty',price:105,image:IMG.skincare,desc:'Premium products designed for a healthy natural glow.'},


/* =========================================================
   HOME - 17 PRODUCTS
========================================================= */

{id:51,name:'Designer Table Lamp',cat:'Home',price:95,image:IMG.lamp,desc:'Warm modern lighting for beautiful interiors.'},

{id:52,name:'Modern Floor Lamp',cat:'Home',price:130,image:IMG.lamp,desc:'Elegant lighting for a premium home interior.'},

{id:53,name:'Premium Lounge Chair',cat:'Home',price:299,image:IMG.chair,desc:'Comfortable modern furniture for your living space.'},

{id:54,name:'Designer Living Chair',cat:'Home',price:349,image:IMG.chair,desc:'A premium chair combining comfort and modern style.'},

{id:55,name:'Modern Home Decor',cat:'Home',price:55,image:IMG.decor,desc:'Beautiful decor designed for modern spaces.'},

{id:56,name:'Luxury Interior Decor',cat:'Home',price:89,image:IMG.decor,desc:'Premium decorative pieces for a beautiful home.'},

{id:57,name:'Premium Coffee Maker',cat:'Home',price:180,image:IMG.coffee,desc:'Make café-quality coffee from the comfort of home.'},

{id:58,name:'Modern Coffee Machine',cat:'Home',price:249,image:IMG.coffee,desc:'A stylish coffee machine for everyday use.'},

{id:59,name:'Minimal Coffee Table',cat:'Home',price:220,image:IMG.table,desc:'A stylish centerpiece for your living room.'},

{id:60,name:'Premium Living Room Table',cat:'Home',price:275,image:IMG.table,desc:'Modern furniture with a clean premium design.'},

{id:61,name:'Elegant Reading Lamp',cat:'Home',price:110,image:IMG.lamp,desc:'Perfect lighting for reading and relaxing.'},

{id:62,name:'Comfort Home Chair',cat:'Home',price:279,image:IMG.chair,desc:'Relax in comfort with this modern home chair.'},

{id:63,name:'Modern Wall Decor',cat:'Home',price:69,image:IMG.decor,desc:'Add a premium touch to your interior space.'},

{id:64,name:'Barista Coffee Machine',cat:'Home',price:329,image:IMG.coffee,desc:'Premium coffee preparation for serious coffee lovers.'},

{id:65,name:'Minimal Side Table',cat:'Home',price:155,image:IMG.table,desc:'A versatile table designed for modern interiors.'},

{id:66,name:'Luxury Bedroom Lamp',cat:'Home',price:140,image:IMG.lamp,desc:'Soft premium lighting for your bedroom.'},

{id:67,name:'Premium Home Furniture',cat:'Home',price:399,image:IMG.chair,desc:'Modern furniture built for comfort and style.'},


/* =========================================================
   SPORTS - 16 PRODUCTS
========================================================= */

{id:68,name:'Professional Football',cat:'Sports',price:35,image:IMG.football,desc:'Reliable training equipment for your next session.'},

{id:69,name:'Premium Match Football',cat:'Sports',price:55,image:IMG.football,desc:'High-quality football designed for serious players.'},

{id:70,name:'Performance Running Shoes',cat:'Sports',price:110,image:IMG.running,desc:'Lightweight shoes built for comfort and performance.'},

{id:71,name:'Professional Running Shoes',cat:'Sports',price:135,image:IMG.running,desc:'Premium running support for your active lifestyle.'},

{id:72,name:'Fitness Dumbbell Set',cat:'Sports',price:75,image:IMG.gym,desc:'Build strength with premium training equipment.'},

{id:73,name:'Professional Gym Equipment',cat:'Sports',price:199,image:IMG.gym,desc:'Quality equipment for effective strength training.'},

{id:74,name:'Premium Yoga Mat',cat:'Sports',price:45,image:IMG.yoga,desc:'Comfortable support for daily yoga and workouts.'},

{id:75,name:'Professional Exercise Mat',cat:'Sports',price:59,image:IMG.yoga,desc:'Durable workout support for every training session.'},

{id:76,name:'Training Sports Backpack',cat:'Sports',price:79,image:IMG.backpack,desc:'Carry your sports essentials in premium style.'},

{id:77,name:'Athlete Travel Backpack',cat:'Sports',price:99,image:IMG.backpack,desc:'Spacious premium bag for training and travel.'},

{id:78,name:'Elite Training Football',cat:'Sports',price:65,image:IMG.football,desc:'Premium construction designed for regular training.'},

{id:79,name:'Comfort Sport Shoes',cat:'Sports',price:125,image:IMG.running,desc:'Comfortable shoes designed for an active lifestyle.'},

{id:80,name:'Premium Weight Training Set',cat:'Sports',price:149,image:IMG.gym,desc:'Upgrade your home training experience.'},

{id:81,name:'Daily Fitness Mat',cat:'Sports',price:39,image:IMG.yoga,desc:'A practical mat for daily exercise and stretching.'},

{id:82,name:'Sports Equipment Backpack',cat:'Sports',price:89,image:IMG.backpack,desc:'Organize and carry all your training essentials.'},

{id:83,name:'Professional Sports Collection',cat:'Sports',price:159,image:IMG.gym,desc:'Premium sports equipment for serious training.'},


/* =========================================================
   ACCESSORIES - 17 PRODUCTS
========================================================= */

{id:84,name:'Smart Watch Pro',cat:'Accessories',price:149,image:IMG.watch,desc:'Smart tracking and timeless everyday style.'},

{id:85,name:'Premium Classic Watch',cat:'Accessories',price:199,image:IMG.watch2,desc:'A timeless watch with premium craftsmanship.'},

{id:86,name:'Luxury Smart Watch',cat:'Accessories',price:249,image:IMG.watch,desc:'Premium technology combined with elegant style.'},

{id:87,name:'Classic Premium Watch',cat:'Accessories',price:229,image:IMG.watch2,desc:'A sophisticated watch for every occasion.'},

{id:88,name:'Premium Sunglasses',cat:'Accessories',price:99,image:IMG.sunglasses,desc:'Modern sunglasses with a premium stylish design.'},

{id:89,name:'Designer Sunglasses',cat:'Accessories',price:139,image:IMG.sunglasses,desc:'Luxury eyewear designed for everyday confidence.'},

{id:90,name:'Wireless Premium Earbuds',cat:'Accessories',price:89,image:IMG.earbuds,desc:'Compact premium audio for everyday life.'},

{id:91,name:'Pro Wireless Earbuds',cat:'Accessories',price:129,image:IMG.earbuds,desc:'High-quality wireless sound in a compact design.'},

{id:92,name:'Leather Travel Bag',cat:'Accessories',price:165,image:IMG.travelbag,desc:'A stylish premium bag designed for travel.'},

{id:93,name:'Premium Travel Backpack',cat:'Accessories',price:119,image:IMG.travelbag,desc:'Modern storage for work, travel and everyday life.'},

{id:94,name:'Digital Fitness Watch',cat:'Accessories',price:179,image:IMG.watch,desc:'Track your activity with modern smart technology.'},

{id:95,name:'Luxury Wrist Watch',cat:'Accessories',price:299,image:IMG.watch2,desc:'Premium craftsmanship with timeless style.'},

{id:96,name:'Classic Fashion Sunglasses',cat:'Accessories',price:109,image:IMG.sunglasses,desc:'A stylish accessory for every season.'},

{id:97,name:'Premium Audio Earbuds',cat:'Accessories',price:119,image:IMG.earbuds,desc:'Clear sound and comfortable wireless listening.'},

{id:98,name:'Modern Everyday Bag',cat:'Accessories',price:139,image:IMG.travelbag,desc:'A versatile premium bag for everyday essentials.'},

{id:99,name:'Ultimate Smart Watch',cat:'Accessories',price:329,image:IMG.watch,desc:'Advanced smart features with premium design.'},

{id:100,name:'Executive Classic Watch',cat:'Accessories',price:349,image:IMG.watch2,desc:'A sophisticated luxury watch for a timeless look.'}

];


/* =========================================================
   CART + WISHLIST STORAGE
========================================================= */

let cart = JSON.parse(
  localStorage.getItem('svcart') || '[]'
);

let wishlist = JSON.parse(
  localStorage.getItem('svwish') || '[]'
);


/* =========================================================
   SAVE DATA
========================================================= */

function save(){

  localStorage.setItem(
    'svcart',
    JSON.stringify(cart)
  );

  localStorage.setItem(
    'svwish',
    JSON.stringify(wishlist)
  );

  document
    .querySelectorAll('[data-cart-count]')
    .forEach(element => {

      element.textContent = cart.reduce(
        (total,item) => total + item.qty,
        0
      );

    });

}


/* =========================================================
   TOAST MESSAGE
========================================================= */

function toast(message){

  let element = document.getElementById('toast');

  if(!element){

    alert(message);
    return;

  }

  element.textContent = message;

  element.classList.add('show');

  setTimeout(() => {

    element.classList.remove('show');

  },1800);

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function productCard(product){

  return `

  <article class="product">

    <a href="product.html?id=${product.id}">

      <img
        src="${product.image}"
        alt="${product.name}"
        loading="lazy"
      >

    </a>

    <button
      class="wish ${wishlist.includes(product.id) ? 'active' : ''}"
      onclick="toggleWish(${product.id})"
      aria-label="Add to wishlist"
    >
      ♡
    </button>

    <div class="info">

      <div class="meta">
        ${product.cat}
      </div>

      <div class="name">
        ${product.name}
      </div>

      <div class="price">
        $${product.price}
      </div>

      <button
        class="add"
        onclick="addCart(${product.id})"
      >
        Add to Cart
      </button>

    </div>

  </article>

  `;

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts(
  target = 'products',
  list = products
){

  const element = document.getElementById(target);

  if(element){

    element.innerHTML = list
      .map(productCard)
      .join('');

  }

}


/* =========================================================
   ADD TO CART
========================================================= */

function addCart(id){

  let item = cart.find(
    product => product.id === id
  );

  if(item){

    item.qty++;

  }else{

    cart.push({
      id:id,
      qty:1
    });

  }

  save();

  toast('Added to cart ✓');

}


/* =========================================================
   WISHLIST
========================================================= */

function toggleWish(id){

  if(wishlist.includes(id)){

    wishlist = wishlist.filter(
      item => item !== id
    );

    toast('Removed from wishlist');

  }else{

    wishlist.push(id);

    toast('Added to wishlist ♡');

  }

  save();

  renderProducts();

  if(typeof refreshShop === 'function'){

    refreshShop();

  }

  if(typeof renderWishlist === 'function'){

    renderWishlist();

  }

}


/* =========================================================
   CART PAGE
========================================================= */

function renderCart(){

  const box = document.getElementById('cartItems');

  const summary = document.getElementById('cartSummary');

  if(!box) return;


  if(!cart.length){

    box.innerHTML = `

      <div class="empty">

        <h2>Your cart is empty</h2>

        <p>Add some amazing products to get started.</p>

        <br>

        <a
          class="btn dark"
          href="shop.html"
        >
          Continue Shopping
        </a>

      </div>

    `;

    if(summary){

      summary.innerHTML = '';

    }

    return;

  }


  let total = 0;


  box.innerHTML = cart.map(item => {

    const product = products.find(
      product => product.id === item.id
    );

    if(!product) return '';

    total += product.price * item.qty;


    return `

      <div class="cart-row">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

        <div>

          <b>${product.name}</b>

          <div class="muted">
            ${product.cat}
          </div>

          <div class="muted">
            $${product.price} each
          </div>


          <div class="qty">

            <button
              onclick="changeQty(${product.id},-1)"
            >
              −
            </button>

            <b>${item.qty}</b>

            <button
              onclick="changeQty(${product.id},1)"
            >
              +
            </button>

          </div>

        </div>


        <div>

          <b>
            $${product.price * item.qty}
          </b>

          <br>

          <button
            class="remove"
            onclick="removeCart(${product.id})"
          >
            Remove
          </button>

        </div>

      </div>

    `;

  }).join('');


  if(summary){

    summary.innerHTML = `

      <div class="content-card summary">

        <h2>Order Summary</h2>

        <p>
          Subtotal
          <b style="float:right">
            $${total}
          </b>
        </p>

        <p>
          Shipping
          <b style="float:right">
            Free
          </b>
        </p>

        <hr>

        <h3>

          Total

          <span style="float:right">
            $${total}
          </span>

        </h3>


        <a
          class="btn dark"
          style="width:100%;text-align:center"
          href="checkout.html"
        >
          Proceed to Checkout
        </a>

      </div>

    `;

  }

}


/* =========================================================
   CHANGE QUANTITY
========================================================= */

function changeQty(id,amount){

  let item = cart.find(
    product => product.id === id
  );

  if(!item) return;


  item.qty += amount;


  if(item.qty <= 0){

    cart = cart.filter(
      product => product.id !== id
    );

  }


  save();

  renderCart();

}


/* =========================================================
   REMOVE FROM CART
========================================================= */

function removeCart(id){

  cart = cart.filter(
    item => item.id !== id
  );

  save();

  renderCart();

  toast('Product removed');

}


/* =========================================================
   GET URL PARAMETER
========================================================= */

function getParam(key){

  return new URLSearchParams(
    window.location.search
  ).get(key);

}


/* =========================================================
   PRODUCT DETAIL PAGE
========================================================= */

function renderProductDetail(){

  const id = Number(getParam('id'));

  if(!id) return;

  const product = products.find(
    item => item.id === id
  );

  const box = document.getElementById('productDetail');

  if(!box || !product) return;


  box.innerHTML = `

    <div class="two-col">

      <div>

        <img
          class="detail-image"
          src="${product.image}"
          alt="${product.name}"
        >

      </div>


      <div class="content-card">

        <div class="meta">
          ${product.cat}
        </div>

        <h1>
          ${product.name}
        </h1>

        <div class="price">
          $${product.price}
        </div>

        <p class="muted">
          ${product.desc}
        </p>

        <br>


        <button
          class="btn dark"
          onclick="addCart(${product.id})"
        >
          Add to Cart
        </button>


        <button
          class="btn"
          style="margin-left:8px"
          onclick="toggleWish(${product.id})"
        >
          ♡ Wishlist
        </button>

      </div>

    </div>

  `;

}


/* =========================================================
   WISHLIST PAGE
========================================================= */

function renderWishlist(){

  const box = document.getElementById('wishlistItems');

  if(!box) return;


  const list = products.filter(
    product => wishlist.includes(product.id)
  );


  if(!list.length){

    box.innerHTML = `

      <div class="empty">

        <h2>Your wishlist is empty</h2>

        <p>
          Save your favorite products here.
        </p>

        <br>

        <a
          href="shop.html"
          class="btn dark"
        >
          Explore Products
        </a>

      </div>

    `;

    return;

  }


  box.innerHTML = list
    .map(productCard)
    .join('');

}


/* =========================================================
   INITIALIZE WEBSITE
========================================================= */

document.addEventListener(
  'DOMContentLoaded',
  () => {

    save();

    renderProducts();

    renderCart();

    renderWishlist();

    renderProductDetail();

  }
);
