// Main personalization system initialization
window.PersonalizationSystem = (function() {
  function PersonalizationSystem() {
    this.nameComponents = [];
    this.nameEditComponent = null;
    this.initialized = false;
  }

  PersonalizationSystem.prototype.init = function() {
    if (this.initialized) return;
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
    
    this.initialized = true;
  };

  PersonalizationSystem.prototype.setup = function() {
    // Attach name components to elements with data-name attributes
    this.attachNameComponents();
    
    // Update placeholder elements
    this.updatePlaceholders();
    
    // Attach name edit component if container exists
    this.attachNameEdit();
    
    // Listen for name changes to update all components
    window.PersonalizeUtils.addNameListener(() => {
      this.updateAll();
    });
  };

  PersonalizationSystem.prototype.attachNameComponents = function() {
    // Look for elements with data-name attributes
    const nameElements = document.querySelectorAll('[data-name]');
    
    nameElements.forEach(element => {
      const fallback = element.getAttribute('data-name-fallback') || 'friend';
      const casing = element.getAttribute('data-name-casing') || 'title';
      
      const component = new window.NameComponent.NameComponent(fallback, casing);
      component.attach(element);
      this.nameComponents.push(component);
    });
  };

  PersonalizationSystem.prototype.updatePlaceholders = function() {
    window.NameComponent.updateNamePlaceholders('friend');
  };

  PersonalizationSystem.prototype.attachNameEdit = function() {
    const editContainer = document.querySelector('[data-name-edit]');
    if (editContainer) {
      this.nameEditComponent = window.NameEditComponent.attachNameEdit('[data-name-edit]');
    }
  };

  PersonalizationSystem.prototype.updateAll = function() {
    // Update all name components
    this.nameComponents.forEach(component => {
      component.update();
    });
    
    // Update placeholders
    this.updatePlaceholders();
  };

  // Public method to manually trigger updates
  PersonalizationSystem.prototype.refresh = function() {
    this.updateAll();
  };

  return PersonalizationSystem;
})();

// Initialize the personalization system
const personalizationSystem = new window.PersonalizationSystem();
personalizationSystem.init();
