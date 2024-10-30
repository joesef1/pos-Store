document.addEventListener('DOMContentLoaded', () => {

  // Element selectors
  const burgerMenu = document.getElementById('burger-menu');
  const sideNav = document.getElementById('side-nav');
  const overlay = document.getElementById('overlay');
  const menuBarOverlay = document.getElementById('menuBarOverlay');
  const orderTimeOverlay = document.getElementById('orderTimeOverlay');
  const closeBtn = document.getElementById('close-btn');
  const itemCards = document.querySelectorAll('.item-card');
  const menuBar = document.getElementById('menu-bar');
  const timeTypeBtn = document.querySelector('.timeTypeBtn');
  const stickySection = document.querySelector('.order-type');
  const timeTypeModalWrapper = document.querySelector('.timeTypeModalWrapper');

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


   //!timeTypeBtn
   orderTimeOverlay.addEventListener('click', () => {
    hideTimeTypeSection();
  });

  const TimeTypeCloseIcon = document.getElementById("TimeTypeCloseIcon")
  TimeTypeCloseIcon.addEventListener('click', () => {
    hideTimeTypeSection();
  });

  timeTypeBtn.addEventListener('click', () => {
    showTimeTypeSection();
  });



///!

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

  //!timeTypeBtn
  function showTimeTypeSection() {
    timeTypeModalWrapper.classList.toggle('show');
    timeTypeModalWrapper.classList.remove('hide');
    orderTimeOverlay.classList.add('active');
    console.log("ggg");

  }

  function hideTimeTypeSection() {
    timeTypeModalWrapper.classList.remove('show');
    timeTypeModalWrapper.classList.add('hide');
    orderTimeOverlay.classList.remove('active');
  }
  //!addtoCardOverlay


   //!addtoCardOverlay
   const addtoCardOverlay = document.getElementById("addtoCardOverlay")
   const menuItemModal = document.getElementById("menu-item-modal")
   const menuItemModalWrapperIcon = document.getElementById("menuItemModalWrapperIcon")

  //  addtoCardOverlay.addEventListener('click', () => {
  //    hideTimeTypeSection();
  //  });

  //  menuItemModalWrapperIcon.addEventListener('click', () => {
  //    hideTimeTypeSection();
  //  });

  //  itemCards.addEventListener('click', () => {
  //    showTimeTypeSection();
  //  });


  // Item card interaction for each item card
  itemCards.forEach(itemCard => {
    itemCard.addEventListener('click', () => {
      showProductModal(); // Show the product modal when an item card is clicked
    });
  });

  // Function to show the product modal
  function showProductModal() {
    menuItemModal.classList.toggle('show');
    menuItemModal.classList.remove('hide');
    addtoCardOverlay.classList.add('active');

  }

  // Function to hide the product modal
  function hideProductModal() {
    menuItemModal.classList.remove('show');
    menuItemModal.classList.add('hide');
    addtoCardOverlay.classList.remove('active');
  }

  // Event listener for closing the modal using close button
  if (menuItemModalWrapperIcon) {
    menuItemModalWrapperIcon.addEventListener('click', () => {
      hideProductModal();
    });
  }

  // Event listener for closing the modal by clicking the overlay
  if (addtoCardOverlay) {
    addtoCardOverlay.addEventListener('click', () => {
      hideProductModal();
    });
  }



  //! enter phone number section
  // const closeModalBtn = document.getElementById("closeModalBtn");
  // const loginModal = document.getElementById("loginModal");
  // const dialogOverlay = document.getElementById("dialog-overlay");

  // // Function to hide the modal and overlay
  // function hideModal() {
  //   loginModal.style.display = "none";
  //   dialogOverlay.style.display = "none";
  // }

  // // Add event listener to the close button
  // closeModalBtn.addEventListener("click", hideModal);

  // // Add event listener to the overlay
  // dialogOverlay.addEventListener("click", hideModal);
  // //! ./enter phone number section



});


//scroll to the category section functionality
function scrollToCategory(event, categoryId) {
  event.preventDefault();

  // Scroll to the clicked category smoothly
  const element = document.getElementById(categoryId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 125;

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


