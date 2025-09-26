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
  "id": "ms-tanima-tasmin-chowdhury",
  "name": "Ms. Tanima Tasmin Chowdhury",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 72,
  "image": "/images/faculties/ms-tanima-tasmin-chowdhury.jpg",
  "bio": "Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. Specializes in biomedical signal processing, deep neural networks, and EEG signal analysis with extensive research experience in epileptic seizure detection and classification.",
  "email": "tanima.chowdhury@uap-bd.edu",
  "phone": "+880-2-8431645",
  "room": "Room 408, EEE Building",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) in Electrical and Electronic Engineering (EEE)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2019-Present (Ongoing)"
    },
    {
      "degree": "Master of Science (M.Sc.) in Electrical and Electronic Engineering (EEE)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2014-2019"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering (EEE)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2008-2013"
    }
  ],
  "researchInterests": [
    "Deep Neural Networks",
    "Biomedical Signal Processing",
    "EEG Signal Analysis",
    "Epileptic Seizure Detection",
    "Machine Learning in Healthcare",
    "Digital Signal Processing",
    "EMG Signal Processing"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "October 2017 – Present",
      "description": "Teaching undergraduate and graduate courses in Electrical and Electronic Engineering"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "September 2013 – October 2017",
      "description": "Teaching undergraduate courses and conducting research in biomedical signal processing"
    }
  ],
  "professionalMemberships": [
    "Chair, WIE, IEEE Bangladesh Section (2024)",
    "Membership Development and Conference Coordinator, Executive Committee; WIE, IEEE Bangladesh Section (2019-2021)",
    "Member, Planning Committee, WIE International Leadership Summit (2018)",
    "Publication Co-Chair of WIECON-ECE 2015, Dhaka, Bangladesh"
  ],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "Seizure activity classification based on bimodal Gaussian modeling of the gamma and theta band IMFs of EEG signals",
      "authors": "Chowdhury, T. T., Fattah, S. A., & Shahnaz, C.",
      "venue": "Biomedical Signal Processing and Control",
      "year": 2021,
      "doi": "10.1016/j.bspc.2020.102273"
    },
    {
      "type": "Conference",
      "title": "ALS Detection Based on T-Location Scale Statistical Modeling of the DWT Coefficients of EMG Signals",
      "authors": "Chowdhury, T. T., Fattah, S. A., & Shahnaz, C.",
      "venue": "2019 IEEE International Conference on Biomedical Engineering, Computer and Information Technology for Health (BECITHCON)",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Seizure and non-seizure EEG signals detection using 1-D convolutional neural network architecture of deep learning algorithm",
      "authors": "Chowdhury, T. T., Hossain, A., Fattah, S. A., & Shahnaz, C.",
      "venue": "2019 1st International Conference on Advances in Science, Engineering and Robotics Technology (ICASERT)",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Classification of seizure and non-seizure activity in seizure patients using time-frequency domain processing of gamma band EEG signals",
      "authors": "Chowdhury, T. T., Fattah, S. A., & Shahnaz, C.",
      "venue": "2017 4th International Conference on Advances in Electrical Engineering (ICAEE)",
      "year": 2017
    },
    {
      "type": "Conference",
      "title": "Low-cost EEG based electric wheelchair with advanced control features",
      "authors": "Maksud, A., Chowdhury, R. I., Chowdhury, T. T., Fattah, S. A., Shahanaz, C., & Chowdhury, S. S.",
      "venue": "TENCON 2017-2017 IEEE Region 10 Conference",
      "year": 2017
    }
  ],
  "administrativeRoles": [
    {
      "title": "Chair, WIE, IEEE Bangladesh Section",
      "organization": "IEEE Bangladesh Section",
      "period": "2024",
      "description": "Leading Women in Engineering initiatives in Bangladesh"
    },
    {
      "title": "Publication Co-Chair, WIECON-ECE 2015",
      "organization": "WIECON-ECE 2015",
      "period": "2015",
      "description": "Managing conference publications and proceedings"
    }
  ],
  "academicProfiles": [
    {
      "platform": "Google Scholar",
      "url": "https://scholar.google.com/citations?user=example"
    },
    {
      "platform": "ResearchGate",
      "url": "https://www.researchgate.net/profile/Tanima-Chowdhury"
    },
    {
      "platform": "ORCID",
      "url": "https://orcid.org/0000-0000-0000-0000"
    }
  ]
};

export default facultyData;
