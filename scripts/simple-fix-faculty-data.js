const fs = require('fs');
const path = require('path');

// Interface definitions to include in each file
const interfaceDefinitions = `export interface AcademicProfile {
  platform: 'Google Scholar' | 'ResearchGate' | 'ORCID' | 'Academia.edu' | 'LinkedIn' | 'IEEE Xplore';
  url: string;
  profileId?: string;
}

export type FacultyMember = {
  id: string;
  name: string;
  title: string;
  role:
    | "HOD"
    | "Professor"
    | "Associate Professor"
    | "Assistant Professor"
    | "Lecturer"
    | "On Leave";
  image: string;
  bio: string;
  email: string;
  phone: string;
  room?: string | number;
  education: {
    degree: string;
    institution: string;
    year?: string;
  }[];
  researchInterests: string[];

  academicExperience?: {
    position: string;
    institute: string;
    period: string;
    description?: string;
  }[];

  professionalMemberships?: string[];

  recentPublications?: {
    type: "Journal" | "Conference";
    title: string;
    authors: string;
    venue: string;
    year: number;
    impactFactor?: number;
    doi?: string;
    url?: string;
  }[];

  administrativeRoles?: {
    title: string;
    organization: string;
    period: string;
    description?: string;
  }[];

  academicProfiles?: AcademicProfile[];
};

`;

const facultyDir = path.join(__dirname, '..', 'app', 'faculty');
const facultyFolders = fs.readdirSync(facultyDir).filter(item => {
  const itemPath = path.join(facultyDir, item);
  return fs.statSync(itemPath).isDirectory();
});

console.log(`Found ${facultyFolders.length} faculty folders`);

// Process each faculty folder
facultyFolders.forEach(folderName => {
  const dataFilePath = path.join(facultyDir, folderName, 'data.ts');
  
  // Create minimal faculty data based on folder name
  const facultyData = {
    id: folderName,
    name: folderName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    title: "Faculty Member",
    role: "Lecturer",
    image: `/images/faculties/${folderName}.jpg`,
    bio: `Faculty member in the Department of Electrical and Electronic Engineering at the University of Asia Pacific.`,
    email: `${folderName.replace(/-/g, '.')}@uap-bd.edu`,
    phone: "",
    room: "",
    education: [
      {
        degree: "Degree information to be updated",
        institution: "Institution to be updated",
        year: ""
      }
    ],
    researchInterests: [
      "Research interests to be updated"
    ],
    academicExperience: [],
    professionalMemberships: [],
    recentPublications: [],
    administrativeRoles: [],
    academicProfiles: []
  };
  
  // Create the complete data file content
  const fileContent = `${interfaceDefinitions}
export const facultyData: FacultyMember = ${JSON.stringify(facultyData, null, 2)};

export default facultyData;
`;
  
  // Write the corrected data file
  fs.writeFileSync(dataFilePath, fileContent);
  console.log(`Fixed data file for: ${folderName}`);
});

console.log('All faculty data files have been fixed with minimal data structure!');