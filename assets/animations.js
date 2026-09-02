/* ShopVerse Motion System - safe enhancement layer */
(function(){
'use strict';

const css=`
:root{
  --sv-accent:#6d5dfc;
  --sv-glow:rgba(109,93,252,.22)
}

html{
  scroll-behavior:smooth
}

body{
  overflow-x:hidden
}

/* PAGE ENTRANCE */

body.sv-ready{
  animation:svPage .7s cubic-bezier(.16,1,.3,1)
}

@keyframes svPage{
  from{
    opacity:0;
    transform:translateY(10px)
  }
  to{
    opacity:1;
    transform:none
  }
}

/* SCROLL REVEAL */

.sv-reveal{
  opacity:0;
  transform:translateY(34px) scale(.985);
  transition:
    opacity .75s ease,
    transform .75s cubic-bezier(.16,1,.3,1)
}

.sv-reveal.sv-in{
  opacity:1;
  transform:none
}

/* PRODUCT CARDS */

.product,
.card,
.feature,
.cat{
  will-change:transform;
  transition:
    transform .35s cubic-bezier(.16,1,.3,1),
    box-shadow .35s ease,
    filter .35s ease
}

.product:hover,
.card:hover,
.feature:hover,
.cat:hover{
  transform:translateY(-9px);
  box-shadow:0 24px 55px rgba(10,15,30,.14)
}

.product{
  overflow:hidden
}

.product img{
  transition:
    transform .7s cubic-bezier(.16,1,.3,1),
    filter .5s ease
}

.product:hover img{
  transform:scale(1.08);
  filter:saturate(1.08)
}

/* IMAGE SHINE */

.product::after{
  content:'';
  position:absolute;
  inset:-60%;
  background:linear-gradient(
    110deg,
    transparent 42%,
    rgba(255,255,255,.32) 50%,
    transparent 58%
  );
  transform:translateX(-70%) rotate(8deg);
  transition:transform .9s ease;
  pointer-events:none
}

.product:hover::after{
  transform:translateX(70%) rotate(8deg)
}

/* BUTTONS */

button,
a.btn,
.btn,
.add{
  position:relative;
  isolation:isolate;
  transition:
    transform .25s cubic-bezier(.16,1,.3,1),
    box-shadow .25s ease,
    filter .25s ease
}

.sv-press{
  animation:svPress .48s cubic-bezier(.16,1,.3,1)
}

@keyframes svPress{
  0%{
    transform:scale(1)
  }

  40%{
    transform:scale(.94)
  }

  75%{
    transform:scale(1.06)
  }

  100%{
    transform:scale(1)
  }
}

/* RIPPLE */

.sv-ripple{
  position:absolute;
  border-radius:999px;
  background:rgba(255,255,255,.42);
  pointer-events:none;
  transform:scale(0);
  animation:svRipple .65s linear;
  z-index:-1
}

@keyframes svRipple{
  to{
    transform:scale(4);
    opacity:0
  }
}

/* HEART */

.sv-heart-pop{
  animation:svHeart .62s cubic-bezier(.16,1,.3,1)
}

@keyframes svHeart{
  0%{
    transform:scale(1)
  }

  30%{
    transform:scale(1.5) rotate(-10deg)
  }

  58%{
    transform:scale(.88) rotate(7deg)
  }

  100%{
    transform:scale(1)
  }
}

/* HEART PARTICLES */

.sv-particle{
  position:fixed;
  z-index:2147483647;
  pointer-events:none;
  font-size:15px;
  animation:svParticle .8s ease-out forwards
}

@keyframes svParticle{
  to{
    opacity:0;
    transform:
      translate(var(--x),var(--y))
      scale(1.35)
      rotate(25deg)
  }
}

/* FLY TO CART */

.sv-fly{
  position:fixed;
  width:70px;
  height:70px;
  object-fit:cover;
  border-radius:16px;
  z-index:2147483646;
  pointer-events:none;
  box-shadow:0 22px 50px rgba(0,0,0,.3)
}

.sv-cart-bump{
  animation:svCart .65s cubic-bezier(.16,1,.3,1)
}

@keyframes svCart{
  0%{
    transform:scale(1)
  }

  35%{
    transform:scale(1.3) rotate(-9deg)
  }

  70%{
    transform:scale(.93) rotate(5deg)
  }

  100%{
    transform:none
  }
}

/* PREMIUM CURSOR */

@media(pointer:fine){

  .sv-dot,
  .sv-ring{
    position:fixed;
    left:0;
    top:0;
    border-radius:50%;
    pointer-events:none;
    z-index:2147483647;
    transform:translate(-50%,-50%)
  }

  .sv-dot{
    width:8px;
    height:8px;
    background:#111
  }

  .sv-ring{
    width:34px;
    height:34px;
    border:1px solid rgba(0,0,0,.45);
    transition:
      width .2s,
      height .2s,
      border-color .2s
  }

  .sv-ring.sv-hover{
    width:54px;
    height:54px;
    border-color:var(--sv-accent)
  }

}

/* HERO GLOW */

.sv-orb{
  position:absolute;
  width:260px;
  height:260px;
  border-radius:50%;
  filter:blur(8px);
  background:radial-gradient(
    circle,
    var(--sv-glow),
    transparent 68%
  );
  pointer-events:none;
  z-index:0;
  animation:svFloat 8s ease-in-out infinite
}

.sv-orb.b{
  width:180px;
  height:180px;
  animation-delay:-3s
}

@keyframes svFloat{
  50%{
    transform:
      translate(35px,-25px)
      scale(1.12)
  }
}

/* PAGE LOADER */

.sv-loading{
  position:fixed;
  inset:0;
  background:#fff;
  z-index:2147483647;
  display:grid;
  place-items:center;
  transition:
    opacity .45s ease,
    visibility .45s
}

.sv-loading.hide{
  opacity:0;
  visibility:hidden
}

.sv-loader{
  width:52px;
  height:52px;
  border:4px solid #eee;
  border-top-color:var(--sv-accent);
  border-radius:50%;
  animation:svSpin .8s linear infinite
}

@keyframes svSpin{
  to{
    transform:rotate(360deg)
  }
}

/* REDUCED MOTION */

@media(prefers-reduced-motion:reduce){

  *,
  *:before,
  *:after{
    animation-duration:.01ms!important;
    transition-duration:.01ms!important
  }

}
`;

const s=document.createElement('style');

s.textContent=css;

document.head.appendChild(s);


/* HELPERS */

function qs(sel){
  return [...document.querySelectorAll(sel)]
}


/* LOADER */

function initLoader(){

  const l=document.createElement('div');

  l.className='sv-loading';

  l.innerHTML='<div class="sv-loader"></div>';

  document.body.appendChild(l);

  addEventListener(
    'load',
    ()=>setTimeout(
      ()=>l.classList.add('hide'),
      250
    ),
    {once:true}
  );

}


/* SCROLL REVEAL */

function initReveal(){

  const els=qs(
    'section,.section,.section-head,.products,.categories,.feature,.content-card,.page-title,.hero > *,main > *'
  ).filter(
    e=>!e.closest('.products') ||
    e.classList.contains('products')
  );


  if(!('IntersectionObserver' in window)){

    els.forEach(
      e=>e.classList.add('sv-in')
    );

    return;
  }


  const o=new IntersectionObserver(

    es=>es.forEach(x=>{

      if(x.isIntersecting){

        x.target.classList.add('sv-in');

        o.unobserve(x.target);

      }

    }),

    {
      threshold:.08,
      rootMargin:'0px 0px -40px'
    }

  );


  els.forEach(e=>{

    e.classList.add('sv-reveal');

    o.observe(e);

  });

}


/* RIPPLE */

function ripple(el,e){

  const r=el.getBoundingClientRect();

  const d=Math.max(
    r.width,
    r.height
  );

  const x=e.clientX-r.left;

  const y=e.clientY-r.top;

  const sp=document.createElement('span');

  sp.className='sv-ripple';

  sp.style.cssText+=`
    width:${d}px;
    height:${d}px;
    left:${x-d/2}px;
    top:${y-d/2}px
  `;

  el.appendChild(sp);

  setTimeout(
    ()=>sp.remove(),
    700
  );

}


/* HEART PARTICLES */

function particles(el){

  const r=el.getBoundingClientRect();


  for(let i=0;i<7;i++){

    const p=document.createElement('i');

    p.className='sv-particle';

    p.textContent=
      i%2 ? '✦' : '♥';


    const a=Math.PI*2*i/7;

    const d=35+Math.random()*35;


    p.style.left=
      r.left+r.width/2+'px';


    p.style.top=
      r.top+r.height/2+'px';


    p.style.setProperty(
      '--x',
      Math.cos(a)*d+'px'
    );


    p.style.setProperty(
      '--y',
      Math.sin(a)*d+'px'
    );


    document.body.appendChild(p);


    setTimeout(
      ()=>p.remove(),
      850
    );

  }

}


/* FIND CART */

function cartTarget(){

  return document.querySelector(
    '.cart-icon,[href="cart.html"],.cart-button,.header-icon:last-child'
  );

}


/* FLY PRODUCT TO CART */

function fly(button){

  const card=
    button.closest('.product,.card');


  const img=
    card&&card.querySelector('img');


  const target=
    cartTarget();


  if(!target)return;


  const a=
    button.getBoundingClientRect();


  const b=
    target.getBoundingClientRect();


  const f=
    document.createElement(
      img?'img':'div'
    );


  f.className='sv-fly';


  if(img){

    f.src=
      img.currentSrc||img.src;

  }else{

    f.textContent='🛍️';

    f.style.display='grid';

    f.style.placeItems='center';

    f.style.background='#fff';

  }


  f.style.left=
    a.left+a.width/2-35+'px';


  f.style.top=
    a.top+a.height/2-35+'px';


  document.body.appendChild(f);


  const an=f.animate(

    [

      {
        transform:'translate(0,0) scale(1)',
        opacity:1
      },

      {
        offset:.55,

        transform:`
          translate(
            ${(b.left-a.left)*.55}px,
            ${(b.top-a.top)*.3}px
          )
          scale(.65)
        `,

        opacity:.9
      },

      {
        transform:`
          translate(
            ${b.left-a.left}px,
            ${b.top-a.top}px
          )
          scale(.12)
        `,

        opacity:.1
      }

    ],

    {

      duration:850,

      easing:'cubic-bezier(.16,1,.3,1)',

      fill:'forwards'

    }

  );


  an.onfinish=()=>{

    f.remove();

    target.classList.remove(
      'sv-cart-bump'
    );


    void target.offsetWidth;


    target.classList.add(
      'sv-cart-bump'
    );

  };

}


/* CLICK ANIMATIONS */

function initClicks(){

  document.addEventListener(

    'click',

    e=>{

      /* WISHLIST */

      const heart=e.target.closest(
        '.wish,[data-wishlist],button[onclick*="Wish"],button[onclick*="wish"]'
      );


      if(heart){

        heart.classList.remove(
          'sv-heart-pop'
        );


        void heart.offsetWidth;


        heart.classList.add(
          'sv-heart-pop'
        );


        particles(heart);

        ripple(heart,e);

        return;
      }


      /* ADD TO CART */

      const add=e.target.closest(
        '.add,.add-to-cart,[data-add-cart],button[onclick*="addCart"]'
      );


      if(add){

        add.classList.remove(
          'sv-press'
        );


        void add.offsetWidth;


        add.classList.add(
          'sv-press'
        );


        ripple(add,e);


        setTimeout(
          ()=>fly(add),
          60
        );

      }


      /* NORMAL BUTTON */

      const btn=e.target.closest(
        'button,.btn,a.btn'
      );


      if(btn&&!heart&&!add){

        btn.classList.remove(
          'sv-press'
        );


        void btn.offsetWidth;


        btn.classList.add(
          'sv-press'
        );

      }

    },

    true

  );

}


/* CUSTOM CURSOR */

function initCursor(){

  if(!matchMedia(
    '(pointer:fine)'
  ).matches)return;


  const d=document.createElement('div');

  const r=document.createElement('div');


  d.className='sv-dot';

  r.className='sv-ring';


  document.body.append(d,r);


  let x=0;
  let y=0;

  let rx=0;
  let ry=0;


  addEventListener(
    'mousemove',

    e=>{

      x=e.clientX;

      y=e.clientY;


      d.style.left=x+'px';

      d.style.top=y+'px';

    }

  );


  (function loop(){

    rx+=(x-rx)*.16;

    ry+=(y-ry)*.16;


    r.style.left=rx+'px';

    r.style.top=ry+'px';


    requestAnimationFrame(loop);

  })();


  document.addEventListener(
    'mouseover',

    e=>{

      if(
        e.target.closest(
          'a,button,input,select,.product,.card'
        )
      ){

        r.classList.add(
          'sv-hover'
        );

      }

    }

  );


  document.addEventListener(
    'mouseout',

    e=>{

      if(
        e.target.closest(
          'a,button,input,select,.product,.card'
        )
      ){

        r.classList.remove(
          'sv-hover'
        );

      }

    }

  );

}


/* HERO EFFECT */

function initHero(){

  const h=
    document.querySelector('.hero');


  if(!h)return;


  const pos=
    getComputedStyle(h).position;


  if(pos==='static'){

    h.style.position='relative';

  }


  h.style.overflow='hidden';


  const a=document.createElement('div');

  const b=document.createElement('div');


  a.className='sv-orb';

  b.className='sv-orb b';


  a.style.right='-70px';

  a.style.top='-80px';


  b.style.left='-50px';

  b.style.bottom='-70px';


  h.append(a,b);


  if(window.Rellax){

    try{

      new Rellax(
        '.sv-orb',
        {
          speed:-2,
          center:true
        }
      );

    }catch(_){}

  }

}


/* INITIALIZE */

function init(){

  document.body.classList.add(
    'sv-ready'
  );


  initLoader();

  initReveal();

  initClicks();

  initCursor();

  initHero();

}


if(document.readyState==='loading'){

  document.addEventListener(
    'DOMContentLoaded',
    init
  );

}else{

  init();

}

})();
