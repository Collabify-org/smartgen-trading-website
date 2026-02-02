# Deployment Guide

## Standard Folder Structure ✅

The smartgen-react app now follows React/Vite best practices with all images self-contained in the `public/` folder.

```
smartgen-react/
├── public/
│   ├── images/                    # All images organized by page
│   │   ├── home/                  # Home page images (3 files)
│   │   ├── blog/                  # Blog images (1 file)
│   │   ├── contact/               # Contact images (3 files)
│   │   ├── service/               # Service images (3 files)
│   │   └── products/              # Product category images
│   │       ├── 1/                 # Thermal Insulation (49 files)
│   │       ├── 2/                 # Duct Accessories (43 files)
│   │       ...
│   │       └── 15/                # Air Conditioners (7 files)
│   └── favicon.svg
├── src/
│   ├── components/                # React components
│   ├── pages/                     # Page components
│   ├── data/
│   │   └── pageImages.js         # Image path configuration
│   ├── App.jsx                    # Main app with routes
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js                 # Vite configuration (simplified)
└── tailwind.config.js             # Tailwind configuration

Total Images: ~259 files
```

## Deployment Options

### 1. Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**Configuration**: Vercel auto-detects Vite projects, no config needed.

### 2. Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Build settings**:
- Build command: `npm run build`
- Publish directory: `dist`

### 3. GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Update `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/smartgen-react",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/smartgen-react/'  // Add this
})
```

4. Deploy:
```bash
npm run deploy
```

### 4. Static Hosting (Any Server)

```bash
# Build production files
npm run build

# Upload the dist/ folder to your server
# Images will be at dist/images/...
```

## Build Process

The build process automatically:
1. Bundles all React components
2. Processes Tailwind CSS
3. Optimizes images from `public/images/`
4. Generates production-ready files in `dist/`

```bash
npm run build
```

Output structure:
```
dist/
├── images/                    # All images copied here
│   ├── home/
│   ├── blog/
│   ├── contact/
│   ├── service/
│   └── products/
├── assets/                    # JS and CSS bundles
│   ├── index-[hash].js
│   └── index-[hash].css
└── index.html
```

## Environment Variables

No environment variables required! Everything is self-contained.

## Performance Optimizations

Already implemented:
- ✅ Lazy loading images
- ✅ Responsive images
- ✅ Optimized Tailwind CSS (purged unused classes)
- ✅ Code splitting with React Router
- ✅ Minified production build

## Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm run preview`
- [ ] Verify all images load correctly
- [ ] Check all routes work (/, /about, /contact, /service, /product/1-15, /blog, /buy-online)
- [ ] Test mobile responsiveness
- [ ] Verify social media links
- [ ] Test contact forms/email links

## Post-Deployment

1. **DNS Setup**: Point your domain to the hosting provider
2. **SSL Certificate**: Enable HTTPS (automatic on Vercel/Netlify)
3. **Custom Domain**: Update `package.json` homepage if needed
4. **Analytics**: Add Google Analytics if desired
5. **SEO**: Update meta tags in `index.html`

## Troubleshooting

### Images not showing after deployment
- Check that `public/images/` folder was included in build
- Verify image paths use `/images/` prefix
- Check browser console for 404 errors

### Build fails
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes not working (404 on refresh)
- Vercel: Automatic SPA handling
- Netlify: Add `_redirects` file:
  ```
  /*    /index.html   200
  ```
- GitHub Pages: Use hash router or configure properly

## Monitoring

After deployment:
- Monitor page load times
- Check Core Web Vitals
- Monitor error rates
- Review user analytics

## Updates

To update the deployed site:
1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Deploy: Run deployment command for your platform

## Support

For issues or questions:
- Email: sales@smartgentrading.com
- Check logs in hosting dashboard
- Review browser console for errors
