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
  "id": "mr-khandaker-sultan-mahmood",
  "name": "Mr Khandaker Sultan Mahmood",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 73,
  "image": "/images/faculties/mr-khandaker-sultan-mahmood.jpg",
  "bio": "Mr. Khandaker Sultan Mahmood is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He has been serving the department since 2012, initially as a Lecturer and later promoted to Assistant Professor in 2017. He is currently pursuing his Master of Science (M.Sc.) in Electrical and Electronic Engineering from Islamic University of Technology (IUT). His research interests include wireless communication systems, LDPC codes, smart grid technologies, and renewable energy integration. He has been actively involved in various professional activities including organizing technical events and serving as an examiner for national competitions.",
  "email": "mr.khandaker.sultan.mahmood@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Master of Science (M.Sc.) in Electrical and Electronic Engineering",
      "institution": "Islamic University of Technology (IUT)",
      "year": "2018-Present (Ongoing)"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "Islamic University of Technology (IUT)",
      "year": "2008-2011"
    }
  ],
  "researchInterests": [
    "Wireless Communication Systems",
    "Low Density Parity Check (LDPC) Codes",
    "Smart Grid Technologies",
    "Renewable Energy Integration",
    "Power System Stability",
    "Optical Fiber Communication"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific, Bangladesh",
      "period": "October 2017 - Present",
      "description": "Teaching undergraduate courses and conducting research in electrical and electronic engineering"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific, Bangladesh",
      "period": "April 2012 - October 2017",
      "description": "Taught various undergraduate courses in electrical and electronic engineering"
    },
    {
      "position": "Research Assistant",
      "institute": "Islamic University of Technology (IUT)",
      "period": "2010-2011",
      "description": "Conducted research on Efficient Design of Decoding Algorithms Using Low Density Parity Check (LDPC) Codes for Wireless Networks under supervision of Dr. Md. Rakibul Islam"
    }
  ],
  "professionalMemberships": [
    "Invigilator and Examiner, National Astro-Olympiad conducted by Bangladesh Astronomical Association",
    "Former Vice President, IEEE Student Branch of Islamic University of Technology (IUT)",
    "Organizer, 2nd National ICT-FEST Gaming Contest at IUT",
    "Organizer, technical visit to Enerypac Power Generation Ltd., Savar for IEEE Student Branch of IUT"
  ],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "Integration of cloud computing: a new transition for Bangladesh power grid empowerment from reliability to grid resiliency",
      "authors": "Kadir, K. M., Howlader, M. M., Iqbal, M. M., Alam, M. K., Mahmood, M. K. S., & Rahaman, D. A.",
      "venue": "Energy Systems",
      "year": 2023,
      "doi": "10.1007/s12667-023-00632-w"
    },
    {
      "type": "Journal",
      "title": "Technical investigation on V2G, S2V, and V2I for next generation smart city planning",
      "authors": "M. Adnan Khan, K. Kadir, K. S. Mahmood, M. Ibne Alam, A. Kamal and M. Al Bashir",
      "venue": "Journal of Electronic Science and Technology",
      "year": 2019,
      "doi": "10.1016/j.jnlest.2020.100010"
    },
    {
      "type": "Journal",
      "title": "Forecasting of solar potential and investigation of voltage stability margin using facts device: a synopsis from geography of things perspective",
      "authors": "Howlader, M., Mahmood, K. S., Zakaria, M., Kadir, K. M., & Iqbal, M. M.",
      "venue": "International Journal of Grid and Utility Computing",
      "year": 2021,
      "doi": "10.1504/ijguc.2021.120094"
    },
    {
      "type": "Conference",
      "title": "Differential Quadrature Phase Shift Keying Modulation in Optical Fiber Communication- Modelling, Design, Case Implementation and Limitation",
      "authors": "Md Shahrukh Adnan Khan, Mirza Mursalin Iqbal, Khandaker Sultan Mahmood, Anjuman Ara Anee, Md. Sazzadur Rahman",
      "venue": "ICACCA-2018, IEEE",
      "year": 2018
    },
    {
      "type": "Conference",
      "title": "An Advanced Technical and Parametrical Comparison of Satellites in Asia Region with Uplink EIRP (dB) Vs.Transmitting Antenna Configuration",
      "authors": "Munmun Akter, Md Shahrukh Adnan Khan, Khandaker Sultan Mahmood, Mirza Mursalin Iqbal and Aravind CV",
      "venue": "ICACCA-2018, IEEE",
      "year": 2018
    },
    {
      "type": "Conference",
      "title": "An Experimental Study of Cascaded H-Bridge Multilevel Inverter for Obtaining Multiple Voltage Waveforms Containing Different Number of Levels",
      "authors": "A. Anan, T. K. Chakraborty, K. S. Mahmood",
      "venue": "IEEE 10th International Symposium on Power Electronics for Distributed Generation Systems",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "A Novel Intelligent Control System Incorporated with Hybrid Energy Storage Device for Working in Low Wind Areas",
      "authors": "MD Shahrukh Adnan Khan, M A. Al Amin, M. Rokonuzzaman, K. S. Mahmood, CV Aravind",
      "venue": "7th IEEE International Conference on Smart Grid and Clean Technologies",
      "year": 2018
    },
    {
      "type": "Conference",
      "title": "A Single-Phase Cascaded H-Bridge Inverter with Reduced Switching Devices and Harmonics",
      "authors": "A. Anan, T. K. Chakraborty, K. S. Mahmood",
      "venue": "6th IEEE International Conference on Smart Energy Grid Engineering",
      "year": 2018
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
