# NLP Trainer Portfolio Website

A professional, modern single-page portfolio website for NLP trainers and psychology coaches. Features three interactive micro-games demonstrating NLP techniques, lead capture forms, and a clean, trust-building design.

## Features

- **Responsive Design**: Mobile-first, accessible (WCAG AA compliant)
- **Interactive Micro-Games**:
  - 60s Breath Anchor (breathing guide with visual cues)
  - Reframe Sprint (cognitive reframing practice)
  - Anchor Builder (create and trigger calm anchors)
- **Lead Generation**: Newsletter signup and contact forms
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data
- **Performance**: Lightweight, fast loading, minimal dependencies

## Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Customization Guide

### 1. Replace Placeholders

Search and replace the following placeholders throughout the codebase:

- `[YOUR NAME]` - Your full name
- `[CALENDLY_LINK]` - Your Calendly booking URL
- `[MAILCHIMP_FORM_ACTION]` - Your Mailchimp form action URL (in Resources.tsx)
- `[LOGO_SVG]` - Your logo file (optional)

### 2. Update Content

**Personal Information** (in multiple components):
- Update bio in `src/components/About.tsx`
- Modify stats in `src/components/Stats.tsx`
- Replace testimonials in `src/components/Testimonials.tsx`

**Contact Details**:
- Email address in `src/components/Contact.tsx` and `src/components/Footer.tsx`
- Social media links in `src/components/Footer.tsx`

**Offerings** (in `src/components/Offerings.tsx`):
- Update pricing tiers
- Modify service descriptions
- Adjust workshop details

### 3. SEO & Meta Data

Update these files:
- `index.html` - Title, description, Open Graph tags, JSON-LD schema
- Add your own Open Graph image (1200x630px recommended)

### 4. Analytics (Optional)

To add Google Analytics:
1. Get your GA4 Measurement ID
2. Add the following to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

### 5. Email Integration

**Mailchimp** (for Resources section):
1. Create a Mailchimp audience and form
2. Get your form action URL
3. Replace `[MAILCHIMP_FORM_ACTION]` in `src/components/Resources.tsx`

**Contact Form**:
- Currently logs to console
- Integrate with your preferred backend (Formspree, Netlify Forms, etc.)
- Update the `handleSubmit` function in `src/components/Contact.tsx`

## Deployment

### Option 1: Netlify (Recommended)

1. Build your project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Or connect your Git repository for automatic deployments

### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   npm run build
   vercel --prod
   ```

### Option 3: CPanel / Traditional Hosting

1. Build your project:
   ```bash
   npm run build
   ```

2. Upload contents of `dist` folder to your web host's public_html directory via FTP or File Manager

3. Ensure your domain points to the uploaded directory

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Sticky navigation bar
│   ├── Hero.tsx                # Hero section with CTAs
│   ├── Stats.tsx               # Animated statistics
│   ├── About.tsx               # About section
│   ├── Offerings.tsx           # Service cards
│   ├── SignatureWorkshop.tsx   # Featured workshop
│   ├── MicroGames.tsx          # Game container
│   ├── Testimonials.tsx        # Testimonial slider
│   ├── Resources.tsx           # Lead magnet signup
│   ├── Contact.tsx             # Contact form
│   ├── Footer.tsx              # Footer with links
│   ├── FloatingButton.tsx      # Quick access button
│   ├── CookieConsent.tsx       # Cookie banner
│   └── games/
│       ├── BreathAnchor.tsx    # Breathing practice
│       ├── ReframeSprint.tsx   # Reframing quiz
│       └── AnchorBuilder.tsx   # Anchor creation tool
├── App.tsx                     # Main app component
├── index.css                   # Global styles & animations
└── main.tsx                    # React entry point
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Accessibility Features

- Keyboard navigation support
- ARIA labels on interactive elements
- Focus visible states
- Reduced motion support (respects `prefers-reduced-motion`)
- Semantic HTML structure
- Color contrast meets WCAG AA standards

## Performance Tips

1. **Images**: Add your own optimized images to replace emoji placeholders
2. **Fonts**: Already optimized with Google Fonts display=swap
3. **Lazy Loading**: Images lazy-load by default
4. **Code Splitting**: Vite handles this automatically

## Support & Customization

This is a static website built with React, TypeScript, Vite, and Tailwind CSS. All micro-games run entirely client-side (no backend required). Local storage is used for the Anchor Builder game to persist user data.

## License

This template is provided as-is for personal and commercial use.

---

**Need help?** Review the inline comments in each component file for detailed customization guidance.
