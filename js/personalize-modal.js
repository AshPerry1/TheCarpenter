// Personalization modal for collecting visitor names
import { setName, getCurrentName } from './personalize.js';

export class PersonalizeModal {
  constructor() {
    this.modal = null;
    this.input = null;
    this.isOpen = false;
    this.init();
  }

  init() {
    // Check if we need to show the modal
    if (!getCurrentName()) {
      this.show();
    }
  }

  createModal() {
    const modal = document.createElement('div');
    modal.className = 'personalize-modal';
    modal.innerHTML = `
      <div class="personalize-modal-overlay">
        <div class="personalize-modal-content" role="dialog" aria-modal="true" aria-labelledby="pg-title">
          <h2 id="pg-title" class="personalize-modal-title">Welcome</h2>
          <p class="personalize-modal-description">Tell us your first name so we can personalize your experience.</p>
          <form class="personalize-modal-form">
            <input 
              type="text" 
              class="personalize-modal-input" 
              placeholder="First name"
              aria-label="Your first name"
              maxlength="40"
            />
            <div class="personalize-modal-buttons">
              <button type="button" class="personalize-modal-skip">Skip</button>
              <button type="submit" class="personalize-modal-continue">Continue</button>
            </div>
          </form>
          <p class="personalize-modal-privacy">Your name is saved only on your device to personalize this site.</p>
        </div>
      </div>
    `;

    // Add styles
    const styles = `
      <style>
        .personalize-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 0, 0, 0.5);
        }
        
        .personalize-modal-overlay {
          width: 92%;
          max-width: 520px;
          background: var(--linen, #FAF6EF);
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border: 1px solid #E7E2D8;
        }
        
        .personalize-modal-title {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: var(--navy, #0B1E2D);
          margin: 0 0 0.5rem 0;
          font-weight: 600;
        }
        
        .personalize-modal-description {
          color: var(--graphite, #2E2E2E);
          margin: 0 0 1.5rem 0;
          line-height: 1.5;
        }
        
        .personalize-modal-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #DDD8CC;
          border-radius: 8px;
          font-size: 1rem;
          margin-bottom: 1rem;
          background: white;
        }
        
        .personalize-modal-input:focus {
          outline: 2px solid var(--gold, #C9A227);
          outline-offset: 2px;
          border-color: var(--gold, #C9A227);
        }
        
        .personalize-modal-buttons {
          display: flex;
          gap: 0.5rem;
          justify-content: flex-end;
        }
        
        .personalize-modal-skip,
        .personalize-modal-continue {
          padding: 0.75rem 1.5rem;
          border-radius: 8px;
          border: 1px solid #DDD8CC;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .personalize-modal-skip {
          background: white;
          color: var(--graphite, #2E2E2E);
        }
        
        .personalize-modal-skip:hover {
          background: #f5f5f5;
        }
        
        .personalize-modal-continue {
          background: var(--navy, #0B1E2D);
          color: white;
          border-color: var(--navy, #0B1E2D);
        }
        
        .personalize-modal-continue:hover {
          background: var(--gold, #C9A227);
          color: var(--navy, #0B1E2D);
          border-color: var(--gold, #C9A227);
        }
        
        .personalize-modal-privacy {
          font-size: 0.75rem;
          color: #6b6b6b;
          margin: 1rem 0 0 0;
          text-align: center;
        }
        
        @media (max-width: 640px) {
          .personalize-modal-overlay {
            width: 95%;
            padding: 1.5rem;
          }
          
          .personalize-modal-title {
            font-size: 1.75rem;
          }
        }
      </style>
    `;

    document.head.insertAdjacentHTML('beforeend', styles);
    return modal;
  }

  show() {
    if (this.isOpen) return;
    
    this.modal = this.createModal();
    document.body.appendChild(this.modal);
    this.input = this.modal.querySelector('.personalize-modal-input');
    this.isOpen = true;
    
    // Focus the input
    setTimeout(() => this.input?.focus(), 100);
    
    // Add event listeners
    this.attachEventListeners();
    
    // Trap focus within modal
    this.trapFocus();
  }

  hide() {
    if (!this.isOpen || !this.modal) return;
    
    document.body.removeChild(this.modal);
    this.modal = null;
    this.input = null;
    this.isOpen = false;
  }

  attachEventListeners() {
    if (!this.modal) return;

    const form = this.modal.querySelector('.personalize-modal-form');
    const skipBtn = this.modal.querySelector('.personalize-modal-skip');
    
    // Form submission
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = this.input.value.trim();
      if (name) {
        setName(name);
        this.hide();
      }
    });
    
    // Skip button
    skipBtn.addEventListener('click', () => {
      this.hide();
    });
    
    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.hide();
      }
    });
    
    // Click outside to close
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.hide();
      }
    });
  }

  trapFocus() {
    if (!this.modal) return;
    
    const focusableElements = this.modal.querySelectorAll(
      'input, button, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    this.modal.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    });
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new PersonalizeModal();
  });
} else {
  new PersonalizeModal();
}
