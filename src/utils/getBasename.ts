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
  
  // Clean segments and find the first known route
  const appRoutes = ['schedule', 'assignments', 'personnel', 'syllabus'];
  const routeIndex = pathSegments.findIndex(segment => 
    appRoutes.includes(segment.toLowerCase())
  );

  // If a route is found at index > 0, the leading segments are the basename
  if (routeIndex > 0) {
    const detected = '/' + pathSegments.slice(0, routeIndex).join('/');
    console.log(`[Router] Detected basename: ${detected}`);
    return detected;
  }
  
  // Special case for your specific folder if it looks like a course subdirectory
  // Matches segments like /cs6120, /cs6120f26, etc.
  if (pathSegments.length > 0 && pathSegments[0].toLowerCase().startsWith('cs6')) {
    const detected = `/${pathSegments[0]}`;
    console.log(`[Router] Detected course basename: ${detected}`);
    return detected;
  }
  
  console.log(`[Router] Using root basename ("")`);
  return '';
}
