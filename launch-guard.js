// Launch guard - redirects to countdown until launch, then to intro sequence
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

  function hasSeenIntro() {
    // Check if user has seen the intro sequence
    return localStorage.getItem('tc:intro-seen') === 'true';
  }

  function shouldRedirect() {
    // If before launch, redirect to countdown
    if (!isAfterLaunch()) {
      // Don't redirect if we're already on the countdown page
      if (window.location.pathname.includes('launch-countdown.html')) {
        return false;
      }
      // Don't redirect if there's a specific bypass parameter
      if (window.location.search.includes('bypass=true')) {
        return false;
      }
      // Redirect to countdown page
      return { redirect: true, page: 'launch-countdown.html' };
    }
    
    // If after launch, check if they need to see intro
    if (isAfterLaunch()) {
      // Don't redirect if we're already on the intro page
      if (window.location.pathname.includes('intro-sequence.html')) {
        return false;
      }
      // Don't redirect if they've seen the intro
      if (hasSeenIntro()) {
        return false;
      }
      // Don't redirect if there's a specific bypass parameter
      if (window.location.search.includes('bypass=true')) {
        return false;
      }
      // Redirect to intro sequence
      return { redirect: true, page: 'intro-sequence.html' };
    }
    
    return false;
  }

  // Check if we should redirect
  const redirectInfo = shouldRedirect();
  if (redirectInfo && redirectInfo.redirect) {
    window.location.href = redirectInfo.page;
  }
})();
