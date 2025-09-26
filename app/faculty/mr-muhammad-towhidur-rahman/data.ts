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
  "id": "mr-muhammad-towhidur-rahman",
  "name": "Muhammad Towhidur Rahman",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 79,
  "image": "/images/faculties/mr-muhammad-towhidur-rahman.jpg",
  "bio": "Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. Specializes in Biomedical Physics and Technology with extensive experience in biomedical engineering applications.",
  "email": "towhidur.rahman@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Master of Science (M.S.) in Biomedical Physics and Technology",
      "institution": "University of Dhaka",
      "year": "2015"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering (EEE)",
      "institution": "Ahsanullah University of Science and Technology",
      "year": "2008"
    }
  ],
  "researchInterests": [
    "Biomedical Physics and Technology",
    "Biomedical Signal Processing",
    "Medical Device Development",
    "Electrical Impedance Measurements",
    "Solar Cell Modeling",
    "Energy Management Systems"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "2012 – Present",
      "description": "Teaching and research in electrical and electronic engineering with focus on biomedical applications"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "2008 – 2012",
      "description": "Undergraduate teaching and curriculum development"
    }
  ],
  "professionalMemberships": [],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "Respiration monitoring by using ECG",
      "authors": "Muhammad Towhidur Rahman, Muhammad Abdul Kadir, A.H.M. Zadidul Karim, Md. Abdullah Al Mahmud",
      "venue": "International Conference on Computer and Information Technology (ICCIT)",
      "year": 2017,
      "doi": "10.1109/ICCITECHN.2017.8281762"
    },
    {
      "type": "Journal",
      "title": "Brain Tumour Detection by Using Bounding Box Methodology Based on Bhattacharyya coefficient",
      "authors": "A. H. M. Zadidul Karim, Md. Abdullah Al Mahmud, M. Abdullah Al Amin and Muhammad Towhidur Rahman",
      "venue": "American Journal of Engineering Research (AJER)",
      "year": 2016,
      "doi": "e-ISSN: 2320-0847, p-ISSN : 2320-0936, Volume-5, Issue-12, pp-218-223"
    },
    {
      "type": "Conference",
      "title": "Application of short term energy consumption forecasting for household energy management system",
      "authors": "K.M.U. Ahmed, M.A. Al Amin, M.T. Rahman",
      "venue": "3rd International Conference on Green Energy and Technology (ICGET)",
      "year": 2015,
      "doi": "10.1109/ICGET.2015.7315095"
    },
    {
      "type": "Conference",
      "title": "Detection and Localization of objects within a volume conductor using electrical impedance measurements: phantom study",
      "authors": "Md. Moin Uddin Atique, Tahazibul Hasib and Muhammad Towhidur Rahman",
      "venue": "17th International Conference on Computer and Information Technology (ICCIT)",
      "year": 2014,
      "doi": "10.1109/ICCITechn.2014.7073144"
    },
    {
      "type": "Conference",
      "title": "Development of Electrical Behavioral Model of an Arbitrary Solar Cell to Amend the PSPICE Simulation Performance",
      "authors": "Muhammad Towhidur Rahman, Ahmed Al Mansur, Nahyan Al Mahmud, Mahmoodul Islam, Taskin Jamal",
      "venue": "International Conference and Utility Exhibition (ICUE), Pattaya City, Thailand",
      "year": 2011,
      "doi": "10.1109/ICUEPES.2011.6497766"
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
