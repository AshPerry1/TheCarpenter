// Card Landing Page - Token-Gated Flow

const VALID_TOKEN = 'evangel-2025-01';
const CARD_URL = 'https://thecarpentermovement.com/card/evangel-2025-01';

let userName = '';
let currentStage = 'validate'; // validate → name → greet

// Check URL token
function validateToken() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get('t');
  
  // Allow 'demo' token for preview from How It Works page
  if (token !== VALID_TOKEN && token !== 'demo') {
    showError();
    return false;
  }
  
  // For demo, don't save name to localStorage
  if (token === 'demo') {
    showNamePrompt();
    return true;
  }
  
  // Check if returning visitor (only for real token)
  const savedName = localStorage.getItem('seenCardName');
  if (savedName) {
    userName = savedName;
    showGreeting();
  } else {
    showNamePrompt();
  }
  
  return true;
}

// Show error (wrong/missing token)
function showError() {
  document.getElementById('cardContent').innerHTML = `
    <div class="error-panel">
      <h1>Page Not Found</h1>
      <p style="color: var(--graphite); margin-bottom: 2rem;">This page requires a special invitation to access.</p>
      <a href="index.html" class="btn btn-primary">Visit The Carpenter</a>
    </div>
  `;
}

// Step 1: Name Prompt
function showNamePrompt() {
  currentStage = 'name';
  
  document.getElementById('cardContent').innerHTML = `
    <div class="card-panel">
      <img src="images/logo-icon-text.png" alt="The Carpenter" style="height: 70px; width: auto; margin: 0 auto 2rem; display: block;">
      
      <h1>Welcome, friend.</h1>
      
      <p style="text-align: center; color: var(--graphite); font-size: 1.125rem; margin-bottom: 2rem;">
        Before we continue, what's your name?
      </p>
      
      <form id="nameForm" class="name-input-group">
        <label for="nameInput">Your first name</label>
        <input 
          type="text" 
          id="nameInput" 
          name="name"
          placeholder="Enter your name"
          required
          autocomplete="given-name"
          autofocus
        >
        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1.5rem;">
          Continue
        </button>
      </form>
    </div>
  `;
  
  // Handle form submission
  document.getElementById('nameForm').addEventListener('submit', (e) => {
    e.preventDefault();
    userName = document.getElementById('nameInput').value.trim();
    if (userName) {
      // Only save to localStorage if not in demo mode
      const params = new URLSearchParams(window.location.search);
      const token = params.get('t');
      if (token !== 'demo') {
        localStorage.setItem('seenCardName', userName);
      }
      showGreeting();
    }
  });
}

// Step 2: Personalized Greeting
function showGreeting() {
  currentStage = 'greet';
  
  document.getElementById('cardContent').innerHTML = `
    <div class="card-panel">
      <img src="images/logo-icon-only.png" alt="The Carpenter" style="height: 60px; width: auto; margin: 0 auto 1.5rem; display: block;">
      
      <h1>${userName}, you are seen and loved.</h1>
      
      <div class="verse-pill">
        <span>${V.HEB_6_10.text}</span>
        <span class="verse-pill-ref">${V.HEB_6_10.ref}</span>
      </div>
      
      <p style="line-height: 1.75; margin-bottom: 1.5rem; text-align: center; font-size: 1.05rem;">
        Your work—today, right where you are—matters to God. He sees faithfulness in things seen and unseen, and none of it is wasted. <span class="scripture-refs">(${V.HEB_6_10.ref}; ${V.COR_15_58.ref})</span>
      </p>
      
      <div class="path-cards">
        <!-- Exploring Faith -->
        <div class="path-card">
          <h3>I'm exploring faith</h3>
          <ul>
            <li>
              God made you to know Him and reflect Him in all of life—including work. 
              <span class="scripture-refs">(${V.GEN_1_26_28.ref}; ${V.COR_10_31.ref})</span>
            </li>
            <li>
              Sin broke our relationship with God and bent our work toward toil. 
              <span class="scripture-refs">(${V.GEN_3_17_19.ref}; ${V.ROM_8_20_22.ref})</span>
            </li>
            <li>
              Jesus lived, died, and rose so sinners are saved by grace through faith—not by our works. 
              <span class="scripture-refs">(${V.EPH_2_8_10.ref}; ${V.ROM_10_9_10.ref})</span>
            </li>
          </ul>
          <a href="gospel.html" class="btn btn-primary" style="width: 100%; display: block; text-align: center;">
            Learn More
          </a>
          <p style="font-size: 0.8rem; margin-top: 1rem; opacity: 0.7; text-align: center;">
            We cite Scripture (ESV) so you can test every claim.
          </p>
        </div>
        
        <!-- I'm a Christian -->
        <div class="path-card">
          <h3>I'm a Christian</h3>
          <ul>
            <li>
              Work as worship: do your job "as for the Lord." 
              <span class="scripture-refs">(${V.COL_3_23_24.ref})</span>
            </li>
            <li>
              Integrity and diligence in a lawful calling serve neighbor and honor God. 
              <span class="scripture-refs">(${V.THES_4_11_12.ref}; Prov 11:1)</span>
            </li>
            <li>
              Your labor in the Lord is not in vain. 
              <span class="scripture-refs">(${V.COR_15_58.ref})</span>
            </li>
          </ul>
          <a href="work.html" class="btn btn-primary" style="width: 100%; display: block; text-align: center; margin-bottom: 0.75rem;">
            Why Work Matters
          </a>
          <a href="tools.html" class="text-link" style="display: block; text-align: center; font-size: 0.9rem;">
            Prayers & Tools →
          </a>
        </div>
      </div>
      
      <!-- Why did I get this card? -->
      <details style="margin: 2rem 0; background: var(--linen); padding: 1.5rem; border-radius: 8px;">
        <summary style="cursor: pointer; font-weight: 600; color: var(--navy);">
          Why did I get this card?
        </summary>
        <p style="margin-top: 1rem; line-height: 1.7; font-size: 0.95rem;">
          Someone left this for you as a quiet act of love—to remind you that your work matters to God and that you are seen. We're called to let our light shine through good works, and to encourage one another. <span class="scripture-refs">(${V.MATT_5_16.ref}; ${V.HEB_6_10.ref})</span>
        </p>
      </details>
      
      <!-- Prayer Request -->
      <div class="prayer-band">
        <h3 style="margin-bottom: 1rem; font-size: 1.25rem;">Would you like us to pray for you?</h3>
        <p style="opacity: 0.9; margin-bottom: 1.5rem; font-size: 0.95rem;">
          If you want someone to pray for you, you can share a request. We won't sell your data; we'll simply pray. <span class="scripture-refs" style="opacity: 0.8;">(${V.TIM_2_1_3.ref})</span>
        </p>
        
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfgsoYCw8L-kYlGC1YzpptwHpKJg31y2SmZ4KmH7hk6C_tFrA/viewform?usp=sharing&ouid=101582787600466197691" target="_blank" class="btn" style="background: var(--gold); color: var(--navy); width: 100%; margin-top: 1.5rem;">
          Submit Prayer Request
        </a>
        
        <div id="prayerConfirmation" class="hidden" style="background: rgba(250, 246, 239, 0.2); padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
          <p>Thank you. We'll be praying for you.</p>
        </div>
      </div>
      
      <p style="text-align: center; margin-top: 2rem; color: var(--olive); font-style: italic;">
        Grace and peace to you today. <span class="scripture-refs">(${V.ROM_15_13.ref})</span>
      </p>
    </div>
  `;
  
  // Prayer form now uses Google Forms - no JavaScript needed
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  validateToken();
});

