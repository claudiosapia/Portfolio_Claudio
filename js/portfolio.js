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

// MODAL

// --- MODAL PROJECT DATA STRUCTURE ---
// Each project has an array of images, each with its own title and description
const projectData = {
  project1: [
    {
      src: "./pics/ciso/ciso_full.png",
      title: "Intelligent CISO - Home Page",
      description:
        "Custom homepage design, theme development, and SEO optimization.\n\u00A9 Copyright 2025 Intelligent CISO (Lynchpin Media). Project completed as part of my employment at Lynchpin Media. Used here for portfolio demonstration only.",
    },
    {
      src: "./pics/ciso/ciso_top.PNG",
      title: "Intelligent CISO - Top Section",
      description: "Hero section and navigation bar.\n\u00A9 Lynchpin Media.",
    },
    {
      src: "./pics/ciso/ciso_mid.PNG",
      title: "Intelligent CISO - Middle Section",
      description:
        "Main content and featured articles.\n\u00A9 Lynchpin Media.",
    },
    {
      src: "./pics/ciso/ciso-bottom.PNG",
      title: "Intelligent CISO - Bottom Section",
      description: "Main content and carousel items.\n\u00A9 Lynchpin Media.",
    },
    {
      src: "./pics/ciso/ciso-foot.PNG",
      title: "Intelligent CISO - Bottom Section",
      description: "Bottom section of page.\n\u00A9 Lynchpin Media.",
    },
  ],
  project5: [
    {
      src: "./pics/ondablu/home-desktop.png",
      title: "B&B Onda Blu - Home Page",
      description:
        "Homepage with booking form and featured rooms.\n\u00A9 B&B Onda Blu. Project completed as a student for my final HND year project.",
    },
    {
      src: "./pics/ondablu/rooms-desktop.png",
      title: "B&B Onda Blu - Rooms",
      description: "Room listings and details.\n\u00A9 B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/booking-desktop.png",
      title: "B&B Onda Blu - Booking Page",
      description: "Booking form and calendar.\n\u00A9 B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/dashboard-desktop.png",
      title: "B&B Onda Blu - Admin Dashboard",
      description:
        "Admin dashboard for managing bookings and content.\n\u00A9 B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/manage-bookings-desktop.png",
      title: "B&B Onda Blu - Manage Bookings",
      description: "Bookings management interface.\n\u00A9 B&B Onda Blu.",
    },

    {
      src: "./pics/ondablu/attractions-desktop.png",
      title: "B&B Onda Blu - Attractions",
      description: "Nearby attractions and activities.\n\u00A9 B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/amenities-desktop.png",
      title: "B&B Onda Blu - Amenities",
      description: "Amenities and services offered.\n\u00A9 B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/activities-desktop.png",
      title: "B&B Onda Blu - Activities",
      description: "Local activities and experiences.\n\u00A9 B&B Onda Blu.",
    },

    {
      src: "./pics/ondablu/about-desktop.png",
      title: "B&B Onda Blu - About Page",
      description: "About the B&B and contact info.\n\u00A9 B&B Onda Blu.",
    },
    {
      src: "./pics/ondablu/sign-up-desktop.png",
      title: "B&B Onda Blu - Sign Up",
      description: "User registration page.\n\u00A9 B&B Onda Blu.",
    },
  ],
  project2: [
    {
      src: "./pics/transition/transition_full.png",
      title: "Transition Edinburgh - Full Page",
      description:
        "Full website layout and homepage.\n\u00A9 Transition Edinburgh. Project completed as a volunteer web developer. Used here for portfolio demonstration only.",
    },
    {
      src: "./pics/transition/transition_top.PNG",
      title: "Transition Edinburgh - Top Section",
      description:
        "Hero section and navigation bar.\n\u00A9 Transition Edinburgh.",
    },
    {
      src: "./pics/transition/transition_section.png",
      title: "Transition Edinburgh - Content Section",
      description:
        "Main content and featured events.\n\u00A9 Transition Edinburgh.",
    },
  ],
  project3: [
    {
      src: "./pics/ellnot-2023.webp",
      title: "E-commerce Website - Main Page",
      description:
        "Node.js, Express, Bootstrap, EJS, and custom shopping cart.",
    },
    {
      src: "./pics/ellnot.webp",
      title: "E-commerce Website - Product Page",
      description: "Dynamic product listings and secure checkout integration.",
    },
  ],
  project14: [
    {
      src: "./pics/limelight/limelight_home.PNG",
      title: "Limelight Cinema - Home Page",
      description:
        "Cinema website with ticketing, showtime scheduling, and content management functionalities. Built with PHP, HTML, CSS, JavaScript, MySQL, and SASS/BEM methodology. Responsive and fully featured for demonstration purposes.",
    },
    {
      src: "./pics/limelight/limelight-login.PNG",
      title: "Limelight Cinema - Login Page",
      description:
        "Login page for user authentication. Technologies: PHP, HTML, CSS, JavaScript.",
    },
    {
      src: "./pics/limelight/limelight-junior.PNG",
      title: "Limelight Cinema - Junior Page",
      description:
        "Junior section for family-friendly movies and events. Technologies: PHP, HTML, CSS, JavaScript.",
    },
    {
      src: "./pics/limelight/limelight-showtimes.PNG",
      title: "Limelight Cinema - Showtimes Page",
      description:
        "Showtimes and booking form with seat selection and validation. Technologies: PHP, HTML, CSS, JavaScript, MySQL.",
    },
    {
      src: "./pics/limelight/limelight-booking.PNG",
      title: "Limelight Cinema - Booking Confirmation",
      description:
        "Booking confirmation page. Technologies: PHP, HTML, CSS, JavaScript.",
    },
    {
      src: "./pics/limelight/limelight-ticket.PNG",
      title: "Limelight Cinema - Ticket Page",
      description:
        "Ticket download and print page. Technologies: PHP, HTML, CSS, JavaScript.",
    },
    {
      src: "./pics/limelight/limelight-signup.PNG",
      title: "Limelight Cinema - Sign Up Page",
      description:
        "Sign-up page for new users. Technologies: PHP, HTML, CSS, JavaScript.",
    },
  ],
  project8: [
    {
      src: "./pics/bkb/bkb-home.PNG",
      title: "Bike King Borders - Home Page",
      description:
        "Landing page with hero image, navigation, and featured bikes. Built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript. Responsive and mobile-friendly.",
    },
    {
      src: "./pics/bkb/bkb-services.PNG",
      title: "Bike King Borders - Services",
      description:
        "Services overview with Bootstrap cards and icons. Lists repairs, custom builds, and maintenance packages. Technologies: HTML5, Bootstrap, CSS3.",
    },
    {
      src: "./pics/bkb/bkb-shop.PNG",
      title: "Bike King Borders - Shop & Gallery",
      description:
        "Product gallery and shop section using Bootstrap grid and modals. Displays bikes, accessories, and event photos. Technologies: HTML5, Bootstrap, JavaScript.",
    },
    {
      src: "./pics/bkb/bkb-contact.PNG",
      title: "Bike King Borders - Contact Page",
      description:
        "Contact form with validation, address, and social media links. Responsive layout using Bootstrap. Technologies: HTML5, Bootstrap, CSS3, JavaScript.",
    },
  ],
  project15: [
    {
      src: "./pics/job-market/job-market-full.png",
      title: "Job Market Candidates – Full Portal View",
      description:
        "Landing page and candidate directory. Built with PHP, Bootstrap 5, MySQL, and custom JavaScript. Features search, filter, and responsive layout for School of Economics job market candidates.",
    },
    {
      src: "./pics/job-market/job-market-content.PNG",
      title: "Job Market Candidates – Candidate Profile",
      description:
        "Individual candidate profile page. Displays research, CV, and contact info. Technologies: PHP, Bootstrap, MySQL, JavaScript, HTML5, CSS3.",
    },
  ],
  // ...add more projects as needed...
};

