/**
 * Dynamically detects the base URL segment for the application.
 * This is useful for hosting on GitHub Pages in a subdirectory.
 * 
 * Example: if hosted at /cs6120-website/, it returns /cs6120-website.
 * If hosted at the root, it returns an empty string.
 */
export function getDynamicBasename() {
  const path = window.location.pathname;
  const pathSegments = path.split('/').filter(Boolean);
  
  // Known top-level routes in our app
  const appRoutes = ['schedule', 'assignments', 'personnel', 'syllabus'];
  
  // Find the index of the first segment that is an app route
  const routeIndex = pathSegments.findIndex(segment => 
    appRoutes.includes(segment.toLowerCase())
  );

  // If we found an app route (like /assignments) at index 1, 
  // index 0 is the basename (e.g., /cs6120f26/)
  if (routeIndex > 0) {
    const detected = '/' + pathSegments.slice(0, routeIndex).join('/');
    console.log(`[Router] Detected basename from route: ${detected}`);
    return detected;
  }
  
  // If we have segments but none are app routes, the first segment might be the basename
  if (pathSegments.length > 0 && routeIndex === -1) {
    // Only return if it doesn't look like a direct file access
    if (!pathSegments[0].includes('.')) {
      const detected = `/${pathSegments[0]}`;
      console.log(`[Router] Detected basename from path: ${detected}`);
      return detected;
    }
  }
  
  console.log(`[Router] Using root basename ("")`);
  return '';
}
