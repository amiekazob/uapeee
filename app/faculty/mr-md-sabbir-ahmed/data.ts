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
  "id": "mr-md-sabbir-ahmed",
  "name": "MD. Sabbir Ahmed",
  "title": "Lecturer",
  "role": "Lecturer",
  "points": 52,
  "image": "/images/faculties/mr-md-sabbir-ahmed.jpg",
  "bio": "MD. Sabbir Ahmed is a Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He completed his Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering from Bangladesh University of Engineering and Technology (BUET) in 2025, where he achieved outstanding academic performance with University Merit Scholarships for 6 out of 7 semesters and Dean's List Awards for 3 out of 4 levels. He is currently pursuing his Master of Science (M.Sc.) in Electrical and Electronic Engineering at BUET. His undergraduate thesis focused on Monolayer MoSiGeN4 2D FET for sub-5-nm-gate Homogenous CMOS Devices under the supervision of Dr. Md. Kawsar Alam. He joined UAP as a Lecturer in July 2025, bringing fresh perspectives and cutting-edge knowledge to the department.",
  "email": "mr.md.sabbir.ahmed@uap-bd.edu",
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
      "year": "2020-2025"
    }
  ],
  "researchInterests": [
    "2D Field-Effect Transistors (FETs)",
    "Nanoscale CMOS Devices",
    "Semiconductor Device Physics",
    "Electronic Device Modeling"
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
      "description": "Undergraduate Thesis: Monolayer MoSiGeN4 2D FET for sub-5-nm-gate Homogenous CMOS Devices. Supervisor: Dr. Md. Kawsar Alam, Department of Electrical and Electronic Engineering, Bangladesh University of Engineering and Technology"
    },
    {
      "title": "Academic Scholarships & Awards",
      "organization": "Bangladesh University of Engineering and Technology (BUET)",
      "period": "2020-2025",
      "description": "University Merit Scholarship (6 out of 7 semesters), Dean's List Award (3 out of 4 levels)"
    }
  ],
  "academicProfiles": []
};

export default facultyData;
