import { defineConfig } from "vite";
import { resolve, extname, basename } from "path";
import { readdirSync, existsSync } from "fs";

const input = {};

// Scan root HTML files
const rootHtmlFiles = readdirSync(__dirname).filter(
  (file) => extname(file) === ".html"
);
for (const file of rootHtmlFiles) {
  const name = basename(file, ".html");
  input[name] = resolve(__dirname, file);
}

// Scan projects/ HTML files if they exist
const projectsDir = resolve(__dirname, "projects");
if (existsSync(projectsDir)) {
  const projectHtmlFiles = readdirSync(projectsDir).filter(
    (file) => extname(file) === ".html"
  );
  for (const file of projectHtmlFiles) {
    const name = `projects/${basename(file, ".html")}`;
    input[name] = resolve(projectsDir, file);
  }
}

// Scan services/ HTML files if they exist
const servicesDir = resolve(__dirname, "services");
if (existsSync(servicesDir)) {
  const serviceHtmlFiles = readdirSync(servicesDir).filter(
    (file) => extname(file) === ".html"
  );
  for (const file of serviceHtmlFiles) {
    const name = `services/${basename(file, ".html")}`;
    input[name] = resolve(servicesDir, file);
  }
}

export default defineConfig({
  root: ".",
  publicDir: false,
  appType: "mpa",
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input,
    },
  },
});


