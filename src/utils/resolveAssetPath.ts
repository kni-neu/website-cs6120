/**
 * Resolves an asset path by using the current document's directory path.
 * This ensures that assets are resolved correctly from the /public folder.
 * 
 * @param path The path relative to the public folder (e.g., "pdfs/lab-1.pdf")
 */
export function resolveAssetPath(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("blob:") || path.startsWith("data:")) {
    return path;
  }

  // Ensure it starts with a leading slash and is resolved from root
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  
  // Note: We no longer check a hashed asset map because we want to use 
  // the original files in the /public directory as requested.
  
  return cleanPath;
}
