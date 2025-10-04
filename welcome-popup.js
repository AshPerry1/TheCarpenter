// Welcome Popup for Homepage

function showWelcomePopup() {
  // Check if user has already seen the popup
  const hasSeenPopup = localStorage.getItem('carpenterWelcomePopupSeen');
  
  if (!hasSeenPopup) {
    // Show popup after a brief delay
    setTimeout(() => {
      const popup = document.getElementById('welcomePopup');
      if (popup) {
        popup.classList.add('active');
      }
    }, 1000);
  }
}

function closeWelcomePopup() {
  const popup = document.getElementById('welcomePopup');
  if (popup) {
    popup.classList.remove('active');
    // Remember that user has seen it
    localStorage.setItem('carpenterWelcomePopupSeen', 'true');
  }
}

// Close popup if clicking outside of it
document.addEventListener('click', (e) => {
  const popup = document.getElementById('welcomePopup');
  const popupCard = document.getElementById('welcomePopupCard');
  
  if (popup && popup.classList.contains('active') && e.target === popup) {
    closeWelcomePopup();
  }
});

// Make functions globally available
window.closeWelcomePopup = closeWelcomePopup;
window.showWelcomePopup = showWelcomePopup;

// Initialize on page load
document.addEventListener('DOMContentLoaded', showWelcomePopup);

