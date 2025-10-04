// Name component for injecting personalized names
import { getCurrentName, addNameListener, titleCase } from './personalize.js';

export class NameComponent {
  constructor(fallback = 'friend', casing = 'title') {
    this.fallback = fallback;
    this.casing = casing;
    this.element = null;
    this.listener = null;
  }

  render() {
    const name = getCurrentName();
    let displayName = name || this.fallback;
    
    if (this.casing === 'title') {
      displayName = titleCase(displayName);
    } else if (this.casing === 'upper') {
      displayName = displayName.toUpperCase();
    } else if (this.casing === 'lower') {
      displayName = displayName.toLowerCase();
    }
    
    return displayName;
  }

  attach(element) {
    this.element = element;
    this.update();
    
    // Listen for name changes
    this.listener = addNameListener(() => {
      this.update();
    });
  }

  update() {
    if (this.element) {
      this.element.textContent = this.render();
    }
  }

  detach() {
    if (this.listener) {
      this.listener();
      this.listener = null;
    }
    this.element = null;
  }
}

// Helper function to create and attach name components
export function attachNameComponent(selector, fallback = 'friend', casing = 'title') {
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
export function updateNamePlaceholders(fallback = 'friend') {
  const elements = document.querySelectorAll('[data-name-placeholder]');
  
  elements.forEach(element => {
    const template = element.getAttribute('data-name-placeholder');
    const name = getCurrentName();
    const displayName = name ? titleCase(name) : fallback;
    element.textContent = template.replace('{name}', displayName);
  });
}
