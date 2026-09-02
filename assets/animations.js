/* =========================================================
   SHOPVERSE PREMIUM ANIMATION SYSTEM
   Professional Cart + Wishlist + Cursor + UI Animations
========================================================= */

(function () {

  "use strict";


  /* =========================================================
     ADD PREMIUM ANIMATION CSS AUTOMATICALLY
  ========================================================= */

  const style = document.createElement("style");

  style.textContent = `

  /* =====================================================
     GLOBAL SMOOTHNESS
  ===================================================== */

  html{
    scroll-behavior:smooth;
  }

  body{
    overflow-x:hidden;
  }

  button,
  a,
  input,
  select{
    -webkit-tap-highlight-color:transparent;
  }


  /* =====================================================
     CUSTOM CURSOR
  ===================================================== */

  @media (pointer:fine){

    body{
      cursor:none;
    }

    a,
    button,
    input,
    select,
    .product{
      cursor:none;
    }

    .sv-cursor{
      position:fixed;
      width:10px;
      height:10px;
      border-radius:50%;
      background:#1464f4;
      pointer-events:none;
      z-index:999999;
      left:0;
      top:0;
      transform:translate(-50%,-50%);
      transition:
        width .22s ease,
        height .22s ease,
        background .22s ease,
        border .22s ease;
      mix-blend-mode:multiply;
    }

    .sv-cursor-ring{
      position:fixed;
      width:34px;
      height:34px;
      border:1.5px solid rgba(20,100,244,.65);
      border-radius:50%;
      pointer-events:none;
      z-index:999998;
      left:0;
      top:0;
      transform:translate(-50%,-50%);
      transition:
        width .25s ease,
        height .25s ease,
        border-color .25s ease;
    }

    .sv-cursor.active{
      width:18px;
      height:18px;
      background:#111;
    }

    .sv-cursor-ring.active{
      width:52px;
      height:52px;
      border-color:#111;
    }

  }


  /* =====================================================
     PRODUCT CARD PREMIUM HOVER
  ===================================================== */

  .product{
    transition:
      transform .45s cubic-bezier(.16,1,.3,1),
      box-shadow .45s cubic-bezier(.16,1,.3,1);
    will-change:transform;
  }

  @media (hover:hover){

    .product:hover{
      transform:
        translateY(-10px)
        scale(1.01);
      box-shadow:
        0 30px 70px rgba(10,20,40,.14);
    }

  }


  .product img{
    transition:
      transform .7s cubic-bezier(.16,1,.3,1),
      filter .5s ease;
    will-change:transform;
  }

  .product:hover img{
    transform:scale(1.07);
    filter:brightness(1.04);
  }


  /* =====================================================
     WISHLIST HEART
  ===================================================== */

  .wish{
    transition:
      transform .25s cubic-bezier(.16,1,.3,1),
      background .25s ease,
      color .25s ease,
      box-shadow .25s ease;
    position:relative;
    overflow:visible;
  }

  @media (hover:hover){

    .wish:hover{
      transform:scale(1.12);
    }

  }


  .wish.sv-heart-pop{
    animation:svHeartPop .55s cubic-bezier(.16,1,.3,1);
  }


  @keyframes svHeartPop{

    0%{
      transform:scale(1);
    }

    35%{
      transform:scale(1.45);
    }

    60%{
      transform:scale(.9);
    }

    100%{
      transform:scale(1);
    }

  }


  /* HEART PARTICLES */

  .sv-heart-particle{
    position:fixed;
    pointer-events:none;
    z-index:99999;
    font-size:13px;
    animation:svHeartParticle .8s ease-out forwards;
  }


  @keyframes svHeartParticle{

    0%{
      opacity:1;
      transform:
        translate(0,0)
        scale(.6);
    }

    100%{
      opacity:0;
      transform:
        translate(var(--x),var(--y))
        scale(1.2)
        rotate(20deg);
    }

  }


  /* =====================================================
     ADD TO CART BUTTON
  ===================================================== */

  .add,
  .btn.dark{
    position:relative;
    overflow:hidden;
    transition:
      transform .28s cubic-bezier(.16,1,.3,1),
      box-shadow .28s ease,
      background .28s ease;
  }


  @media (hover:hover){

    .add:hover,
    .btn.dark:hover{
      transform:translateY(-3px);
      box-shadow:
        0 14px 30px rgba(0,0,0,.22);
    }

  }


  .sv-cart-success{
    animation:svCartSuccess .7s cubic-bezier(.16,1,.3,1);
  }


  @keyframes svCartSuccess{

    0%{
      transform:scale(1);
    }

    25%{
      transform:scale(.94);
    }

    55%{
      transform:scale(1.06);
    }

    100%{
      transform:scale(1);
    }

  }


  /* =====================================================
     RIPPLE
  ===================================================== */

  .sv-ripple{
    position:absolute;
    border-radius:50%;
    background:rgba(255,255,255,.38);
    transform:scale(0);
    animation:svRipple .65s linear;
    pointer-events:none;
  }


  @keyframes svRipple{

    to{
      transform:scale(4);
      opacity:0;
    }

  }


  /* =====================================================
     FLYING PRODUCT IMAGE
  ===================================================== */

  .sv-flying-product{
    position:fixed;
    width:72px;
    height:72px;
    border-radius:16px;
    object-fit:cover;
    pointer-events:none;
    z-index:999999;
    box-shadow:
      0 20px 50px rgba(0,0,0,.28);
  }


  /* =====================================================
     CART ICON BUMP
  ===================================================== */

  .sv-cart-bump{
    animation:svCartBump .65s cubic-bezier(.16,1,.3,1);
  }


  @keyframes svCartBump{

    0%{
      transform:scale(1);
    }

    35%{
      transform:scale(1.28) rotate(-8deg);
    }

    65%{
      transform:scale(.94) rotate(4deg);
    }

    100%{
      transform:scale(1) rotate(0);
    }

  }


  .badge.sv-badge-bump{
    animation:svBadgeBump .55s cubic-bezier(.16,1,.3,1);
  }


  @keyframes svBadgeBump{

    0%{
      transform:scale(1);
    }

    35%{
      transform:scale(1.55);
    }

    70%{
      transform:scale(.85);
    }

    100%{
      transform:scale(1);
    }

  }


  /* =====================================================
     PROFESSIONAL TOAST
  ===================================================== */

  .toast{
    display:block !important;
    opacity:0;
    pointer-events:none;
    transform:
      translateY(25px)
      scale(.96);
    transition:
      opacity .35s ease,
      transform .35s cubic-bezier(.16,1,.3,1);
  }


  .toast.show{
    opacity:1;
    transform:
      translateY(0)
      scale(1);
  }


  /* =====================================================
     SCROLL REVEAL
  ===================================================== */

  .sv-reveal{
    opacity:0;
    transform:translateY(28px);
    transition:
      opacity .75s ease,
      transform .75s cubic-bezier(.16,1,.3,1);
  }


  .sv-reveal.sv-visible{
    opacity:1;
    transform:translateY(0);
  }


  /* =====================================================
     HEADER MICRO INTERACTIONS
  ===================================================== */

  .header-icon{
    transition:
      transform .25s cubic-bezier(.16,1,.3,1),
      background .25s ease;
  }


  @media (hover:hover){

    .header-icon:hover{
      transform:
        translateY(-2px)
        scale(1.06);
    }

  }


  .header-icon:active{
    transform:scale(.9);
  }


  /* =====================================================
     BUTTON CLICK
  ===================================================== */

  button:active{
    transition-duration:.08s;
  }


  /* =====================================================
     PAGE LOAD
  ===================================================== */

  body{
    animation:svPageEnter .7s cubic-bezier(.16,1,.3,1);
  }


  @keyframes svPageEnter{

    from{
      opacity:0;
      transform:translateY(8px);
    }

    to{
      opacity:1;
      transform:translateY(0);
    }

  }


  /* =====================================================
     ACCESSIBILITY
  ===================================================== */

  @media (prefers-reduced-motion:reduce){

    *,
    *::before,
    *::after{
      animation-duration:.01ms !important;
      animation-iteration-count:1 !important;
      transition-duration:.01ms !important;
      scroll-behavior:auto !important;
    }

  }

  `;


  document.head.appendChild(style);



  /* =========================================================
     CUSTOM CURSOR
  ========================================================= */

  function createCursor(){

    if(!window.matchMedia("(pointer:fine)").matches){
      return;
    }


    const cursor =
      document.createElement("div");


    cursor.className =
      "sv-cursor";


    const ring =
      document.createElement("div");


    ring.className =
      "sv-cursor-ring";


    document.body.appendChild(cursor);

    document.body.appendChild(ring);


    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;


    document.addEventListener(
      "mousemove",
      event => {

        mouseX = event.clientX;

        mouseY = event.clientY;


        cursor.style.left =
          mouseX + "px";


        cursor.style.top =
          mouseY + "px";

      }
    );


    function animateRing(){

      ringX +=
        (mouseX - ringX) * .18;


      ringY +=
        (mouseY - ringY) * .18;


      ring.style.left =
        ringX + "px";


      ring.style.top =
        ringY + "px";


      requestAnimationFrame(
        animateRing
      );

    }


    animateRing();


    document.addEventListener(
      "mouseover",
      event => {

        const target =
          event.target.closest(
            "button,a,input,select,.product"
          );


        if(target){

          cursor.classList.add(
            "active"
          );


          ring.classList.add(
            "active"
          );

        }

      }
    );


    document.addEventListener(
      "mouseout",
      event => {

        const target =
          event.target.closest(
            "button,a,input,select,.product"
          );


        if(target){

          cursor.classList.remove(
            "active"
          );


          ring.classList.remove(
            "active"
          );

        }

      }
    );

  }



  /* =========================================================
     RIPPLE EFFECT
  ========================================================= */

  function createRipple(button,event){

    if(!button){
      return;
    }


    const old =
      button.querySelector(
        ".sv-ripple"
      );


    if(old){
      old.remove();
    }


    const ripple =
      document.createElement(
        "span"
      );


    ripple.className =
      "sv-ripple";


    const size =
      Math.max(
        button.clientWidth,
        button.clientHeight
      );


    const rect =
      button.getBoundingClientRect();


    const x =
      event
        ? event.clientX - rect.left
        : button.clientWidth / 2;


    const y =
      event
        ? event.clientY - rect.top
        : button.clientHeight / 2;


    ripple.style.width =
      size + "px";


    ripple.style.height =
      size + "px";


    ripple.style.left =
      (x - size / 2) + "px";


    ripple.style.top =
      (y - size / 2) + "px";


    button.appendChild(ripple);


    setTimeout(
      () => ripple.remove(),
      700
    );

  }



  /* =========================================================
     HEART PARTICLES
  ========================================================= */

  function createHeartParticles(button){

    if(!button){
      return;
    }


    const rect =
      button.getBoundingClientRect();


    for(let i = 0; i < 7; i++){

      const particle =
        document.createElement("span");


      particle.className =
        "sv-heart-particle";


      particle.textContent =
        i % 2 === 0
          ? "♥"
          : "✦";


      const angle =
        (Math.PI * 2 / 7) * i;


      const distance =
        35 + Math.random() * 30;


      particle.style.left =
        (rect.left + rect.width / 2) +
        "px";


      particle.style.top =
        (rect.top + rect.height / 2) +
        "px";


      particle.style.setProperty(
        "--x",
        Math.cos(angle) * distance + "px"
      );


      particle.style.setProperty(
        "--y",
        Math.sin(angle) * distance + "px"
      );


      document.body.appendChild(
        particle
      );


      setTimeout(
        () => particle.remove(),
        850
      );

    }

  }



  /* =========================================================
     FIND CART ICON
  ========================================================= */

  function getCartIcon(){

    return (
      document.querySelector(".cart-icon") ||
      document.querySelector(
        "[href='cart.html']"
      ) ||
      document.querySelector(
        ".header-icon:last-child"
      )
    );

  }



  /* =========================================================
     FLY PRODUCT TO CART
  ========================================================= */

  function flyProductToCart(button,id){

    const product =
      Array.isArray(window.products)
        ? window.products.find(
            item => Number(item.id) === Number(id)
          )
        : null;


    const cartIcon =
      getCartIcon();


    if(!product || !cartIcon){
      return;
    }


    const start =
      button.getBoundingClientRect();


    const end =
      cartIcon.getBoundingClientRect();


    const flying =
      document.createElement("img");


    flying.className =
      "sv-flying-product";


    flying.src =
      product.image;


    flying.alt =
      "";


    flying.style.left =
      (start.left + start.width / 2 - 36) +
      "px";


    flying.style.top =
      (start.top + start.height / 2 - 36) +
      "px";


    document.body.appendChild(
      flying
    );


    const moveX =
      end.left - start.left;


    const moveY =
      end.top - start.top;


    const animation =
      flying.animate(

        [

          {
            transform:
              "translate(0,0) scale(1) rotate(0deg)",
            opacity:1,
            borderRadius:"16px"
          },

          {
            offset:.55,

            transform:
              `translate(${moveX * .55}px,${moveY * .35}px)
               scale(.72)
               rotate(8deg)`,

            opacity:.9
          },

          {
            transform:
              `translate(${moveX}px,${moveY}px)
               scale(.18)
               rotate(18deg)`,

            opacity:.2,
            borderRadius:"50%"
          }

        ],

        {

          duration:850,

          easing:
            "cubic-bezier(.16,1,.3,1)",

          fill:"forwards"

        }

      );


    animation.onfinish =
      () => {

        flying.remove();


        cartIcon.classList.remove(
          "sv-cart-bump"
        );


        void cartIcon.offsetWidth;


        cartIcon.classList.add(
          "sv-cart-bump"
        );


        document
          .querySelectorAll(
            "[data-cart-count]"
          )
          .forEach(
            badge => {

              badge.classList.remove(
                "sv-badge-bump"
              );


              void badge.offsetWidth;


              badge.classList.add(
                "sv-badge-bump"
              );

            }
          );

      };

  }



  /* =========================================================
     INTERCEPT ADD TO CART
  ========================================================= */

  function setupCartAnimation(){

    document.addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            ".add, .btn.dark"
          );


        if(!button){
          return;
        }


        const onclick =
          button.getAttribute(
            "onclick"
          ) || "";


        const match =
          onclick.match(
            /addCart\\((\\d+)\\)/
          );


        if(!match){
          return;
        }


        const id =
          Number(match[1]);


        button.classList.remove(
          "sv-cart-success"
        );


        void button.offsetWidth;


        button.classList.add(
          "sv-cart-success"
        );


        createRipple(
          button,
          event
        );


        setTimeout(
          () => {

            flyProductToCart(
              button,
              id
            );

          },
          80
        );

      },
      true
    );

  }



  /* =========================================================
     INTERCEPT WISHLIST
  ========================================================= */

  function setupWishlistAnimation(){

    document.addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            ".wish, button[onclick*='toggleWish']"
          );


        if(!button){
          return;
        }


        button.classList.remove(
          "sv-heart-pop"
        );


        void button.offsetWidth;


        button.classList.add(
          "sv-heart-pop"
        );


        createRipple(
          button,
          event
        );


        createHeartParticles(
          button
        );

      },
      true
    );

  }



  /* =========================================================
     SCROLL REVEAL
  ========================================================= */

  function setupScrollReveal(){

    const selectors = [

      ".section-head",
      ".categories",
      ".products",
      ".features",
      ".feature",
      ".content-card",
      ".two-col",
      ".page-title"

    ];


    const elements =
      document.querySelectorAll(
        selectors.join(",")
      );


    if(!("IntersectionObserver" in window)){

      elements.forEach(
        element =>
          element.classList.add(
            "sv-visible"
          )
      );

      return;

    }


    const observer =
      new IntersectionObserver(

        entries => {

          entries.forEach(
            entry => {

              if(entry.isIntersecting){

                entry.target.classList.add(
                  "sv-visible"
                );


                observer.unobserve(
                  entry.target
                );

              }

            }
          );

        },

        {
          threshold:.08,
          rootMargin:"0px 0px -30px 0px"
        }

      );


    elements.forEach(
      element => {

        if(
          element.classList.contains(
            "products"
          )
        ){

          return;

        }


        element.classList.add(
          "sv-reveal"
        );


        observer.observe(
          element
        );

      }
    );

  }



  /* =========================================================
     PRODUCT CARD STAGGER
  ========================================================= */

  function setupProductAnimations(){

    const observer =
      new MutationObserver(
        mutations => {

          mutations.forEach(
            mutation => {

              mutation.addedNodes.forEach(
                node => {

                  if(
                    node.nodeType === 1 &&
                    node.classList &&
                    node.classList.contains(
                      "product"
                    )
                  ){

                    node.style.opacity = "0";


                    node.animate(

                      [

                        {
                          opacity:0,
                          transform:
                            "translateY(22px) scale(.98)"
                        },

                        {
                          opacity:1,
                          transform:
                            "translateY(0) scale(1)"
                        }

                      ],

                      {

                        duration:550,

                        easing:
                          "cubic-bezier(.16,1,.3,1)",

                        fill:"forwards"

                      }

                    );

                  }

                }
              );

            }
          );

        }
      );


    document
      .querySelectorAll(
        ".products"
      )
      .forEach(
        container => {

          observer.observe(
            container,
            {
              childList:true
            }
          );

        }
      );


    document
      .querySelectorAll(
        ".product"
      )
      .forEach(
        (card,index) => {

          card.animate(

            [

              {
                opacity:0,
                transform:
                  "translateY(20px)"
              },

              {
                opacity:1,
                transform:
                  "translateY(0)"
              }

            ],

            {

              duration:450,

              delay:index * 45,

              easing:
                "cubic-bezier(.16,1,.3,1)",

              fill:"forwards"

            }

          );

        }
      );

  }



  /* =========================================================
     PREMIUM MAGNETIC BUTTON EFFECT
  ========================================================= */

  function setupMagneticButtons(){

    if(!window.matchMedia("(pointer:fine)").matches){
      return;
    }


    document.addEventListener(
      "mousemove",
      event => {

        const button =
          event.target.closest(
            ".add,.btn,.header-icon"
          );


        if(!button){
          return;
        }


        const rect =
          button.getBoundingClientRect();


        const x =
          event.clientX -
          rect.left -
          rect.width / 2;


        const y =
          event.clientY -
          rect.top -
          rect.height / 2;


        button.style.transform =
          `translate(${x * .08}px,${y * .08}px)`;

      }
    );


    document.addEventListener(
      "mouseout",
      event => {

        const button =
          event.target.closest(
            ".add,.btn,.header-icon"
          );


        if(button){

          button.style.transform = "";

        }

      }
    );

  }



  /* =========================================================
     INITIALIZE
  ========================================================= */

  function init(){

    createCursor();

    setupCartAnimation();

    setupWishlistAnimation();

    setupScrollReveal();

    setupProductAnimations();

    setupMagneticButtons();

  }


  if(
    document.readyState ===
    "loading"
  ){

    document.addEventListener(
      "DOMContentLoaded",
      init
    );

  }else{

    init();

  }


})();
