import { getDynamicBasename } from "./getBasename";

/**
 * Resolves an asset path by using the current document's directory path.
 * This ensures that assets in the /public folder (like images) are resolved 
 * correctly regardless of whether the app is at the root or in a subfolder.
 * 
 * @param path The path relative to the public folder (e.g., "images/photo.jpg")
 */
export function resolveAssetPath(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("blob:") || path.startsWith("data:")) {
    return path;
  }

  // Ensure we don't have a leading slash for relative resolution
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  // Map old 'images/' path to our new 'assets/img/' structure
  // This helps match the server's preferred folder structure (like cs6120f25)
  let resolvedPath = cleanPath;
  if (cleanPath.startsWith("images/")) {
    resolvedPath = "assets/img/" + cleanPath.substring(7);
  }
  
  // Get the basename (e.g., /cs6120f26)
  const basename = getDynamicBasename();
  
  // Construct absolute path from root
  // E.g., /cs6120f26/assets/img/photo.jpg
  return `${basename}/${resolvedPath}`.replace(/\/+/g, "/");
}
