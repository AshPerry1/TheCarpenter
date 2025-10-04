// Name editing functionality for header/profile
import { getCurrentName, setName, clearName, addNameListener } from './personalize.js';

export class NameEditComponent {
  constructor(container) {
    this.container = container;
    this.name = getCurrentName();
    this.listener = null;
    this.init();
  }

  init() {
    this.render();
    this.attachEventListeners();
    
    // Listen for name changes
    this.listener = addNameListener((newName) => {
      this.name = newName;
      this.render();
    });
  }

  render() {
    const displayName = this.name || 'friend';
    
    this.container.innerHTML = `
      <div class="name-edit-component">
        <span class="name-display">Hello, ${displayName}</span>
        <button class="name-edit-btn" aria-label="Edit your name">edit</button>
        <button class="name-clear-btn" aria-label="Clear your name">clear</button>
      </div>
      <style>
        .name-edit-component {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          color: var(--linen, #FAF6EF);
        }
        
        .name-display {
          font-weight: 500;
        }
        
        .name-edit-btn,
        .name-clear-btn {
          background: none;
          border: none;
          color: var(--linen, #FAF6EF);
          text-decoration: underline;
          cursor: pointer;
          font-size: 0.875rem;
          padding: 0;
          transition: color 0.2s;
        }
        
        .name-edit-btn:hover,
        .name-clear-btn:hover {
          color: var(--gold, #C9A227);
        }
        
        .name-clear-btn {
          opacity: 0.7;
        }
        
        @media (max-width: 768px) {
          .name-edit-component {
            font-size: 0.8rem;
          }
        }
      </style>
    `;
  }

  attachEventListeners() {
    const editBtn = this.container.querySelector('.name-edit-btn');
    const clearBtn = this.container.querySelector('.name-clear-btn');
    
    editBtn.addEventListener('click', () => {
      this.editName();
    });
    
    clearBtn.addEventListener('click', () => {
      this.clearName();
    });
  }

  editName() {
    const newName = prompt('Edit your first name:', this.name || '');
    if (newName !== null) {
      setName(newName);
    }
  }

  clearName() {
    if (confirm('Clear your saved name?')) {
      clearName();
    }
  }

  destroy() {
    if (this.listener) {
      this.listener();
    }
    this.container.innerHTML = '';
  }
}

// Helper function to attach name edit to a container
export function attachNameEdit(selector) {
  const container = document.querySelector(selector);
  if (container) {
    return new NameEditComponent(container);
  }
  return null;
}
