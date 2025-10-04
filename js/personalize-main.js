// Main personalization system initialization
import { getCurrentName, addNameListener } from './personalize.js';
import { attachNameComponent, updateNamePlaceholders } from './name-component.js';
import { attachNameEdit } from './name-edit.js';

class PersonalizationSystem {
  constructor() {
    this.nameComponents = [];
    this.nameEditComponent = null;
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
    
    this.initialized = true;
  }

  setup() {
    // Attach name components to elements with data-name attributes
    this.attachNameComponents();
    
    // Update placeholder elements
    this.updatePlaceholders();
    
    // Attach name edit component if container exists
    this.attachNameEdit();
    
    // Listen for name changes to update all components
    addNameListener(() => {
      this.updateAll();
    });
  }

  attachNameComponents() {
    // Look for elements with data-name attributes
    const nameElements = document.querySelectorAll('[data-name]');
    
    nameElements.forEach(element => {
      const fallback = element.getAttribute('data-name-fallback') || 'friend';
      const casing = element.getAttribute('data-name-casing') || 'title';
      
      const component = new (await import('./name-component.js')).NameComponent(fallback, casing);
      component.attach(element);
      this.nameComponents.push(component);
    });
  }

  updatePlaceholders() {
    updateNamePlaceholders('friend');
  }

  attachNameEdit() {
    const editContainer = document.querySelector('[data-name-edit]');
    if (editContainer) {
      this.nameEditComponent = attachNameEdit('[data-name-edit]');
    }
  }

  updateAll() {
    // Update all name components
    this.nameComponents.forEach(component => {
      component.update();
    });
    
    // Update placeholders
    this.updatePlaceholders();
  }

  // Public method to manually trigger updates
  refresh() {
    this.updateAll();
  }
}

// Initialize the personalization system
const personalizationSystem = new PersonalizationSystem();
personalizationSystem.init();

// Export for manual use if needed
window.PersonalizationSystem = personalizationSystem;
