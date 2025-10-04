// Launch guard - redirects to countdown ONLY until first launch (6PM CST on launch day)
(function() {
  // The launch date and time - once this passes, the site is permanently accessible
  const LAUNCH_DATE = '2025-10-04'; // YYYY-MM-DD format
  const LAUNCH_TIME = 18; // 6 PM CST (18:00)
  
  function isAfterLaunch() {
    const now = new Date();
    
    // Create launch time for October 4, 2025 at 6:00 PM CDT (Central Daylight Time)
    // 6PM CDT = 11PM UTC same day
    const launchDateTime = new Date('2025-10-04T23:00:00.000Z');
    
    // If current time is after the launch date/time, site is permanently accessible
    return now >= launchDateTime;
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
    
    // Don't redirect if there's a specific bypass parameter
    if (window.location.search.includes('bypass=true')) {
      return false;
    }
    
    // Redirect to countdown page
    return true;
  }

  // Check if we should redirect
  if (shouldRedirect()) {
    window.location.href = 'launch-countdown.html';
  }
})();
