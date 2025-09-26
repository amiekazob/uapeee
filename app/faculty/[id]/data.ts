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
  "id": "[id]",
  "name": "[id]",
  "title": "Faculty Member",
  "role": "Lecturer",
  "image": "/images/faculties/[id].jpg",
  "bio": "Faculty member in the Department of Electrical and Electronic Engineering at the University of Asia Pacific.",
  "email": "[id]@uap-bd.edu",
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
