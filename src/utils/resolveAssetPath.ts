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
  // Returning a relative path (e.g. "images/photo.jpg") is most robust for 
  // HashRouter deployments in subfolders, as it resolves relative to index.html.
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  return cleanPath;
}
