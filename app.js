(function(){const ICONS={snowflake:'<path d="m10 20-3-3 3-3"/><path d="m14 20 3-3-3-3"/><path d="M12 22V2"/><path d="m20 10-3-3 3-3"/><path d="m20 14-3 3 3 3"/><path d="M22 12H2"/><path d="m4 10 3-3-3-3"/><path d="m4 14 3 3-3 3"/>',sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>','cloud-rain':'<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',droplet:'<path d="M12 22a5 5 0 0 0 5-5c0-4.4-5-12-5-12s-5 7.6-5 12a5 5 0 0 0 5 5Z"/>',flame:'<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',hammer:'<path d="m15 12-8.373 8.373a1 1 0 1 1-1.414-1.414L13.586 10.586"/><path d="m18 13.4-9-9 1.4-1.4 9 9Z"/><path d="M11.5 5.5a2.5 2.5 0 0 1 3.16-1.5l.84.3L17 5l1.5 1.5-.7 1.5.3.84a2.5 2.5 0 0 1-1.5 3.16Z"/>','arrow-down':'<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',window:'<rect width="16" height="16" x="4" y="4" rx="2"/><path d="M4 12h16"/><path d="M12 4v16"/>',home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',arrow:'<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>',mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',pin:'<path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',check:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',award:'<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',factory:'<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M17 18h1M12 18h1M7 18h1"/>',warehouse:'<path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35z"/><path d="M6 18h12"/><path d="M6 14h12"/><rect x="6" y="10" width="12" height="8"/>',layers:'<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',wrench:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',cog:'<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',truck:'<path d="M5 18H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12"/><path d="M14 9h4l4 4v4a1 1 0 0 1-1 1h-2"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',compass:'<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',sparkles:'<path d="M9.94 14.34 12 22l2.06-7.66L22 12l-7.94-2.34L12 2l-2.06 7.66L2 12l7.94 2.34z"/>',hard:'<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>',menu:'<line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>',x:'<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',headphones:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a1 1 0 0 1-1-1v-6a9 9 0 0 1 18 0v6a1 1 0 0 1-1 1h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',pencil:'<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',clipboard:'<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',search:'<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',package:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',badge:'<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/>',gauge:'<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>'};function icon(n,extra){return`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${extra||''}>${ICONS[n]||''}</svg>`;}
window.RKIcon=icon;const NAV=[{href:'index.html',label:'Home',match:['','index.html']},{href:'about.html',label:'About',match:['about.html']},{href:'services.html',label:'Services',match:['services.html']},{href:'projects.html',label:'Projects',match:['projects.html']},{href:'contact.html',label:'Contact',match:['contact.html']},];function currentPage(){const p=location.pathname.split('/').pop();return p||'index.html';}
function cropLogoImage(img){if(!img||!img.complete||!img.naturalWidth||!img.naturalHeight)return;const w=img.naturalWidth,h=img.naturalHeight;const canvas=document.createElement('canvas');canvas.width=w;canvas.height=h;const ctx=canvas.getContext('2d');ctx.drawImage(img,0,0,w,h);const data=ctx.getImageData(0,0,w,h).data;const alphaThreshold=12;const colorThreshold=24;const getIdx=(x,y)=>(y*w+x)*4;let bgR=0,bgG=0,bgB=0;let sampleCount=0;const stepX=Math.max(1,Math.floor(w/16));const stepY=Math.max(1,Math.floor(h/16));for(let x=0;x<w;x+=stepX){[0,h-1].forEach(y=>{const i=getIdx(x,y);bgR+=data[i];bgG+=data[i+1];bgB+=data[i+2];sampleCount++;});}for(let y=0;y<h;y+=stepY){[0,w-1].forEach(x=>{const i=getIdx(x,y);bgR+=data[i];bgG+=data[i+1];bgB+=data[i+2];sampleCount++;});}bgR/=sampleCount;bgG/=sampleCount;bgB/=sampleCount;const colorDistance=(r,g,b)=>Math.abs(r-bgR)+Math.abs(g-bgG)+Math.abs(b-bgB);const isBg=(x,y)=>{const i=getIdx(x,y);return data[i+3]<=alphaThreshold||colorDistance(data[i],data[i+1],data[i+2])<=colorThreshold;};const backgroundMask=new Uint8Array(w*h);const queue=[];const push=(x,y)=>{const idx=y*w+x;if(backgroundMask[idx])return;backgroundMask[idx]=1;queue.push({x,y});};for(let x=0;x<w;x++){if(isBg(x,0))push(x,0);if(isBg(x,h-1))push(x,h-1);}for(let y=0;y<h;y++){if(isBg(0,y))push(0,y);if(isBg(w-1,y))push(w-1,y);}while(queue.length){const {x,y}=queue.shift();[[x-1,y],[x+1,y],[x,y-1],[x,y+1]].forEach(([nx,ny])=>{if(nx>=0&&nx<w&&ny>=0&&ny<h){const idx=ny*w+nx;if(!backgroundMask[idx]&&isBg(nx,ny))push(nx,ny);}});}let minX=w,minY=h,maxX=0,maxY=0;for(let y=0;y<h;y++){for(let x=0;x<w;x++){if(backgroundMask[y*w+x])continue;if(x<minX)minX=x;if(y<minY)minY=y;if(x>maxX)maxX=x;if(y>maxY)maxY=y;}}if(maxX<minX||maxY<minY)return;const cropW=maxX-minX+1,cropH=maxY-minY+1;if(cropW===w&&cropH===h)return;const out=document.createElement('canvas');const dpr=window.devicePixelRatio||1;out.width=cropW*dpr;out.height=cropH*dpr;const outCtx=out.getContext('2d');outCtx.setTransform(dpr,0,0,dpr,0,0);outCtx.drawImage(img,minX,minY,cropW,cropH,0,0,cropW,cropH);img.src=out.toDataURL('image/png');}
function renderHeader(){const cur=currentPage();const isSub=location.pathname.includes('/projects/') || location.pathname.includes('/services/');const prefix=isSub?'../':'';const links=NAV.map(n=>`<a href="${prefix}${n.href}" class="${n.match.includes(cur)?'active':''}">${n.label}</a>`).join('');return`<header class="site-header" id="site-header">
      <div class="container-x row">
        <a href="${prefix}index.html" class="brand brand--logo" aria-label="RK Roofing PEB Home">
          <span class="brand-logo-frame" aria-hidden="true">
            <img src="${prefix}assets/logo.png" alt="RK Roofing PEB - Official Company Logo" class="brand-logo-img" decoding="async" data-crop="true" />
          </span>
        </a>
        <nav class="nav" aria-label="Main">${links}</nav>
        <div style="display:flex;align-items:center;gap:.75rem;">
          <a href="${prefix}contact.html" class="btn-cta btn-glow" style="display:none;" id="hdr-cta">Get a Quote</a>
          <button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobile-nav">${icon('menu')}</button>
        </div>
      </div>
      <div class="mobile-nav" id="mobile-nav">${links}<a href="${prefix}contact.html" class="btn-cta btn-glow" style="margin-top:.75rem;">Get a Quote</a></div>
    </header>`;}
function renderFooter(){const isSub=location.pathname.includes('/projects/') || location.pathname.includes('/services/');const prefix=isSub?'../':'';return`<footer class="site-footer">
      <div class="grid-bg texture-grid"></div>
      <div class="container-x row">
        <div>
          <a href="${prefix}index.html" class="brand" style="margin-bottom:1.25rem;">
            <span class="brand-logo-frame brand-logo-frame--footer" aria-hidden="true">
              <img src="${prefix}assets/logo.png" alt="RK Roofing PEB - Official Company Logo" class="brand-logo-img brand-logo-img--footer" loading="lazy" decoding="async" data-crop="true" />
            </span>
          </a>
          <p style="font-size:14px;color:rgba(213,225,255,.8);line-height:1.7;">Trusted partner for premium PEB roofing, industrial steel structures, and warehouse construction across India.</p>
        </div>
        <div><h3>Navigate</h3><ul>
          <li><a href="${prefix}about.html">About Us</a></li><li><a href="${prefix}services.html">Services</a></li>
          <li><a href="${prefix}projects.html">Projects</a></li><li><a href="${prefix}contact.html">Contact</a></li>
          <li><a href="${prefix}faq.html">FAQ</a></li>
        </ul></div>
        <div><h3>Services</h3><ul>
                    <li><a href="${prefix}peb-construction.html">PEB Services</a></li>
          <li><a href="${prefix}industrial-roofing-services.html">Roofing Services</a></li>
          <li><a href="${prefix}standing-seam-roofing.html">Standing Seam & Kalzip Roofing</a></li>
          <li><a href="${prefix}cladding-solutions-services.html">Wall Cladding Services</a></li>
          <li><a href="${prefix}insulated-panel-services.html">Insulated Panel Services</a></li>
          <li><a href="${prefix}warehouse-construction-services.html">Cold Room & Cold Storage Panels</a></li>
          <li><a href="${prefix}structural-steel-erection-services.html">Mezzanine Floor Services</a></li>
          <li><a href="${prefix}flashing-gutters.html">Flashing, Gutters & Downpipes</a></li>
          <li><a href="${prefix}insulation-skylights.html">Insulation & Skylights</a></li>
          <li><a href="${prefix}maintenance-repair.html">Maintenance & Repair Services</a></li>
        </ul></div>
        <div><h3>Contact</h3><ul>
          <li style="display:flex;gap:.6rem;align-items:flex-start;"><span style="color:var(--cta);width:16px;height:16px;display:inline-block;margin-top:2px;">${icon('phone').replace('width="24" height="24"','width="16" height="16"')}</span><a href="tel:+919845770392">+91 98457 70392</a></li>
          <li style="display:flex;gap:.6rem;align-items:flex-start;"><span style="color:var(--cta);width:16px;height:16px;display:inline-block;margin-top:2px;">${icon('mail').replace('width="24" height="24"','width="16" height="16"')}</span><a href="mailto:rkroofingpeb@gmail.com">rkroofingpeb@gmail.com</a></li>
          <li style="display:flex;gap:.6rem;align-items:flex-start;"><span style="color:var(--cta);width:16px;height:16px;display:inline-block;margin-top:2px;">${icon('pin').replace('width="24" height="24"','width="16" height="16"')}</span><span>RK Roofing PEB Pvt Ltd<br>217, JK Dewasi Complex,<br>Attur Main Road, Yelahanka New Town,<br>Bengaluru, Karnataka 560064, India</span></li>
        </ul></div>
      </div>
      <div class="container-x bottom">
        <p>© <span id="yr"></span> RK Roofing PEB Pvt Ltd. All rights reserved.</p>
        <p style="letter-spacing:.25em;text-transform:uppercase;">Built Through Engineering</p>
      </div>
    </footer>`;}
function inflateIcons(root){root.querySelectorAll('[data-icon]').forEach(el=>{const n=el.getAttribute('data-icon');const size=el.getAttribute('data-size')||'24';el.innerHTML=icon(n,` width="${size}" height="${size}"`);});}
window.RKInflate=function(root){inflateIcons(root||document.body);};document.addEventListener('DOMContentLoaded',()=>{const h=document.getElementById('rk-header');if(h)h.outerHTML=renderHeader();const f=document.getElementById('rk-footer');if(f)f.outerHTML=renderFooter();const yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();inflateIcons(document.body);const logoNodes=document.querySelectorAll('img.brand-logo-img[data-crop]');logoNodes.forEach(img=>{const apply=()=>cropLogoImage(img);if(img.complete)apply();else img.addEventListener('load',apply);});const ctaBtn=document.getElementById('hdr-cta');if(ctaBtn&&window.matchMedia('(min-width:768px)').matches)ctaBtn.style.display='inline-flex';const hdr=document.getElementById('site-header');const onScroll=()=>{if(window.scrollY>12)hdr.classList.add('scrolled');else hdr.classList.remove('scrolled');};onScroll();window.addEventListener('scroll',onScroll,{passive:true});const btn=document.getElementById('menu-toggle');const mn=document.getElementById('mobile-nav');if(btn&&mn){btn.addEventListener('click',()=>{const open=mn.classList.toggle('open');document.body.classList.toggle('menu-open',open);btn.setAttribute('aria-expanded',String(open));btn.innerHTML=open?icon('x'):icon('menu');});mn.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mn.classList.remove('open');document.body.classList.remove('menu-open');btn.setAttribute('aria-expanded','false');btn.innerHTML=icon('menu');}));}
const form=document.getElementById('enquiry-form');if(form){form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('enquiry-form-wrap').innerHTML=`<div style="padding:4rem 0;text-align:center;"><div style="width:64px;height:64px;margin:0 auto 1.25rem;border-radius:50%;background:rgba(234,120,51,.15);display:flex;align-items:center;justify-content:center;color:var(--cta);">${icon('check',' width="32" height="32"')}</div><h3 style="font-family:Montserrat;font-weight:800;font-size:1.5rem;">Thank you!</h3><p style="margin-top:.75rem;color:rgba(15,23,42,.65);">Your enquiry has been received. Our team will respond within 24 hours.</p></div>`;});}
const fbtns=document.querySelectorAll('.filter-btn');if(fbtns.length){fbtns.forEach(b=>b.addEventListener('click',()=>{const c=b.dataset.cat;fbtns.forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('[data-pcat]').forEach(card=>{if(c==='All'||card.dataset.pcat===c)card.classList.remove('hidden');else card.classList.add('hidden');});}));}});})();
/* === RK Social / Floating buttons / Footer & Contact additions === */
(function(){
  const SOCIAL = {
    website:  {label:'Website',    href:'https://rkroofingpeb.com', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>'},
    maps:     {label:'Google Maps',href:'https://maps.app.goo.gl/gdvinAKbkdAuQ2gk9', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>'},
    facebook: {label:'Facebook',   href:'https://www.facebook.com/profile.php?id=61591279499337', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/></svg>'},
    instagram:{label:'Instagram',  href:'https://www.instagram.com/_rkroofingpeb', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>'},
    youtube:  {label:'YouTube',    href:'https://www.youtube.com/@rkroofingpeb', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>'},
    whatsapp: {label:'WhatsApp',   href:'https://wa.me/919845770392', svg:'<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5h.01c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 18.3-5c0 5.4-4.4 9.8-9.9 9.8zm5.4-7.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.2-.3.2-.6.1c-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.5c-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.5.2-.7.2-1.4.2-1.5-.1-.1-.3-.2-.6-.3z"/></svg>'}
  };
  window.RKSocial = SOCIAL;

  function newTab(){return ' target="_blank" rel="noopener noreferrer"';}

  function buildHeaderSocials(){
    const keys=['facebook','instagram','youtube','maps'];
    return '<div class="hdr-socials">' + keys.map(k=>{
      const s=SOCIAL[k];
      return '<a class="hdr-social" href="'+s.href+'"'+newTab()+' aria-label="'+s.label+'" title="'+s.label+'">'+s.svg+'</a>';
    }).join('') + '</div>';
  }

  function buildFooterConnect(){
    const keys=['website','maps','facebook','instagram','youtube','whatsapp'];
    return '<div class="footer-connect"><h3>Connect With Us</h3><div class="social-row">' + keys.map(k=>{
      const s=SOCIAL[k];
      return '<a class="social-link" href="'+s.href+'"'+newTab()+' aria-label="'+s.label+'" title="'+s.label+'">'+s.svg+'</a>';
    }).join('') + '</div></div>';
  }

  function buildFloating(){
    const keys=['whatsapp','facebook','instagram','youtube'];
    return '<div class="rk-float-actions" aria-label="Quick contact">' + keys.map(k=>{
      const s=SOCIAL[k];
      return '<a class="rk-float-btn rk-float-'+k+'" href="'+s.href+'"'+newTab()+' aria-label="'+s.label+'" title="'+s.label+'">'+s.svg+'</a>';
    }).join('') + '</div>';
  }

  function injectContactExtras(){
    if(!/contact\.html$/.test(location.pathname) && location.pathname!=='/contact') return;
    const host = document.querySelector('main .container-x') || document.querySelector('main');
    if(!host) return;
    const block = document.createElement('section');
    block.className='section';
    block.style.cssText='padding:3rem 0 4rem;';
    block.innerHTML =
      '<div class="container-x" style="display:grid;gap:2rem;grid-template-columns:1fr;">' +
        '<div class="card-premium" style="padding:2rem;">' +
          '<span class="eyebrow">Follow Us</span>' +
          '<h2 style="margin-top:.5rem;font-family:Montserrat;font-size:clamp(1.5rem,2.5vw,1.875rem);font-weight:800">Stay connected</h2>' +
          '<p style="color:#0f172a99;margin-top:.5rem;font-size:.95rem">Follow RK Roofing PEB on social media for project updates, insights, and news.</p>' +
          '<div class="social-row social-row-lg" style="margin-top:1.25rem;">' +
            ['facebook','instagram','youtube'].map(k=>{
              const s=SOCIAL[k];
              return '<a class="social-link social-link-lg" href="'+s.href+'"'+newTab()+' aria-label="'+s.label+'" title="'+s.label+'">'+s.svg+'<span>'+s.label+'</span></a>';
            }).join('') +
          '</div>' +
          '<a class="btn-cta btn-glow" style="margin-top:1.75rem;" href="'+SOCIAL.maps.href+'"'+newTab()+'>' +
            SOCIAL.maps.svg + ' Find Us on Google Maps' +
          '</a>' +
        '</div>' +
      '</div>';
    // Insert before footer
    const footer = document.querySelector('.site-footer');
    if(footer && footer.parentNode){ footer.parentNode.insertBefore(block, footer); }
    else { document.querySelector('main').appendChild(block); }
  }

  function injectHeaderSocials(){
    const header = document.getElementById('site-header');
    if(!header) return;
    const right = header.querySelector('.row > div:last-child');
    if(!right) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = buildHeaderSocials();
    right.insertBefore(wrap.firstChild, right.firstChild);
  }

  function injectMobileNavSocials(){
    const mn = document.getElementById('mobile-nav');
    if(!mn || mn.querySelector('.mn-socials')) return;
    const keys=['maps','facebook','instagram','youtube'];
    const html = '<div class="mn-socials" role="group" aria-label="Social media">' + keys.map(k=>{
      const s=SOCIAL[k];
      return '<a class="mn-social" href="'+s.href+'"'+newTab()+' aria-label="'+s.label+'" title="'+s.label+'">'+s.svg+'</a>';
    }).join('') + '</div>';
    mn.insertAdjacentHTML('beforeend', html);
  }

  function injectFooterConnect(){
    const footer = document.querySelector('.site-footer .row');
    if(!footer) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = buildFooterConnect();
    footer.appendChild(wrap.firstChild);
  }

  function injectFloating(){
    if(document.querySelector('.rk-float-actions')) return;
    const wrap = document.createElement('div');
    wrap.innerHTML = buildFloating();
    document.body.appendChild(wrap.firstChild);
  }

  function injectJsonLdSameAs(){
    // Augment Organization JSON-LD with instagram if missing
    document.querySelectorAll('script[type="application/ld+json"]').forEach(s=>{
      try{
        const data = JSON.parse(s.textContent);
        const types = Array.isArray(data['@type'])?data['@type']:[data['@type']];
        if(types && (types.includes('Organization')||types.includes('GeneralContractor')||types.includes('LocalBusiness'))){
          const want = ['https://rkroofingpeb.com','https://www.facebook.com/profile.php?id=61591279499337','https://www.instagram.com/_rkroofingpeb','https://www.youtube.com/@rkroofingpeb'];
          const cur = Array.isArray(data.sameAs)?data.sameAs:[];
          const merged = Array.from(new Set(cur.concat(want)));
          data.sameAs = merged;
          s.textContent = JSON.stringify(data);
        }
      }catch(e){}
    });
  }

  function injectStickyCallBar(){
    if(document.querySelector('.rk-sticky-cta')) return;
    const bar=document.createElement('div');
    bar.className='rk-sticky-cta';
    bar.setAttribute('aria-label','Quick contact');
    bar.innerHTML='<a class="rk-sticky-call" href="tel:+919845770392" aria-label="Call RK Roofing PEB"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg> Call Now</a><a class="rk-sticky-wa" href="https://wa.me/919845770392" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp RK Roofing PEB"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5A11.9 11.9 0 0 0 12 0C5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.6a11.9 11.9 0 0 0 5.7 1.5h.01c6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.4-8.5zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 18.3-5c0 5.4-4.4 9.8-9.9 9.8zm5.4-7.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.2-.3.2-.6.1c-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5s0-.4 0-.5c-.1-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.5.2-.7.2-1.4.2-1.5-.1-.1-.3-.2-.6-.3z"/></svg> WhatsApp</a>';
    document.body.appendChild(bar);
  }

  function injectQuotePopup(){
    if(document.querySelector('.rk-popup-overlay')) return;
    if(/contact\.html$/.test(location.pathname)||location.pathname==='/contact') return;
    const html='<div class="rk-popup-overlay" id="rkPopup" role="dialog" aria-modal="true" aria-label="Get a Free Quote">'+
      '<div class="rk-popup-box">'+
        '<div class="rk-popup-header">'+
          '<button class="rk-popup-close" id="rkPopupClose" aria-label="Close">×</button>'+
          '<div style="font-family:Montserrat;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.35em;color:rgba(229,168,42,.9);margin-bottom:.5rem">Free Consultation</div>'+
          '<h2 style="font-family:Montserrat;font-weight:800;font-size:1.5rem;line-height:1.2;margin:0">Get a Project Quote</h2>'+
          '<p style="font-size:13px;color:rgba(255,255,255,.75);margin-top:.5rem;line-height:1.55">Share your scope — we respond within 24 hours.</p>'+
        '</div>'+
        '<div class="rk-popup-body">'+
          '<form id="rkPopupForm" style="display:grid;gap:1rem">'+
            '<div><label class="form-label" for="rk-pop-name">Your Name</label><input class="form-input" id="rk-pop-name" placeholder="Full name" required/></div>'+
            '<div><label class="form-label" for="rk-pop-phone">Phone Number</label><input class="form-input" id="rk-pop-phone" type="tel" placeholder="+91 XXXXX XXXXX" required/></div>'+
            '<div><label class="form-label" for="rk-pop-service">Service Needed</label><select class="form-input" id="rk-pop-service" required><option value="">Select service</option><option>PEB Construction</option><option>Industrial Roofing</option><option>Warehouse Construction</option><option>Structural Steel Erection</option><option>Cladding Solutions</option><option>Complete Project</option></select></div>'+
            '<button class="btn-cta btn-glow" style="width:100%;justify-content:center;padding:1rem">Request a Quote →</button>'+
          '</form>'+
          '<div id="rkPopupSuccess" style="display:none;padding:2rem;text-align:center">'+
            '<div style="font-size:2rem;margin-bottom:.75rem">✅</div>'+
            '<strong style="font-family:Montserrat;font-size:1.125rem">Thank you!</strong>'+
            '<p style="color:#0f172a99;margin-top:.5rem;font-size:14px">We\'ll call you back within 24 hours.</p>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
    document.body.insertAdjacentHTML('beforeend',html);
    const overlay=document.getElementById('rkPopup');
    const closeBtn=document.getElementById('rkPopupClose');
    const form=document.getElementById('rkPopupForm');
    function closePopup(){overlay.classList.remove('open');}
    closeBtn.addEventListener('click',closePopup);
    overlay.addEventListener('click',function(e){if(e.target===overlay)closePopup();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')closePopup();});
    form&&form.addEventListener('submit',function(e){
      e.preventDefault();
      document.getElementById('rkPopupSuccess').style.display='block';
      form.style.display='none';
      setTimeout(closePopup,2800);
    });
    // Show after 35 seconds on page
    const shown=sessionStorage.getItem('rkPopupShown');
    if(!shown){setTimeout(function(){overlay.classList.add('open');sessionStorage.setItem('rkPopupShown','1');},35000);}
  }

  function injectCatalogButtons(){
    document.querySelectorAll('.cta-row, .about-cta').forEach(row=>{
      if (row.innerHTML.includes('Catalog')) return;
      
      const isDark = row.closest('.dark-section') || row.closest('.gradient-hero') || row.closest('[style*="background:var(--primary)"]');
      const btnClass = isDark ? 'btn-outline-light' : 'btn-outline';
      
      const catalogBtn = document.createElement('a');
      catalogBtn.className = `${btnClass} catalog-btn`;
      catalogBtn.href = '#';
      
      const sibling = row.querySelector('.btn, .btn-cta, .btn-outline, .btn-outline-light, a');
      if (sibling) {
        catalogBtn.style.cssText = sibling.style.cssText;
        catalogBtn.style.backgroundColor = 'transparent';
        if (isDark) {
          catalogBtn.style.color = '#fff';
          catalogBtn.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        } else {
          catalogBtn.style.color = 'var(--primary)';
          catalogBtn.style.borderColor = 'var(--border)';
        }
      }
      
      catalogBtn.style.display = 'inline-flex';
      catalogBtn.style.alignItems = 'center';
      catalogBtn.style.gap = '0.5rem';
      catalogBtn.innerHTML = '📄 Catalog <span data-icon="arrow" data-size="14" style="transform:rotate(90deg);display:inline-block;"></span>';
      
      row.appendChild(catalogBtn);
      inflateIcons(catalogBtn);
    });
  }

  function init(){
    injectHeaderSocials();
    injectMobileNavSocials();
    injectFooterConnect();
    injectFloating();
    injectContactExtras();
    injectJsonLdSameAs();
    injectStickyCallBar();
    injectQuotePopup();
    injectCatalogButtons();
  }
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',()=>setTimeout(init,0));
  } else { setTimeout(init,0); }
})();


