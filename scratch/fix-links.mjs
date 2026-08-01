import fs from 'fs';
import path from 'path';

const linkMap = {
  'services/peb-erection-installation.html': 'peb-construction.html',
  'services/roofing-services.html': 'industrial-roofing-services.html',
  'services/structural-steel-erection.html': 'structural-steel-erection-services.html',
  'services/wall-cladding-services.html': 'cladding-solutions-services.html',
  'services/insulated-panel-services.html': 'cladding-solutions-services.html',
  'services/standing-seam-kalzip-roofing.html': 'industrial-roofing-services.html',
  'services/cold-room-cold-storage-panels.html': 'warehouse-construction-services.html',
  'services/mezzanine-floor-services.html': 'structural-steel-erection-services.html',
  'services/flashing-gutters-downpipes.html': 'industrial-roofing-services.html',
  'services/insulation-skylights.html': 'industrial-roofing-services.html',
  'services/maintenance-repair-services.html': 'contact.html',
  'services/airport-aircraft-hangars.html': 'industrial-infrastructure-solutions.html',
  'services/cold-storage-facilities.html': 'warehouse-construction-services.html'
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === 'dist' || file === '.git' || file === 'scratch') continue;
    
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.html') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const [oldLink, newLink] of Object.entries(linkMap)) {
        if (content.includes(oldLink)) {
          content = content.split(oldLink).join(newLink);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated', fullPath);
      }
    }
  }
}

processDirectory('.');
