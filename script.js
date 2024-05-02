function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



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
  }
}

function stopIframe() {
  var iframes = document.querySelectorAll('iframe');
  iframes.forEach(function(iframe) {
    iframe.src = iframe.src;
  });
}