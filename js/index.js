//index intro
// Check if the code has already been executed
if (!localStorage.getItem("codeExecuted")) {
  const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

  tl.to(".text", { y: "0%", duration: 1, stagger: 0.35 });
  tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.8 });
  tl.to(".intro", { y: "-100%", duration: 1 }, "-=1"); //-=1 start 1 s faster
  tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=3");
  tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 2 }, "-=1");
  tl.fromTo(
    ".jumbotron-fluid ",
    { opacity: 0 },
    { opacity: 1, duration: 2 },
    "-=1"
  );
  tl.fromTo(".footer ", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  //reveal
  // Set a flag in local storage to indicate that the code has been executed
  localStorage.setItem("codeExecuted", true);
} else {
  document.querySelector(".slider").style.display = "none";
  document.querySelector(".intro").style.display = "none";
  document.querySelector(".text").style.display = "none";
  document.querySelector(".jumbotron-fluid").style.display = "block";
  document.querySelector("nav").style.display = "block";
  document.querySelector(".big-text").style.display = "block";
  document.querySelector(".footer").style.display = "block";
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

//LOADER

const loader = document.getElementById("loader");
const main = document.getElementById("main-section");

function showLoader() {
  // Display the loader element
  loader.style.display = "block";
  // Hide the main content
  main.style.opacity = 0;
}

function hideLoader() {
  // Fade out the loader element
  loader.style.opacity = 0;
  // Hide the loader element
  loader.style.display = "none";
  // Fade in the main content
  main.style.opacity = 1;
}

function init() {
  // Show the loader when the page starts loading
  showLoader();

  window.addEventListener("load", function () {
    // Hide the loader when the page finishes loading
    hideLoader();
  });
}

// Initialize the loader functionality
init();

document.addEventListener("DOMContentLoaded", () => {
  // --- Intersection Observer for Fade-in Animations ---
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Stop observing once it's visible
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });

  // --- Combined Scroll Event Listener ---
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    // Navbar style change on scroll
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.9)";
      navbar.style.boxShadow = "none";
    }
  });

  // --- Mobile Menu Toggle ---
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const navLinks = document.querySelector(".nav-links");

  mobileMenuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // --- Close mobile menu when a link is clicked ---
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });
});
