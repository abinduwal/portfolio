import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const publicDir = join(root, 'public');

const cv = {
  name: 'Abin Duwal',
  title: 'Full Stack Developer',
  subtitle: 'PHP / Laravel / Vue.js Developer',
  location: 'Madhyapur Thimi-7, Bhaktapur, Nepal',
  phone: '+977-9860950801',
  email: 'aintmea7@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abin-duwal-27275911a/',
  upwork: 'https://www.upwork.com/freelancers/~01f38f31b0aba65a12',
  domain: 'abinduwal.com.np',
  summary:
    'Full Stack Developer from Nepal with experience building practical, secure, database-driven web applications using PHP, Laravel, CodeIgniter, Vue.js, REST APIs, MySQL, Oracle, JavaScript, jQuery, Ajax, Livewire, Bootstrap, and Tailwind CSS.',
  skills: [
    'Backend: PHP, Laravel 8/9, CodeIgniter, REST API, MVC, HMVC, backend development',
    'Frontend: Vue.js, JavaScript, jQuery, Ajax, HTML, CSS, Livewire, Bootstrap, Tailwind CSS',
    'Database: MySQL, Oracle, SQL, database design, data management, query writing',
    'Tools: Git, GitLab, Jira, Trello, Slack, Active Collab, Postman, Cursor, VS Code',
    'Systems: PMIS, MIS, CRM, task portals, HIMS, LIMS, process tracking, role-based access',
  ],
  experience: [
    {
      role: 'Full Stack Developer / Lead Senior Developer',
      company: 'Avanya Technology Pvt. Ltd.',
      duration: 'May 2025 - January 2026 (8 months)',
      points: [
        'Led and contributed to website and web application development projects.',
        'Worked on NAFHA PMIS, NAFHA website, and Plan International website-related work.',
        'Managed backend tasks, database-driven modules, frontend integration, and delivery coordination.',
      ],
    },
    {
      role: 'Backend Laravel Developer',
      company: 'MIDAS Health Services',
      duration: 'April 2024 - May 2025',
      points: [
        'Worked on healthcare-related software systems and Hospital Information Management System modules.',
        'Handled backend development, system maintenance, module improvements, and database-driven features.',
      ],
    },
    {
      role: 'Backend Laravel Developer',
      company: 'UpTechSys Private Limited',
      duration: 'April 2023 - May 2023',
      points: ['Worked with Laravel 9, Livewire, HTML, CSS, backend features, and website integration tasks.'],
    },
    {
      role: 'Backend Laravel Developer',
      company: 'Grafioffshorenepal Private Limited',
      duration: 'January 2022 - September 2022',
      points: [
        'Worked on AutoWiki, a world collector database website, using Laravel 8 and Vue.js.',
        'Used GitLab and Active Collab for project workflow.',
      ],
    },
    {
      role: 'Associate Developer',
      company: 'Improvement Company Nepal Pvt. Ltd.',
      duration: 'June 2019 - December 2021',
      points: [
        'Built CodeIgniter applications using MVC/HMVC patterns, jQuery, Ajax, and database-backed modules.',
        'Worked on CRM, task portal, PMIS, process tracking, and Laboratory Information Management System projects.',
      ],
    },
  ],
  projects: [
    'NAFHA PMIS - Client / Organization Work - Vue 3, Laravel, MySQL',
    'Hospital Information Management System - Healthcare / HIMS - PHP, CodeIgniter 3',
    'Laboratory Information Management System - Client / Organization Work - PHP, CodeIgniter, MySQL',
    'CRM Software - CodeIgniter, MySQL, jQuery, Ajax',
    'Task Portal - project, finance, recruitment, task, and access-level workflows',
    'AutoWiki - Client / Organization Work - Laravel 8, Vue.js',
    'Process Tracking System - Client / Organization Work',
    'Pravasi Nepal Coordination Committee Information Management System - Client / Organization Work',
  ],
  education: 'BSc. Computer Science - Kathmandu University, School of Science',
};

