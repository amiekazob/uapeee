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
  note?: string;
  head?: boolean;
  points?: number;
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
  "id": "hod-a-h-m-zadidul-karim",
  "name": "A. H. M. Zadidul Karim",
  "title": "Head of the Department",
  "role": "HOD",
  "note": "Associate Professor",
  "head": true,
  "points": 100,
  "image": "/images/faculties/mr-a-h-m-zadidul-karim.jpg",
  "bio": "Dr. A. H. M. Zadidul Karim is an Associate Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He is currently pursuing his PhD in Deep learning based breast cancer detection and classification schemes using medical images from BUET. His research interests include medical image processing, deep learning applications in healthcare, cardiac signal analysis, and digital circuit design. He has extensive experience in teaching and research with over 16 years of academic service at UAP.",
  "email": "zadidul.karim@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) in Electrical and Electronic Engineering (EEE) - Ongoing",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2015-Present"
    },
    {
      "degree": "Master of Engineering (M.Engg.) in Electrical and Electronic Engineering (EEE)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2005-2010"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering (EEE)",
      "institution": "Ahsanullah University of Science and Technology (AUST)",
      "year": "2000-2004"
    }
  ],
  "researchInterests": [
    "Deep Learning Applications in Healthcare",
    "Medical Image Processing",
    "Breast Cancer Detection and Classification",
    "Cardiac Signal Analysis",
    "ECG Signal Processing",
    "Digital Circuit Design",
    "Biomedical Engineering",
    "Machine Learning in Medical Diagnosis"
  ],
  "academicExperience": [
    {
      "position": "Associate Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "April 2016 – Present",
      "description": "Teaching undergraduate and graduate courses, conducting research in medical image processing and deep learning applications"
    },
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "November 2010 – April 2016",
      "description": "Teaching undergraduate courses and conducting research in biomedical signal processing"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "April 2007 – October 2010",
      "description": "Teaching undergraduate courses in electrical and electronic engineering"
    }
  ],
  "professionalMemberships": [
    "Publication Co-Chair of IEEE-EMBS, 2015, Dhaka, Bangladesh",
    "Member, Planning Committee, International Student-LED conference, IEEE, 2022",
    "Member Planning Committee International Symposium on Social Implications of Sustainable Technology 2022, (SympSIST-2022), IEEE",
    "Member Planning Committee ProCon 2022, IEEE Conference",
    "Member Planning Committee YPCON 2022, IEEE Conference"
  ],
  "recentPublications": {
    "journalPapers": [
      {
        "type": "journal",
        "title": "COVID-19, Pneumonia, and Healthy Lungs Classification Using CNN and Transfer Learning Model Using Chest X-Ray",
        "authors": "Rafatul Alam Fahima, A.H.M. Zadidul Karim, Tanima Tasmin Chowdhury, Kazi Bil Oual Mahmud*, Fahmida Khanam, Khondaker Md. Abdur Rahman",
        "venue": "American Journal of Biomedical Engineering",
        "year": "2024",
        "volume": "Vol. 12",
        "pages": "pp. 1-6",
        "publisher": "Scientific & Academic Publishing",
        "location": "USA"
      }
    ],
    "conferencePapers": [
      {
        "type": "conference",
        "title": "Classification of Electrocardiogram Using Color Images with Pixel Method by Deep CNN",
        "authors": "A. H. M. Zadidul Karim, Md. Badeuzzamal Sarker, Md. Rafiqul Alam Rejon, Md. Saimun Islam, Md. Rafatul Alam Fahima",
        "venue": "Proceedings of 3rd International Conference on Artificial Intelligence: Advances and Applications",
        "year": "2023",
        "volume": "Vol.3",
        "pages": "pp 289-301",
        "date": "April 2023",
        "publisher": "Springer"
      }
    ]
  },
  "administrativeRoles": [
    {
      "title": "Publication Co-Chair",
      "organization": "IEEE-EMBS",
      "period": "2015",
      "description": "Dhaka, Bangladesh"
    }
  ],
  "academicProfiles": []
};

export default facultyData;