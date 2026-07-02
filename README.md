# Abin Duwal Portfolio

Professional personal portfolio website for Abin Duwal, built with Vue 3, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Tailwind CSS
- Data-driven Vue components

## Setup

```bash
npm install
npm run dev
```

The local development URL is shown by Vite after running `npm run dev`.

## Build

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## CV PDF

The generated CV file lives here:

```txt
public/Abin-Duwal-CV.pdf
```

The download buttons already point to `/Abin-Duwal-CV.pdf`.

To regenerate the PDF and HTML CV source:

```bash
npm run generate:cv
```

The editable HTML preview is generated at:

```txt
public/Abin-Duwal-CV.html
```

## Updating Content

All major portfolio content is editable through files in `src/data/`.

- Profile and contact details: `src/data/profile.ts`
- Skills: `src/data/skills.ts`
- Experience: `src/data/experience.ts`
- Featured projects: `src/data/projects.ts`
- Other work: `src/data/otherWork.ts`
- Services: `src/data/services.ts`
- Education: `src/data/education.ts`

To replace project links, add or update the optional `link` field in `src/data/projects.ts`. Only add links that are public and confirmed.

## Contact Form

The contact form is frontend-only. It validates name, email, subject, and message, then shows a success message without sending email.

Later, connect the submit handler in `src/components/Contact.vue` to one of these options:

- Laravel backend API
- EmailJS
- Formspree
- Resend
- SMTP service

## SEO

SEO metadata, canonical URL, Open Graph tags, Twitter card tags, and JSON-LD structured data are configured in `index.html`.

Replace `/og-image.png` in the `public` folder when the final social sharing image is ready.

## Deployment

### Vercel

1. Connect the Git repository to Vercel.
2. Use `npm run build` as the build command.
3. Use `dist` as the output directory.
4. Add `abinduwal.com.np` as a custom domain.
5. Update DNS records from the domain provider as instructed by Vercel.
6. Enable HTTPS.

### Netlify

1. Connect the Git repository to Netlify.
2. Use `npm run build` as the build command.
3. Use `dist` as the publish directory.
4. Add `abinduwal.com.np` as a custom domain.
5. Update DNS records from the domain provider as instructed by Netlify.
6. Enable HTTPS.

### Cloudflare Pages

1. Connect the Git repository to Cloudflare Pages.
2. Use `npm run build` as the build command.
3. Use `dist` as the output directory.
4. Add `abinduwal.com.np` as a custom domain.
5. Update DNS records from the domain provider as instructed by Cloudflare.
6. Enable HTTPS.

### cPanel / Static Hosting

1. Run `npm run build`.
2. Upload the contents of the `dist` folder to the public web root.
3. Add or point the domain `abinduwal.com.np` in the hosting panel.
4. Update DNS records from the domain provider.
5. Enable HTTPS/SSL.

## Domain Setup Notes

General steps for pointing `abinduwal.com.np` to the deployed website:

1. Build the project.
2. Deploy the `dist` folder or connect the Git repository to hosting.
3. Add `abinduwal.com.np` in the hosting dashboard.
4. Update DNS records from the domain provider.
5. Add the required CNAME or A records depending on the hosting provider.
6. Enable HTTPS/SSL.
