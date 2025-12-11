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
  "id": "dewan-ashikur-rahaman",
  "name": "Dewan Ashikur Rahaman",
  "title": "Lecturer",
  "role": "Lecturer",
  "points": 50,
  "image": "/images/faculties/dewan-ashikur-rahaman.jpg",
  "bio": "Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He is a distinguished alumnus of UAP, having completed both his B.Sc. and currently pursuing his M.Sc. from the same institution. He has been recognized with multiple Vice Chancellor Awards and the prestigious Gold Medal Award. His research focuses on power systems, harmonics mitigation, and smart grid technologies.",
  "email": "ashik@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Master of Science (M.Sc.) in Electrical and Electronic Engineering (Ongoing)",
      "institution": "University of Asia Pacific (UAP)",
      "year": "2022 - Present"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "University of Asia Pacific (UAP)",
      "year": "2018 - 2022"
    }
  ],
  "researchInterests": [
    "Power System Analysis",
    "Grid Reliability Assessment",
    "Harmonics Mitigation",
    "Multilevel Inverters",
    "Smart Grid Technologies",
    "Power System Contingencies",
    "Cloud Computing in Power Systems",
    "Smart City Modeling"
  ],
  "academicExperience": [
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "September 2024 - Present",
      "description": "Teaching undergraduate courses and conducting research in power systems and smart grid technologies"
    },
    {
      "position": "Teaching Assistant (TA)",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "August 2022 - July 2024",
      "description": "Assisted in teaching undergraduate courses and laboratory sessions"
    }
  ],
  "professionalMemberships": [],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "Holistic Methodology for Analyzing Power System Contingencies of 33KV Network for Grid Reliability Assessment: A Comprehensive Study",
      "authors": "D.A.Rahaman, M.M.Pathan, M.Y.Hasan, M.M.Howlader, M.S.Dewan, A.Alamgir",
      "venue": "7th International Symposium on Innovative Approaches in Smart Technologies, Istanbul, Turkiye",
      "year": 2023
    },
    {
      "type": "Journal",
      "title": "Integration of Cloud Computing: A New Transition for Bangladesh Power Grid Empowerment from Reliability to Grid Resiliency",
      "authors": "K.M.Kadir, M.M.Howlader, M.M.Iqbal, M.K.Alam, M.K.S.Mahmood, D.A.Rahaman",
      "venue": "Energy Systems",
      "year": 2023
    },
    {
      "type": "Journal",
      "title": "PRE- AND POST-COVID-19 STUDY OF SMART LIVING AND DEMAND ANALYSIS - A PART OF SMART CITY MODELLING",
      "authors": "M. S. A. Khan, M. H. A. Sakib, S. Khatun, M. N. A. Taj, M. J. Islam, T. Akter, D. A. Rahaman",
      "venue": "Journal of Engineering Science and Technology, Special Issue on IEC2022",
      "year": 2022
    },
    {
      "type": "Conference",
      "title": "Harmonics Mitigation in Multilevel Inverter Controlled by Equal-Step Angle and Sinusoidal Switching Angle Strategy with Increased Number of Voltage Levels Using PSIM Software",
      "authors": "D.A.Rahaman, T.K.Chakraborty",
      "venue": "International Symposium on Electrical, Electronics and Information Engineering (ISEEIE), Leicester, England",
      "year": 2024
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
