// This file uses Vite's glob import to automatically pick up all assets
// in the pdfs and images directories. This ensures they are processed by
// Vite and included in the production build with content-based hashes.

// @ts-ignore
const pdfs = import.meta.glob('./pdfs/*.pdf', { eager: true, as: 'url' });
// @ts-ignore
const images = import.meta.glob('./images/*.{png,jpg,jpeg,svg,webp}', { eager: true, as: 'url' });

export const assetMap: Record<string, string> = {};

// Process PDFs
for (const path in pdfs) {
  // path is like "./pdfs/lab-1.pdf"
  const cleanKey = path.startsWith('./') ? path.substring(2) : path;
  assetMap[cleanKey] = (pdfs[path] as any).default || pdfs[path];
}

// Process Images
for (const path in images) {
  // path is like "./images/photo.jpg"
  const cleanKey = path.startsWith('./') ? path.substring(2) : path;
  assetMap[cleanKey] = (images[path] as any).default || images[path];
}
