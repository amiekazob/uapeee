const fs = require('fs');
const path = require('path');

// Read the current faculty data file
const facultyDataPath = path.join(__dirname, '..', 'lib', 'faculty-data.ts');
const facultyDataContent = fs.readFileSync(facultyDataPath, 'utf8');

console.log('Starting faculty data migration (fixed version)...');

// Extract the interface definitions
const interfaceMatch = facultyDataContent.match(/export interface AcademicProfile[\s\S]*?(?=export const facultyMembers)/);
const interfaceDefinitions = interfaceMatch ? interfaceMatch[0] : '';

// Use a more robust approach to extract faculty data
// First, let's try to evaluate the faculty data by creating a temporary module
const tempModulePath = path.join(__dirname, 'temp-faculty-data.js');

// Convert TypeScript to JavaScript for evaluation
let jsContent = facultyDataContent
  .replace(/export interface[\s\S]*?(?=export type)/g, '') // Remove interfaces
  .replace(/export type[\s\S]*?(?=export const)/g, '') // Remove type definitions
  .replace(/export const facultyMembers: FacultyMember\[\] = /, 'module.exports = ') // Convert to module.exports
  .replace(/;$/, ''); // Remove trailing semicolon

// Write temporary file
fs.writeFileSync(tempModulePath, jsContent);

try {
  // Load the faculty data
  delete require.cache[tempModulePath]; // Clear cache
  const facultyMembers = require(tempModulePath);
  
  console.log(`Found ${facultyMembers.length} faculty members to migrate`);
  
  let migrated = 0;
  let errors = 0;
  
  facultyMembers.forEach((faculty, index) => {
    try {
      const facultyId = faculty.id;
      const facultyDir = path.join(__dirname, '..', 'app', 'faculty', facultyId);
      
      // Check if directory exists
      if (!fs.existsSync(facultyDir)) {
        console.error(`Directory does not exist for faculty: ${facultyId}`);
        errors++;
        return;
      }
      
      // Create the data file content with proper formatting
      const dataFileContent = `${interfaceDefinitions}

export const facultyData: FacultyMember = ${JSON.stringify(faculty, null, 2)};

export default facultyData;
`;
      
      // Write the data file
      const dataFilePath = path.join(facultyDir, 'data.ts');
      fs.writeFileSync(dataFilePath, dataFileContent);
      
      console.log(`✓ Migrated: ${facultyId}`);
      migrated++;
      
    } catch (error) {
      console.error(`Error migrating faculty ${faculty.id || index + 1}:`, error.message);
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
  
} catch (error) {
  console.error('Error loading faculty data:', error.message);
} finally {
  // Clean up temporary file
  if (fs.existsSync(tempModulePath)) {
    fs.unlinkSync(tempModulePath);
  }
}