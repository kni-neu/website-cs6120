import { assetMap } from "../assetMap";
import { getDynamicBasename } from "./getBasename";

/**
 * Resolves an asset path by using the current document's directory path or hashed assets.
 * This ensures that assets are resolved correctly regardless of hosting environment.
 * 
 * @param path The path relative to the public/src folder (e.g., "pdfs/lab-1.pdf")
 */
export function resolveAssetPath(path: string): string {
  if (!path || path.startsWith("http") || path.startsWith("blob:") || path.startsWith("data:")) {
    return path;
  }

  // Ensure we don't have a leading slash for checking the map
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  
  // 1. Check if it's a known hashed asset from Vite (like a PDF or image moved to src)
  if (assetMap[cleanPath]) {
    return assetMap[cleanPath];
  }

  // 2. Otherwise handle it as a public asset
  // Resolve relative paths using dynamic basename for subdirectories
  const basename = getDynamicBasename();
  
  // Construct absolute path from root
  return `${basename}/${cleanPath}`.replace(/\/+/g, "/");
}
