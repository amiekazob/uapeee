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
  "id": "mr-md-khairul-alam",
  "name": "Md. Khairul Alam",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 70,
  "image": "/images/faculties/mr-md-khairul-alam.jpg",
  "bio": "Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. Currently pursuing PhD in EEE from BUET. Specializes in power electronics, photovoltaic applications, and intelligent traffic control systems. Has extensive experience in developing commercial IoT products and providing professional consultancy services.",
  "email": "khairul@uap-bd.edu",
  "phone": "01719440345",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) in Electrical and Electronic Engineering (Ongoing)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2020-Present"
    },
    {
      "degree": "Master of Science (M.Sc.) in Electrical and Electronic Engineering",
      "institution": "Islamic University of Technology, OIC",
      "year": "2015-2019"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "University of Asia Pacific",
      "year": "2006-2010"
    }
  ],
  "researchInterests": [
    "Power Electronics",
    "Photovoltaic Applications",
    "Intelligent Traffic Control Systems",
    "Internet of Things (IoT)",
    "Embedded Systems",
    "Microcontroller Programming",
    "Smart Grid Technology",
    "Home Automation Systems"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "University of Asia Pacific, Department of EEE",
      "period": "June 2020 – till date",
      "description": "Teaching undergraduate and graduate courses, conducting research in power electronics and IoT applications"
    },
    {
      "position": "Lecturer",
      "institute": "University of Asia Pacific, Department of EEE",
      "period": "October 2010 – June 2020",
      "description": "Teaching undergraduate courses and conducting research in electrical and electronic engineering"
    }
  ],
  "professionalMemberships": [],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "Design and Analysis of Close Loop Interleaved Boost Converter with Arduino based Soft PI Controller for Photovoltiac Application",
      "authors": "Md. Khairul Alam, Prof. Dr. Md. Ashraful Hoque",
      "venue": "Third IEEE International Conference on Electrical, Computer and Communication Technologies (IEEE ICECCT 2019)",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "INTELLIGENT TRAFFIC CONTROL BY CCTV, PIC16F877A MICROCONTROLLER AND IR ROAD SENSOR",
      "authors": "Md. Nur-Us-Safa, Md. Khairul Alam, Umme Nur Mafiha Majid, Shawkat Matin",
      "venue": "Conference on Engineering Research, Innovation and Education 2011, CERIE 2011",
      "year": 2011
    },
    {
      "type": "Journal",
      "title": "An Approach Towards Establishing Novel Photovoltaic Solar Cell Simulator",
      "authors": "Muhammad Towhidur Rahman, Mohammad Rokonuzzaman, M. Abdullah AlAmin, Ahmed Al Mansur, Md. Khairul Alam",
      "venue": "Int. J. on Recent Trends in Engineering and Technology",
      "year": 2011
    },
    {
      "type": "Journal",
      "title": "Technology Fact Sheet on Smart Grid: Techno Economic Review",
      "authors": "Muhammad Ahad Rahman Miah, Moshiur Rahman Sourov, Md. Khairul Alam, Shaikh Rashedur Rahman",
      "venue": "International Journal of Emerging Technology and Advanced Engineering (IJETAE)",
      "year": 2014
    }
  ],
  "administrativeRoles": [
    {
      "title": "Consultant",
      "organization": "Asian Traffic Technology Ltd.",
      "period": "Professional Consultancy",
      "description": "Developing Toll Management System"
    },
    {
      "title": "Principal Investigator",
      "organization": "Ministry of Posts, Telecommunications and Information Technology",
      "period": "Funded Project",
      "description": "Developed a commercial home automation product named OHOM IoT Bulb Holder"
    }
  ],
  "academicProfiles": []
};

export default facultyData;
