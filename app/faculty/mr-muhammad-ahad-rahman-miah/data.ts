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
  "id": "mr-muhammad-ahad-rahman-miah",
  "name": "Muhammad Ahad Rahman Miah",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 75,
  "image": "/images/faculties/mr-muhammad-ahad-rahman-miah.jpg",
  "bio": "Muhammad Ahad Rahman Miah is an Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He is currently pursuing his PhD in EEE from BUET and holds a Master of Engineering in Energy Technology from the Asian Institute of Technology (AIT), Bangkok, Thailand. He obtained his Bachelor's degree from UAP with the distinction of achieving 1st position and receiving the Vice-Chancellor's Gold Medal. With over a decade of experience at UAP, he has contributed significantly to research in renewable energy systems, smart grid technology, and power system analysis. He is an IEEE Professional Member and has been involved in various international research projects coordinated by IRENA and UNEP DTU.",
  "email": "mr.muhammad.ahad.rahman.miah@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) in Electrical and Electronic Engineering",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2019 - Present (Ongoing)"
    },
    {
      "degree": "Master of Engineering (M. Engg.) in Energy Technology",
      "institution": "Asian Institute of Technology (AIT), Bangkok, Thailand",
      "year": "2011 - 2013"
    },
    {
      "degree": "Bachelor of Science (B. Sc.) in Electrical and Electronic Engineering",
      "institution": "University of Asia Pacific (UAP), Dhaka, Bangladesh",
      "year": "2006 - 2010"
    }
  ],
  "researchInterests": [
    "Renewable Energy Systems",
    "Smart Grid Technology",
    "Power System Analysis",
    "Rural Electrification",
    "Energy Technology",
    "Transient Stability Analysis"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "August 2015 – Present",
      "description": "Teaching and research in electrical and electronic engineering"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "October 2010 – August 2015",
      "description": "Teaching undergraduate courses in electrical and electronic engineering"
    },
    {
      "position": "Officer",
      "institute": "Grameenphone Ltd.",
      "period": "May 2010 - October 2010",
      "description": "Professional experience in telecommunications industry"
    }
  ],
  "professionalMemberships": [
    "IEEE Professional Membership"
  ],
  "recentPublications": [
    {
      "type": "Conference",
      "title": "IoT Integrated Rooftop Solar PV System for Performance Evaluation and Monitoring: A Prosumer and Utility Approach",
      "authors": "M. A. R. Miah, R. Kabir and L. Sidq",
      "venue": "13th International Conference on Power Science and Engineering Technology (ICPSE 2024), Ankara, Turkey",
      "year": 2024
    },
    {
      "type": "Conference",
      "title": "Energy Savings Forecast for Solid-State Lighting in Residential and Commercial Buildings in Bangladesh",
      "authors": "M. A. R. Miah and R. Kabir",
      "venue": "2023 IEEE PES 15th Asia-Pacific Power and Energy Engineering Conference (APPEEC2023), Chiang Mai, Thailand",
      "year": 2023
    },
    {
      "type": "Conference",
      "title": "An Integration of IoT and IoE Towards Sustainable Building Energy Management",
      "authors": "M. A. R. Miah, R. Kabir and L. Sidq",
      "venue": "2023 IEEE PES 15th Asia-Pacific Power and Energy Engineering Conference (APPEEC2023), Chiang Mai, Thailand",
      "year": 2023
    },
    {
      "type": "Conference",
      "title": "Selection of the sustainable lightning protection technology for Solar PV system",
      "authors": "L. Sidq, M. A. R. Miah and R. Kabir",
      "venue": "2023 IEEE PES 15th Asia-Pacific Power and Energy Engineering Conference (APPEEC2023), Chiang Mai, Thailand",
      "year": 2023
    },
    {
      "type": "Conference",
      "title": "Enhancement of Transient Stability for Coherent Generators in Multi-Machine Power Systems Using Static Var Compensator",
      "authors": "S. R. Rahman, M. A. R. Miah and Mst. J. A. Jyoty",
      "venue": "10th International Conference on Power Systems (ICPS) – 2023, Cox's Bazar, Bangladesh",
      "year": 2023
    },
    {
      "type": "Conference",
      "title": "Techno-economic assessment of solar photovoltaic (PV) waste management in Bangladesh",
      "authors": "M. A. R. Miah, M. S. Islam, M. F. Ahmed, S. Rokon and S. R. Rahman",
      "venue": "6th International Conference on Clean Energy and Technology 2023, Bayview Hotel Penang, Malaysia",
      "year": 2023
    },
    {
      "type": "Conference",
      "title": "Sustainable Building Energy Conservation and Efficiency Management Using IOT",
      "authors": "Md. M. Khan, S. M. Z. H. Sakil, M. A. R. Miah, Md. S. Rana, S. R. Rahman",
      "venue": "International Conference on Electronics and Renewable Systems (ICEARS 2022), Tuticorin, India",
      "year": 2022
    },
    {
      "type": "Conference",
      "title": "Techno-Economic Analysis of Floating Solar PV Integrating with Hydropower Plant in Bangladesh",
      "authors": "M. A. R. Miah, S. R. Rahman, R. Kabir",
      "venue": "2021 IEEE Green Technologies conference, USA (Virtual Conference)",
      "year": 2021
    },
    {
      "type": "Conference",
      "title": "Techno-Economic Assessment of Net Energy Metering Implementation for Rooftop Solar PV in a Commercial Building in Bangladesh",
      "authors": "M. A. R. Miah, S. R. Rahman, R. Kabir",
      "venue": "2020 4th International Conference on Green Energy and Applications (ICGEA 2020), Singapore",
      "year": 2020
    },
    {
      "type": "Conference",
      "title": "Determining Critical Clearing Time in Transient Stability Assessment for Hybrid Power System",
      "authors": "S. R. Rahman, M. A. R. Miah, Z. N. Tarif, Mst. J. A. Jyoty",
      "venue": "2019 IEEE 6th International Conference on Engineering Technologies and Applied Sciences (ICETAS), Kuala Lumpur Malaysia",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "A Novel Method of Coherency Identification for Multi-Machine Power System",
      "authors": "S. R. Rahman, & Md. S. Ullah",
      "venue": "2019 IEEE 6th International Conference on Engineering Technologies and Applied Sciences (ICETAS), Kuala Lumpur Malaysia",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Performance analysis of receiver power sensitivity of advanced modulation formats in WDM based standard mode fibre for next generation data rate",
      "authors": "M. S. A. Khan, M. M. Howlader, M. A. R. Miah, S. H. Rakib, A. A. Amin and S. KaraKuni",
      "venue": "2017 4th International Conference on Advances in Electrical Engineering (ICAEE), Dhaka",
      "year": 2017
    },
    {
      "type": "Journal",
      "title": "Barriers to Energy Access in the Urban Poor Areas of Dhaka, Bangladesh: Analysis of Present Situation and Recommendations",
      "authors": "M. S. H. Lipu, T. Jamal and M. A. R. Miah",
      "venue": "International Journal of Energy Economics and Policy, Vol. 3, No. 4, ISSN: 2146-4553, pp.395-411. SJR: 0.39 (Q2)",
      "year": 2013
    },
    {
      "type": "Journal",
      "title": "A Feasibility Study of Solar-Wind-Diesel Hybrid System in Rural and Remote Areas of Bangladesh",
      "authors": "M. S. H. Lipu, M.S. Uddin and M. A. R. Miah",
      "venue": "International Journal of Renewable Energy Research, Vol.3, No.4, PP-892-900. SJR: 0.32 (Q3)",
      "year": 2013
    },
    {
      "type": "Journal",
      "title": "Technology Fact Sheet on Smart Grid: Techno-Economic Review",
      "authors": "M. A. R. Miah, M. R. Sourov, M. K. Alam, and S. R. Rahman",
      "venue": "International Journal of Emerging Technology and Advanced Engineering, Volume 4, Issue 11, ISSN: 2250-2459, PP 33-39",
      "year": 2014
    },
    {
      "type": "Journal",
      "title": "Selection of the Most Appropriate Off-Grid Hybrid System for Rural and Coastal Areas in Bangladesh Using Analytical Hierarchy Process (AHP)",
      "authors": "M. A. R. Miah, M. R. Sourov and R. Kabir",
      "venue": "International Journal of Sustainable and Green Energy, Vol. 5, No. 5, pp. 80-89. doi: 10.11648/j.ijrse.20160505.11",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "SI Free PTS Technique for PAPR Reduction in OFDM Systems Using Concentric Circle Constellation Mapping",
      "authors": "M. M. Rahman, M. A. R. Miah and F. A. Mou",
      "venue": "International Journal of Wireless Communications and Mobile Computing, Vol. 4, No. 5, pp. 68-75. doi: 10.11648/j.wcmc.20160405.11",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "Technical Analysis of Security Management in Terms of Crowd Energy and Smart Living",
      "authors": "MD S. A. Khan, M. A. R. Miah, S. R. Rahman, M. M. Iqbal, A. Iqbal, A. CV and C. K. Huat",
      "venue": "Journal of Electronic Science and Technology, 2018, 16(4): 367-378. SJR: 0.13 (Q4)",
      "year": 2018
    }
  ],
  "administrativeRoles": [
    {
      "title": "Research Experience & Projects",
      "organization": "Various International Organizations",
      "period": "2009 - 2013",
      "description": "Multiple research projects and academic achievements"
    },
    {
      "title": "Academic Scholarships & Awards",
      "organization": "Thailand & UAP",
      "period": "2010 - 2011",
      "description": "Distinguished academic achievements and international recognition"
    }
  ],
  "academicProfiles": []
};

export default facultyData;
