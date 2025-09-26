const fs = require('fs');
const path = require('path');

// Read the current faculty data file
const facultyDataPath = path.join(__dirname, '..', 'lib', 'faculty-data.ts');
const facultyDataContent = fs.readFileSync(facultyDataPath, 'utf8');

console.log('Starting faculty data migration...');

// Extract the interface definitions
const interfaceMatch = facultyDataContent.match(/export interface AcademicProfile[\s\S]*?(?=export const facultyMembers)/);
const interfaceDefinitions = interfaceMatch ? interfaceMatch[0] : '';

// Extract the faculty members array
const facultyArrayMatch = facultyDataContent.match(/export const facultyMembers: FacultyMember\[\] = \[([\s\S]*)\];/);
if (!facultyArrayMatch) {
  console.error('Could not find faculty members array');
  process.exit(1);
}

// Parse the faculty data more carefully
const facultyArrayContent = facultyArrayMatch[1];

// Split by faculty member objects (looking for id: pattern)
const facultyObjects = [];
let currentObject = '';
let braceCount = 0;
let inObject = false;

const lines = facultyArrayContent.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if this line starts a new faculty object
  if (line.trim().includes('id:') && line.trim().includes('"') && braceCount === 0) {
    if (currentObject.trim()) {
      facultyObjects.push(currentObject.trim());
    }
    currentObject = '';
    inObject = true;
  }
  
  if (inObject) {
    currentObject += line + '\n';
    
    // Count braces to know when object ends
    for (const char of line) {
      if (char === '{') braceCount++;
      if (char === '}') braceCount--;
    }
    
    // If we're back to 0 braces and we see a comma or end, this object is complete
    if (braceCount === 0 && (line.trim().endsWith(',') || i === lines.length - 1)) {
      facultyObjects.push(currentObject.trim());
      currentObject = '';
      inObject = false;
    }
  }
}

console.log(`Found ${facultyObjects.length} faculty members to migrate`);

// Create individual data files for each faculty
let migrated = 0;
let errors = 0;

facultyObjects.forEach((facultyObjectStr, index) => {
  try {
    // Extract the ID from the object string
    const idMatch = facultyObjectStr.match(/id:\s*["']([^"']+)["']/);
    if (!idMatch) {
      console.error(`Could not extract ID from faculty object ${index + 1}`);
      errors++;
      return;
    }
    
    const facultyId = idMatch[1];
    const facultyDir = path.join(__dirname, '..', 'app', 'faculty', facultyId);
    
    // Check if directory exists
    if (!fs.existsSync(facultyDir)) {
      console.error(`Directory does not exist for faculty: ${facultyId}`);
      errors++;
      return;
    }
    
    // Clean up the object string and format it properly
    let cleanObjectStr = facultyObjectStr.replace(/,$/, ''); // Remove trailing comma
    
    // Create the data file content
    const dataFileContent = `${interfaceDefinitions}

export const facultyData: FacultyMember = ${cleanObjectStr};

export default facultyData;
`;
    
    // Write the data file
    const dataFilePath = path.join(facultyDir, 'data.ts');
    fs.writeFileSync(dataFilePath, dataFileContent);
    
    console.log(`✓ Migrated: ${facultyId}`);
    migrated++;
    
  } catch (error) {
    console.error(`Error migrating faculty ${index + 1}:`, error.message);
    errors++;
  }
});

console.log(`\nMigration Summary:`);
console.log(`✓ Successfully migrated: ${migrated} faculty members`);
console.log(`✗ Errors: ${errors} faculty members`);

if (migrated > 0) {
  console.log('\nNext steps:');
  console.log('1. Update faculty page components to read from individual data files');
  console.log('2. Update faculty listing page to discover faculty dynamically');
  console.log('3. Update other components that reference centralized faculty data');
  console.log('4. Test all functionality');
  console.log('5. Clean up centralized faculty-data.ts file');
}