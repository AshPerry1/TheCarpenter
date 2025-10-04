// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener('click', () => {
    const isActive = mobileNav.classList.contains('active');
    mobileNav.classList.toggle('active');
    mobileMenuBtn.textContent = isActive ? '☰' : '✕';
    mobileMenuBtn.setAttribute('aria-expanded', !isActive);
  });
}

// Email Form
const emailForm = document.getElementById('emailForm');
if (emailForm) {
  emailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(emailForm);
    const email = formData.get('email') || emailForm.querySelector('input[type="email"]').value;
    
    // Replace with actual email service integration
    alert('Thanks! Check your email to confirm your subscription.');
    emailForm.reset();
  });
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = this.getAttribute('href');
    if (target !== '#' && document.querySelector(target)) {
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Initialize personalization system
document.addEventListener('DOMContentLoaded', () => {
  // Load personalization system scripts
  const scripts = [
    'js/personalize.js',
    'js/name-component.js', 
    'js/personalize-modal.js',
    'js/name-edit.js',
    'js/personalize-main.js'
  ];
  
  let loadedCount = 0;
  
  scripts.forEach((src, index) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      loadedCount++;
      if (loadedCount === scripts.length) {
        console.log('Personalization system loaded successfully');
      }
    };
    script.onerror = () => {
      console.log('Failed to load personalization script:', src);
    };
    document.head.appendChild(script);
  });
});

