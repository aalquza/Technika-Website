const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const galleryPath = path.join(__dirname, '../public/gallery');

async function convertImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ quality: 85 })
      .toFile(outputPath);
    console.log(`✓ Converted: ${path.basename(inputPath)} → ${path.basename(outputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Failed to convert ${path.basename(inputPath)}:`, error.message);
    return false;
  }
}

async function convertImagesInDirectory(dirPath) {
  const items = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item.name);
    
    if (item.isDirectory()) {
      await convertImagesInDirectory(fullPath);
    } else if (item.isFile()) {
      const ext = path.extname(item.name).toLowerCase();
      const basename = path.basename(item.name, ext);
      
      // Convert HEIC, PNG, JPG to WebP (skip if already webp)
      if (['.heic', '.png', '.jpg', '.jpeg'].includes(ext)) {
        const outputPath = path.join(dirPath, `${basename}.webp`);
        
        // Skip if webp already exists
        if (fs.existsSync(outputPath)) {
          console.log(`⊘ Skipped (already exists): ${path.basename(outputPath)}`);
          continue;
        }
        
        await convertImage(fullPath, outputPath);
      }
    }
  }
}

async function main() {
  console.log('🖼️  Converting images to WebP format...\n');
  
  const directories = [
    'structural',
    'construction',
    'electrical',
    'mechanical',
    'building-science',
    'projects'
  ];
  
  for (const dir of directories) {
    const dirPath = path.join(galleryPath, dir);
    if (fs.existsSync(dirPath)) {
      console.log(`\n📁 Processing ${dir}/`);
      await convertImagesInDirectory(dirPath);
    }
  }
  
  console.log('\n✅ Image conversion complete!');
}

main().catch(console.error);
