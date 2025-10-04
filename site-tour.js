// Interactive Site Tour

const tourSteps = [
  {
    elementId: 'heroSection',
    title: 'Your Work Has Purpose',
    content: 'This site is built on the idea that your everyday work—whatever you do—has profound meaning and eternal significance. Let us show you around.',
    position: 'center'
  },
  {
    elementId: 'behindNameSection',
    title: 'Why "The Carpenter"?',
    content: 'Jesus spent nearly 20 years working as a carpenter before His ministry. This section shows why that matters for your job today.',
    position: 'center'
  },
  {
    elementId: 'fourMovements',
    title: 'The Gospel Story',
    content: 'Understanding the story of Creation, Fall, Redemption, and Restoration helps us see why our work matters in God\'s bigger plan.',
    position: 'center'
  },
  {
    elementId: 'waysWorkMatters',
    title: 'Four Ways Your Work Matters',
    content: 'Discover biblical reasons why your job has significance: as worship, witness, service, and eternal investment.',
    position: 'center'
  },
  {
    elementId: 'liturgySection',
    title: 'Weekly Practices',
    content: 'Get practical guidance for seeing your work as worship with six micro-practices for your workweek.',
    position: 'center'
  },
  {
    elementId: 'storiesSection',
    title: 'Real Stories',
    content: 'Read how real people from all walks of life are discovering purpose in their everyday work—from software engineers to truck drivers.',
    position: 'center'
  }
];

let currentTourStep = 0;

// Start the site tour
function startSiteTour() {
  console.log('Starting site tour...');
  
  // Close welcome popup first
  if (typeof closeWelcomePopup === 'function') {
    closeWelcomePopup();
  }
  
  // Start tour after brief delay
  setTimeout(() => {
    currentTourStep = 0;
    const overlay = document.getElementById('tourOverlay');
    console.log('Tour overlay found:', !!overlay);
    
    if (overlay) {
      console.log('Activating tour overlay...');
      overlay.classList.add('active');
      showTourStep();
    } else {
      console.error('Tour overlay not found - check HTML structure');
    }
  }, 500);
}

// Show current tour step
function showTourStep() {
  const step = tourSteps[currentTourStep];
  const content = document.getElementById('tourContent');
  
  console.log('Showing tour step:', currentTourStep, step.title);
  
  if (!content) {
    console.error('Tour content element not found');
    return;
  }
  
  // Get target element
  const targetEl = document.getElementById(step.elementId);
  console.log('Target element found:', !!targetEl, 'for ID:', step.elementId);
  
  if (targetEl) {
    // Scroll to element
    targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    console.warn('Target element not found:', step.elementId);
  }
  
  // Build tour content HTML
  const isLastStep = currentTourStep === tourSteps.length - 1;
  
  content.innerHTML = `
    <h3>${step.title}</h3>
    <p>${step.content}</p>
    <div class="tour-nav">
      <div class="tour-dots">
        ${tourSteps.map((_, i) => 
          `<div class="tour-dot ${i === currentTourStep ? 'active' : ''}"></div>`
        ).join('')}
      </div>
      <div style="display: flex; gap: 0.5rem;">
        ${currentTourStep > 0 ? '<button class="btn btn-secondary" onclick="prevTourStep()" style="padding: 0.5rem 1rem;">Back</button>' : ''}
        <button class="btn btn-primary" onclick="${isLastStep ? 'finishTour' : 'nextTourStep'}()" style="padding: 0.5rem 1rem;">
          ${isLastStep ? 'Finish Tour' : 'Next'}
        </button>
      </div>
    </div>
    ${currentTourStep === 0 ? '<button onclick="finishTour()" style="background: transparent; border: none; color: var(--olive); text-decoration: underline; cursor: pointer; margin-top: 1rem; width: 100%; font-size: 0.875rem;">Skip tour</button>' : ''}
  `;
  
  // Position in center of screen
  content.style.position = 'fixed';
  content.style.top = '50%';
  content.style.left = '50%';
  content.style.transform = 'translate(-50%, -50%)';
}

// Next tour step
function nextTourStep() {
  if (currentTourStep < tourSteps.length - 1) {
    currentTourStep++;
    showTourStep();
  }
}

// Previous tour step
function prevTourStep() {
  if (currentTourStep > 0) {
    currentTourStep--;
    showTourStep();
  }
}

// Finish tour
function finishTour() {
  const overlay = document.getElementById('tourOverlay');
  if (overlay) {
    overlay.classList.remove('active');
  }
  localStorage.setItem('carpenterTourComplete', 'true');
}

// Close tour with escape key
document.addEventListener('keydown', (e) => {
  const tourOverlay = document.getElementById('tourOverlay');
  if (e.key === 'Escape' && tourOverlay && tourOverlay.classList.contains('active')) {
    finishTour();
  }
});

// Close tour when clicking outside
document.addEventListener('click', (e) => {
  const tourOverlay = document.getElementById('tourOverlay');
  const tourContent = document.getElementById('tourContent');
  
  if (tourOverlay && tourOverlay.classList.contains('active') && e.target === tourOverlay) {
    finishTour();
  }
});

// Make functions globally available
window.startSiteTour = startSiteTour;
window.nextTourStep = nextTourStep;
window.prevTourStep = prevTourStep;
window.finishTour = finishTour;

// Handle window resize during tour
let tourResizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(tourResizeTimer);
  tourResizeTimer = setTimeout(() => {
    if (document.getElementById('tourOverlay') && document.getElementById('tourOverlay').classList.contains('active')) {
      showTourStep();
    }
  }, 250);
});

