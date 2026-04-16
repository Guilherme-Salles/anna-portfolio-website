/**
 * Generates a tiny base64-encoded SVG as a blur placeholder for external images.
 * Used with next/image placeholder="blur" on Behance CDN covers.
 */
export function getBlurDataURL(color = "#d8b4fe"): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect fill="${color}"/></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`
}
