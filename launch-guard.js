// Launch guard - redirects to countdown ONLY until first launch (6PM CST on launch day)
(function() {
  // The launch date - once this date passes, the site is permanently accessible
  const LAUNCH_DATE = '2025-10-04'; // YYYY-MM-DD format (today)
  const LAUNCH_TIME = 18; // 6 PM CST (18:00)
  
  function isAfterLaunch() {
    const now = new Date();
    // Create launch time in local timezone (assuming server is in CST)
    const launchDateTime = new Date(LAUNCH_DATE + 'T' + LAUNCH_TIME + ':00:00');
    
    // If current time is after the launch date/time, site is permanently accessible
    return now >= launchDateTime;
  }

  function isLaunchTime() {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const launchTime = new Date(today.getTime() + 18 * 60 * 60 * 1000); // 6 PM CST (18:00)
    
    return now >= launchTime;
  }

  function shouldRedirect() {
    // NEVER redirect if we're already past the launch date
    if (isAfterLaunch()) {
      return false;
    }
    
    // Don't redirect if we're already on the countdown page
    if (window.location.pathname.includes('launch-countdown.html')) {
      return false;
    }
    
    // Don't redirect if it's launch time on launch day
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
