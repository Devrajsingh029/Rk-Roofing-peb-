import fs from 'fs';
let content = fs.readFileSync('services.html', 'utf8');
content = content.replace(/<ul class="svc-list">[\s\S]*?<\/ul>/g, '');
fs.writeFileSync('services.html', content, 'utf8');
console.log('Removed svc-list from services.html');
