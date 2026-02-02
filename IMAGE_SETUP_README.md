# Image Setup Instructions

This document explains how to properly setup images in the smartgen-react application.

## Standard Folder Structure

All images are now stored in a standard public folder structure:

```
smartgen-react/
└── public/
    └── images/
        ├── home/              # Home page images
        ├── blog/              # Blog images
        ├── contact/           # Contact page images
        ├── service/           # Service page images
        └── products/          # Product images
            ├── 1/             # Product category 1 images
            ├── 2/             # Product category 2 images
            ...
            └── 15/            # Product category 15 images
```

## Setup Methods

### Method 1: PowerShell Script (Recommended for Windows)

```powershell
cd smartgen-react
.\setup-images.ps1
```

### Method 2: Node.js Script

```bash
cd smartgen-react
node setup-images.js
```

### Method 3: Manual Setup

1. Create the folder structure:
   ```
   smartgen-react/public/images/home
   smartgen-react/public/images/blog
   smartgen-react/public/images/contact
   smartgen-react/public/images/service
   smartgen-react/public/images/products/1
   ...
   smartgen-react/public/images/products/15
   ```

2. Copy image files:
   - Copy all .jpg, .jpeg, .png, .webp, .gif files from `home_files/` to `public/images/home/`
   - Copy all images from `blog_files/` to `public/images/blog/`
   - Copy all images from `contact_files/` to `public/images/contact/`
   - Copy all images from `service_files/` to `public/images/service/`
   - Copy all images from `product_1_files/` to `public/images/products/1/`
   - Continue for all 15 product categories...

## What Changed

### Before (Parent Directory Serving)
- Images were served from parent directory using custom Vite plugin
- Paths like: `/home_files/image.jpg`, `/product_1_files/image.jpg`
- Required running server from project root

### After (Standard Public Folder)
- Images are inside `smartgen-react/public/images/`
- Paths like: `/images/home/image.jpg`, `/images/products/1/image.jpg`
- Standard React/Vite convention
- Can run server from anywhere
- Easier deployment and maintenance

## Updated Files

The following files have been updated to use the new image paths:

- `src/data/pageImages.js` - Updated folder paths
- `src/components/Header.jsx` - Logo path
- `src/components/Hero.jsx` - Background images
- `src/components/Footer.jsx` - Logo path
- `src/pages/BlogPage.jsx` - Blog images
- All image references now use `/images/` prefix

## Deployment Notes

When deploying to production:

1. The `public/` folder contents are automatically copied to the build output
2. Images will be accessible at `/images/...` paths
3. No special server configuration needed
4. Works with any static hosting (Vercel, Netlify, etc.)

## Benefits

✅ **Standard Structure**: Follows React/Vite best practices  
✅ **Self-Contained**: All assets inside the project  
✅ **Easy Deployment**: No external dependencies  
✅ **Better Performance**: Optimized by Vite build process  
✅ **Portable**: Move project anywhere without breaking paths  
✅ **No Custom Plugins**: Removed custom Vite plugin complexity  

## Troubleshooting

If images don't appear:

1. Run the setup script: `.\setup-images.ps1` or `node setup-images.js`
2. Check that `public/images/` folders exist
3. Verify images are in the correct folders
4. Restart the dev server: `npm run dev`
5. Clear browser cache

## File Sizes

- Home images: ~3 files
- Blog images: ~1 file (logo)
- Contact images: ~2 files
- Service images: ~2 files
- Product images: ~50 files per category (15 categories)
- Total: ~800 image files

All images are preserved in original quality.
