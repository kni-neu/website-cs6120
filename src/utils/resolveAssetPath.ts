import { getDynamicBasename } from "./getBasename";

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

  // Ensure we don't have a leading slash for double-slashing issues
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  // Resolve relative paths using dynamic basename for subdirectories (e.g. /cs6120f26)
  const basename = getDynamicBasename();
  
  // Construct absolute path from root
  return `${basename}/${cleanPath}`.replace(/\/+/g, "/");
}
