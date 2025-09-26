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
  "id": "ms-munmun-akter",
  "name": "Ms Munmun Akter",
  "title": "Lecturer",
  "role": "Lecturer",
  "points": 51,
  "image": "/images/faculties/ms-munmun-akter.jpg",
  "bio": "Ms. Munmun Akter is a dedicated Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. She is currently pursuing her Master of Science (M.Sc.) in Electrical and Electronic Engineering from the Islamic University of Technology (IUT). She completed her Bachelor of Science (B.Sc.) in EEE from UAP with exceptional academic performance, earning the Chancellor's Gold Medal for securing the highest grade in her institution. Her research focuses on high gain rectangular microstrip patch antenna design and satellite communication systems. She has been actively involved in IEEE activities, serving as Meeting Coordinator for WIE, IEEE Bangladesh Section. Her academic excellence is reflected in her numerous scholarships and awards, including the Vice Chancellor's Scholarship throughout her undergraduate studies.",
  "email": "ms.munmun.akter@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Master of Science (M.Sc.) in Electrical and Electronic Engineering",
      "institution": "Islamic University of Technology (IUT)",
      "year": "2018-ongoing"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "University of Asia Pacific (UAP)",
      "year": "2012-2016"
    }
  ],
  "researchInterests": [
    "High Gain Rectangular Microstrip Patch Antenna Design",
    "Satellite Communication Systems",
    "Direct to Home (DTH) Broadcasting Systems",
    "Solar Cell Performance Analysis",
    "Optical Communication Systems",
    "Wavelength Division Multiplexing"
  ],
  "academicExperience": [
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "December 2018 – Present",
      "description": "Teaching undergraduate courses in Electrical and Electronic Engineering"
    },
    {
      "position": "Teaching Assistant",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "September 2017 – November 2018",
      "description": "Assisted in teaching and laboratory supervision"
    }
  ],
  "professionalMemberships": [
    "IEEE Membership",
    "Meeting Coordinator, Executive Committee; WIE, IEEE Bangladesh Section (2019-2021)"
  ],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "Influence of the Compositional Variation of ZnxCd1-xS (0≤x≤0.45) Buffer on the Performance of Cu2ZnSnSe4 Solar Cell: Simulation based Study",
      "authors": "Md Sazzadur Rahman, Munmun Akter, Suman Miah and Tasnia Hossain",
      "venue": "15th IEEE India Council International Conference (INDICON) 2018",
      "year": 2018,
      "url": "Amrita Vishwa Vidyapeetham, Combatore, Chennai, India"
    },
    {
      "type": "Conference",
      "title": "An Advanced Technical and Parametrical Comparison of Satellites in Asia Region with Uplink EIRP (dB) Vs. Transmitting Antenna configuration",
      "authors": "Munmun Akter, Md Sharukh Adnan Khan, Md Khandaker Sultan Mahmood, M. Abdullah Al Amin and Md. Khairul Alam",
      "venue": "4th IEEE International Conference On Advances In Computing, Communication & Automation (ICACCA) 2018",
      "year": 2018,
      "url": "Taylor's University, Malaysia"
    },
    {
      "type": "Journal",
      "title": "Simulation Analysis of intensity modulation for high speed N×40GB/S transmission over standard Single Mode Fiber using Wavelength Division Multiplexing",
      "authors": "Md Sharukh Adnan Khan, Munmun Akter, Md. Masum Howlader, Md. Moshiur Rahman, Md Tanbhir Hoq, CV Aravind",
      "venue": "Journal of Engineering Science and Technology (JESTEC), School of Engineering, Taylor's University, Malaysia",
      "year": 2018
    }
  ],
  "administrativeRoles": [
    {
      "title": "Meeting Coordinator, Executive Committee",
      "organization": "WIE, IEEE Bangladesh Section",
      "period": "2019-2021",
      "description": "Coordinated meetings and activities for Women in Engineering (WIE) initiative"
    }
  ],
  "academicProfiles": []
};

export default facultyData;
