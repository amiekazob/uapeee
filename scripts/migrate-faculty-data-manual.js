const fs = require('fs');
const path = require('path');

console.log('Starting manual faculty data migration...');

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
const interfaceMatch = facultyDataContent.match(/export interface AcademicProfile[\s\S]*?(?=export const facultyMembers)/);
const interfaceDefinitions = interfaceMatch ? interfaceMatch[0] : '';

// Import the original faculty data to get individual faculty objects
const { facultyMembers } = require('../lib/faculty-data.ts');

let migrated = 0;
let errors = 0;

facultyFolders.forEach(folderName => {
  try {
    // Find the corresponding faculty member in the original data
    const faculty = facultyMembers.find(member => member.id === folderName);
    
    if (!faculty) {
      console.error(`Could not find faculty data for: ${folderName}`);
      errors++;
      return;
    }
    
    // Create the data file content
    const dataFileContent = `${interfaceDefinitions}

export const facultyData: FacultyMember = {
  id: "${faculty.id}",
  name: "${faculty.name}",
  title: "${faculty.title}",
  role: "${faculty.role}",
  image: "${faculty.image}",
  bio: \`${faculty.bio}\`,
  email: "${faculty.email}",
  phone: "${faculty.phone}",
  ${faculty.room ? `room: ${typeof faculty.room === 'string' ? `"${faculty.room}"` : faculty.room},` : ''}
  education: ${JSON.stringify(faculty.education, null, 2)},
  researchInterests: ${JSON.stringify(faculty.researchInterests, null, 2)},
  ${faculty.academicExperience ? `academicExperience: ${JSON.stringify(faculty.academicExperience, null, 2)},` : ''}
  ${faculty.professionalMemberships ? `professionalMemberships: ${JSON.stringify(faculty.professionalMemberships, null, 2)},` : ''}
  ${faculty.recentPublications ? `recentPublications: ${JSON.stringify(faculty.recentPublications, null, 2)},` : ''}
  ${faculty.administrativeRoles ? `administrativeRoles: ${JSON.stringify(faculty.administrativeRoles, null, 2)},` : ''}
  ${faculty.academicProfiles ? `academicProfiles: ${JSON.stringify(faculty.academicProfiles, null, 2)},` : ''}
};

export default facultyData;
`;
    
    // Write the data file
    const dataFilePath = path.join(facultyDir, folderName, 'data.ts');
    fs.writeFileSync(dataFilePath, dataFileContent);
    
    console.log(`✓ Migrated: ${folderName}`);
    migrated++;
    
  } catch (error) {
    console.error(`Error migrating faculty ${folderName}:`, error.message);
    errors++;
  }
});

console.log(`\nMigration Summary:`);
console.log(`✓ Successfully migrated: ${migrated} faculty members`);
console.log(`✗ Errors: ${errors} faculty members`);

if (migrated > 0) {
  console.log('\nData files created successfully!');
  console.log('Next: Update page components to use individual data files');
}