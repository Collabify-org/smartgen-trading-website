const fs = require('fs');
const path = require('path');

// Create directory structure
const dirs = [
  'public/images/home',
  'public/images/blog',
  'public/images/contact',
  'public/images/service',
];

// Add product directories
for (let i = 1; i <= 15; i++) {
  dirs.push(`public/images/products/${i}`);
}

console.log('Creating directories...');
dirs.forEach(dir => {
  const fullPath = path.join(__dirname, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`✓ Created: ${dir}`);
  } else {
    console.log(`✓ Exists: ${dir}`);
  }
});

// Copy image files
console.log('\nCopying image files...');

function copyImages(sourceFolder, destFolder) {
  const sourcePath = path.join(__dirname, '..', sourceFolder);
  const destPath = path.join(__dirname, destFolder);
  
  if (!fs.existsSync(sourcePath)) {
    console.log(`✗ Source not found: ${sourceFolder}`);
    return;
  }
  
  const files = fs.readdirSync(sourcePath);
  const imageFiles = files.filter(f => /\.(jpg|jpeg|png|webp|gif)$/i.test(f));
  
  imageFiles.forEach(file => {
    const src = path.join(sourcePath, file);
    const dest = path.join(destPath, file);
    fs.copyFileSync(src, dest);
  });
  
  console.log(`✓ Copied ${imageFiles.length} images from ${sourceFolder} to ${destFolder}`);
}

// Copy home images
copyImages('home_files', 'public/images/home');

// Copy blog images
copyImages('blog_files', 'public/images/blog');

// Copy contact images
copyImages('contact_files', 'public/images/contact');

// Copy service images
copyImages('service_files', 'public/images/service');

// Copy product images
for (let i = 1; i <= 15; i++) {
  copyImages(`product_${i}_files`, `public/images/products/${i}`);
}

console.log('\n✅ Image setup complete!');
console.log('\n📁 Folder structure:');
console.log('smartgen-react/public/images/');
console.log('  ├── home/');
console.log('  ├── blog/');
console.log('  ├── contact/');
console.log('  ├── service/');
console.log('  └── products/');
console.log('      ├── 1/ ... 15/');
