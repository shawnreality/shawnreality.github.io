function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Add smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offsetPosition = targetElement.offsetTop - 100;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial styles
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run on load and scroll
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

window.onload = function() {
  // Get all the buttons that open the modals
  var btns = document.getElementsByClassName("btn btn-color-2 read-more");

  // Get all the modals
  var modals = document.getElementsByClassName("modal");

  // Get all the <span> elements that close the modals
  var spans = document.getElementsByClassName("close");

  // For each button...
  for (let i = 0; i < btns.length; i++) {
    // When the user clicks the button, open the corresponding modal
    btns[i].onclick = function() {
      modals[i].style.display = "block";
      setTimeout(function() {
        modals[i].style.opacity = "1";
      }, 50); // Wait a bit for the display change to take effect
      document.body.style.overflow = 'hidden'; // Lock the scroll bar
      document.body.style.marginRight = '15px'; // Add a right margin to the body
    }

    // When the user clicks on <span> (x), close the modal
    spans[i].onclick = function() {
      modals[i].style.opacity = "0";
      stopIframe();
      setTimeout(function() {
        modals[i].style.display = "none";
      }, 500); // Wait for the transition to finish before hiding the modal
      document.body.style.overflow = 'auto'; // Unlock the scroll bar
      document.body.style.marginRight = '0px'; // Remove the right margin from the body
    }
  }

  // When the user clicks anywhere outside of a modal, close it
  window.onclick = function(event) {
    for (let i = 0; i < modals.length; i++) {
      if (event.target == modals[i]) {
        modals[i].style.opacity = "0";
        stopIframe();
        setTimeout(function() {
          modals[i].style.display = "none";
        }, 500); // Wait for the transition to finish before hiding the modal
        document.body.style.overflow = 'auto'; // Unlock the scroll bar
        document.body.style.marginRight = '0px'; // Remove the right margin from the body
      }
    }
  }

  // Add hover effect to project cards
  const projectCards = document.querySelectorAll('.color-container');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.querySelector('.project-img').style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.querySelector('.project-img').style.transform = 'scale(1)';
    });
  });
}

function stopIframe() {
  var iframes = document.querySelectorAll('iframe');
  iframes.forEach(function(iframe) {
    iframe.src = iframe.src;
  });
}