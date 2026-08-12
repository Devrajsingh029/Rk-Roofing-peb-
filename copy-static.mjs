// Copies static assets that Vite doesn't process automatically.
// - The entire `assets/` folder (logo, OG image, partner logos, photos)
//   because some are injected dynamically via app.js and aren't seen by Vite.
// - Root-level static files needed by the deployment (favicons, manifest,
//   robots, sitemap, Cloudflare _headers / _redirects).
import { cpSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const dist = resolve(root, "dist");
mkdirSync(dist, { recursive: true });

// Copy the assets directory wholesale into dist/assets, merging with any
// hashed files Vite already emitted. Existing hashed files are kept; the
// raw originals (e.g. assets/logo.png) are added alongside so dynamic
// references like `<img src="assets/logo.png">` from app.js still resolve.
const assetsSrc = resolve(root, "assets");
if (existsSync(assetsSrc)) {
  cpSync(assetsSrc, resolve(dist, "assets"), { recursive: true, force: false });
}

// Root-level files served as-is.
const rootFiles = [
  "favicon.ico",
  "site.webmanifest",
  "robots.txt",
  "sitemap.xml",
  "_headers",
  "_redirects",
  "RK_Roofing_Corporate_Catalogue.pdf",
];
for (const f of rootFiles) {
  const src = resolve(root, f);
  if (existsSync(src)) cpSync(src, resolve(dist, f));
}

console.log("[copy-static] assets/ + root static files copied to dist/");