const escapeHtml = (value) =>
  value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const cleanPdfText = (value) =>
  value
    .replaceAll('–', '-')
    .replaceAll('—', '-')
    .replaceAll('’', "'")
    .replaceAll('“', '"')
    .replaceAll('”', '"')
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, '');

const escapePdf = (value) => cleanPdfText(value).replace(/[\\()]/g, '\\$&');

const wrapText = (text, fontSize, maxWidth) => {
  const words = cleanPdfText(text).split(/\s+/).filter(Boolean);
  const maxChars = Math.max(18, Math.floor(maxWidth / (fontSize * 0.52)));
  const lines = [];
  let line = '';

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }

  if (line) lines.push(line);
  return lines;
};

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(cv.name)} CV</title>
    <style>
      body { margin: 0; background: #f4f1f8; color: #17111f; font-family: Arial, sans-serif; line-height: 1.5; }
      main { max-width: 860px; margin: 28px auto; background: #fff; padding: 42px; box-shadow: 0 20px 50px rgba(38, 13, 64, .12); }
      h1 { margin: 0; font-size: 40px; color: #210a35; }
      h2 { margin: 28px 0 10px; font-size: 16px; color: #6d28d9; text-transform: uppercase; letter-spacing: .08em; border-bottom: 1px solid #ded4ed; padding-bottom: 6px; }
      h3 { margin: 16px 0 2px; font-size: 17px; color: #210a35; }
      .title { color: #6d28d9; font-weight: 700; margin-top: 4px; }
      .contact { display: flex; flex-wrap: wrap; gap: 8px 16px; margin-top: 14px; color: #4b3c59; font-size: 13px; }
      .item { margin-bottom: 12px; }
      .meta { color: #665875; font-size: 13px; font-weight: 700; }
      ul { margin: 8px 0 0 18px; padding: 0; }
      li { margin: 3px 0; }
      @media print { body { background: #fff; } main { margin: 0; box-shadow: none; } }
    </style>
  </head>
  <body>
    <main>
      <h1>${escapeHtml(cv.name)}</h1>
      <p class="title">${escapeHtml(cv.title)} | ${escapeHtml(cv.subtitle)}</p>
      <div class="contact">
        <span>${escapeHtml(cv.location)}</span>
        <span>${escapeHtml(cv.phone)}</span>
        <span>${escapeHtml(cv.email)}</span>
        <span>${escapeHtml(cv.linkedin)}</span>
        <span>${escapeHtml(cv.upwork)}</span>
        <span>${escapeHtml(cv.domain)}</span>
      </div>
      <h2>Profile</h2>
      <p>${escapeHtml(cv.summary)}</p>
      <h2>Core Skills</h2>
      <ul>${cv.skills.map((skill) => `<li>${escapeHtml(skill)}</li>`).join('')}</ul>
      <h2>Experience</h2>
      ${cv.experience
        .map(
          (item) => `<section class="item"><h3>${escapeHtml(item.role)}</h3><div class="meta">${escapeHtml(item.company)} | ${escapeHtml(
            item.duration,
          )}</div><ul>${item.points.map((point) => `<li>${escapeHtml(point)}</li>`).join('')}</ul></section>`,
        )
        .join('')}
      <h2>Selected Projects</h2>
      <ul>${cv.projects.map((project) => `<li>${escapeHtml(project)}</li>`).join('')}</ul>
      <h2>Education</h2>
      <p>${escapeHtml(cv.education)}</p>
    </main>
  </body>
</html>
`;

const createPdf = () => {
  const objects = [];
  const pages = [];
  const addObject = (content) => {
    objects.push(content);
    return objects.length;
  };

  objects[0] = '<< /Type /Catalog /Pages 2 0 R >>';
  objects[1] = '';
  objects[2] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>';
  objects[3] = '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>';

  const width = 595;
  const height = 842;
  const margin = 46;
  const bottom = 46;
  let y = height - margin;
  let commands = [];

  const newPage = () => {
    if (!commands.length) return;
    const stream = commands.join('\n');
    const contentId = addObject(`<< /Length ${Buffer.byteLength(stream, 'binary')} >>\nstream\n${stream}\nendstream`);
    const pageId = addObject(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${width} ${height}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`,
    );
    pages.push(pageId);
    commands = [];
    y = height - margin;
  };

  const ensureSpace = (needed) => {
    if (y - needed < bottom) newPage();
  };

  const textLine = (text, x, size, font = 'F1', color = '0.10 0.07 0.13') => {
    commands.push(`BT /${font} ${size} Tf ${color} rg ${x} ${y.toFixed(2)} Td (${escapePdf(text)}) Tj ET`);
  };

  const addText = (text, options = {}) => {
    const x = options.x ?? margin;
    const size = options.size ?? 10;
    const font = options.font ?? 'F1';
    const color = options.color ?? '0.10 0.07 0.13';
    const lineHeight = options.lineHeight ?? size + 4;
    const maxWidth = options.maxWidth ?? width - margin * 2;
    const lines = wrapText(text, size, maxWidth);
    ensureSpace(lines.length * lineHeight + 2);
    for (const line of lines) {
      textLine(line, x, size, font, color);
      y -= lineHeight;
    }
  };

  const section = (title) => {
    ensureSpace(34);
    y -= 8;
    addText(title.toUpperCase(), { size: 11, font: 'F2', color: '0.43 0.16 0.85', lineHeight: 15 });
    commands.push(`${margin} ${(y + 5).toFixed(2)} ${width - margin * 2} 0.6 re f`);
    y -= 8;
  };

  const bullet = (text) => {
    addText(`- ${text}`, { x: margin + 12, size: 9.5, lineHeight: 13, maxWidth: width - margin * 2 - 12 });
  };

  addText(cv.name, { size: 26, font: 'F2', color: '0.13 0.04 0.21', lineHeight: 30 });
  addText(`${cv.title} | ${cv.subtitle}`, { size: 12, font: 'F2', color: '0.43 0.16 0.85', lineHeight: 17 });
  addText(`${cv.location} | ${cv.phone} | ${cv.email}`, { size: 9.5, color: '0.27 0.22 0.32', lineHeight: 13 });
  addText(`${cv.linkedin} | ${cv.upwork} | ${cv.domain}`, { size: 8.5, color: '0.27 0.22 0.32', lineHeight: 13 });

  section('Profile');
  addText(cv.summary, { size: 10, lineHeight: 14 });

  section('Core Skills');
  cv.skills.forEach(bullet);

  section('Experience');
  for (const item of cv.experience) {
    ensureSpace(52);
    addText(item.role, { size: 11, font: 'F2', lineHeight: 14 });
    addText(`${item.company} | ${item.duration}`, { size: 9.5, font: 'F2', color: '0.36 0.31 0.43', lineHeight: 13 });
    item.points.forEach(bullet);
    y -= 4;
  }

  section('Selected Projects');
  cv.projects.forEach(bullet);

  section('Education');
  addText(cv.education, { size: 10, font: 'F2', lineHeight: 14 });

  newPage();
  objects[1] = `<< /Type /Pages /Kids [${pages.map((id) => `${id} 0 R`).join(' ')}] /Count ${pages.length} >>`;

  let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(Buffer.byteLength(pdf, 'binary'));
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = Buffer.byteLength(pdf, 'binary');
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  return Buffer.from(pdf, 'binary');
};

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, 'Abin-Duwal-CV.html'), html);
writeFileSync(join(publicDir, 'Abin-Duwal-CV.pdf'), createPdf());

console.log('Generated public/Abin-Duwal-CV.html');
console.log('Generated public/Abin-Duwal-CV.pdf');
