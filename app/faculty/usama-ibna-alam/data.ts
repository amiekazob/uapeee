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

  researchExperience?: {
    period: string;
    focus: string[];
  }[];

  academicScholarships?: string[];

  academicProfiles?: AcademicProfile[];
};


export const facultyData: FacultyMember = {
  "id": "usama-ibna-alam",
  "name": "Usama Ibna Alam",
  "title": "Lecturer",
  "role": "Lecturer",
  "points": 49,
  "image": "/images/faculties/usama-ibna-alam.jpg",
  "bio": "Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. His research focuses on Large Language Models applications in education and translation, AI for wireless communication systems, and multimodal systems development.",
  "email": "usama.ibna.alam@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Master of Science (M.Sc.) - Ongoing",
      "institution": "Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      "year": "Ongoing"
    },
    {
      "degree": "Bachelor of Science (B.Sc.)",
      "institution": "Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      "year": "2024"
    }
  ],
  "researchInterests": [
    "Large Language Models in Education and Translation",
    "Artificial Intelligence for Wireless Communication Systems",
    "Multimodal Systems Development",
    "Natural Language Processing",
    "Machine Learning Applications",
    "Bengali Language Processing",
    "Computer Vision and OCR",
    "Voice-Controlled Systems"
  ],
  "academicExperience": [
    {
      "position": "Lecturer",
      "institute": "University of Asia Pacific",
      "period": "Jan 2024 - Present",
      "description": "Teaching and research in Electrical and Electronic Engineering"
    }
  ],
  "professionalMemberships": [],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "Instruction-Guided Self-Correction in LLMs for English–Bengali Translation",
      "authors": "Usama Ibna Alam, Mohammad Ariful Haque",
      "venue": "International Conference on Electrical Information and Communication Technology (EICT)",
      "year": 2024,
      "doi": "Submitted"
    },
    {
      "type": "Conference",
      "title": "Enhanced Generative Question Answering for Language Learning Using Finetuned LLMs and Reinforcement Learning",
      "authors": "Usama Ibna Alam, Sudipto Pramanik, Mohammad Ariful Haque",
      "venue": "International Conference on Electrical Information and Communication Technology (EICT)",
      "year": 2024,
      "doi": "Submitted"
    },
    {
      "type": "Conference",
      "title": "From Archives to Accessibility: An OCR-Enhanced, End-to-End LLM Pipeline for Classical Bengali Text Modernization",
      "authors": "Usama Ibna Alam, Umme Anom Nupur",
      "venue": "International Conference on Electrical Information and Communication Technology (EICT)",
      "year": 2024,
      "doi": "Submitted"
    },
    {
      "type": "Conference",
      "title": "A Multimodal Bengali Voice-Controlled Cleaning Robot with Wake-Word Detection",
      "authors": "Usama Ibna Alam, Umme Anom Nupur",
      "venue": "International Conference on Electrical Information and Communication Technology (EICT)",
      "year": 2024,
      "doi": "Submitted"
    },
    {
      "type": "Conference",
      "title": "Face Recognition Based Automated Approval For Secure Entry System",
      "authors": "Usama Ibna Alam",
      "venue": "International Conference on Computer and Information Technology (ICCIT)",
      "year": 2024,
      "doi": "Submitted"
    }
  ],
  "administrativeRoles": [],
  "researchExperience": [
    {
      "period": "May 2023 - Present",
      "focus": [
        "Applications of Large Language Models in Education and Translation",
        "Enhancing flexibility of Translation Models"
      ]
    },
    {
      "period": "Sep 2025 - Present",
      "focus": [
        "Artificial Intelligence for Wireless Communication Systems"
      ]
    }
  ],
  "academicScholarships": [
    "Dean's List Scholarship, BUET, Dhaka, Bangladesh",
    "University Merit Scholarship, BUET, Dhaka, Bangladesh",
    "HSC board Scholarship (First grade), Dhaka Education Board, Bangladesh",
    "SSC board Scholarship (First grade), Chittagong Education Board, Bangladesh",
    "Junior Scholarship (Talent pool), Chittagong Education Board, Bangladesh",
    "Primary Scholarship (Talent pool), Chittagong Education Board, Bangladesh"
  ],
  "academicProfiles": []
};

export default facultyData;
