/**
 * Dynamically detects the base URL segment for the application.
 * This is useful for hosting on GitHub Pages in a subdirectory.
 * 
 * Example: if hosted at /cs6120-website/, it returns /cs6120-website.
 * If hosted at the root, it returns an empty string.
 */
export function getDynamicBasename() {
  const pathname = window.location.pathname;
  
  // localhost always serves from root
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return '';
  }

  // Handle root path
  if (pathname === '/') {
    return '';
  }

  // Extract base path. For most course sites, researchers, etc., 
  // it is host.com/subfolder/index.html.
  // We want to capture "/subfolder".
  const segments = pathname.split('/').filter(Boolean);
  
  // If the last segment looks like a file name (has a dot), remove it
  if (segments.length > 0 && segments[segments.length - 1].includes('.')) {
    segments.pop();
  }

  // If we are left with nothing, it was root-level file
  if (segments.length === 0) return '';

  // Return the first segment as the base (this is most common for simple subfolder hosting)
  // For course.ccs.neu.edu/cs6120f26/, this returns "/cs6120f26"
  return '/' + segments[0];
}
