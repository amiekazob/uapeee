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
  "id": "mr-md-abdullah-al-mahmud",
  "name": "Md. Abdullah Al Mahmud",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 73,
  "image": "/images/faculties/mr-md-abdullah-al-mahmud.jpg",
  "bio": "Md. Abdullah Al Mahmud is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. Born on September 28, 1991, he is a Bangladeshi national who has dedicated his career to electrical and electronic engineering education and research. He completed his Bachelor's degree in EEE from the University of Asia Pacific in 2013, achieving an outstanding CGPA of 3.93 and securing the 1st position in his class, for which he was awarded the Vice Chancellor Gold Medal in the graduating class of Spring 2013. He further pursued his Master's degree in EEE from the Islamic University of Technology (IUT) in 2021. His academic journey began with excellent performance in his SSC (2006) and HSC (2008) examinations from Engineering University School and College under Dhaka Board, achieving GPAs of 5.00 and 4.80 respectively. He has completed professional development through a short course on image processing at Islamic University of Technology (IUT) in 2014 and is proficient in various computer applications including MS Word, Excel, and MATLAB.",
  "email": "abdullah-eee@uap-bd.edu",
  "phone": "+88 01552404513",
  "room": "",
  "education": [
    {
      "degree": "Master of Science in Electrical and Electronic Engineering",
      "institution": "Islamic University of Technology (IUT)",
      "year": "2021"
    },
    {
      "degree": "Bachelor of Science in Electrical and Electronic Engineering",
      "institution": "University of Asia Pacific (UAP)",
      "year": "2013"
    },
    {
      "degree": "Higher Secondary Certificate (HSC)",
      "institution": "Engineering University School and College, Dhaka Board",
      "year": "2008"
    },
    {
      "degree": "Secondary School Certificate (SSC)",
      "institution": "Engineering University School and College, Dhaka Board",
      "year": "2006"
    }
  ],
  "researchInterests": [
    "Electrical and Electronic Engineering",
    "Power Systems",
    "Electronics and Communication",
    "Signal Processing"
  ],
  "academicExperience": [
    {
      "position": "Lecturer",
      "institute": "University of Asia Pacific",
      "period": "October 2014 - Present (9.5 Years)",
      "description": "Providing lectures, assessing and supporting students, preparing lecture and question materials. Located at 74/A, Green Road, Dhaka-1205."
    }
  ],
  "professionalMemberships": [],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "Highly Sensitive Hollow Core Photonic Crystal Fiber Based Methyl-Alcohol Detector for Liquid Analytes in THz Regime",
      "authors": "F. A. Mou, M. M. Rahman, A. A. Mahmud, M. R. Islam, and M. I. H. Bhuiyan",
      "venue": "IEEE Region 10 Symposium (TENSYMP)",
      "year": 2020
    },
    {
      "type": "Conference",
      "title": "Determination of Green Spots (Trees) For Google Satellite Images Using MATLAB",
      "authors": "Sultana, U., Haque, M., Akter, P., Islam, M., Al Mahmud, M.A., Rahman, M.T. and Karim, A.Z.",
      "venue": "Procedia Computer Science",
      "year": 2020
    },
    {
      "type": "Conference",
      "title": "Identification of seizure from single channel EEG using Support Vector Machine & Hilbert Vibration Decomposition",
      "authors": "A. H. M. Z. Karim, S. S. Bashar, M. S. Miah, M. A. Al Mahmud and M. A. Al Amin",
      "venue": "IEEE Symposium on Industrial Electronics & Applications (ISIEA)",
      "year": 2020
    },
    {
      "type": "Conference",
      "title": "Photonic Crystal Fiber based Terahertz Sensor for Alcohol Detection in Beverages: Design and Analysis",
      "authors": "M. M. Rahman, F. A. Mou, A. A. Mahmud, M. I. H. Bhuiyan, and M. R. Islam",
      "venue": "IEEE International Conference of Communication and Photonics (ICTP'2019)",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Design and Characterization of a Low Loss Polarization Maintaining Photonic Crystal Fiber for THz Regime",
      "authors": "F. A. Mou, M. M. Rahman, A. A. Mahmud, M. R. Islam, and M. I. H. Bhuiyan",
      "venue": "IEEE International Conference of Communication and Photonics (ICTP'2019)",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Single Mode Porous Core Photonic Crystal Fiber for Terahertz Wave Propagation with Extremely Low Losses and Flattened Dispersion",
      "authors": "M. M. Rahman, F. A. Mou, A. A. Mahmud, and M. I. H. Bhuiyan",
      "venue": "IEEE R10 Humanitarian Technology Conference (IEEE R10 HTC'2019)",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "A Machine Learning Approach for Heart Rate Estimation from PPG Signal using Random Forest Regression Algorithm",
      "authors": "S. S. Bashar, M. S. Miah, A. H. M. Z. Karim, M. A. Al Mahmud and Z. Hasan",
      "venue": "International Conference on Electrical, Computer and Communication Engineering (ECCE)",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Extraction of Heart Rate from PPG Signal: A Machine Learning Approach using Decision Tree Regression Algorithm",
      "authors": "Shikder Shafiul Bashar, Md. Sazal Miah, A.H.M. Zadidul Karim, Md. Abdullah Al Mahmud",
      "venue": "4th International Conference on Electrical Information and Communication Technology (EICT)",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Brain Tumor Detection: A Comparison among Various Techniques",
      "authors": "Md. Abdullah Al Mahmud, A. H. M. Zadidul Karim, M. Abdullah Al Amin, Md. Subbir Reza and Munmun Akter",
      "venue": "Proceedings of 14th Global Engineering and Technology Conference",
      "year": 2017
    },
    {
      "type": "Conference",
      "title": "RESPIRATION MONITORING BY USING ECG",
      "authors": "Muhammad Towhidur Rahman, Muhammad Abdul Kadir, A.H.M Zadidul Karim, Md. Abdullah Al Mahmud",
      "venue": "20th International Conference of Computer and Information Technology (ICCIT)",
      "year": 2017
    },
    {
      "type": "Journal",
      "title": "Peak Detection and Tracking of PPG Signal: A Multi model approach using Empirical Mode Decomposition & Machine Learning",
      "authors": "Karim, A.Z., Al Mahmud, M.A., Miah, M.S., Bashar, S.S., Oh, S., Kim, J. and Marium, M.",
      "venue": "The Journal of Contents Computing",
      "year": 2020
    },
    {
      "type": "Journal",
      "title": "Analysis and Different Modifications of Empirical Mode Decomposition Method of Heart Rate Extraction from PPG Signal",
      "authors": "Karim, A.Z., Reshmi, T.H., Sultana, S., Islam, M.R., Bashar, S.S. and Al Mahmud, M.A.",
      "venue": "American Journal of Biomedical Engineering",
      "year": 2020
    },
    {
      "type": "Journal",
      "title": "A Security System for Kindergarten School Using RFID Technology",
      "authors": "Rahman, S.N., Bashar, S.S., Al Mahmud, M.A., Miah, M.S., Karim, A.Z. and Marium, M.",
      "venue": "Journal of Computer and Communications",
      "year": 2019
    },
    {
      "type": "Journal",
      "title": "Analysis of Empirical Mode Decomposition Method of Heart Rate Extraction from Motion Artifact Corrupted PPG Signal",
      "authors": "A. H. M. Zadidul Karim, Muhammad Towhidur Rahman, Md. Abdullah Al Mahmud, Shikder Shafiul Bashar, Md. Sazal Miah, Maliha Marium",
      "venue": "American Journal of Signal Processing",
      "year": 2019
    },
    {
      "type": "Journal",
      "title": "Spine Tumor Detection Using MRI",
      "authors": "Md. Abdullah- Al Mahmud, A.H.M. Zadidul Karim, Farhana Aktern Mou, Shaikh Rashedur Rahman",
      "venue": "International Journal of Biomedical Materials Research",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "Brain Tumor Detection by Using Bounding Box methodology Based on Bhattacharyya Coefficient",
      "authors": "A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, M. Abdullah Al Amin, Mr. Muhammed Towhidur Rahman",
      "venue": "American Journal of Engineering Research",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "Identification of abnormality in Electrocardiogram Using Fractal Dimension",
      "authors": "Mishuk Mitra, A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, Md. Mashiur Rahamn",
      "venue": "International Journal of Bioinformatics and Biomedical Engineering",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "Detection of abnormality in Electrocardiogram signals based on Katz's and Higuchi's Method under fractal dimensions",
      "authors": "Md. Mashiur Rahamn, A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, Salma Nazia Rahman",
      "venue": "Computational Biology and Bioinformatics",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "Identification of Premature Ventricular Contraction (PVC) of Electrocardiogram using Statistical Tools and Non- Linear Analysis",
      "authors": "Farhana Akter Mou, Effat Jerin, Md. Abdullah Al Mahmud, A.H.M Zadidul Karim",
      "venue": "Global Journal of Researches in Engineering: Electrical and Electronics Engineering",
      "year": 2016
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
