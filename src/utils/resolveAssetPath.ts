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
  // We use absolute-style paths (starting with base or /) to be safe across different URL depths
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  // If base exists (like /cs6120f26), return /cs6120f26/images/photo.jpg
  if (base) {
    return `${base}/${cleanPath}`;
  }
  
  // Otherwise return /images/photo.jpg
  return `/${cleanPath}`;
}
