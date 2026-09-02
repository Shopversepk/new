/* ShopVerse Professional Motion Layer */
(function () {
  "use strict";

  const style = document.createElement("style");
  style.textContent = `
    :root{--sv-ink:#111;--sv-soft:#f4f4f6}
    body{overflow-x:hidden}
    .sv-intro{position:fixed;inset:0;z-index:2147483647;background:#fff;display:grid;place-items:center;transition:opacity .7s cubic-bezier(.16,1,.3,1),visibility .7s}
    .sv-intro.hide{opacity:0;visibility:hidden}
    .sv-intro-mark{text-align:center;color:#111}
    .sv-intro-word{font:900 clamp(42px,8vw,92px)/1 Inter,Arial,sans-serif;letter-spacing:-.06em;display:inline-block;overflow:hidden}
    .sv-intro-word span{display:inline-block;transform:translateY(120%);opacity:0;animation:svLetter .65s cubic-bezier(.16,1,.3,1) forwards}
    .sv-intro-word em{font-style:normal;color:#8a8a8a}
    .sv-intro-line{height:2px;width:0;background:#111;margin:18px auto 0;animation:svLine .9s .55s cubic-bezier(.16,1,.3,1) forwards}
    .sv-intro-small{font:700 11px/1 Arial,sans-serif;letter-spacing:.28em;color:#888;margin-top:15px;opacity:0;animation:svFade .55s .85s forwards}
    @keyframes svLetter{to{transform:translateY(0);opacity:1}}
    @keyframes svLine{to{width:110px}}
    @keyframes svFade{to{opacity:1}}
    .sv-reveal{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s cubic-bezier(.16,1,.3,1)}
    .sv-reveal.sv-in{opacity:1;transform:none}
    .product,.cat,.feature,.content-card{will-change:transform;transition:transform .35s cubic-bezier(.16,1,.3,1),box-shadow .35s ease}
    .product:hover,.cat:hover,.feature:hover,.content-card:hover{transform:translateY(-7px);box-shadow:0 22px 50px rgba(12,15,24,.13)}
    .product img,.cat img{transition:transform .8s cubic-bezier(.16,1,.3,1),filter .45s ease}
    .product:hover img,.cat:hover img{transform:scale(1.07);filter:saturate(1.08)}
    .sv-heart-pop{animation:svHeart .65s cubic-bezier(.16,1,.3,1)}
    @keyframes svHeart{0%{transform:scale(1)}35%{transform:scale(1.38) rotate(-8deg)}65%{transform:scale(.9) rotate(5deg)}100%{transform:scale(1)}}
    .sv-particle{position:fixed;z-index:2147483646;pointer-events:none;font-size:14px;animation:svParticle .85s ease-out forwards}
    @keyframes svParticle{to{opacity:0;transform:translate(var(--x),var(--y)) scale(1.4) rotate(25deg)}}
    @media(pointer:fine){
      .sv-dot{position:fixed;width:7px;height:7px;background:#111;border-radius:50%;pointer-events:none;z-index:2147483646;transform:translate(-50%,-50%)}
      .sv-ring{position:fixed;width:30px;height:30px;border:1px solid rgba(0,0,0,.4);border-radius:50%;pointer-events:none;z-index:2147483645;transform:translate(-50%,-50%);transition:width .2s,height .2s,border-color .2s}
      .sv-ring.hover{width:48px;height:48px;border-color:#111}
    }
    @media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;transition-duration:.01ms!important}.sv-intro{display:none!important}}
  `;
  document.head.appendChild(style);

  function makeIntro() {
    const intro = document.createElement("div");
    intro.className = "sv-intro";
    const brand = "ShopVerse";
    const letters = [...brand].map((c, i) =>
      `<span style="animation-delay:${0.06 + i * 0.055}s"${c === "V" ? ' class="sv-v"' : ""}>${c}</span>`
    ).join("");
    intro.innerHTML = `<div class="sv-intro-mark">
      <div class="sv-intro-word">${letters}</div>
      <div class="sv-intro-line"></div>
      <div class="sv-intro-small">PREMIUM SHOPPING</div>
    </div>`;
    document.body.appendChild(intro);
    const finish = () => setTimeout(() => intro.classList.add("hide"), 1500);
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    setTimeout(() => intro.remove(), 2600);
  }

  function initReveal() {
    const els = [...document.querySelectorAll("section,.section,.section-head,.categories,.products,.page-title,.content-card,main > *")];
    if (!("IntersectionObserver" in window)) return els.forEach(el => el.classList.add("sv-in"));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("sv-in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .08, rootMargin: "0px 0px -45px" });
    els.forEach(el => { el.classList.add("sv-reveal"); observer.observe(el); });
  }

  function particles(el) {
    const r = el.getBoundingClientRect();
    for (let i = 0; i < 6; i++) {
      const p = document.createElement("i");
      p.className = "sv-particle";
      p.textContent = i % 2 ? "✦" : "♥";
      const angle = Math.PI * 2 * i / 6, dist = 30 + Math.random() * 34;
      p.style.left = r.left + r.width / 2 + "px";
      p.style.top = r.top + r.height / 2 + "px";
      p.style.setProperty("--x", Math.cos(angle) * dist + "px");
      p.style.setProperty("--y", Math.sin(angle) * dist + "px");
      document.body.appendChild(p);
      setTimeout(() => p.remove(), 900);
    }
  }

  function initHeartMotion() {
    document.addEventListener("click", e => {
      const heart = e.target.closest(".wish,[data-wishlist]");
      if (!heart) return;
      heart.classList.remove("sv-heart-pop");
      void heart.offsetWidth;
      heart.classList.add("sv-heart-pop");
      particles(heart);
    }, true);
  }

  function initCursor() {
    if (!window.matchMedia || !matchMedia("(pointer:fine)").matches) return;
    const dot = document.createElement("div"), ring = document.createElement("div");
    dot.className = "sv-dot"; ring.className = "sv-ring";
    document.body.append(dot, ring);
    let x = 0, y = 0, rx = 0, ry = 0;
    addEventListener("mousemove", e => { x = e.clientX; y = e.clientY; dot.style.left = x + "px"; dot.style.top = y + "px"; });
    (function loop() {
      rx += (x - rx) * .14; ry += (y - ry) * .14;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", e => {
      if (e.target.closest("a,button,input,select,.product,.cat,.card")) ring.classList.add("hover");
    });
    document.addEventListener("mouseout", e => {
      if (e.target.closest("a,button,input,select,.product,.cat,.card")) ring.classList.remove("hover");
    });
  }

  function init() {
    makeIntro();
    initReveal();
    initHeartMotion();
    initCursor();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();