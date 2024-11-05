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

let isManualScroll = false; // Flag to differentiate manual vs auto scrolling
let observer; // Store the observer to manage its activation

// Scroll to the category section functionality
function scrollToCategory(event, categoryId) {
  event.preventDefault();
  isManualScroll = true; // Indicate a manual scroll

  // Scroll to the clicked category smoothly
  const element = document.getElementById(categoryId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    // Adjust offset dynamically for smaller screens to avoid blocking the top scroll
    const offset = window.innerWidth < 768 ? 50 : 125; // Smaller offset on mobile screens
    const offsetPosition = Math.max(elementPosition - offset, 0); // Ensure we don't scroll above the top

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }

  // Update the active link immediately on click
  updateActiveLink(categoryId);

  // Reset the flag after scrolling ends
  setTimeout(() => isManualScroll = false, 500); // Adjust delay if needed
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

    // Only scroll into view if not triggered by handleScroll
    if (!isManualScroll) {
      activeLink.scrollIntoView({
        inline: 'center',
        behavior: 'smooth'
      });
    }
  }
}

// Intersection Observer to detect when category sections enter view
function createObserver() {
  const options = {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.6 // Adjust to trigger when 60% of the section is visible
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !isManualScroll) {
        updateActiveLink(entry.target.id);
      }
    });
  }, options);

  // Start observing each category section
  document.querySelectorAll('.categorySection').forEach(section => {
    observer.observe(section);
  });
}

// Temporarily disable observer on manual scroll attempt
function pauseObserver() {
  isManualScroll = true;
  if (observer) {
    observer.disconnect();
  }
}

// Re-enable observer after manual scroll ends
function resumeObserver() {
  isManualScroll = false;
  if (observer) {
    createObserver();
  }
}

// Listen to touch events for mobile scrolling
document.addEventListener('touchstart', pauseObserver, { passive: true });
document.addEventListener('touchend', () => setTimeout(resumeObserver, 500)); // Add delay to resume observer after scrolling stops

// Initialize observer on page load
document.addEventListener('DOMContentLoaded', createObserver);
