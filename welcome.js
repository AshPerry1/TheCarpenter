// Welcome & Tutorial System

const tutorialSteps = [
  {
    target: 'heroSection',
    title: 'Welcome to The Carpenter',
    content: 'We help followers of Jesus see their everyday work—your spreadsheets, your routes, your lesson plans—as worship to God.',
    position: 'center'
  },
  {
    target: 'gospelCard',
    title: 'Start with the Gospel',
    content: 'Before understanding why work matters, we need to understand the story of Creation, Fall, Redemption, and Restoration.',
    position: 'above'
  },
  {
    target: 'workCard',
    title: 'Discover Your Purpose',
    content: 'Learn four biblical reasons why your job has eternal significance—it\'s not just a paycheck.',
    position: 'above'
  },
  {
    target: 'resourcesCard',
    title: 'Grow Week by Week',
    content: 'Join our 52-week devotional journey. Each week unlocks new Scripture, reflections, and practices for seeing work as worship.',
    position: 'above'
  },
  {
    target: 'mainNav',
    title: 'Explore Everything',
    content: 'Use the navigation to explore stories from believers, printable tools, and more resources for your workplace.',
    position: 'below'
  }
];

let currentStep = 0;
let userName = '';

// Check if user has already visited
function checkReturningVisitor() {
  const visited = localStorage.getItem('carpenterVisited');
  const savedName = localStorage.getItem('carpenterUserName');
  
  if (visited && savedName) {
    // Returning visitor
    userName = savedName;
    showPersonalizedGreeting();
    hideWelcome();
    return true;
  }
  return false;
}

// Handle name form submission
document.getElementById('nameForm').addEventListener('submit', (e) => {
  e.preventDefault();
  userName = document.getElementById('nameInput').value.trim();
  
  if (userName) {
    // Save to localStorage
    localStorage.setItem('carpenterUserName', userName);
    localStorage.setItem('carpenterVisited', 'true');
    
    // Show personalized greeting
    showPersonalizedGreeting();
    
    // Start tutorial
    setTimeout(() => {
      document.getElementById('welcomeOverlay').classList.add('fade-out');
      setTimeout(() => {
        document.getElementById('welcomeOverlay').style.display = 'none';
        startTutorial();
      }, 500);
    }, 300);
  }
});

// Skip welcome
function skipWelcome() {
  localStorage.setItem('carpenterVisited', 'true');
  document.getElementById('welcomeOverlay').classList.add('fade-out');
  setTimeout(() => {
    document.getElementById('welcomeOverlay').style.display = 'none';
  }, 500);
}

// Show personalized greeting
function showPersonalizedGreeting() {
  if (userName) {
    const greetingEl = document.getElementById('personalGreeting');
    const hour = new Date().getHours();
    let timeGreeting = 'Hello';
    
    if (hour < 12) timeGreeting = 'Good morning';
    else if (hour < 18) timeGreeting = 'Good afternoon';
    else timeGreeting = 'Good evening';
    
    greetingEl.textContent = `${timeGreeting}, ${userName}!`;
  }
}

// Start tutorial
function startTutorial() {
  currentStep = 0;
  showTutorialStep();
  document.getElementById('tutorialOverlay').classList.add('active');
}

// Show current tutorial step
function showTutorialStep() {
  const step = tutorialSteps[currentStep];
  const overlay = document.getElementById('tutorialOverlay');
  const content = document.getElementById('tutorialContent');
  
  // Position the tutorial content
  const targetEl = document.getElementById(step.target);
  if (!targetEl) return;
  
  const rect = targetEl.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  
  let top, left;
  let arrowClass = '';
  
  if (step.position === 'above') {
    top = rect.top + scrollTop - content.offsetHeight - 30;
    left = rect.left + scrollLeft + (rect.width / 2) - 200;
    arrowClass = 'arrow-down';
  } else if (step.position === 'below') {
    top = rect.bottom + scrollTop + 30;
    left = rect.left + scrollLeft + (rect.width / 2) - 200;
    arrowClass = 'arrow-up';
  } else {
    // Center
    top = window.innerHeight / 2 - 150 + scrollTop;
    left = window.innerWidth / 2 - 200;
  }
  
  // Build tutorial content HTML
  const isLastStep = currentStep === tutorialSteps.length - 1;
  const greeting = userName ? `, ${userName}` : '';
  
  content.innerHTML = `
    ${arrowClass ? `<div class="tutorial-arrow ${arrowClass}"></div>` : ''}
    <h3>${step.title}${currentStep === 0 ? greeting : ''}</h3>
    <p>${step.content}</p>
    <div class="tutorial-nav">
      <div class="tutorial-dots">
        ${tutorialSteps.map((_, i) => 
          `<div class="tutorial-dot ${i === currentStep ? 'active' : ''}"></div>`
        ).join('')}
      </div>
      <div>
        ${currentStep > 0 ? '<button class="btn btn-secondary" onclick="prevStep()" style="padding: 0.5rem 1rem; margin-right: 0.5rem;">Back</button>' : ''}
        <button class="btn btn-primary" onclick="${isLastStep ? 'finishTutorial' : 'nextStep'}()" style="padding: 0.5rem 1rem;">
          ${isLastStep ? 'Get Started' : 'Next'}
        </button>
      </div>
    </div>
    ${currentStep === 0 ? '<button class="skip-btn" onclick="finishTutorial()">Skip tutorial</button>' : ''}
  `;
  
  content.style.top = `${top}px`;
  content.style.left = `${Math.max(20, Math.min(left, window.innerWidth - 420))}px`;
  
  // Scroll to target element
  targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Next tutorial step
function nextStep() {
  if (currentStep < tutorialSteps.length - 1) {
    currentStep++;
    showTutorialStep();
  }
}

// Previous tutorial step
function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showTutorialStep();
  }
}

// Finish tutorial
function finishTutorial() {
  document.getElementById('tutorialOverlay').classList.remove('active');
  localStorage.setItem('carpenterTutorialComplete', 'true');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  // Check if returning visitor
  if (!checkReturningVisitor()) {
    // New visitor - show welcome
    document.getElementById('welcomeOverlay').style.display = 'flex';
  }
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (document.getElementById('tutorialOverlay').classList.contains('active')) {
      showTutorialStep();
    }
  }, 250);
});

