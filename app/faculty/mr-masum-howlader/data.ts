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
  "id": "mr-masum-howlader",
  "name": "MD. Masum Howlader",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 76,
  "image": "/images/faculties/mr-masum-howlader.jpg",
  "bio": "MD. Masum Howlader is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He is currently pursuing his PhD at Bangladesh University of Engineering and Technology (BUET) and holds dual Master's degrees in Smart Electrical Networks and Systems from KTH Royal Institute of Technology and Karlsruhe Institute of Technology, funded by KIC Inno Energy Scholarship. His research focuses on smart grids, power systems, and energy management.",
  "email": "masum.howlader@uap-bd.edu",
  "phone": "+880-2-8431645",
  "room": "Room 123, EEE Department",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) - Ongoing",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2023-Present"
    },
    {
      "degree": "Master of Science (M.Sc.) - Smart Electrical Networks and System (Smart Grid)",
      "institution": "Royal Institute of Technology (KTH), Sweden",
      "year": "2012-2014"
    },
    {
      "degree": "Master of Science (M.Sc.) - Smart Electrical Networks and System (Smart Grid)",
      "institution": "Karlsruhe Institute of Technology (KIT), Germany",
      "year": "2012-2014"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) - Electrical and Electronic Engineering",
      "institution": "Islamic University of Technology (IUT)",
      "year": "2005-2009"
    }
  ],
  "researchInterests": [
    "Smart Electrical Networks and Systems",
    "Smart Grid Technology",
    "Power Control and Energy Management",
    "Renewable Energy Systems",
    "Power Systems Analysis",
    "Energy Efficiency",
    "Biomedical Engineering Applications"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "University of Asia Pacific, Bangladesh - Department of EEE",
      "period": "May 2015 – Present",
      "description": "Teaching undergraduate and graduate courses, conducting research in smart grid and power systems, supervising student projects"
    },
    {
      "position": "Lecturer",
      "institute": "University of Asia Pacific, Bangladesh - Department of EEE",
      "period": "January 2010 – May 2015",
      "description": "Delivered lectures in various EEE courses, mentored undergraduate students"
    },
    {
      "position": "Visiting Faculty",
      "institute": "East West University (EWU) - Department of EEE",
      "period": "October 2016 – January 2017",
      "description": "Taught specialized courses in electrical engineering"
    }
  ],
  "professionalMemberships": [
    "IEEE Member",
    "Technical Program Committee Member, IEEE International Conference on Smart Grid and Clean Energy 2018 (ICSGCE), Malaysia",
    "Organizer of Special Session 'Power Control and Energy Management' (PCEM), IEEE International Conference on Smart Grid and Clean Energy, UTAR, Malaysia, 2018"
  ],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "Driving a Green Future: Assessing the Feasibility of Solar Powered EV Charging Stations in Bangladesh",
      "authors": "Abedin, N.B., Fahim, S.K., Costa, B.F., Dhrubo, M. Howlader, M.M., Kabir, M.A. and Hasan, A.M.",
      "venue": "IEEE Kansas Power and Energy Conference (KPEC), Manhattan, KS, USA",
      "year": 2025,
      "doi": "10.1109/KPEC65465.2025.11045020"
    },
    {
      "type": "Conference",
      "title": "Holistic Methodology for Analyzing Power System Contingencies of 33KV Network for Grid Reliability Assessment: A Comprehensive Study",
      "authors": "Rahaman, D.A., Pathan, M.M., Hassan, M.Y., M. Howlader, M.M., Dewan, M.S. and Alamgir, A.",
      "venue": "2023 7th International Symposium on Innovative Approaches in Smart Technologies (ISAS)",
      "year": 2023
    },
    {
      "type": "Journal",
      "title": "Integration of cloud computing: a new transition for Bangladesh power grid empowerment from reliability to grid resiliency",
      "authors": "Kadir, K.M., M. Howlader, M.M., Iqbal, M.M., Alam, M.K., Mahmood, M.K.S. and Rahaman, D.A.",
      "venue": "Journal of Grid and Utility Computing, Energy Systems, Springer",
      "year": 2023
    },
    {
      "type": "Journal",
      "title": "Forecasting of solar potential and investigation of voltage stability margin using facts device: a synopsis from geography of things perspective",
      "authors": "Howlader, Masum, Khandaker Sultan Mahmood, Md Golam Zakaria, Kazi Mahtab Kadir, and Mirza Mursalin Iqbal",
      "venue": "International Journal of Grid and Utility Computing",
      "year": 2021
    },
    {
      "type": "Journal",
      "title": "Approach for Grid Connected PV Management: Advance Solar Prediction and Enhancement of Voltage Stability Margin Using FACTs Device",
      "authors": "Masum Howlader, Shahrukh Adnan Khan, Anas Syed",
      "venue": "Journal of Electronic Science and Technology",
      "year": 2020
    },
    {
      "type": "Journal",
      "title": "Forecasting of Solar potential and investigation of Voltage Stability Margin Using FACTs Device - A Synopsis from Geography of Things (GoT) Perspective",
      "authors": "Masum Howlader, Khandaker Sultan Mahmood, Md.Golam Zakaria, Kazi Mahtab Kadir, Mirza Mursalin Iqbal",
      "venue": "International Journal of Grid and Utility Computing",
      "year": 2020
    },
    {
      "type": "Journal",
      "title": "Energy Harvesting—Technical Analysis of Evolution, Control Strategies, and Future Aspects",
      "authors": "Khan, M. S. A., Hoq, M. T., Karim, A. Z., Alam, Howlader, M., & Rajkumar, R. K.",
      "venue": "Journal of Electronic Science and Technology",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Instantaneous charging & discharging cycle analysis of a novel supercapacitor based energy harvesting circuit",
      "authors": "Shahrukh Adnan Khan, Anas Syed, Masum Howlader, Md Moshiur Rahman",
      "venue": "AIP (American Institute of Physics)",
      "year": 2017
    },
    {
      "type": "Conference",
      "title": "Approach for Grid Connected PV Management: Advance Solar Prediction and Enhancement of Voltage Stability Margin Using FACTs Device",
      "authors": "Masum Howlader, Aziz Un Nur Ibn Saif, MD Shahrukh Adnan Khan, Md. Mahfuj Howlader, Md. Rokonuzzaman, Md Tanbhir Hoq",
      "venue": "IEEE International Conference in Smart Grid and Clean Energy, UTAR, Malaysia",
      "year": 2018
    },
    {
      "type": "Conference",
      "title": "A Novel Low Voltage Application Based Intelligent Control System for Hybrid Energy Storage",
      "authors": "MD Shahrukh Adnan Khan, M Abdullah Al Amin, Masum Howlader",
      "venue": "IEEE International Conference in Smart Grid and Clean Energy, UTAR, Malaysia",
      "year": 2018
    },
    {
      "type": "Conference",
      "title": "GIS-Based Solar Irradiation Forecasting Using Support Vector Regression and Investigations of Technical Constraints for PV Deployment in Bangladesh",
      "authors": "Masum Howlader, Md. Rokonuzzaman, MD Shahrukh Adnan Khan, Aziz Un Nur, Abdullah Al Amin",
      "venue": "IEEE 4th International Conference on Advances in Electrical Engineering",
      "year": 2017
    },
    {
      "type": "Conference",
      "title": "Performance Evaluation for High Transmission Rate of 40GB/S with Intensity Modulation in WDM based Long Haul SMF",
      "authors": "MD Shahrukh Adnan Khan, Sharsad Kara Kuni, Masum Howlader, Md. Moshiur Rahman",
      "venue": "9th Eureca, International Research Conference, Taylor's University, Malaysia",
      "year": 2017
    },
    {
      "type": "Conference",
      "title": "Performance Analysis of Receiver Power Sensitivity of Advanced Modulation Formats In WDM Based Standard Mode Fibre For Next Generation Data Rate",
      "authors": "MD Shahrukh Adnan Khan, Masum Howlader, Muhammad Ahad Rahman Miah, Sakhawat Hossen Rakib, Abdullah Al Amin, Sharsad Kara Kuni",
      "venue": "IEEE 4th International Conference on Advances in Electrical Engineering",
      "year": 2017
    },
    {
      "type": "Conference",
      "title": "Automatic Vehicle Identification System using Machine Learning and Robot Operating System (ROS)",
      "authors": "Mohammad Rokonuzzaman, Abdullah Al Amin, MD. Masum Howlader",
      "venue": "IEEE 4th International Conference on Advances in Electrical Engineering",
      "year": 2017
    },
    {
      "type": "Conference",
      "title": "Distinctive study of UPFC and fault analysis under simulated environment",
      "authors": "Md. Saifur Rahman, Md. Masum Howlader A K M Kamrul Hasan Chowdhury, Md. Rasel Ferdaus",
      "venue": "The Third International IEEE Conference on Technological Advances in Electrical, Electronics and Computer Engineering, Beirut, Lebanon",
      "year": 2015
    },
    {
      "type": "Journal",
      "title": "Impact assessment of FACTS and VSC-HVDC for damping power oscillations based on location and control strategy",
      "authors": "Aziz Un Nur Ibn Saif, Md. Masum Howlader, Md. Tareq Ul Islam",
      "venue": "International Journal of Scientific & Engineering Research",
      "year": 2014,
      "doi": "ISSN 2229-5518"
    },
    {
      "type": "Conference",
      "title": "Development of Smart Grid in Bangladesh: Challenges and Opportunities",
      "authors": "Taskin Jamal, Weerakorn Ongsakul, Molla Shahadat Hossain Lipu, Md. Masum Howlader, Aziz-Un-NurIbnSaif",
      "venue": "The 5th IASTED Asian Conference on Power and Energy Systems, Phuket, Thailand",
      "year": 2012,
      "doi": "10.2316/P.2012.768-047"
    },
    {
      "type": "Journal",
      "title": "An innovative low cost bone densitometer based on conventional X-Ray Facility",
      "authors": "Jubaid Abdul Qayyum, Md. Masum Howlader, Md. Tamzeed-Al-Alam, Md. Saiful Islam, TahmidLatif, Prof. K. Siddique-e-Rabbani",
      "venue": "Journal of Medical Physics",
      "year": 2011,
      "url": "http://bmpaweb.org/?p=239"
    },
    {
      "type": "Conference",
      "title": "Design and development of a low cost bonedensitometer based on existing X-ray facility in the Third World",
      "authors": "Jubaid Abdul Qayyum, Md. Masum Howlader, Md. Tamzeed-Al-Alam, Md. Saiful Islam, TahmidLatif, Prof. K. Siddique-e-Rabbani",
      "venue": "Regional Conference on Recent Advances in Physics jointly organized by BMPA and Department of Biomedical Physics and Technology (BMPT) of University of Dhaka",
      "year": 2010,
      "url": "www.banglajol.info/index.php/BJMP/article/download/14693/10437"
    }
  ],
  "administrativeRoles": [
    {
      "title": "Principal Investigator",
      "organization": "IEERD (The Institute for Energy, Environment, Research and Development)",
      "period": "August 2023 – Present",
      "description": "Leading funded research projects in energy and power systems"
    }
  ],
  "academicProfiles": [
    {
      "platform": "LinkedIn",
      "url": "",
      "profileId": ""
    }
  ]
};

export default facultyData;
