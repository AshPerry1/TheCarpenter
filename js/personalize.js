// Personalization utility library
const KEY = 'tc:name';

export function getStoredName() {
  if (typeof window === 'undefined') return null;
  try { 
    return (localStorage.getItem(KEY) || '').trim() || null; 
  } catch { 
    return null; 
  }
}

export function setStoredName(name) {
  if (typeof window === 'undefined') return;
  try { 
    localStorage.setItem(KEY, sanitize(name)); 
  } catch {}
}

export function clearStoredName() {
  if (typeof window === 'undefined') return;
  try { 
    localStorage.removeItem(KEY); 
  } catch {}
}

export function sanitize(name) {
  return name.replace(/[<>]/g, '').slice(0, 40).trim();
}

export function titleCase(s) {
  return s.replace(/\s+/g, ' ')
    .split(' ')
    .map(w => w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : '')
    .join(' ')
    .trim();
}

// Simple placeholder replacement for static copy blocks
export function injectPlaceholders(text, name, fallback = 'friend') {
  const n = name ? titleCase(name) : fallback;
  return text.replace(/\{name\}/g, n);
}

// Global name state management
let currentName = null;
let listeners = [];

export function getCurrentName() {
  return currentName;
}

export function setName(name) {
  const sanitizedName = sanitize(name);
  setStoredName(sanitizedName);
  currentName = sanitizedName;
  notifyListeners();
}

export function clearName() {
  clearStoredName();
  currentName = null;
  notifyListeners();
}

export function addNameListener(callback) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter(l => l !== callback);
  };
}

function notifyListeners() {
  listeners.forEach(callback => callback(currentName));
}

// Initialize name from localStorage on load
if (typeof window !== 'undefined') {
  currentName = getStoredName();
}
