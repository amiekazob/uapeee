const fs = require('fs');
const path = require('path');

console.log('Populating individual faculty data files...');

// Read the centralized faculty data
const facultyDataPath = path.join(__dirname, '..', 'lib', 'faculty-data.ts');
const facultyDataContent = fs.readFileSync(facultyDataPath, 'utf8');

// Extract interface definitions
const interfaceStart = facultyDataContent.indexOf('export interface AcademicProfile');
const typeEnd = facultyDataContent.indexOf('export const facultyMembers');
const interfaceDefinitions = facultyDataContent.substring(interfaceStart, typeEnd).trim();

// Extract faculty members array content
const arrayStart = facultyDataContent.indexOf('export const facultyMembers: FacultyMember[] = [');
const arrayEnd = facultyDataContent.lastIndexOf('];');
const arrayContent = facultyDataContent.substring(arrayStart, arrayEnd + 2);

// Parse faculty IDs from existing folders
const facultyDir = path.join(__dirname, '..', 'app', 'faculty');
const facultyFolders = fs.readdirSync(facultyDir).filter(item => {
  const itemPath = path.join(facultyDir, item);
  return fs.statSync(itemPath).isDirectory() && item !== '[id]';
});

console.log(`Found ${facultyFolders.length} faculty folders`);

// For each faculty folder, extract their data from the centralized file
let populated = 0;
let errors = 0;

facultyFolders.forEach(facultyId => {
  try {
    // Find the faculty object in the centralized data
    const facultyObjectRegex = new RegExp(`{[\\s\\S]*?id:\\s*["']${facultyId}["'][\\s\\S]*?}(?=,\\s*{|\\s*\\];)`, 'g');
    const match = arrayContent.match(facultyObjectRegex);
    
    if (!match || match.length === 0) {
      console.error(`Could not find data for faculty: ${facultyId}`);
      errors++;
      return;
    }
    
    const facultyObjectStr = match[0];
    
    // Create the data file content
    const dataFileContent = `${interfaceDefinitions}

export const facultyData: FacultyMember = ${facultyObjectStr};

export default facultyData;
`;
    
    // Write the data file
    const dataFilePath = path.join(facultyDir, facultyId, 'data.ts');
    fs.writeFileSync(dataFilePath, dataFileContent);
    
    console.log(`✓ Populated: ${facultyId}`);
    populated++;
    
  } catch (error) {
    console.error(`Error populating data for ${facultyId}:`, error.message);
    errors++;
  }
});

console.log(`\nPopulation Summary:`);
console.log(`✓ Successfully populated: ${populated} faculty data files`);
console.log(`✗ Errors: ${errors} faculty data files`);

if (populated > 0) {
  console.log('\nNext: Update page.tsx files to use individual data.ts files');
}