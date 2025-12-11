export interface AcademicProfile {
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
  points?: number; // Added points field for sorting
  head?: boolean; // Added head field to identify Head of Department
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


export const facultyData: FacultyMember = {
  "id": "dr-g-r-ahmed-jamal",
  "name": "Dr G R Ahmed Jamal",
  "title": "Dean School of Engineering & Professor",
  "role": "Professor",
  "points": 95,
  "image": "/images/faculties/dr-g-r-ahmed-jamal.jpg",
  "bio": "Faculty member in the Department of Electrical and Electronic Engineering at the University of Asia Pacific.",
  "email": "ahmed.eee@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Degree information to be updated",
      "institution": "Institution to be updated",
      "year": ""
    }
  ],
  "researchInterests": [
    "Research interests to be updated"
  ],
  "academicExperience": [],
  "professionalMemberships": [],
  "recentPublications": [],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
