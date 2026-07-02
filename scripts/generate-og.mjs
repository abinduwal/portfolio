// Generates public/og-image.png (1200x630) for social-share previews.
//
// Social platforms (Facebook, X/Twitter, LinkedIn) only render raster images
// for og:image, so we build a branded SVG and rasterize it to PNG.
//
// Requires @resvg/resvg-js (a dev-only dependency, not shipped to the site):
//   npm install -D @resvg/resvg-js
// Then run:
//   node scripts/generate-og.mjs
// The committed public/og-image.png is what actually gets deployed.

import { writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(root, 'public');

// Brand palette (mirrors tailwind.config.js)
const C = {
  bg0: '#0a0015',
  bg1: '#13071f',
  bg2: '#1d0c30',
  ink: '#fff7ff',
  muted: '#cfc0df',
  accent: '#8b5cf6',
  accentSoft: '#a78bfa',
  coral: '#f7b2ff',
  gold: '#d8b4fe',
  line: '#3b1858',
};

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.bg0}"/>
      <stop offset="0.55" stop-color="${C.bg1}"/>
      <stop offset="1" stop-color="${C.bg2}"/>
    </linearGradient>
    <radialGradient id="glowA" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${C.accent}" stop-opacity="0.55"/>
      <stop offset="1" stop-color="${C.accent}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowB" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="${C.coral}" stop-opacity="0.30"/>
      <stop offset="1" stop-color="${C.coral}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="badge" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.accent}"/>
      <stop offset="1" stop-color="#6d28d9"/>
    </linearGradient>
    <linearGradient id="role" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${C.coral}"/>
      <stop offset="1" stop-color="${C.gold}"/>
    </linearGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.accent}" stop-opacity="0.9"/>
      <stop offset="1" stop-color="${C.coral}" stop-opacity="0.5"/>
    </linearGradient>
  </defs>

  <!-- background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <ellipse cx="1010" cy="150" rx="520" ry="420" fill="url(#glowA)"/>
  <ellipse cx="180" cy="640" rx="460" ry="360" fill="url(#glowB)"/>

  <!-- inner frame -->
  <rect x="24" y="24" width="1152" height="582" rx="28" fill="none" stroke="${C.line}" stroke-width="2" opacity="0.7"/>

  <!-- decorative orbit, right side -->
  <g opacity="0.85">
    <circle cx="1000" cy="250" r="150" fill="none" stroke="url(#ring)" stroke-width="2.5"/>
    <circle cx="1000" cy="250" r="200" fill="none" stroke="${C.accent}" stroke-width="1.5" opacity="0.35"/>
    <circle cx="1150" cy="250" r="9" fill="${C.coral}"/>
    <circle cx="1000" cy="100" r="6" fill="${C.accentSoft}"/>
    <text x="1000" y="250" text-anchor="middle" dominant-baseline="central"
          font-family="Trebuchet MS, Arial, sans-serif" font-weight="700"
          font-size="120" fill="${C.ink}" opacity="0.9">AD</text>
  </g>

  <!-- monogram badge -->
  <rect x="90" y="76" width="92" height="92" rx="22" fill="url(#badge)"/>
  <text x="136" y="124" text-anchor="middle" dominant-baseline="central"
        font-family="Trebuchet MS, Arial, sans-serif" font-weight="700"
        font-size="46" fill="${C.ink}">AD</text>

  <!-- text block -->
  <text x="92" y="262" font-family="Trebuchet MS, Arial, sans-serif" font-weight="700"
        font-size="26" letter-spacing="6" fill="${C.accentSoft}">ABINDUWAL.COM.NP</text>

  <text x="88" y="372" font-family="Trebuchet MS, Arial, sans-serif" font-weight="700"
        font-size="112" fill="${C.ink}" letter-spacing="-2">Abin Duwal</text>

  <text x="92" y="450" font-family="Trebuchet MS, Arial, sans-serif" font-weight="700"
        font-size="54" fill="url(#role)">Full Stack Developer</text>

  <text x="92" y="506" font-family="Trebuchet MS, Arial, sans-serif" font-weight="700"
        font-size="30" fill="${C.muted}">PHP  ·  Laravel  ·  Vue.js  ·  REST APIs  ·  MySQL</text>

  <!-- footer -->
  <rect x="92" y="548" width="64" height="4" rx="2" fill="${C.accent}"/>
  <text x="92" y="588" font-family="Trebuchet MS, Arial, sans-serif" font-weight="700"
        font-size="24" fill="#9d8bb5">Madhyapur Thimi  ·  Bhaktapur  ·  Nepal</text>
</svg>`;

const fontCandidates = [
  'C:/Windows/Fonts/trebucbd.ttf',
  'C:/Windows/Fonts/trebuc.ttf',
  'C:/Windows/Fonts/arialbd.ttf',
  'C:/Windows/Fonts/arial.ttf',
];
const fontFiles = fontCandidates.filter((f) => existsSync(f));

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: {
    fontFiles,
    loadSystemFonts: true,
    defaultFontFamily: 'Trebuchet MS',
  },
});

const png = resvg.render().asPng();
const out = join(publicDir, 'og-image.png');
writeFileSync(out, png);
console.log(`Wrote ${out} (${png.length} bytes) using fonts:`, fontFiles);
