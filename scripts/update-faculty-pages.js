const fs = require('fs');
const path = require('path');

console.log('Updating faculty page.tsx files to use individual data...');

// Get all faculty folders
const facultyDir = path.join(__dirname, '..', 'app', 'faculty');
const facultyFolders = fs.readdirSync(facultyDir).filter(item => {
  const itemPath = path.join(facultyDir, item);
  return fs.statSync(itemPath).isDirectory() && item !== '[id]';
});

console.log(`Found ${facultyFolders.length} faculty folders`);

let updated = 0;
let errors = 0;

facultyFolders.forEach(facultyId => {
  try {
    const pageFilePath = path.join(facultyDir, facultyId, 'page.tsx');
    
    if (!fs.existsSync(pageFilePath)) {
      console.log(`- Skipped (no page.tsx): ${facultyId}`);
      return;
    }
    
    // Read the current page content
    let pageContent = fs.readFileSync(pageFilePath, 'utf8');
    
    // Replace the import statement
    pageContent = pageContent.replace(
      "import { facultyMembers } from '@/lib/faculty-data';",
      "import { facultyData } from './data';"
    );
    
    // Remove the facultyId constant (it's no longer needed)
    pageContent = pageContent.replace(
      /const facultyId = ["'][^"']+["'];?\n?/g,
      ''
    );
    
    // Replace the member finding logic in generateMetadata
    pageContent = pageContent.replace(
      /const member = facultyMembers\.find\(m => m\.id === facultyId\);/g,
      'const member = facultyData;'
    );
    
    // Replace the member finding logic in the component
    pageContent = pageContent.replace(
      /const member = facultyMembers\.find\(m => m\.id === facultyId\);/g,
      'const member = facultyData;'
    );
    
    // Clean up any extra empty lines
    pageContent = pageContent.replace(/\n\n\n+/g, '\n\n');
    
    // Write the updated content
    fs.writeFileSync(pageFilePath, pageContent);
    
    console.log(`✓ Updated: ${facultyId}`);
    updated++;
    
  } catch (error) {
    console.error(`Error updating ${facultyId}:`, error.message);
    errors++;
  }
});

console.log(`\nUpdate Summary:`);
console.log(`✓ Successfully updated: ${updated} page files`);
console.log(`✗ Errors: ${errors} page files`);

if (updated > 0) {
  console.log('\nNext: Update faculty listing page to discover faculty dynamically');
}