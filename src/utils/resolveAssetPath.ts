/**
 * Resolves an asset path by using the current document's directory path.
 * This ensures that assets in the /public folder (like images) are resolved 
 * correctly regardless of whether the app is at the root or in a subfolder.
 * 
 * @param path The path relative to the public folder (e.g., "images/photo.jpg")
 */
export function resolveAssetPath(path: string): string {
  // If it's already a full URL or blob, return as is
  if (!path || path.startsWith("http") || path.startsWith("blob:") || path.startsWith("data:")) {
    return path;
  }

  // Clean up the input path (remove leading slash if present)
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  // Find the directory of the current page.
  // For /cs6120f26/index.html, this is /cs6120f26/
  // For /index.html, this is /
  const pathname = window.location.pathname;
  const directory = pathname.substring(0, pathname.lastIndexOf('/') + 1);
  
  // Resolve relative to the directory where index.html is
  // This works perfectly for HashRouter deployments.
  return directory + cleanPath;
}
