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

  // Extract the directory part of the pathname
  // For /cs6120f26/index.html -> /cs6120f26
  // For /~user/course/ -> /~user/course
  let base = pathname;
  
  // Remove trailing slash for consistency
  if (base.endsWith('/')) {
    base = base.slice(0, -1);
  }
  
  // If the last segment has a dot, it's likely a file (like index.html), so remove it
  const lastSlashIndex = base.lastIndexOf('/');
  const lastSegment = base.substring(lastSlashIndex + 1);
  if (lastSegment.includes('.')) {
    base = base.substring(0, lastSlashIndex);
  }

  return base;
}
