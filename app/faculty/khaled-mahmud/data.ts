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
  "id": "khaled-mahmud",
  "name": "Khaled Mahmud",
  "title": "Lecturer",
  "role": "Lecturer",
  "points": 53,
  "image": "/images/faculties/khaled-mahmud.jpg",
  "bio": "Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. BUET graduate with expertise in nanoscale simulation, characterization and fabrication. University Merit Scholarship recipient and Dean's award winner with research focus on 2D materials and drug delivery systems.",
  "email": "khaled.mahmud@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "B.Sc. in Electrical and Electronic Engineering",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2018-2023"
    }
  ],
  "researchInterests": [
    "Nanoscale Simulation",
    "2D Materials",
    "Drug Delivery Systems",
    "First-Principles Calculations",
    "Valley Electronics",
    "Magnetic Anisotropy",
    "Monolayer Materials",
    "Computational Materials Science"
  ],
  "academicExperience": [
    {
      "position": "Lecturer",
      "institute": "University of Asia Pacific, Department of EEE",
      "period": "2025 - Present",
      "description": "Teaching and research in Electrical and Electronic Engineering"
    },
    {
      "position": "Adjunct Lecturer",
      "institute": "Bangladesh University of Engineering and Technology (BUET), Department of EEE",
      "period": "November 2023 - March 2024",
      "description": "Teaching undergraduate courses"
    },
    {
      "position": "Research Assistant",
      "institute": "Nanoscale Simulation, Characterization and Fabrication Lab, BUET",
      "period": "2022 - 2024",
      "description": "Research under the supervision of Dr. Ahmed Zubair, focusing on nanoscale materials and computational studies"
    }
  ],
  "professionalMemberships": [],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "First-principles calculations on monolayer WX 2 (X= S, Se) as an effective drug delivery carrier for anti-tuberculosis drugs",
      "authors": "Mahmud, Khaled, Taki Yashir, and Ahmed Zubair",
      "venue": "Nanoscale Advances",
      "year": 2024
    },
    {
      "type": "Conference",
      "title": "First-Principles Calculations of Tuning of Valley Splitting and Magnetic Anisotropy in Monolayer VSe2 Using Uniaxial Strain and Electric Field",
      "authors": "Khaled Mahmud",
      "venue": "2024 Fall Meeting of European Materials Research Society (EMRS)",
      "year": 2024
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
