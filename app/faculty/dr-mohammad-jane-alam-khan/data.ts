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
  "id": "dr-mohammad-jane-alam-khan",
  "name": "Dr Mohammad Jane Alam Khan",
  "title": "Assistant Professor, BUET(Part Time Faculty)",
  "role": "Assistant Professor",
  "note": "Part Time",
  "points": 54,
  "image": "/images/faculties/dr-mohammad-jane-alam-khan.jpg",
  "bio": "Faculty member in the Department of Electrical and Electronic Engineering at the University of Asia Pacific.",
  "email": "dr.mohammad.jane.alam.khan@uap-bd.edu",
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
