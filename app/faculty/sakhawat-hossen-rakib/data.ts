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

  researchExperience?: {
    period: string;
    focus: string;
    supervisor?: string;
    institution?: string;
  }[];

  academicScholarships?: {
    period: string;
    award: string;
    details?: string;
  }[];

  awards?: {
    year: string;
    title: string;
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
  "id": "sakhawat-hossen-rakib",
  "name": "Sakhawat Hossen Rakib",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 65,
  "image": "/images/faculties/sakhawat-hossen-rakib.jpg",
  "bio": "Lecturer in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. Specializes in biomedical engineering, sensor design, and disinfection systems with extensive research experience in healthcare technology and antimicrobial systems.",
  "email": "sakhawat.hossen.rakib@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Master of Science (M.Sc.) in Electrical and Electronic Engineering",
      "institution": "Islamic University of Technology (IUT)",
      "year": "2023-Ongoing"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "University of Asia Pacific, Bangladesh",
      "year": "2011-2015"
    }
  ],
  "researchInterests": [
    "Biomedical Engineering",
    "Sensor Design and Development",
    "Antimicrobial Resistant (AMR) Systems",
    "Disinfection Technology",
    "Medical Device Development",
    "IoT-based Healthcare Systems",
    "Microwave Frequency Applications",
    "UVC Disinfection Systems"
  ],
  "academicExperience": [
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific, Bangladesh",
      "period": "September 2016 – Current"
    },
    {
      "position": "Research Assistant",
      "institute": "Biomedical Physics and Technology, University of Dhaka",
      "period": "2015-2016"
    }
  ],
  "researchExperience": [
    {
      "period": "2024 to present",
      "focus": "Antimicrobial Resistant (AMR) decontamination system design for spaceships: Research conducting for Nigeria's first crewed space mission"
    },
    {
      "period": "2024 to present",
      "focus": "A novel sensor design to detect MPOX from barber equipment: Research Conducting for monkey pox virus threat prevention in African territory"
    },
    {
      "period": "2024 to present",
      "focus": "Designing of a novel Urine sensor for detecting Kidney stones using microwave frequency"
    },
    {
      "period": "2021 to present",
      "focus": "Wastewater monitoring with novel physical disinfection system design"
    },
    {
      "period": "2023-2024",
      "focus": "Electrolyte Monitoring sensor design for palmer hyper hidrosis patients"
    },
    {
      "period": "2022-2023",
      "focus": "Development of Mems Based CO2 sensor for abdominal CO2 sensing during laparoscopic cholecystectomy"
    },
    {
      "period": "2022-2023",
      "focus": "UVC Disinfection system development by ambulances for emergency patient transfer having Noncommunicable diseases to reduce cross contamination"
    },
    {
      "period": "2021-2022",
      "focus": "Covid-19 virus decontamination system development for respirator equipment disinfection using UVC"
    },
    {
      "period": "2021-2022",
      "focus": "A novel air purifier design for disinfecting recirculating air in Air conditioner: Study conducted for NICU of MR Khan Child Hospital"
    },
    {
      "period": "2021-2022",
      "focus": "Disinfection unit development to minimize the cross-contamination of COVID-19 in transports"
    },
    {
      "period": "2020-2021",
      "focus": "Emergency mechanical Ventilator development for critically ill patient transfer having Noncommunicable diseases"
    },
    {
      "period": "2019-2020",
      "focus": "Negative pressure Isolation canopy design and development for Covid-19 patients to reduce infection and cross-contamination"
    },
    {
      "period": "2019-2020",
      "focus": "Positive pressure Isolation canopy development for Burn patients to reduce infection in burn arears and decrease cross-contamination"
    },
    {
      "period": "2016-2017",
      "focus": "Design of IoT based Compact patient Motoring device: ECG, EOG, BMI, Heart Rate, SpO2"
    },
    {
      "period": "2016-2017",
      "focus": "Development of SpO2 Meter for detecting sleep apnea"
    },
    {
      "period": "2015-2016",
      "focus": "Electro-Oculogram Based Control System Development for Paralyzed Person"
    },
    {
      "period": "2014-2015",
      "focus": "Design and development of 3D printer myoelectric Prosthetic Hand for Upper limb amputees"
    }
  ],
  "academicScholarships": [
    {
      "period": "Multiple semesters",
      "award": "VC's merit waiver",
      "details": "VC's Merit list for merit position: 1/1,1/2,2/1,2/2,4/1,4/2"
    },
    {
      "period": "Multiple semesters",
      "award": "Dean's merit waiver",
      "details": "Dean's Merit list for merit position: 3/1,3/2"
    }
  ],
  "awards": [
    {
      "year": "2015",
      "title": "Chancellor Gold Medal",
      "description": "Chancellor Gold Medal for securing highest Merit position during Undergrad at UAP"
    },
    {
      "year": "2015",
      "title": "Champion - Bangladesh Physics Olympiad",
      "description": "1st position in project exhibition Bangladesh Physics Olympiad at Dhaka University, Curzon-hall"
    },
    {
      "year": "2016",
      "title": "1st Runner up - Bangladesh Electronics Olympiad",
      "description": "Project exhibition 1st Bangladesh Electronics Olympiad at Dhaka University, Curzon-hall"
    },
    {
      "year": "2014",
      "title": "2nd Runner up - Engineers Day",
      "description": "Project exhibition at '67th Engineers Day' 2015 at institution of engineers Bangladesh (IEB)"
    },
    {
      "year": "2017",
      "title": "Champion - Power and Energy Hackathon 2017"
    },
    {
      "year": "2019",
      "title": "Champion - Power and Energy Hackathon 2018"
    }
  ],
  "professionalMemberships": [
    "Member IEEE",
    "Member IEB"
  ],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "Computational identification of Vernonia cinerea-derived phytochemicals as potential inhibitors of nonstructural protein 1 (NSP1) in dengue virus serotype-2",
      "authors": "Hossain, M.S., Hasnat, S., Akter, S., Mim, M.M., Tahcin, A., Hoque, M., Sutradhar, D., Keya, M.A.A., Sium, N.R., Hossain, S. and Masuma, R.",
      "venue": "Frontiers in Pharmacology",
      "year": 2024,
      "doi": "p.1465827"
    },
    {
      "type": "Conference",
      "title": "Design of a rectangular patch antenna-based electrolyte sensor for palmer hyperhidrosis patients",
      "authors": "R. Sakhawat, F. Islam, and T. Reza",
      "venue": "International Conference on Computer and Information Technology (ICCIT)",
      "year": 2024
    },
    {
      "type": "Journal",
      "title": "Integrated strategy: Identifying SARS-CoV-2 strains in communities via wastewater monitoring and clinical diagnosis",
      "authors": "Islam, Md Aminul; Rakib, Sakhawat Hossen; Bhattacharya, Prosun; Jakariya, Md; Haque, Md Masudul; Tiwari, Anand",
      "venue": "The Science of the total environment",
      "year": 2024,
      "doi": "912 168617"
    },
    {
      "type": "Conference",
      "title": "Design of a low-cost Ultraviolet Disinfection unit to minimize the cross-contamination of COVID-19 in transport",
      "authors": "Rakib, Sakhawat Hossen; Masum, SM; Farhana, Atika; Islam, Md Aminul; Islam, Md Fokhrul; Reza, Md Taslim",
      "venue": "2022 International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE)",
      "year": 2022
    },
    {
      "type": "Conference",
      "title": "Design and Development of a low-cost Ultraviolet Disinfection system to reduce the cross infection of SARS-CoV-2 in ambulances",
      "authors": "Rakib, Sakhawat Hossen; Masum, SM; Patwari, Md Rashadul Islam; Fahima, Rafatul Alam; Farhana, Atika; Islam, Md Aminul",
      "venue": "2021 International Conference on Electronics, Communications and Information Technology (ICECIT)",
      "year": 2021
    },
    {
      "type": "Conference",
      "title": "Design of microstrip patch sensor for non-invasive body electrolyte monitoring",
      "authors": "Rakib, Sakhawat Hossen; Reza, Md Taslim; Islam, Md Fokhrul",
      "venue": "2020 IEEE Region 10 Symposium (TENSYMP)",
      "year": 2020
    },
    {
      "type": "Conference",
      "title": "Air Quality Index Prediction Using Azure IoT & Machine Learning for Smart Cities",
      "authors": "Sani, Shaon Hossain; Shopon, Md; Rakib, Sakhawat Hossen",
      "venue": "Proceedings of International Conference on Computational Intelligence, Data Science and Cloud Computing: IEM-ICDC 2020",
      "year": 2021
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
