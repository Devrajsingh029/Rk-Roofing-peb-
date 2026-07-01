const fs = require('fs');
const js = fs.readFileSync('projects-generator.js', 'utf8');

// Find all matches for title or name in the projects array if it exists
const titleRegex = /title:\s*['"`](.*?)['"`]/g;
let match;
console.log("=== PROJECT TITLES IN PROJECTS-GENERATOR.JS ===");
const titles = [];
while ((match = titleRegex.exec(js)) !== null) {
  titles.push(match[1]);
}
console.log(titles);

// Print first 200 lines of projects-generator.js
console.log("=== FIRST 100 LINES OF PROJECTS-GENERATOR.JS ===");
console.log(js.split('\n').slice(0, 100).join('\n'));
