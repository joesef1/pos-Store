document.addEventListener('DOMContentLoaded', () => {

  // Element selectors
  const burgerMenu = document.getElementById('burger-menu');
  const sideNav = document.getElementById('side-nav');
  const overlay = document.getElementById('overlay');
  const menuBarOverlay = document.getElementById('menuBarOverlay');
  const closeBtn = document.getElementById('close-btn');
  const itemCards = document.querySelectorAll('.item-card');
  const menuBar = document.querySelector('.menu-bar');
  const stickySection = document.querySelector('.order-type');

  // Selectors for product modal
  const productModal = document.querySelector('.product-modal'); // Assuming the product modal has this class
  const productModalOverlay = document.querySelector('.product-modal-overlay'); // Create an overlay for modal if needed
  const productCloseBtn = document.querySelector('.product-modal .close-btn'); // Close button inside the modal

  // Burger menu toggle
  if (burgerMenu) {
    burgerMenu.addEventListener('click', () => {
      toggleMenu();
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeMenu();
    });
  }

  if (overlay) {
    overlay.addEventListener('click', () => {
      closeMenu();
    });
  }

  // Function to toggle menu
  function toggleMenu() {
    burgerMenu.classList.toggle('active');
    sideNav.classList.toggle('active');
    overlay.classList.toggle('active');
  }

  // Function to close menu
  function closeMenu() {
    burgerMenu.classList.remove('active');
    sideNav.classList.remove('active');
    overlay.classList.remove('active');
  }

  // Menu bar interactions
  if (menuBar) {
    menuBar.addEventListener('click', () => {
      toggleStickySection();
    });
  }

  if (menuBarOverlay) {
    menuBarOverlay.addEventListener('click', () => {
      hideStickySection();
    });
  }

  // Sticky section toggle functions
  function toggleStickySection() {
    stickySection.classList.toggle('show');
    stickySection.classList.remove('hide');
    menuBarOverlay.classList.add('active');
  }

  function hideStickySection() {
    stickySection.classList.remove('show');
    stickySection.classList.add('hide');
    menuBarOverlay.classList.remove('active');
  }

  // Item card interaction for each item card
  itemCards.forEach(itemCard => {
    itemCard.addEventListener('click', () => {
      showProductModal(); // Show the product modal when an item card is clicked
    });
  });

  // Function to show the product modal
  function showProductModal() {
    productModal.classList.add('active'); // Show the modal
    productModalOverlay.classList.add('active'); // Show the overlay

  }

  // Function to hide the product modal
  function hideProductModal() {
    productModal.classList.remove('active'); // Hide the modal
    productModalOverlay.classList.remove('active'); // Hide the overlay
  }

  // Event listener for closing the modal using close button
  if (productCloseBtn) {
    productCloseBtn.addEventListener('click', () => {
      hideProductModal();
    });
  }

  // Event listener for closing the modal by clicking the overlay
  if (productModalOverlay) {
    productModalOverlay.addEventListener('click', () => {
      hideProductModal();
    });
  }

});


//scroll to the category section functionality
function scrollToCategory(event, categoryId) {
  event.preventDefault();

  // Scroll to the clicked category smoothly
  const element = document.getElementById(categoryId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 200;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // Update the active link immediately on click
  updateActiveLink(categoryId);
}

function updateActiveLink(categoryId) {
  // Remove 'active' class from any previously selected element
  const previousActive = document.querySelector('.group-list a.active');
  if (previousActive) {
    previousActive.classList.remove('active');
  }

  // Add 'active' class to the corresponding <a> tag
  const activeLink = document.querySelector(`.group-list a[onclick*="${categoryId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

function handleScroll() {
  const categories = document.querySelectorAll('.categorySection'); // Assuming each category section has the class "category"
  let currentCategory = null;

  categories.forEach(category => {
    const categoryTop = category.getBoundingClientRect().top;

    // Detect the category currently in view (e.g., within 200px from the top)
    if (categoryTop <= 200 && categoryTop >= -200) {
      currentCategory = category;
    }
  });

  if (currentCategory) {
    updateActiveLink(currentCategory.id);
  }
}

// Listen to the scroll event
window.addEventListener('scroll', handleScroll);
