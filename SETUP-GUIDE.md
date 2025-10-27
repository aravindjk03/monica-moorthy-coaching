# Quick Setup Guide

## Immediate Steps to Customize

### 1. Replace Placeholders (Search & Replace Globally)

Use your code editor's "Find and Replace in Files" feature:

- `[YOUR NAME]` → Your actual name
- `[CALENDLY_LINK]` → Your Calendly booking URL
- `[MAILCHIMP_FORM_ACTION]` → Your Mailchimp form endpoint

### 2. Update Contact Information

**In `src/components/Contact.tsx` and `src/components/Footer.tsx`:**
- Replace `hello@example.com` with your email

**In `src/components/Footer.tsx`:**
- Update social media links (LinkedIn, Twitter, Instagram)

### 3. Customize Content

**Bio** (`src/components/About.tsx`):
- Replace the sample bio with your actual background

**Stats** (`src/components/Stats.tsx`):
- Update the numbers to match your experience

**Testimonials** (`src/components/Testimonials.tsx`):
- Replace with real client testimonials

**Offerings** (`src/components/Offerings.tsx`):
- Adjust pricing and service descriptions

### 4. SEO & Meta Tags

**In `index.html`:**
- Replace website URL placeholders
- Add your Open Graph image URL
- Update social media profile links in JSON-LD schema

### 5. Deploy

**Option A: Netlify (Easiest)**
1. Run `npm run build`
2. Drag the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

**Option B: Vercel**
1. Run `npm run build`
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel --prod`

**Option C: Traditional Hosting (CPanel/FTP)**
1. Run `npm run build`
2. Upload contents of `dist` folder to your server's public_html

## Features Included

✓ Fully responsive, mobile-first design
✓ Three working micro-games (breathing, reframing, anchor builder)
✓ Lead capture forms with validation
✓ Cookie consent banner
✓ Smooth scroll navigation
✓ Accessibility compliant (WCAG AA)
✓ SEO optimized with structured data
✓ Performance optimized (<150KB JS gzipped)

## Color Palette Used

- Muted Teal: `#2E8F8F`
- Warm Sand: `#F5EBDD`
- Charcoal: `#222222`
- White Background: `#FFFFFF`

## Typography

- Body: Inter
- Headlines: Playfair Display

## Need Help?

Refer to `README.md` for detailed documentation on:
- Adding Google Analytics
- Integrating email services
- Customizing components
- Project structure
- Browser support

---

**Your portfolio is ready to launch! Just customize the placeholders and deploy.**
