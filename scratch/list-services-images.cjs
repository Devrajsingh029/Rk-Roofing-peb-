const fs = require('fs');
const html = fs.readFileSync('services.html', 'utf8');

// Find all image tags and print their attributes
const imgRegex = /<img[^>]+src="([^"]+)"[^>]*>/g;
let match;
console.log("=== IMAGES IN SERVICES.HTML ===");
while ((match = imgRegex.exec(html)) !== null) {
  console.log(match[0]);
}

// Find all headings
const hRegex = /<h[23][^>]*>(.*?)<\/h[23]>/g;
console.log("=== HEADINGS IN SERVICES.HTML ===");
while ((match = hRegex.exec(html)) !== null) {
  console.log(match[0]);
}
