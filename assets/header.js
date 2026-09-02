document.write(`
<div class="announcement"><span>Exclusive online offers • Free delivery on selected orders</span><div><a href="about.html">For Business ↗</a>
<a href="contact.html">Support</a>
<a href="admin-login.html">Admin</a></div></div>
<header class="header">
  <div class="nav">
    <a class="logo" href="index.html" aria-label="ShopVerse home">SHOP<span>VERSE</span></a>

    <button class="menu-toggle" aria-label="Open menu" onclick="document.body.classList.toggle('menu-open')">☰</button>

    <nav class="links">
      <a href="shop.html">Shop</a>
      <a href="shop.html?cat=Electronics">Mobile</a>
      <a href="shop.html?cat=Electronics">TV & AV</a>
      <a href="shop.html?cat=Home">Appliances</a>
      <a href="shop.html?cat=Electronics">Monitors</a>
      <a href="shop.html?cat=Accessories">Wearables</a>
    </nav>

    <div class="nav-actions">
      <button class="header-icon search-toggle" aria-label="Search" onclick="document.body.classList.toggle('search-open')">⌕</button>

      <a class="header-icon cart-icon" href="cart.html" aria-label="Cart">
        🛒<span class="badge" data-cart-count>0</span>
      </a>

      <a class="header-icon" href="wishlist.html" aria-label="Wishlist">♡</a>
    </div>
  </div>

  <div class="header-search">
    <div class="search-box">
      ⌕
      <input
        id="globalSearch"
        placeholder="Search products"
        onkeydown="if(event.key==='Enter')location.href='shop.html?q='+encodeURIComponent(this.value)"
      >
    </div>
  </div>
</header>
`);
