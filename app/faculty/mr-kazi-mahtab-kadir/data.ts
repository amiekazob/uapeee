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
  "id": "mr-kazi-mahtab-kadir",
  "name": "Kazi Mahtab Kadir",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 67,
  "image": "/images/faculties/mr-kazi-mahtab-kadir.jpg",
  "bio": "Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He holds a Master of Engineering (M.Engg.) in Electrical Engineering from the University of Houston, USA, and a Bachelor of Science in Electrical and Electronic Engineering from the Islamic University of Technology (IUT). He has professional experience in the USA as an Electrical Engineer at Antares USA and as a Co-Op Intern at Halliburton Energy Services. He is certified as an Engineer in Training (EIT) by the Texas Board of Professional Engineers and has received multiple academic scholarships including the OIC scholarship and Texas Public Educational Grant.",
  "email": "mr.kazi.mahtab.kadir@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Master of Engineering (M.Engg.) in Electrical Engineering",
      "institution": "University of Houston, Houston, TX, USA",
      "year": "2011-2013"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "Islamic University of Technology (IUT)",
      "year": "2007-2010"
    }
  ],
  "researchInterests": [
    "Electrical Engineering",
    "Power Systems",
    "Electronics",
    "Engineering Education"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific, Bangladesh",
      "period": "January 2024 - Present",
      "description": "Teaching undergraduate courses in electrical and electronic engineering"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific, Bangladesh",
      "period": "October 2016 - January 2024",
      "description": "Teaching and academic responsibilities in electrical and electronic engineering"
    },
    {
      "position": "Electrical Engineer",
      "institute": "Antares USA, Spring, TX, USA",
      "period": "February 2014 - March 2015",
      "description": "Professional engineering work in electrical systems"
    },
    {
      "position": "Co-Op (Intern)",
      "institute": "Sperry Technology Electrical, Halliburton Energy Services, Houston, TX, USA",
      "period": "June 2013 - December 2013, May 2012 - August 2012",
      "description": "Internship experience in electrical engineering and energy services"
    },
    {
      "position": "Lab Assistant",
      "institute": "College of Education, University of Houston, Houston, TX, USA",
      "period": "August 2012 - May 2013, February 2012 - May 2012",
      "description": "Laboratory assistance and educational support"
    }
  ],
  "professionalMemberships": [
    "Engineer in Training (EIT) - Texas Board of Professional Engineers"
  ],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "Integration of Cloud Computing: A New Transition for Bangladesh Power Grid Empowerment from Reliability to Grid Resiliency",
      "authors": "Kazi Mahtab Kadir, Masum Howlader, Mirza Mursalin Iqbal, Md Khairul Alam, Md Khandaker Sultan Mahmood, & Dewan Ashikur Rahaman",
      "venue": "Energy Systems",
      "year": 2023,
      "doi": "10.1007/s12667-023-00632-w"
    },
    {
      "type": "Journal",
      "title": "A COMPARATIVE ANALYSIS OF SMART EDUCATION HUB IN TERMS OF COST-EFFECTIVE INFRASTRUCTURE MODELLING AND SYSTEM DESIGN",
      "authors": "Khatun, S., Khan, S. A., Kadir, K. M., Paul, A., Hassan, S., Aziz, A., & Taj, A.",
      "venue": "Journal of Engineering Science and Technology Special Issue on IEC2022",
      "year": 2022,
      "url": "https://jestec.taylors.edu.my/Special%20Issue%20IEC2022/IEC2022_19.pdf"
    },
    {
      "type": "Conference",
      "title": "Analysis of Different Mobile IoT Models in Smart City Planning: A Technical Investigation of Software & Hardware Architecture",
      "authors": "M. A. Kabir, M. S. A. Khan, Kazi Mahtab Kadir, C. Y. Choon, F. Jefreen and M. Hasanuzzaman",
      "venue": "2021 IEEE 12th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON)",
      "year": 2021,
      "doi": "10.1109/UEMCON53757.2021.9666688"
    },
    {
      "type": "Journal",
      "title": "An analytical approach to real-time cloud services on IoT-based applications for smart city planning",
      "authors": "M.D. Shahrukh Adnan Khan, Kazi Mahtab Kadir, Md. Khairul Alam, Shoaib Mahmud, Shah Reza Mohammad Fahad Ul Hossain, Md. Pabel Sikder, Fiza Jefreen, Ainun Kamal",
      "venue": "International Journal of Grid and Utility Computing",
      "year": 2021,
      "doi": "10.1504/IJGUC.2021.120098"
    },
    {
      "type": "Journal",
      "title": "Forecasting of solar potential and investigation of voltage stability margin using FACTs device: a synopsis from Geography of Things perspective",
      "authors": "Masum Howlader, Khandaker Sultan Mahmood, Md.Golam Zakaria, Kazi Mahtab Kadir, Mirza Mursalin Iqbal",
      "venue": "International Journal of Grid and Utility Computing",
      "year": 2021,
      "doi": "10.1504/IJGUC.2021.120094"
    },
    {
      "type": "Journal",
      "title": "Technical Investigation on V2G, S2V, and V2I for Next Generation Smart City Planning",
      "authors": "Khan, M. S. A., Kadir, K. M., Mahmood, K. S., Alam, M. I. I., Kamal, A., Bashir, M. M. A.",
      "venue": "Journal of Electronic Science and Technology",
      "year": 2019,
      "doi": "10.1016/j.jnlest.2020.100010"
    },
    {
      "type": "Conference",
      "title": "Investigation of Advanced Implementation of Permanent Magnet Synchronous Generator in Renewable Energy",
      "authors": "Adnan Khan, M. S., Kadir, K. M., Hasan, M. R., Ahmed Khan, R., Raqibul, M., & Mohammad, N.",
      "venue": "2018 IEEE 7th International Conference on Power and Energy (PECon)",
      "year": 2018,
      "doi": "10.1109/PECON.2018.8684116"
    },
    {
      "type": "Journal",
      "title": "Implementation of Efficient B2G and V2G in Practical Cases",
      "authors": "Khan, M. S. A., Kadir, K. M., Alam, M. I. I., Alam, M. K., Wong, J., Iqbal, A., … Iqbal, A.",
      "venue": "Journal of Electronic Science and Technology",
      "year": 2018,
      "doi": "10.11989/JEST.1674-862X.80715105"
    },
    {
      "type": "Conference",
      "title": "Energy Saving by Limiting Standby Power Loss and Using Smart Power Control",
      "authors": "S.M. Masudur Rahman Al-Arif, Kazi Mahtab Kadir, Md. Adnan Morshed, A.H.M. Iftekharul Ferdous, Md. Mahabubul Alam and Md. Shahidul Haque",
      "venue": "International Conference on Information Management, Innovation Management and Industrial Engineering",
      "year": 2011,
      "doi": "10.1109/ICIII.2011.265"
    },
    {
      "type": "Conference",
      "title": "Energy saving by automatic control of power in simple home appliances",
      "authors": "Kazi Mahtab Kadir, Md. Saleh Forhad, Mahran Muhammad Fadlullah, Niamul Quader, Md. Masudur Rahman Al-Arif and Maruf Ahmed Dhali",
      "venue": "IEEE 3rd International Conference on Communication Software and Networks (ICCSN)",
      "year": 2011,
      "doi": "10.1109/ICCSN.2011.6014058"
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
