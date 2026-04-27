import { getDynamicBasename } from "./getBasename";

/**
 * Resolves an asset path by using the current document's directory path.
 * This ensures that assets in the /public folder (like images/PDFs) are resolved 
 * correctly regardless of whether the app is at the root or in a subfolder.
 * 
 * @param path The path relative to the public folder (e.g., "pdfs/lab-1.pdf")
 */
export function resolveAssetPath(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("blob:") || path.startsWith("data:")) {
    return path;
  }

  // Ensure we don't have a leading slash for relative resolution
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  // Resolve relative paths using dynamic basename for subdirectories
  // getDynamicBasename() returns something like "/cs6120f26"
  const basename = getDynamicBasename();
  
  // Construct absolute path from root
  // E.g., /cs6120f26/pdfs/lab-1.pdf
  return `${basename}/${cleanPath}`.replace(/\/+/g, "/");
}
