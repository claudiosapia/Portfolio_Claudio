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

// Get all the modal buttons
var modalButtons = document.getElementsByClassName("modalButton");

// Attach event listeners to each modal button
for (var i = 0; i < modalButtons.length; i++) {
  modalButtons[i].addEventListener("click", function () {
    // Display the modal
    document.getElementById("modal").style.display = "block";

    // Fetch project data and image for the clicked project
    var projectId = this.getAttribute("data-project-id");
    // Replace the following lines with your code to retrieve project information and image path dynamically
    var projectImageSrc = getProjectImageSrc(projectId);
    var projectTitle = getProjectTitle(projectId);
    var projectDescription = getProjectDescription(projectId);

    // Populate modal content with project information and image
    var projectImage = document.getElementById("projectImage");
    projectImage.setAttribute("src", projectImageSrc);
    projectImage.setAttribute("alt", projectTitle);
    document.getElementById("projectTitle").textContent = projectTitle;
    document.getElementById("projectDescription").textContent =
      projectDescription;
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

// Example functions to retrieve project information and image path based on project ID
function getProjectImageSrc(projectId) {
  // Replace with your logic to get the image source dynamically based on the project ID
  if (projectId === "project1") {
    return "./pics/Transition Edinburgh.webp";
  } else if (projectId === "project2") {
    return "./pics/UniDisc.webp";
  } else if (projectId === "project3") {
    return "./pics/smart-menu-home.png";
  } else if (projectId === "project4") {
    return "./pics/onda-blu-02.png";
  }
}

function getProjectTitle(projectId) {
  // Replace with your logic to get the project title dynamically based on the project ID
  if (projectId === "project1") {
    return "Transition Edinburgh";
  } else if (projectId === "project2") {
    return "UniDiscounts";
  } else if (projectId === "project3") {
    return "Smart Menu";
  } else if (projectId === "project4") {
    return "Onda Blu";
  }
}

function getProjectDescription(projectId) {
  // Replace with your logic to get the project description dynamically based on the project ID
  if (projectId === "project1") {
    return "Website updates, content creation, customizing themes, and managed events/posts. Improved design, navigation, and compelling content to effectively communicate missions. ";
  } else if (projectId === "project2") {
    return "Developed fully functional WordPress site from scratch including hosting setup, custom theme design, plugin integration, SEO optimizations, custom content creation, and ongoing maintenance. WordPress theme customization, functionality, UI design, optimization, and technical management from concept to completed platform. Implemented WooCommerce and integrated APIs to pull dynamic content and enhance site features. ";
  } else if (projectId === "project3") {
    return "Developed fully functional PHP and Symfony web application with a MySQL database. Implemented CRUD functionalities and integrated an user registration and authentication system.";
  } else if (projectId === "project4") {
    return "Developed fully functional PHP, MySql, Javascript, Bootstrap web application with integrated booking system and admin pages for CRUD operations. Integrated a registration, login system and Stripe checkout.";
  }
}
