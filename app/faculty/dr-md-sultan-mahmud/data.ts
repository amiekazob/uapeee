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
  "id": "dr-md-sultan-mahmud",
  "name": "Dr. Md Sultan Mahmud",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 66,
  "image": "/images/faculties/dr-md-sultan-mahmud.jpg",
  "bio": "Dr. Md Sultan Mahmud is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He holds a Ph.D. in Micro Nano Mechanical Science and Engineering from Nagoya University, Japan, and has extensive research experience in metal oxide semiconductor nanostructures for solar water splitting and hydrogen fuel production. His research interests span renewable energy systems, nanotechnology, and green energy technologies.",
  "email": "dr.md.sultan.mahmud@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Engineering (Ph.D) in Micro Nano Mechanical Science and Engineering",
      "institution": "Graduate School of Engineering, Nagoya University, Japan",
      "year": "2020-2024"
    },
    {
      "degree": "Masters (M.Tech) in Green Energy Technology",
      "institution": "UNESCO Madanjeet Singh School of Green Energy Technology, Pondicherry (Central Govt.) University, India",
      "year": "2015-2017"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering",
      "institution": "University of Asia Pacific, Bangladesh",
      "year": "2010-2014"
    }
  ],
  "researchInterests": [
    "Metal oxide semiconductor nanostructures",
    "Solar water splitting",
    "Hydrogen fuel production",
    "Renewable energy systems",
    "Heat flux enhancement in microstructure systems",
    "Off-grid renewable energy systems",
    "Rural electrification",
    "Green energy technologies",
    "Nanotechnology"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific, Bangladesh",
      "period": "July 2024 - Present",
      "description": "Current position as Assistant Professor in the Department of Electrical and Electronic Engineering"
    },
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, Uttara University, Bangladesh",
      "period": "April 2024 - June 2024",
      "description": "Assistant Professor in the Department of Electrical and Electronic Engineering"
    },
    {
      "position": "Research Assistant",
      "institute": "Department of Micro Nano Mechanical Science and Engineering, Nagoya University, Japan",
      "period": "September 2019 - April 2020",
      "description": "Research Assistant focusing on metal oxide semiconductor nanostructures"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, City University, Bangladesh",
      "period": "August 2017 - August 2019",
      "description": "Lecturer in the Department of Electrical and Electronic Engineering"
    }
  ],
  "professionalMemberships": [
    "Member, IEEE (2024)",
    "Member, Japan Society of Mechanical Engineers (2022-2023)",
    "Member, Green Energy Forum, Pondicherry (Central Govt.) University (2016-2017)"
  ],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "Titanium-coated high-density Fe2O3 single crystal nanowire array for solar water splitting",
      "authors": "Md Sultan Mahmud, Shaojie Gu, Sungmin Yoon, Yasuhiro Kimura, Yuhki Toku, Yang Ju",
      "venue": "Materials Express, ASP",
      "year": 2024,
      "doi": ""
    },
    {
      "type": "Journal",
      "title": "Enhancement of efficiency of solar water splitting based on highly dense hematite single crystal nanowires",
      "authors": "Md Sultan Mahmud, Sivaranjani Arumugam, Yasuhiro Kimura Yuhki Toku, Yang Ju",
      "venue": "Journal of Material Science, Springer Nature",
      "year": 2023,
      "doi": ""
    },
    {
      "type": "Conference",
      "title": "Synthesis of highly stable and highly dense Fe2O3 semiconductor nanowire array by stress-induced atomic diffusion method for solar water splitting",
      "authors": "Md Sultan Mahmud, Yasuhiro kimura, Yuki Toku and Yang Ju",
      "venue": "The Japan Society of Mechanical Engineers M&M 2022 Mechanics of Materials Conference",
      "year": 2022,
      "doi": ""
    },
    {
      "type": "Journal",
      "title": "Energy Storage Controllers and Optimization Schemes Integration to Microgrid: An Analytical Assessment Towards Future Perspectives",
      "authors": "Miah, Md. Sazal and Lipu, M. S. Hossain and Ansari, Shaheer and Meraj, Sheikh Tanzim and Hasan, Kamrul and Masaoud, Ammar and Hussain, Aini and Mahmud, Md. Sultan and Bashar, Shikder Shafiul",
      "venue": "IEEE Access",
      "year": 2022,
      "doi": ""
    },
    {
      "type": "Journal",
      "title": "Data-driven hybrid approaches for renewable power prediction toward grid decarbonization: Applications, issues and suggestions",
      "authors": "M.S. Hossain Lipu, Shaheer Ansari, M.A. Hannan, Kamrul Hasan, Mahidur R. Sarker, Md. Sultan Mahmud, Aini Hussain, M. Mansor",
      "venue": "Journal of Cleaner Production, Elsevier",
      "year": 2021,
      "doi": ""
    },
    {
      "type": "Journal",
      "title": "Artificial Intelligence Based Hybrid Forecasting Approaches for Wind Power Generation: Progress, Challenges and Prospects",
      "authors": "Lipu, M. S. Hossain and Miah, Md. Sazal and Hannan, M. A. and Hussain, Aini and Sarker, Mahidur R. and Ayob, Afida and Saad, Mohamad Hanif Md and Mahmud, Md. Sultan",
      "venue": "IEEE Access",
      "year": 2021,
      "doi": ""
    },
    {
      "type": "Conference",
      "title": "Modeling of a stand-alone Wind-PV Hybrid Generation System Using (MATLAB/SIMULINK)",
      "authors": "Rahman, M. W., Velmurugan, K., Md Sultan Mahmud., Al Mamun, A., & Ravindran, P",
      "venue": "2021 IEEE International Conference on Computing, Communication, and Intelligent Systems (ICCCIS)",
      "year": 2021,
      "doi": ""
    },
    {
      "type": "Conference",
      "title": "Analytical Loss Model of Modular Multilevel Converter with Reduced Switching Topology",
      "authors": "Islam, M. M., Rahman, M. A., Islam, M. R., Md Sultan Mahmud, & Rana, M. S.",
      "venue": "IEEE 2020 11th International Conference on Electrical and Computer Engineering (ICECE)",
      "year": 2020,
      "doi": ""
    },
    {
      "type": "Conference",
      "title": "Heat Flux Enhancement in Microstructure System",
      "authors": "Md Sultan Mahmud, C. G. Jothi Prakash, Md Wazedur Rahman, Prasanth Ravindran",
      "venue": "2018 IEEE International Conference on System, Computation ,Automation and Networking (ICSCAN)",
      "year": 2018,
      "doi": ""
    },
    {
      "type": "Conference",
      "title": "Solar Highway in Bangladesh Using Bifacial PV",
      "authors": "Md. Sultan Mahmud ,Md. Wazedur Rahman , M.S. Hossain Lipu ,Abdullah Al Mamun ,Tania Annur ; Md. Mazharul Islam, Md. Mahbubur Rahman, Md Aminul Islam",
      "venue": "2018 IEEE International Conference on System, Computation, Automation and Networking (ICSCAN)",
      "year": 2018,
      "doi": ""
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
