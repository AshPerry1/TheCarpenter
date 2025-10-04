// Personalization utility library
window.PersonalizeUtils = (function() {
  const KEY = 'tc:name';
  let currentName = null;
  let listeners = [];

  function getStoredName() {
    if (typeof window === 'undefined') return null;
    try { 
      return (localStorage.getItem(KEY) || '').trim() || null; 
    } catch { 
      return null; 
    }
  }

  function setStoredName(name) {
    if (typeof window === 'undefined') return;
    try { 
      localStorage.setItem(KEY, sanitize(name)); 
    } catch {}
  }

  function clearStoredName() {
    if (typeof window === 'undefined') return;
    try { 
      localStorage.removeItem(KEY); 
    } catch {}
  }

  function sanitize(name) {
    return name.replace(/[<>]/g, '').slice(0, 40).trim();
  }

  function titleCase(s) {
    return s.replace(/\s+/g, ' ')
      .split(' ')
      .map(w => w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : '')
      .join(' ')
      .trim();
  }

  function injectPlaceholders(text, name, fallback = 'friend') {
    const n = name ? titleCase(name) : fallback;
    return text.replace(/\{name\}/g, n);
  }

  function getCurrentName() {
    return currentName;
  }

  function setName(name) {
    const sanitizedName = sanitize(name);
    setStoredName(sanitizedName);
    currentName = sanitizedName;
    notifyListeners();
  }

  function clearName() {
    clearStoredName();
    currentName = null;
    notifyListeners();
  }

  function addNameListener(callback) {
    listeners.push(callback);
    return function() {
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

  return {
    getStoredName,
    setStoredName,
    clearStoredName,
    sanitize,
    titleCase,
    injectPlaceholders,
    getCurrentName,
    setName,
    clearName,
    addNameListener
  };
})();
