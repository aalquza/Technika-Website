const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const conversions = [
  // Mechanical plans
  { input: 'public/gallery/mechanical/mechanical plans 1.png', output: 'public/gallery/mechanical/mechanical-plans-1.webp' },
  { input: 'public/gallery/mechanical/mechanical plans 2.png', output: 'public/gallery/mechanical/mechanical-plans-2.webp' },
];

async function convertImages() {
  console.log('Starting remaining image conversions...\n');
  
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
