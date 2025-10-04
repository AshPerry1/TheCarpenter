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
        // Focus on name input
        const nameInput = document.getElementById('nameInput');
        if (nameInput) {
          nameInput.focus();
        }
      }
    }, 1000);
  }
}

function setNameAndContinue() {
  const nameInput = document.getElementById('nameInput');
  const displayName = document.getElementById('displayName');
  
  if (nameInput && nameInput.value.trim()) {
    const name = nameInput.value.trim();
    console.log('Setting name:', name);
    
    // Save name using the personalization system
    if (window.PersonalizeUtils) {
      window.PersonalizeUtils.setName(name);
      console.log('Name saved to personalization system');
      
      // Force update all personalization components
      if (window.personalizationSystem) {
        window.personalizationSystem.refresh();
        console.log('Personalization system refreshed');
      }
      
      // Manual update as backup
      updateAllNameElements(name);
    } else {
      console.error('PersonalizeUtils not available');
      // Manual update as fallback
      updateAllNameElements(name);
    }
    
    // Update display
    if (displayName) {
      displayName.textContent = name;
    }
  }
  
  // Move to welcome step
  showWelcomeStep();
}

// Manual function to update all name elements on the page
function updateAllNameElements(name) {
  console.log('Manually updating name elements with:', name);
  
  // Update all elements with data-name attribute
  const nameElements = document.querySelectorAll('[data-name]');
  nameElements.forEach(element => {
    const fallback = element.getAttribute('data-name-fallback') || 'friend';
    const displayName = name || fallback;
    element.textContent = displayName;
    console.log('Updated element:', element, 'with:', displayName);
  });
  
  // Update localStorage directly as backup
  try {
    localStorage.setItem('tc:name', name);
    console.log('Name saved to localStorage:', name);
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

function useFriendAndContinue() {
  const displayName = document.getElementById('displayName');
  if (displayName) {
    displayName.textContent = 'friend';
  }
  
  // Move to welcome step
  showWelcomeStep();
}

function showWelcomeStep() {
  const nameStep = document.getElementById('nameStep');
  const welcomeStep = document.getElementById('welcomeStep');
  
  if (nameStep && welcomeStep) {
    nameStep.classList.remove('active');
    welcomeStep.classList.add('active');
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
window.setNameAndContinue = setNameAndContinue;
window.useFriendAndContinue = useFriendAndContinue;

// Add keyboard support for name input
document.addEventListener('keydown', (e) => {
  const popup = document.getElementById('welcomePopup');
  const nameInput = document.getElementById('nameInput');
  
  if (popup && popup.classList.contains('active') && e.target === nameInput) {
    if (e.key === 'Enter') {
      e.preventDefault();
      setNameAndContinue();
    }
  }
});

// Initialize on page load with delay to ensure personalization system is ready
document.addEventListener('DOMContentLoaded', () => {
  // Wait a bit for personalization system to load
  setTimeout(() => {
    showWelcomePopup();
  }, 1500);
});