// --- MODAL LOGIC ---

// Get all the modal buttons
var modalButtons = document.getElementsByClassName("modalButton");

// Attach event listeners to each modal button
for (var i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener("click", function () {
    var projectId = this.getAttribute("data-project-id");
    var images = projectData[projectId] || [];
    var carouselInner = document.getElementById("carouselInner");
    carouselInner.innerHTML = "";
    images.forEach(function (img, idx) {
      var item = document.createElement("div");
      item.className = "carousel-item" + (idx === 0 ? " active" : "");
      var image = document.createElement("img");
      image.src = img.src;
      image.className = "d-block w-100";
      image.alt = img.title;
      item.appendChild(image);
      carouselInner.appendChild(item);
    });
    // Set initial title/desc
    if (images[0]) {
      document.getElementById("projectTitle").textContent = images[0].title;
      document.getElementById("projectDescription").textContent =
        images[0].description;
    } else {
      document.getElementById("projectTitle").textContent = "";
      document.getElementById("projectDescription").textContent = "";
    }
    // Show modal
    document.getElementById("modal").style.display = "block";
    // Reset carousel to first slide
    var carousel = bootstrap.Carousel.getOrCreateInstance(
      document.getElementById("projectCarousel")
    );
    carousel.to(0);
  });
}
// Mark which button opened the modal
for (var i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener("click", function () {
    for (var j = 0; j < modalButtons.length; j++) {
      modalButtons[j].classList.remove("active-modal-btn");
    }
    this.classList.add("active-modal-btn");
  });
}

document
  .getElementsByClassName("close")[0]
  .addEventListener("click", function () {
    // Hide the modal when close button is clicked
    document.getElementById("modal").style.display = "none";
  });

// Add event listener to modal overlay to close the modal when clicked outside of it
document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target === this) {
    document.getElementById("modal").style.display = "none";
  }
});

// Update title/desc on carousel slide
var projectCarousel = document.getElementById("projectCarousel");
projectCarousel.addEventListener("slide.bs.carousel", function (event) {
  // Find which project is open
  var activeProjectId = null;
  for (var i = 0; i < modalButtons.length; i++) {
    if (modalButtons[i].classList.contains("active-modal-btn")) {
      activeProjectId = modalButtons[i].getAttribute("data-project-id");
      break;
    }
  }
  // Fallback: try to get from visible modal
  if (!activeProjectId) {
    var imgs = document.querySelectorAll("#carouselInner .carousel-item img");
    for (var pid in projectData) {
      if (
        projectData[pid][0] &&
        imgs[0] &&
        projectData[pid][0].src === imgs[0].src
      ) {
        activeProjectId = pid;
        break;
      }
    }
  }
  if (!activeProjectId) return;
  var images = projectData[activeProjectId] || [];
  var idx = event.to;
  if (images[idx]) {
    document.getElementById("projectTitle").textContent = images[idx].title;
    document.getElementById("projectDescription").textContent =
      images[idx].description;
  }
});
