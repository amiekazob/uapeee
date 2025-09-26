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
  "id": "ms-salma-nazia-rahman",
  "name": "Salma Nazia Rahman",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 80,
  "image": "/images/faculties/ms-salma-nazia-rahman.jpg",
  "bio": "Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. Currently pursuing PhD in EEE from BUET with research focus on novel controller design using non-linear control strategies. Has extensive experience in power electronics, electronic ballasts, and biomedical signal processing.",
  "email": "ms.salma.nazia.rahman@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) in Electrical and Electronic Engineering (Ongoing)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2016-Present"
    },
    {
      "degree": "Master of Science in EEE (M.Sc.)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2008-2013"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "Rajshahi University of Engineering and Technology (RUET)",
      "year": "2002-2006"
    }
  ],
  "researchInterests": [
    "Non-linear control strategies",
    "Power electronics",
    "Electronic ballasts",
    "Power factor improvement",
    "Total harmonic distortion reduction",
    "Digital signal processing",
    "Renewable energy systems",
    "Biomedical signal processing"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific, Bangladesh",
      "period": "April 2011 – Till date"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific, Bangladesh",
      "period": "September 2006 – March 2011"
    }
  ],
  "researchExperience": [
    {
      "period": "2016-Present",
      "focus": "Novel Controller design using non-linear control strategies",
      "supervisor": "Prof. Dr. Ziaur Rahman Khan",
      "institution": "Department of EEE, BUET"
    },
    {
      "period": "2008-2013",
      "focus": "Improvement of Power Factor and Total Harmonic Distortion of Input Current for a Valley Fill Electronic Ballast",
      "supervisor": "Prof. Dr. Ziaur Rahman Khan",
      "institution": "Department of EEE, BUET"
    },
    {
      "period": "2005-2006",
      "focus": "Design and implementation of PC Based Digital Oscilloscope",
      "supervisor": "Prof. Dr. Md. Ashraful Haque",
      "institution": "Department of EEE, RUET"
    }
  ],
  "academicScholarships": [
    {
      "period": "2002-2006",
      "award": "Board of Governors (BOG) Gold Medal (University Gold Medal)"
    },
    {
      "period": "2002-2006",
      "award": "Board Scholarships awarded by Bangladesh Government"
    },
    {
      "period": "2002-2006",
      "award": "University merit list"
    },
    {
      "period": "2001",
      "award": "Gold Medal from Bangladesh International School & College, Jeddah",
      "details": "For highest distinctions in the institute in H.S.C examination"
    },
    {
      "period": "1999",
      "award": "Gold Medal from Bangladesh International School & College, Jeddah",
      "details": "For distinctions in the institute in S.S.C examination"
    }
  ],
  "professionalMemberships": [],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "Investigating the Potential of a Solar Plant at Payra Port in Revolutionizing Bangladesh's Energy Landscape",
      "authors": "S. M. Masum and S. N. Rahman",
      "venue": "2023 8th International Engineering Conference on Renewable Energy & Sustainability (ieCRES), Gaza, Palestine",
      "year": 2023,
      "doi": "10.1109/ieCRES57315.2023.10209485"
    },
    {
      "type": "Conference",
      "title": "Performance analysis and simulation design of a soft switching Cuk DC/DC converter with controllers",
      "authors": "S. M. Masum, S. N. Rahman, M. M. Haque and M. S. Rana",
      "venue": "2022 IEEE 2nd International Maghreb Meeting of the Conference on Sciences and Techniques of Automatic Control and Computer Engineering (MI-STA)",
      "year": 2022,
      "doi": "10.1109/MI-STA54861.2022.9837686"
    },
    {
      "type": "Journal",
      "title": "Comparative Study on Thyristor and Rectifier Circuit Based DC Motor Control with Improved Power Factor and Total Harmonic Distortion",
      "authors": "Rahman, Salma Nazia, Tanzina Akter, Mirza Muhammad Yeamin Hossain, and Md Abdullah Al Mahmud",
      "venue": "Science Journal of Circuits, Systems and Signal Processing",
      "year": 2020
    },
    {
      "type": "Journal",
      "title": "A Security System for Kindergarten School Using RFID Technology",
      "authors": "Rahman, Salma Nazia, Shikder Shafiul Bashar, Md Abdullah Al Mahmud, Md Sazal Miah, AHM Zadidul Karim, and Maliha Marium",
      "venue": "Journal of Computer and Communications",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Reduction of line-current total harmonic distortion (THD) of a Valley Fill electronic ballast",
      "authors": "Salma Nazia Rahman, F. Rabbi and M. Ziaur Rahman Khan",
      "venue": "2011 International Conference on Electronic Devices, Systems and Applications (ICEDSA), Kuala Lumpur",
      "year": 2011
    },
    {
      "type": "Journal",
      "title": "An Alternative Approach to Wind Power Generation Using Piezoelectric Material",
      "authors": "G. R. Ahmed Jamal, S. M. Lutfur Rahman, M. MasudRana, S. A. S. Nafis, M. Monjurul Huda, Salma Nazia Rahman",
      "venue": "American Journal of Renewable and Sustainable Energy",
      "year": 2015
    },
    {
      "type": "Journal",
      "title": "Detection of abnormality in Electrocardiogram signals based on Katz's and Higuchi's Method under fractal dimensions",
      "authors": "Md. Mashiur Rahamn, A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, Salma Nazia Rahman",
      "venue": "Computational biology and Bioinformatics",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "Classification of Electrocardiogram Signal Using Support Vector Machine Based on Fractal Extraction by FD",
      "authors": "Farhana Akter Mou, Muhammed Abdullah Al Mahmud, A. H. M Zadidul Karim, Salma Nazia Rahman, Shaikh Rashedur Rahman",
      "venue": "American Journal of Circuits, Systems and Signal Processing",
      "year": 2017
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
