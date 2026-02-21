const sharp = require('sharp');
const path = require('path');

const teamPath = path.join(__dirname, '../public/Team');

async function convertEvanPhotos() {
  console.log('🐕 Converting Evan dog photos to WebP...\n');
  
  const photos = [
    'Evan Dog 1.PNG',
    'Evan Dog 2.PNG'
  ];
  
  for (const photo of photos) {
    const inputPath = path.join(teamPath, photo);
    const outputName = photo.replace(/\.(JPG|PNG)$/i, '.webp');
    const outputPath = path.join(teamPath, outputName);
    
    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      console.log(`✓ Converted: ${photo} → ${outputName}`);
    } catch (error) {
      console.error(`✗ Failed to convert ${photo}:`, error.message);
    }
  }
  
  console.log('\n✅ Conversion complete!');
}

convertEvanPhotos().catch(console.error);
