const fs = require('fs');
const path = require('path');

console.log('Creating individual data files for faculty...');

// Get all faculty directories
const facultyDir = path.join(__dirname, '..', 'app', 'faculty');
const facultyFolders = fs.readdirSync(facultyDir).filter(item => {
  const itemPath = path.join(facultyDir, item);
  return fs.statSync(itemPath).isDirectory() && item !== '[id]';
});

console.log(`Found ${facultyFolders.length} faculty folders`);

// Read the interface definitions from the original file
const facultyDataPath = path.join(__dirname, '..', 'lib', 'faculty-data.ts');
const facultyDataContent = fs.readFileSync(facultyDataPath, 'utf8');

// Extract just the interface and type definitions
const interfaceStart = facultyDataContent.indexOf('export interface AcademicProfile');
const typeEnd = facultyDataContent.indexOf('export const facultyMembers');
const interfaceDefinitions = facultyDataContent.substring(interfaceStart, typeEnd).trim();

let created = 0;
let errors = 0;

facultyFolders.forEach(folderName => {
  try {
    const facultyId = folderName;
    
    // Create a basic data file structure
    const dataFileContent = `${interfaceDefinitions}

export const facultyData: FacultyMember = {
  id: "${facultyId}",
  name: "Faculty Name", // TODO: Update with actual data
  title: "Faculty Title", // TODO: Update with actual data
  role: "Assistant Professor", // TODO: Update with actual data
  image: "/images/faculties/${facultyId}.jpg",
  bio: "Faculty biography", // TODO: Update with actual data
  email: "faculty@uap-bd.edu", // TODO: Update with actual data
  phone: "", // TODO: Update with actual data
  education: [], // TODO: Update with actual data
  researchInterests: [], // TODO: Update with actual data
};

export default facultyData;
`;
    
    // Write the data file
    const dataFilePath = path.join(facultyDir, folderName, 'data.ts');
    
    // Only create if it doesn't exist
    if (!fs.existsSync(dataFilePath)) {
      fs.writeFileSync(dataFilePath, dataFileContent);
      console.log(`✓ Created template data file: ${folderName}`);
      created++;
    } else {
      console.log(`- Skipped (exists): ${folderName}`);
    }
    
  } catch (error) {
    console.error(`Error creating data file for ${folderName}:`, error.message);
    errors++;
  }
});

console.log(`\nCreation Summary:`);
console.log(`✓ Created: ${created} data files`);
console.log(`✗ Errors: ${errors} data files`);

console.log('\nNext step: Update individual page.tsx files to use their own data.ts files');
console.log('Then manually populate the data.ts files with actual faculty information');