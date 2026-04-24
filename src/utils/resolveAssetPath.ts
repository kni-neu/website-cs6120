import { getDynamicBasename } from "./getBasename";

/**
 * Resolves an asset path by prepending the dynamically detected base directory.
 * Use this for images and files in the /public folder.
 * 
 * @param path The path relative to the public folder (e.g., "images/photo.jpg")
 */
export function resolveAssetPath(path: string): string {
  // If it's already a full URL or blob, return as is
  if (path.startsWith("http") || path.startsWith("blob:") || path.startsWith("data:")) {
    return path;
  }

  const base = getDynamicBasename();
  
  // Clean up the input path (remove leading slash if present)
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  // Prepend base to form an absolute path like /cs6120f26/images/photo.jpg
  return `${base}/${cleanPath}`;
}
