const fs = require('fs');
const html = fs.readFileSync('projects.html', 'utf8');

// Find all headings
const hRegex = /<h[23][^>]*>(.*?)<\/h[23]>/g;
let match;
console.log("=== HEADINGS IN PROJECTS.HTML ===");
while ((match = hRegex.exec(html)) !== null) {
  console.log(match[0]);
}

// Find all links to project details
const linkRegex = /href="projects\/([^"]+)"/g;
console.log("=== PROJECT DETAIL LINKS ===");
const links = new Set();
while ((match = linkRegex.exec(html)) !== null) {
  links.add(match[1]);
}
console.log(Array.from(links));
