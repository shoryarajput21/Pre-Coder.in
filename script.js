 // Animate the logo
 gsap.from(".logo img", {
  duration: 1.5,
  opacity: 0,
  y: -50,
  ease: "bounce.out"
});

// Animate the navbar items
gsap.from(".navbar-item", {
  duration: 1,
  opacity: 0,
  y: -30,
  stagger: 0.2,
  ease: "power3.out"
});

// Animate the header action buttons
gsap.from(".header-action-btn, .btn.has-before", {
  duration: 1.5,
  opacity: 0,
  scale: 0.5,
  delay: 0.5,
  ease: "elastic.out(1, 0.5)",
  stagger: 0.2
});

// Optional: Animate the overlay (if used for the menu)
gsap.from(".overlay", {
  duration: 1,
  opacity: 0,
  ease: "power2.out"
});


 // Animate the hero section title
 gsap.from(".hero-content .section-title", {
  duration: 1.5,
  opacity: 0,
  y: 50,
  ease: "power3.out"
});

// Animate the hero text
gsap.from(".hero-text", {
  duration: 1.5,
  opacity: 0,
  y: 50,
  delay: 0.3,
  ease: "power3.out"
});

// Animate the button
gsap.from(".hero-content .btn", {
  duration: 1.5,
  opacity: 0,
  y: 50,
  delay: 0.6,
  ease: "power3.out"
});

// Animate the images in the hero-banner
gsap.from(".hero-banner .img-holder.one", {
  duration: 1.5,
  opacity: 0,
  x: -100,
  delay: 0.9,
  ease: "power3.out"
});

gsap.from(".hero-banner .img-holder.two", {
  duration: 1.5,
  opacity: 0,
  x: 100,
  delay: 1.2,
  ease: "power3.out"
});

// Animate the shape in the hero-banner
gsap.from(".hero-banner .shape.hero-shape-2", {
  duration: 1.5,
  opacity: 0,
  scale: 0.5,
  delay: 1.5,
  ease: "elastic.out(1, 0.75)"
});






document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.category-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target); // Stop observing after animation has been added
      }
    });
  }, { threshold: 0.1 }); // Adjust threshold as needed

  elements.forEach(element => {
    observer.observe(element);
  });
});




// Add this to your JavaScript file

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".about");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }, {
    threshold: 0.1 // Adjust based on when you want the animation to trigger
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});



'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);