// HERO画像②フェードイン

const hero = document.querySelector(".hero");
const layers = document.querySelectorAll(".layer");

const heroObserver = new IntersectionObserver(
  (entries) => {

    if (entries[0].isIntersecting) {

      layers.forEach((layer, index) => {

        setTimeout(() => {
          layer.classList.add("show");
        }, index * 1200);

      });

      heroObserver.disconnect();
    }
  },
  {
    threshold: 0.3
  }
);

heroObserver.observe(hero);

// Swiper
new Swiper(".mySwiper", {

    loop: true,
  
    centeredSlides: true,
  
    slidesPerView: 3,   // ★3枚表示（重要）
  
    spaceBetween: 40,
  
    speed: 900,
  
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1.2
      },
      768: {
        slidesPerView: 2.2
      },
      1200: {
        slidesPerView: 3
      }
    }
  
  });
// スクロールフェード

const fadeElements =
document.querySelectorAll(".fade-section");

const fadeObserver =
new IntersectionObserver(

(entries)=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.classList.add("show");

    }

  });

},

{
  threshold:0.2
}

);

fadeElements.forEach(el=>{

  fadeObserver.observe(el);

});

//ハンバーガー
const hamburger =
document.querySelector(".hamburger");

const navMenu =
document.querySelector(".nav-menu");

hamburger.addEventListener("click",()=>{

  hamburger.classList.toggle("active");

  navMenu.classList.toggle("active");

});
document
.querySelectorAll(".nav-menu a")
.forEach(link=>{

  link.addEventListener("click",()=>{

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

  });

});