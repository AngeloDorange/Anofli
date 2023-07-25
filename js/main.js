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
tl.fromTo(".content-hero", { y: "-100%" }, { y: "0%", duration: 1.5 },'-=1.2');
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1.2});



// WOW  ANIMATION
new WOW().init();


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
      601: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

// IMG PARALLAX=

var image = document.querySelectorAll('.img-gallery');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(1,1,1,1)'
});



// LIGHT GALLERY
lightGallery(document.getElementById('lightgallery'));




/*====CurrentYear====*/

const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;




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
if (window.matchMedia('(max-width: 1040px)').matches) {

const navLink = document.querySelectorAll('.nav-link');
const checkbox = document.querySelector('input[type=checkbox]');
const btnToggle = document.querySelector("#toggle")
const slide = document.querySelector(".slide");
let navbar = document.querySelector('#navbar-mobile');

navLink.forEach(link => {
    link.addEventListener('click', function() {
      slide.style.display = "none";
        checkbox.checked = false;
        navbar.style.left = '-100%';
        document.body.style.overflow = 'visible';
    });
});


checkbox.addEventListener("change", function() {
  if (check.checked) {
    navbar.style.left = '0%';
    slide.style.display = "none";
    document.body.style.overflow = 'hidden';
  } else {
    navbar.style.left = '-100%';
    document.body.style.overflow = 'visible';
  }
});

btnToggle.addEventListener("click", function() {
  navbar.style.left = '-100%';
  document.body.style.overflow = 'visible';
});

}


// ImageSlider banner
var slider = document.getElementById("slider");
var images = slider.getElementsByClassName("imgSlider");
var current = 0;

function next() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}

setInterval(next, 2000);