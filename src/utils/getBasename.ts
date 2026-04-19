/**
 * Dynamically detects the base URL segment for the application.
 * This is useful for hosting on GitHub Pages in a subdirectory.
 * 
 * Example: if hosted at /cs6120-website/, it returns /cs6120-website.
 * If hosted at the root, it returns an empty string.
 */
export function getDynamicBasename() {
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0] || '';
  
  // If the first segment looks like a course folder (e.g., starts with 'cs'), use it as the basename
  // We assume course folders follow a naming convention like 'cs' followed by numbers/text
  if (firstSegment.startsWith('cs')) {
    return `/${firstSegment}`;
  }
  
  return '';
}
