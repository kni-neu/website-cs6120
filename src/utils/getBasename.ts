/**
 * Dynamically detects the base URL segment for the application.
 * This is useful for hosting on GitHub Pages in a subdirectory.
 * 
 * Example: if hosted at /cs6120-website/, it returns /cs6120-website.
 * If hosted at the root, it returns an empty string.
 */
export function getDynamicBasename() {
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  
  // Known top-level routes in our app
  const appRoutes = ['schedule', 'assignments', 'personnel', 'syllabus'];
  
  // If we have segments and the first one is NOT a known route, 
  // it's likely the subfolder/basename (e.g., /cs6120f26/)
  if (pathSegments.length > 0 && !appRoutes.includes(pathSegments[0].toLowerCase())) {
    return `/${pathSegments[0]}`;
  }
  
  return '';
}
