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
  "id": "dr-tishna-sabrina",
  "name": "Dr. Tishna Sabrina",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 71,
  "image": "/images/faculties/dr-tishna-sabrina.jpg",
  "bio": "Dr. Tishna Sabrina is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. She holds a PhD from Monash University (2009-2014) and a B.Sc. in Electrical and Electronic Engineering from BUET (2000-2005). Her research focuses on privacy preservation without compromising data integrity. She has extensive professional experience including her current role at UAP since April 2018, previous position at United International University (2014-2018), and industry experience as an Engineer at Robi Axiata Limited (2005-2009). She is a BAETE Program Evaluator and has received numerous academic scholarships including Monash Graduate Scholarship and multiple Dean's list scholarships.",
  "email": "tishna@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD)",
      "institution": "Monash University",
      "year": "2009-2014"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering (EEE)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2000-2005"
    }
  ],
  "researchInterests": [
    "Privacy Preservation",
    "Data Integrity",
    "Information Security",
    "Electrical and Electronic Engineering"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor, Department of EEE",
      "institute": "University of Asia Pacific, Bangladesh",
      "period": "April 2018 – till date",
      "description": "Current position as Assistant Professor in the Department of Electrical and Electronic Engineering"
    },
    {
      "position": "Assistant Professor, Department of EEE",
      "institute": "United International University, Bangladesh",
      "period": "February 2014 – March 2018",
      "description": "Assistant Professor in the Department of Electrical and Electronic Engineering"
    },
    {
      "position": "Engineer",
      "institute": "Robi Axiata Limited (formerly known as Aktel)",
      "period": "September 2005 – July 2009",
      "description": "Professional engineering role in telecommunications industry"
    }
  ],
  "professionalMemberships": [
    "BAETE Program Evaluator"
  ],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "Privacy in Participatory Sensing Systems",
      "authors": "T. Sabrina, and M. Murshed",
      "venue": "Network and Traffic Engineering in Emerging Distributed Computing Applications",
      "year": 2010,
      "doi": "",
      "url": ""
    },
    {
      "type": "Conference",
      "title": "A novel anonymization technique to trade-off location privacy and data integrity in participatory sensing systems",
      "authors": "M. Murshed, T. Sabrina, A. Iqbal, and K. H. Alam",
      "venue": "IEEE International Conference on Network and System Security (NSS)",
      "year": 2010,
      "doi": "",
      "url": ""
    },
    {
      "type": "Conference",
      "title": "A subset coding based k-anonymization technique to trade-off location privacy and data integrity in participatory sensing systems",
      "authors": "M. Murshed, A. Iqbal, T. Sabrina, and K. H. Alam",
      "venue": "IEEE International Symposium on Network Computing and Applications (NCA)",
      "year": 2011,
      "doi": "",
      "url": ""
    },
    {
      "type": "Conference",
      "title": "Analysis of Location Privacy Risk in a Plain-text Communication Based Participatory Sensing System Using Subset Coding and Mix Network",
      "authors": "T. Sabrina and M. Murshed",
      "venue": "International Symposium on Communications and Information Technologies (ISCIT)",
      "year": 2012,
      "doi": "",
      "url": ""
    },
    {
      "type": "Conference",
      "title": "Verifiable and Privacy Preserving Electronic Voting with Untrusted Machines",
      "authors": "M. Murshed, T. Sabrina, A. Iqbal, and M. Ali",
      "venue": "IEEE International Conference on Trust, Security and Privacy in Computing and Communications (TrustCom)",
      "year": 2013,
      "doi": "",
      "url": ""
    },
    {
      "type": "Conference",
      "title": "Anonymization Techniques for Preserving Data Quality in Participatory Sensing",
      "authors": "T. Sabrina, M. Murshed, and A. Iqbal",
      "venue": "IEEE International Conference on Local Computer Networks (LCN)",
      "year": 2016,
      "doi": "",
      "url": ""
    },
    {
      "type": "Conference",
      "title": "Simulation based Investigation of Inverted Planar Perovskite Solar Cell with All Metal Oxide Inorganic Transport Layers",
      "authors": "Md. S. Rahman, S. Miah, M. S. W. Marma, and T. Sabrina",
      "venue": "IEEE International Conference on Electrical, Computer and Communication Engineering (ECCE)",
      "year": 2019,
      "doi": "",
      "url": ""
    },
    {
      "type": "Conference",
      "title": "Design and Economic Analysis of Hybrid Renewable Energy System",
      "authors": "Z. H. Mamun, T. Sabrina, and Md. M. Rahman",
      "venue": "IEEE International Conference on Power, Electrical, and Electronics and Industrial Applications (PEEIACON)",
      "year": 2019,
      "doi": "",
      "url": ""
    },
    {
      "type": "Conference",
      "title": "Forecasting Solar Irradiance Using Machine Learning",
      "authors": "M. Burhan Uddin Shahin, A. Sarkar, T. Sabrina and S. Roy",
      "venue": "IEEE International Conference on Sustainable Technologies for Industry 4.0 (STI)",
      "year": 2020,
      "doi": "10.1109/STI50764.2020.9350400",
      "url": ""
    }
  ],
  "administrativeRoles": [
    {
      "title": "Research Experience - Privacy Preservation without Compromising Data Integrity",
      "organization": "Monash University",
      "period": "2009-2013",
      "description": "Supervisor: Dr. Manzur Murshed, Monash University"
    },
    {
      "title": "Academic Scholarships Recipient",
      "organization": "Various Institutions",
      "period": "1997-2013",
      "description": "Monash Graduate Scholarship (MGS) and Gippsland Fee Remission Scholarship (GFRS) from Monash University (2009-2013), 2nd position in Research poster design competition at Monash University (2010), Dean's list scholarship in freshman, sophomore, junior and senior level (2005-2009), Board Merit Scholarship in HSC examination (1999), Board Merit Scholarship in SSC examination (1997)"
    }
  ],
  "academicProfiles": []
};

export default facultyData;
