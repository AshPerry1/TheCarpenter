// Launch guard - redirects to countdown if before launch time
(function() {
  function isLaunchTime() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const launchTime = new Date(today.getTime() + 18 * 60 * 60 * 1000); // 6 PM CST (18:00)
    
    return now >= launchTime;
  }

  function shouldRedirect() {
    // Don't redirect if we're already on the countdown page
    if (window.location.pathname.includes('launch-countdown.html')) {
      return false;
    }
    
    // Don't redirect if it's launch time
    if (isLaunchTime()) {
      return false;
    }
    
    // Don't redirect if there's a specific bypass parameter
    if (window.location.search.includes('bypass=true')) {
      return false;
    }
    
    return true;
  }

  // Check if we should redirect
  if (shouldRedirect()) {
    window.location.href = 'launch-countdown.html';
  }
})();
