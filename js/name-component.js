// Name component for injecting personalized names
window.NameComponent = (function() {
  function NameComponent(fallback = 'friend', casing = 'title') {
    this.fallback = fallback;
    this.casing = casing;
    this.element = null;
    this.listener = null;
  }

  NameComponent.prototype.render = function() {
    const name = window.PersonalizeUtils.getCurrentName();
    let displayName = name || this.fallback;
    
    if (this.casing === 'title') {
      displayName = window.PersonalizeUtils.titleCase(displayName);
    } else if (this.casing === 'upper') {
      displayName = displayName.toUpperCase();
    } else if (this.casing === 'lower') {
      displayName = displayName.toLowerCase();
    }
    
    return displayName;
  };

  NameComponent.prototype.attach = function(element) {
    this.element = element;
    this.update();
    
    // Listen for name changes
    this.listener = window.PersonalizeUtils.addNameListener(() => {
      this.update();
    });
  };

  NameComponent.prototype.update = function() {
    if (this.element) {
      this.element.textContent = this.render();
    }
  };

  NameComponent.prototype.detach = function() {
    if (this.listener) {
      this.listener();
      this.listener = null;
    }
    this.element = null;
  };

  // Helper function to create and attach name components
  function attachNameComponent(selector, fallback = 'friend', casing = 'title') {
    const elements = document.querySelectorAll(selector);
    const components = [];
    
    elements.forEach(element => {
      const component = new NameComponent(fallback, casing);
      component.attach(element);
      components.push(component);
    });
    
    return components;
  }

  // Helper function to replace placeholders in text content
  function updateNamePlaceholders(fallback = 'friend') {
    const elements = document.querySelectorAll('[data-name-placeholder]');
    
    elements.forEach(element => {
      const template = element.getAttribute('data-name-placeholder');
      const name = window.PersonalizeUtils.getCurrentName();
      const displayName = name ? window.PersonalizeUtils.titleCase(name) : fallback;
      element.textContent = template.replace('{name}', displayName);
    });
  }

  return {
    NameComponent,
    attachNameComponent,
    updateNamePlaceholders
  };
})();
