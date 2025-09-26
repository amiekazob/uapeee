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
  "id": "mr-md-sharif-uddin",
  "name": "MD. Sharif Uddin",
  "title": "Lecturer",
  "role": "Lecturer",
  "points": 47,
  "image": "/images/faculties/mr-md-sharif-uddin.jpg",
  "bio": "MD. Sharif Uddin is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering from Bangladesh University of Engineering and Technology (BUET) in 2025 with an outstanding CGPA of 3.94. He is currently pursuing his Master of Science (M.Sc.) in Electrical and Electronic Engineering at BUET. His undergraduate thesis focused on developing an Analytical Framework for Performance Evaluation of 1S1R Crossbar Array. He has demonstrated exceptional academic performance throughout his studies, earning University Merit Scholarships for four semesters and Dean's List Scholarships for three semesters. He joined UAP as a Lecturer in July 2025, bringing strong analytical skills and cutting-edge knowledge in electronic systems to the department.",
  "email": "mr.md.sharif.uddin@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Master of Science (M.Sc.) in Electrical and Electronic Engineering",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2025-present"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2020-2025 (CGPA: 3.94)"
    }
  ],
  "researchInterests": [
    "Crossbar Array Systems",
    "Memory Device Performance Analysis",
    "Electronic Circuit Analysis",
    "Semiconductor Device Modeling"
  ],
  "academicExperience": [
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "July 2025-Present",
      "description": "Teaching and research in electrical and electronic engineering"
    }
  ],
  "professionalMemberships": [],
  "recentPublications": [],
  "administrativeRoles": [
    {
      "title": "Research Experience",
      "organization": "Bangladesh University of Engineering and Technology (BUET)",
      "period": "Undergraduate",
      "description": "Undergraduate Thesis: Analytical Framework for Performance Evaluation of 1S1R Crossbar Array"
    },
    {
      "title": "Academic Scholarships & Awards",
      "organization": "Bangladesh University of Engineering and Technology (BUET)",
      "period": "2020-2025",
      "description": "University Merit Scholarship (July 2021, July 2022, Jan 2023, July 2023), Dean's List Scholarship (Jan 2021, Jan 2022, Jan 2023)"
    }
  ],
  "academicProfiles": []
};

export default facultyData;
