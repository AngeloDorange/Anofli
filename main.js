function mesaj() {
   let sum = "Welcome to Anofli ! We are happy to have you."
  
  alert(sum);
}

/*====NAVBAR SHOW & HIDE====
var scroll1 = window.pageYOffset;
window.onscroll = function(){
    var scroll2 = window.pageYOffset;

    if(scroll1 > scroll2) {
      document.querySelector('nav').style.top = "0";
    }else{
      document.querySelector('nav').style.top = "-100px";
    }
    scroll1 = scroll2;
}*/

if (window.matchMedia('(min-width: 1041px)').matches) {
  var nav = document.querySelector('nav');
var navigations = document.querySelectorAll('.navLink');

function navbarChangeColor() {
  var scrollPos = window.scrollY;

  if(scrollPos > 50){
    nav.style.backgroundColor = '#007f99';
    navigations.forEach(function(navigation){
      navigation.style.color = "#212b36";
    });
  }else{
    nav.style.backgroundColor = 'transparent';
    navigations.forEach(function(navigation){
      navigation.style.color = "white";
    });
  }
}

window.onscroll = navbarChangeColor;
}


// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Discover", "Create", "Inspire", "Discover, Create, Inspire"],
  typeSpeed: 400,
  backSpeed: 100,
  loop: false
});

// GSAP ANIMATION

const tl = gsap.timeline({defaults: {ease: 'power2.out'}});

tl.to(".slide", {y: "100%", duration: 1.2});
tl.to(".hero", {y: "0%", duration: 1.2} , "-=1.2");
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1.5});

/*====AOS ANIMATION====*/
AOS.init();


/*====Team Slider====*/

var swiper = new Swiper(".team-slide", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  autoplay: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints :{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

/*=====IMG PARALLAX====*/

var image = document.querySelectorAll('.img-gallery');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(1,1,1,1)'
});


/*====CurrentYear====*/

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;


/*====SCROLL MOOTH====*/
var smoothScroll = {

    move : function (old, des, actual) {
      easeInOutQuart = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
      actual += 1;
      ease = easeInOutQuart(actual / 100);
      delta = des - old;
      delta *= ease;
      delta += old;
      window.scrollTo(0, delta);
      if (actual < 100) {
        window.requestAnimationFrame(function () {
          smoothScroll.move(old, des, actual);
        });
      }
    },
  
    linkInit : function (e) {
      e.preventDefault();
      link = e.target.getAttribute("href").substr(1);
      block = document.getElementById(link).offsetTop;
      client = document.documentElement.scrollTop;
  
      smoothScroll.move(client, block, 0);
    },
  
    init : function () {
      links = document.getElementsByTagName("a");
      for (var i = 0; i < links.length; i++) {
        link = links[i].getAttribute("href");
        if (link.search("#") == 0 & link.substr(1) != "") {
          links[i].onclick = smoothScroll.linkInit;
        }
      }
    }
};
  
window.onload = smoothScroll.init; 

// ACTIVE SCROLL

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.add('active');
      });
    } else {
      document.querySelectorAll('.navigation a[href="#' + sectionId + '"]').forEach(link => {
        link.classList.remove('active');
      });
    }
  });
});

// HideNavbar
const navLink = document.querySelectorAll('.nav-link');
const checkbox = document.querySelector('input[type=checkbox]');
const body = document.querySelector("body");
const btnToggle = document.querySelector("#toggle")
const slide = document.querySelector(".slide");

navLink.forEach(link => {
    link.addEventListener('click', function() {
      slide.style.display = "none";
        checkbox.checked = false;
        body.style.transform = "translateX(0)";
    });
});


checkbox.addEventListener("change", function() {
  if (check.checked) {
    body.style.transform = "translateX(250px)";
    slide.style.display = "none";
  } else {
    body.style.marginLeft = "translateX(0)";
  }
});

btnToggle.addEventListener("click", function() {
  body.style.transform = "translateX(0)";
});