function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Animate elements when they come into view
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) {
        // 使用requestAnimationFrame确保动画平滑且不阻塞滚动
        requestAnimationFrame(() => {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        });
      }
    });
  };
  
  // Run on load and scroll
  animateOnScroll();
  
  // 使用passive: true确保滚动事件不会被阻止
  window.addEventListener('scroll', animateOnScroll, { passive: true });
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
      
      // 锁定滚动条的改进方式
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    }

    // When the user clicks on <span> (x), close the modal
    spans[i].onclick = function() {
      modals[i].style.opacity = "0";
      stopIframe();
      setTimeout(function() {
        modals[i].style.display = "none";
        
        // 恢复滚动位置的改进方式
        const scrollY = parseInt(document.body.style.top || '0') * -1;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      }, 500); // Wait for the transition to finish before hiding the modal
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
          
          // 恢复滚动位置的改进方式
          const scrollY = parseInt(document.body.style.top || '0') * -1;
          document.body.style.position = '';
          document.body.style.top = '';
          document.body.style.width = '';
          window.scrollTo(0, scrollY);
        }, 500); // Wait for the transition to finish before hiding the modal
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
  // 平滑滚动效果 - 只保留一个滚动处理函数
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        // 使用scrollIntoView而不是scrollTo，更兼容现代浏览器
        target.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
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

  // 确保profile和about部分之间的正确过渡
  function adjustProfileAboutTransition() {
    const profile = document.getElementById('profile');
    const about = document.getElementById('about');
    
    // 只在小屏幕上应用这个逻辑
    if (window.innerWidth <= 900) {
      // 获取profile的实际高度
      const profileHeight = profile.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      // 如果profile的高度超过视口高度或者内容较多
      if (profileHeight > viewportHeight * 0.7 || profileHeight > 500) {
        // 调整profile::after伪元素 (通过CSS变量)
        profile.style.setProperty('--profile-after-height', '30px');
        profile.style.setProperty('--profile-after-bottom', '-15px');
        
        // 调整about部分的margin和padding
        about.style.marginTop = '-15px';
        about.style.paddingTop = '30px';
      } else {
        // 恢复默认值
        profile.style.removeProperty('--profile-after-height');
        profile.style.removeProperty('--profile-after-bottom');
        about.style.removeProperty('marginTop');
        about.style.removeProperty('paddingTop');
      }
    } else {
      // 大屏幕恢复默认样式
      profile.style.removeProperty('--profile-after-height');
      profile.style.removeProperty('--profile-after-bottom');
      about.style.removeProperty('marginTop');
      about.style.removeProperty('paddingTop');
    }
  }
  
  // 添加节流函数以限制事件处理频率
  function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return func(...args);
    }
  }
  
  // 在加载和调整窗口大小时调整
  adjustProfileAboutTransition();
  window.addEventListener('resize', throttle(adjustProfileAboutTransition, 100));
  
  // 只在页面初始加载和完成滚动后调整，而不是在滚动过程中
  window.addEventListener('load', adjustProfileAboutTransition);
  // 使用更温和的滚动监听方式，减少对滚动性能的影响
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(adjustProfileAboutTransition, 200);
  }, { passive: true });

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