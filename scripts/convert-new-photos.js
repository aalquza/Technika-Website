const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const conversions = [
  // Structural photos
  { input: 'public/gallery/structural/Structural 1.jpg', output: 'public/gallery/structural/structural-1.webp' },
  { input: 'public/gallery/structural/Structural 2.jpg', output: 'public/gallery/structural/structural-2.webp' },
  { input: 'public/gallery/structural/Structural 3.jpg', output: 'public/gallery/structural/structural-3.webp' },
  
  // Mechanical photos
  { input: 'public/gallery/mechanical/Mechanical 1.jpg', output: 'public/gallery/mechanical/mechanical-1.webp' },
  { input: 'public/gallery/mechanical/Mechnical 2.jpg', output: 'public/gallery/mechanical/mechanical-2.webp' },
];

async function convertImages() {
  console.log('Starting image conversions...\n');
  
  for (const { input, output } of conversions) {
    try {
      if (!fs.existsSync(input)) {
        console.log(`⚠️  Skipping ${input} - file not found`);
        continue;
      }
      
      await sharp(input)
        .webp({ quality: 85 })
        .toFile(output);
      
      console.log(`✅ Converted: ${input} → ${output}`);
      
      // Delete the original file
      fs.unlinkSync(input);
      console.log(`🗑️  Deleted: ${input}\n`);
    } catch (error) {
      console.error(`❌ Error converting ${input}:`, error.message);
    }
  }
  
  console.log('\n✨ Conversion complete!');
}

convertImages();
