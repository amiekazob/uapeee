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
  "id": "mr-m-abdullah-al-amin",
  "name": "M. Abdullah Al-Amin",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 68,
  "image": "/images/faculties/mr-m-abdullah-al-amin.jpg",
  "bio": "Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He has been serving the department since 2009, initially as a Lecturer and promoted to Assistant Professor in 2014. His research focuses on short-term load forecasting using neural networks and machine learning applications in electrical engineering.",
  "email": "mr.m.abdullah.al.amin@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Master of Science (M.Sc.) in Electrical and Electronic Engineering",
      "institution": "Islamic University of Technology (IUT)",
      "year": "2019"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "Ahsanullah University of Science and Technology (AUST)",
      "year": "2008"
    }
  ],
  "researchInterests": [
    "Short-term Load Forecasting",
    "Neural Networks",
    "Machine Learning Applications",
    "Power Systems",
    "Renewable Energy Systems",
    "Smart Grid Technologies",
    "Signal Processing"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "October 2014 - Present",
      "description": "Teaching undergraduate courses and conducting research in power systems and machine learning applications"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "April 2009 - October 2014",
      "description": "Taught various undergraduate courses in electrical and electronic engineering"
    }
  ],
  "professionalMemberships": [
    "Member, Institution of Engineers, Bangladesh (IEB)"
  ],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "Comparison of ARIMA and SVM for Short-term Load Forecasting",
      "authors": "M. Abdullah Al-Amin and Md. Ashraful Hoque",
      "venue": "The 9th Annual Information Technology, Electromechanical and Microelectronics Conference",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "An Innovative Intelligent RTS Control Adopted to Hybrid Energy Storage for Low Wind Applications",
      "authors": "MD Shahrukh Adnan Khan, M Abdullah Al Amin, Mohammad Rokonuzzaman, Khandaker Sultan Mahmood, Muhammad Izuan Fahmi Bin Romli and CV Aravind",
      "venue": "International Conference on Smart Grid and Clean Energy Technologies",
      "year": 2018
    },
    {
      "type": "Conference",
      "title": "Automatic Vehicle Identification System using Machine Learning and Robot Operating System (ROS)",
      "authors": "Mohammad Rokonuzzaman Pappu, M. Abdullah Al Amin, Masum Howlader, Kazi Main Uddin Ahmed and Muhammad Towhidur Rahman",
      "venue": "4th International Conference on Advances in Electrical Engineering (ICAEE)",
      "year": 2017,
      "doi": "10.1109/ICAEE.2017.8255362"
    },
    {
      "type": "Conference",
      "title": "Performance Analysis of Receiver Power Sensitivity of Advanced Modulation Formats In WDM Based Standard Mode Fibre For Next Generation Data Rate",
      "authors": "MD Shahrukh Adnan Khan, Md Masum Howlader, Muhammad Ahad Rahman Miah, Sakhawat Hossen Rakib, Abdullah Al Amin and Sharsad KaraKuni",
      "venue": "4th International Conference on Advances in Electrical Engineering (ICAEE)",
      "year": 2017,
      "doi": "10.1109/ICAEE.2017.8255388"
    },
    {
      "type": "Conference",
      "title": "GIS- Based Solar Irradiation Forecasting Using Support Vector Regression and Investigations of Technical Constraints for PV Deployment in Bangladesh",
      "authors": "Md. Masum Howlader, Md. Mahfuj Howlader, Md. Rokonuzzaman, Md. Shahrukh Adnan Khan, Aziz Un Nur and Abdullah Al Amin",
      "venue": "2017 4th International Conference on Advances in Electrical Engineering (ICAEE)",
      "year": 2017,
      "doi": "10.1109/ICAEE.2017.8255441"
    },
    {
      "type": "Conference",
      "title": "A Comperative Simulation Analysis of RZ & NRZ Modulation in Wavelength Division Mulplexing for Long Haul Single Mode Fibre",
      "authors": "Sharsad Kara Kuni, MD Shahrukh Adnan Khan, Mahmudul Alam, M. Abdullah Al-Amin and Md. Masum Howlader",
      "venue": "International Conference on Mechanical Engineering and Applied Science",
      "year": 2017
    },
    {
      "type": "Journal",
      "title": "Brain Tumour Detection by Using Bounding Box Methodology Based on Bhattacharyya Coefficient",
      "authors": "A. H. M. Zadidul Karim, Md. Abdullah Al Mahmud, M. Abdullah Al Amin and Mr. Muhammad Towhidur Rahman",
      "venue": "American Journal of Engineering Research (AJER)",
      "year": 2016
    },
    {
      "type": "Conference",
      "title": "Application of Short Term Energy Consumption Forecasting for Household Energy Management System",
      "authors": "K.M.U. Ahmed, M.A. Al Amin and M.T. Rahman",
      "venue": "IEEE - 3rd International Conference on Green Energy and Technology (ICGET)",
      "year": 2015
    },
    {
      "type": "Journal",
      "title": "Design and Construction of a Multipurpose Robot",
      "authors": "M. Taher U. Zaman, M. Sazzad Ahmed, Sabbir H., Shakhawat H., G. R. Ahmed Jamal, M. Khairul Alam, M. Mobarak Hossain P. and M. Abdullah Al-Amin",
      "venue": "International Journal of Automation, Control and Intelligent Systems",
      "year": 2015
    },
    {
      "type": "Journal",
      "title": "Design and Implementation of Pic16F877A Microcontroller Based Thyristor Firing Controller",
      "authors": "M. Abdullah Al-Amin, Md. Khairul Alam and Md. Moshiur Rahman",
      "venue": "International Journal of Engineering Research & Technology (IJERT)",
      "year": 2013
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
