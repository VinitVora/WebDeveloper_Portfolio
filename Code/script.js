// Select the necessary elements
const menuIcon = document.getElementById('menu-icon');
const mobileNavbar = document.querySelector('.mobile-navbar'); // Update this line

// Function to toggle the navigation menu
function toggleMenu() {
  mobileNavbar.classList.toggle('active'); // Update this line
}

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', toggleMenu);

// Close the mobile navigation menu when a link is clicked
const mobileNavLinks = document.querySelectorAll('.mobile-navbar a'); // Update this line
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileNavbar.classList.remove('active'); // Update this line
  });
});
