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

// 添加视差滚动效果
document.addEventListener('DOMContentLoaded', () => {
  // 平滑滚动效果
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // 元素淡入效果
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  // 项目过滤功能
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.details-container.color-container');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 更新活动按钮状态
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // 获取过滤类别
      const filterValue = button.getAttribute('data-filter');
      
      // 过滤项目
      projectItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'flex';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 100);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  // 图片预览功能
  document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('click', () => {
      const preview = document.createElement('div');
      preview.className = 'image-preview';
      preview.innerHTML = `
        <div class="preview-content">
          <img src="${img.src}" alt="${img.alt}">
          <button class="close-preview">×</button>
        </div>
      `;
      document.body.appendChild(preview);
      
      // 添加关闭事件
      preview.querySelector('.close-preview').addEventListener('click', () => {
        preview.style.opacity = '0';
        setTimeout(() => {
          preview.remove();
        }, 300);
      });

      // 点击背景也关闭预览
      preview.addEventListener('click', (e) => {
        if (e.target === preview) {
          preview.style.opacity = '0';
          setTimeout(() => {
            preview.remove();
          }, 300);
        }
      });

      // 按ESC键关闭预览
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          preview.style.opacity = '0';
          setTimeout(() => {
            preview.remove();
          }, 300);
        }
      });
    });
  });

  // 主题切换功能
  const themeToggle = document.getElementById('theme-toggle');
  
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    
    // 保存主题偏好到本地存储
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  });

  // 从本地存储加载主题设置
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
  }
});