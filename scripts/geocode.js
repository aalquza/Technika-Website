/**
 * Geocoding Helper Tool
 * 
 * This script helps you convert addresses to coordinates using Mapbox Geocoding API
 * 
 * Usage:
 * 1. Make sure your NEXT_PUBLIC_MAPBOX_TOKEN is set in .env.local
 * 2. Run: node scripts/geocode.js "123 Main St, Charleston, SC"
 * 3. Copy the coordinates to your projects-data.ts file
 * 
 * Batch mode:
 * node scripts/geocode.js --batch
 * (This will geocode all addresses in addresses.txt)
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Read .env.local file manually
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env.local');
  console.log('Looking for .env.local at:', envPath);
  
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');
    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('NEXT_PUBLIC_MAPBOX_TOKEN=')) {
        const value = trimmed.substring('NEXT_PUBLIC_MAPBOX_TOKEN='.length).trim();
        process.env.NEXT_PUBLIC_MAPBOX_TOKEN = value;
        console.log('✅ Mapbox token loaded');
      }
    });
  } else {
    console.log('⚠️  .env.local not found at:', envPath);
  }
}

loadEnv();
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

if (!MAPBOX_TOKEN) {
  console.error('❌ Error: NEXT_PUBLIC_MAPBOX_TOKEN not found in .env.local');
  console.error('Please add your Mapbox token to .env.local');
  process.exit(1);
}

/**
 * Geocode a single address
 */
async function geocodeAddress(address) {
  return new Promise((resolve, reject) => {
    // URL encode the address
    const encodedAddress = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=${MAPBOX_TOKEN}&limit=1`;

    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          
          if (response.features && response.features.length > 0) {
            const feature = response.features[0];
            const coordinates = feature.geometry.coordinates; // [longitude, latitude]
            const placeName = feature.place_name;
            
            resolve({
              address: address,
              coordinates: coordinates,
              placeName: placeName,
              formatted: `coordinates: [${coordinates[0]}, ${coordinates[1]}], // ${placeName}`
            });
          } else {
            reject(new Error(`No results found for address: ${address}`));
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

/**
 * Main function
 */
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('📍 Mapbox Geocoding Helper\n');
    console.log('Usage:');
    console.log('  node scripts/geocode.js "123 Main St, Charleston, SC"');
    console.log('  node scripts/geocode.js --batch\n');
    console.log('Batch mode reads addresses from scripts/addresses.txt (one per line)');
    process.exit(0);
  }

  // Batch mode
  if (args[0] === '--batch') {
    const addressFile = path.join(__dirname, 'addresses.txt');
    
    if (!fs.existsSync(addressFile)) {
      console.error('❌ Error: addresses.txt not found');
      console.log('Create scripts/addresses.txt with one address per line');
      process.exit(1);
    }

    const addresses = fs.readFileSync(addressFile, 'utf8')
      .split('\n')
      .filter(line => line.trim() && !line.startsWith('#'));

    console.log(`📍 Geocoding ${addresses.length} addresses...\n`);

    for (const address of addresses) {
      try {
        const result = await geocodeAddress(address.trim());
        console.log(`✅ ${result.address}`);
        console.log(`   ${result.formatted}\n`);
        
        // Small delay to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
      } catch (error) {
        console.error(`❌ ${address}: ${error.message}\n`);
      }
    }

    console.log('✅ Batch geocoding complete!');
    return;
  }

  // Single address mode
  const address = args.join(' ');
  
  console.log(`📍 Geocoding: ${address}\n`);

  try {
    const result = await geocodeAddress(address);
    console.log('✅ Success!\n');
    console.log('Address:', result.placeName);
    console.log('Coordinates:', `[${result.coordinates[0]}, ${result.coordinates[1]}]`);
    console.log('\nCopy this to your projects-data.ts:');
    console.log(`  ${result.formatted}`);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
