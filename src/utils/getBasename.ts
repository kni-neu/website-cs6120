/**
 * Dynamically detects the base URL segment for the application.
 * This is useful for hosting on GitHub Pages in a subdirectory.
 * 
 * Example: if hosted at /cs6120-website/, it returns /cs6120-website.
 * If hosted at the root, it returns an empty string.
 */
export function getDynamicBasename() {
  const path = window.location.pathname;
  
  // For index.html, we want the directory it is in
  if (path.endsWith('/index.html')) {
    const base = path.replace('/index.html', '');
    return base === '/' ? '' : base;
  }
  
  // If it's a directory path like /cs6120/, return /cs6120
  if (path.endsWith('/')) {
    const base = path.slice(0, -1);
    return base === '/' ? '' : base;
  }

  // If it's a root path or anything else, return as is (but handle root correctly)
  return path === '/' ? '' : path;
}
