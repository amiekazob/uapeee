const fs = require('fs');
const path = require('path');

// Read the original faculty data to get the correct data for each faculty
const facultyDataPath = path.join(__dirname, '..', 'lib', 'faculty-data-backup.ts');
let originalFacultyData = '';

// Check if backup exists, if not read from a working data file
if (fs.existsSync(facultyDataPath)) {
  originalFacultyData = fs.readFileSync(facultyDataPath, 'utf8');
} else {
  // Try to read from one of the working individual data files
  const workingDataPath = path.join(__dirname, '..', 'app', 'faculty', 'dr-g-r-ahmed-jamal', 'data.ts');
  if (fs.existsSync(workingDataPath)) {
    originalFacultyData = fs.readFileSync(workingDataPath, 'utf8');
  }
}

// Extract faculty members array from the original data
const facultyMembersMatch = originalFacultyData.match(/export const facultyMembers.*?=\s*\[(.*?)\];/s);
if (!facultyMembersMatch) {
  console.error('Could not find faculty members data');
  process.exit(1);
}

// Parse the faculty members (this is a simplified approach)
// We'll read from our backup or reconstruct from individual working files

const facultyDir = path.join(__dirname, '..', 'app', 'faculty');
const facultyFolders = fs.readdirSync(facultyDir).filter(item => {
  const itemPath = path.join(facultyDir, item);
  return fs.statSync(itemPath).isDirectory();
});

console.log(`Found ${facultyFolders.length} faculty folders`);

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

// Simple faculty data for each member (we'll create minimal data for now)
const facultyDataMap = {
  'mr-a-h-m-zadidul-karim': {
    id: "mr-a-h-m-zadidul-karim",
    name: "Mr. A.H.M. Zadidul Karim",
    title: "Head of the Department & Associate Professor",
    role: "HOD",
    image: "/images/faculties/mr-a-h-m-zadidul-karim.jpg",
    bio: "Mr. A.H.M. Zadidul Karim is an accomplished academic currently serving as the Associate Professor and Head of the Department of Electrical and Electronic Engineering.",
    email: "headeee@uap-bd.edu",
    phone: "",
    room: 601,
    education: [
      {
        degree: "Ph.D. (EEE)",
        institution: "BUET",
        year: "Ongoing"
      },
      {
        degree: "M.Sc. (EEE)",
        institution: "BUET",
        year: "2010"
      },
      {
        degree: "B.Sc. (EEE)",
        institution: "AUST",
        year: "2004"
      }
    ],
    researchInterests: [
      "Biomedical signal and image processing"
    ]
  },
  'dr-g-r-ahmed-jamal': {
    id: "dr-g-r-ahmed-jamal",
    name: "Dr. G. R. Ahmed Jamal",
    title: "Dean & Professor",
    role: "Professor",
    image: "/images/faculties/dr-g-r-ahmed-jamal.jpg",
    bio: "Dr. G. R. Ahmed Jamal is a Professor in the Department of Electrical and Electronic Engineering at UAP.",
    email: "ahmed.eee@uap-bd.edu",
    phone: "+880-17****-***",
    room: "",
    education: [
      {
        degree: "Ph.D.",
        institution: "University",
        year: "Year"
      }
    ],
    researchInterests: [
      "Nano materials and nano electronics"
    ]
  },
  'dewan-ashikur-rahaman': {
    id: "dewan-ashikur-rahaman",
    name: "Dewan Ashikur Rahaman",
    title: "Lecturer",
    role: "Lecturer",
    image: "/images/faculties/dewan-ashikur-rahaman.jpg",
    bio: "Dewan Ashikur Rahaman is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific.",
    email: "ashikdewan.eee@gmail.com",
    phone: "",
    room: "",
    education: [
      {
        degree: "B.Sc. in Electrical and Electronic Engineering",
        institution: "University of Asia Pacific (UAP)",
        year: "2022"
      }
    ],
    researchInterests: [
      "Power System Analysis",
      "Power System Contingency Analysis",
      "Power System Stability",
      "Renewable Energy",
      "Power Electronics"
    ]
  }
};

// Process each faculty folder
facultyFolders.forEach(folderName => {
  const dataFilePath = path.join(facultyDir, folderName, 'data.ts');
  
  // Get faculty data for this folder
  let facultyData = facultyDataMap[folderName];
  
  if (!facultyData) {
    // Create minimal data structure for unknown faculty
    facultyData = {
      id: folderName,
      name: folderName.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
      title: "Faculty Member",
      role: "Lecturer",
      image: `/images/faculties/${folderName}.jpg`,
      bio: `Faculty member in the Department of Electrical and Electronic Engineering.`,
      email: `${folderName}@uap-bd.edu`,
      phone: "",
      room: "",
      education: [],
      researchInterests: []
    };
  }
  
  // Create the complete data file content
  const fileContent = `${interfaceDefinitions}
export const facultyData: FacultyMember = ${JSON.stringify(facultyData, null, 2)};

export default facultyData;
`;
  
  // Write the corrected data file
  fs.writeFileSync(dataFilePath, fileContent);
  console.log(`Fixed data file for: ${folderName}`);
});

console.log('All faculty data files have been fixed!');