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
  "id": "mr-shaikh-rashedur-rahman",
  "name": "Shaikh Rashedur Rahman",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 74,
  "image": "/images/faculties/mr-shaikh-rashedur-rahman.jpg",
  "bio": "Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. Specializes in power systems stability analysis, coherency identification in multi-machine power systems, and renewable energy integration with extensive research experience in transient stability assessment.",
  "email": "shaikh.rahman@uap-bd.edu",
  "phone": "+880-2-8431645",
  "room": "Room 410, EEE Building",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) in Electrical and Electronic Engineering (EEE)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2017-Present (Ongoing)"
    },
    {
      "degree": "Master of Science (M.Sc.) in Electrical and Electronic Engineering (EEE)",
      "institution": "Islamic University of Technology (IUT), Gazipur, Bangladesh",
      "year": "2014-2016"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering (EEE)",
      "institution": "University of Asia Pacific (UAP), Dhaka, Bangladesh",
      "year": "2008-2012"
    }
  ],
  "researchInterests": [
    "Stability Analysis of Multi-Machine Power Systems",
    "Coherency Identification in Power Systems",
    "Transient Stability Assessment",
    "Power System Analysis",
    "Renewable Energy Integration",
    "Solar Photovoltaic Systems",
    "Techno-Economic Analysis",
    "Smart Grid Technologies"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "April 2017 – Present",
      "description": "Teaching undergraduate and graduate courses in Electrical and Electronic Engineering"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "November 2012 – April 2017",
      "description": "Teaching undergraduate courses and conducting research in power systems"
    }
  ],
  "professionalMemberships": [],
  "recentPublications": {
    "journalPapers": [],
    "conferencePapers": [
      {
        "type": "Conference",
        "title": "Enhancement of Transient Stability for Coherent Generators in Multi-Machine Power Systems Using Static Var Compensator",
        "authors": "S. R. Rahman, M. A. R. Miah and Mst. J. A. Jyoty",
        "venue": "10th International Conference on Power Systems (ICPS) – 2023",
        "year": 2023,
        "date": "December 13-15, 2023",
        "location": "Cox's Bazar, Bangladesh"
      },
      {
        "type": "Conference",
        "title": "Techno-economic assessment of solar photovoltaic (PV) waste management in Bangladesh",
        "authors": "M. A. R. Miah, M. S. Islam, M. F. Ahmed, S. Rokon and S. R. Rahman",
        "venue": "6th International Conference on Clean Energy and Technology 2023",
        "year": 2023,
        "date": "June 7-8, 2023",
        "location": "Bayview Hotel Penang, Malaysia"
      },
      {
        "type": "Conference",
        "title": "Sustainable Building Energy Conservation and Efficiency Management Using IOT",
        "authors": "Md. M. Khan, S. M. Z. H. Sakil, M. A. R. Miah, Md. S. Rana, S. R. Rahman",
        "venue": "International Conference on Electronics and Renewable Systems (ICEARS 2022)",
        "year": 2022,
        "date": "March 16-18, 2022",
        "location": "Tuticorin, India"
      },
      {
        "type": "Conference",
        "title": "Techno-Economic Analysis of Floating Solar PV Integrating with Hydropower Plant in Bangladesh",
        "authors": "M. A. R. Miah, S. R. Rahman, R. Kabir",
        "venue": "2021 IEEE Green Technologies conference",
        "year": 2021,
        "date": "April 7-9, 2021",
        "location": "USA (Virtual Conference)"
      },
      {
        "type": "Conference",
        "title": "Techno-Economic Assessment of Net Energy Metering Implementation for Rooftop Solar PV in a Commercial Building in Bangladesh",
        "authors": "M. A. R. Miah, S. R. Rahman, R. Kabir",
        "venue": "2020 4th International Conference on Green Energy and Applications (ICGEA 2020)",
        "year": 2020,
        "date": "March 7-9, 2020",
        "location": "Singapore"
      },
      {
        "type": "Conference",
        "title": "Determining Critical Clearing Time in Transient Stability Assessment for Hybrid Power System",
        "authors": "S. R. Rahman, M. A. R. Miah, Z. N. Tarif, Mst. J. A. Jyoty",
        "venue": "2019 IEEE 6th International Conference on Engineering Technologies and Applied Sciences (ICETAS)",
        "year": 2019,
        "date": "December 20-21, 2019",
        "location": "Kuala Lumpur, Malaysia"
      },
      {
        "type": "Conference",
        "title": "A Novel Method of Coherency Identification for Multi-Machine Power System",
        "authors": "S. R. Rahman, & Md. S. Ullah",
        "venue": "2019 IEEE 6th International Conference on Engineering Technologies and Applied Sciences (ICETAS)",
        "year": 2019,
        "date": "December 20-21, 2019",
        "location": "Kuala Lumpur, Malaysia"
      }
    ]
  },
  "administrativeRoles": [],
  "academicProfiles": [
    {
      "platform": "Google Scholar",
      "url": "https://scholar.google.com/citations?user=example"
    },
    {
      "platform": "ResearchGate",
      "url": "https://www.researchgate.net/profile/Shaikh-Rahman"
    }
  ]
};

export default facultyData;
