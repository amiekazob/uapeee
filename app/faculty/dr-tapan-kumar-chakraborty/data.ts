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
  "id": "dr-tapan-kumar-chakraborty",
  "name": "Dr Tapan Kumar Chakraborty",
  "title": "Professor",
  "role": "Professor",
  "points": 93,
  "image": "/images/faculties/dr-tapan-kumar-chakraborty.jpg",
  "bio": "Dr. Tapan Kumar Chakraborty is a distinguished Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He holds a Ph.D. in Electrical and Computer Engineering from Kanazawa University, Japan (1995-1998), where he conducted research on microelectronic circuits and devices. With over three decades of academic experience, he has served in various prestigious positions including Professor at Presidency University and Dhaka University of Engineering & Technology. His research expertise spans power electronics, multilevel inverters, microcontroller-based system design, and SCR-based line commutated inverters. He is a Fellow of the Institution of Engineers, Bangladesh (IEB) and a Member of IEEE, USA. Dr. Chakraborty has been recognized with numerous academic honors including the Japanese government scholarship (Monbusho) for his Ph.D. studies and the University Gold Medal from University of Roorkee (now IIT Roorkee) for his Master's degree. He has extensive professional consultancy experience, having worked as a consultant for layout design, estimation, installation, testing and commissioning of Fire detection & Alarm, CCTV, Access control and Public address systems at Bangladesh Bank Head office, Motijheel, Dhaka during 2004-2005. He also has practical experience in testing different types of electric cables and insulators, and performed Heat Cycle Tests for H-type aluminum connectors as per NEMA Standard during 2002-2005.",
  "email": "tkc@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) in Electrical and Computer Engineering",
      "institution": "Kanazawa University, Japan",
      "year": "1995-1998"
    },
    {
      "degree": "Master of Engineering in Electrical Engineering",
      "institution": "University of Roorkee, India (IITR)",
      "year": "1986-1988"
    },
    {
      "degree": "Bachelor of Science in Electrical and Electronic Engineering",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "1979-1984"
    }
  ],
  "researchInterests": [
    "Power Electronics",
    "Multilevel Inverters",
    "Microcontroller-based System Design",
    "SCR-based Line Commutated Inverters",
    "Microelectronic Circuits and Devices",
    "Memory Device Development",
    "Electric Pulse-induced Phase Transition",
    "Amorphous Semiconductors"
  ],
  "academicExperience": [
    {
      "position": "Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "September 2016 – Present",
      "description": "Leading research and teaching in electrical and electronic engineering"
    },
    {
      "position": "Professor",
      "institute": "Department of Electrical & Computer Engineering, Presidency University, Dhaka",
      "period": "May 2005 – September 2016",
      "description": "Research and academic leadership in electrical and computer engineering"
    },
    {
      "position": "Professor",
      "institute": "Department of Electrical & Electronic Engineering, Dhaka University of Engineering & Technology, Gazipur",
      "period": "October 2002 – May 2005",
      "description": "Advanced research and teaching responsibilities"
    },
    {
      "position": "Associate Professor",
      "institute": "Department of Electrical & Electronic Engineering, Dhaka University of Engineering & Technology, Gazipur",
      "period": "May 1999 – October 2002",
      "description": "Research supervision and curriculum development"
    },
    {
      "position": "Assistant Professor",
      "institute": "Department of Electrical & Electronic Engineering, Dhaka University of Engineering & Technology, Gazipur",
      "period": "January 1992 – May 1999",
      "description": "Teaching and research in electrical and electronic engineering"
    },
    {
      "position": "Lecturer",
      "institute": "Department of Electrical & Electronic Engineering, Dhaka University of Engineering & Technology, Gazipur",
      "period": "October 1988 – January 1992",
      "description": "Initial academic position focusing on undergraduate teaching"
    }
  ],
  "professionalMemberships": [
    "Member, Institute of Electrical & Electronics Engineers (MIEEE), USA (M-80056618)",
    "Fellow, The Institution of Engineers, Bangladesh (IEB) (F-11942)"
  ],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "A Microprocessor Based Control Scheme for Three-Phase Thyristor Power Converter",
      "authors": "T. K. Chakraborty, B. Singh, S. P. Gupta",
      "venue": "Journal of Microcomputer Applications, Elsevier",
      "year": 1990
    },
    {
      "type": "Journal",
      "title": "ESR Study of Glass Transition in Mn Doped Se70Te30 Chalcogenide Glass in Non-Isothermal Process",
      "authors": "T. K. Chakraborty, S. Ueda, A. Kitagawa, M. Suzuki",
      "venue": "Japanese Journal of Applied Physics",
      "year": 1997
    },
    {
      "type": "Journal",
      "title": "Study of Glass Transition in Mn-Doped Ge15Te85 Glass by Electron Spin Resonance",
      "authors": "T. K. Chakraborty, S. Ueda, A. Kitagawa, M. Suzuki",
      "venue": "Japanese Journal of Applied Physics",
      "year": 1998
    },
    {
      "type": "Journal",
      "title": "Electric Pulse Induced Write and Erase Operations in a Nonvolatile Memory Device Fabricated by Amorphous Semiconductor",
      "authors": "T. K. Chakraborty",
      "venue": "Journal of Electrical Engineering, The Institution of Engineers, Bangladesh",
      "year": 2000
    },
    {
      "type": "Journal",
      "title": "An Investigation of Fragmentation Processes in Amorphous Semiconductors During Rate-Scan Heating",
      "authors": "T. K. Chakraborty",
      "venue": "Journal of Electrical Engineering, The Institution of Engineers, Bangladesh",
      "year": 2000
    },
    {
      "type": "Journal",
      "title": "Electric Field Induced Phase Transitions in the Film of Amorphous Semiconductor",
      "authors": "T. K. Chakraborty",
      "venue": "Journal of Electrical Engineering, The Institution of Engineers, Bangladesh",
      "year": 2000
    },
    {
      "type": "Journal",
      "title": "Steady state analysis of an Inverter fed synchronous motor",
      "authors": "Tapan Kumar Chakraborty",
      "venue": "Presidency University journal of Science and Engineering",
      "year": 2013
    },
    {
      "type": "Journal",
      "title": "RF Propagation Improvement for Machine to Machine Communication using dipole Antenna",
      "authors": "M T Hasan Amin, Ratil H Ashique, Badrun N Lia, Ilham Osman, Tapan Kumar Chakraborty",
      "venue": "International journal of Electronics and Electrical Engineering",
      "year": 2014
    },
    {
      "type": "Journal",
      "title": "Simulation of Synchronous Motor Supplied by a Three-Phase line Commutated Inverter using Voltage Sensor",
      "authors": "Tapan Kumar Chakraborty",
      "venue": "SSRG International Journal of Electrical and Electronics Engineering",
      "year": 2014
    },
    {
      "type": "Journal",
      "title": "Design and Implementation of Remote Controlled Fan Regulator",
      "authors": "Shahruk Osman, Tapan Kumar Chakraborty, Ariful Islam, Nazibur Rahman",
      "venue": "International Journal of Advanced Research in Electrical, Electronics and Instrumentation Engineering",
      "year": 2014
    },
    {
      "type": "Journal",
      "title": "A Review on the Progress of Non-Volatile Memory Device Based on Electric-Pulse Induced Phase Transition",
      "authors": "Tapan Kumar Chakraborty",
      "venue": "International Research Journal of Engineering and Technology",
      "volume": "Vol. 2, No. 3",
      "pages": "pp. 1589-1592",
      "year": 2015
    },
    {
      "type": "Journal",
      "title": "Design and Simulation of Triggering Circuit for Single-Phase Full-Wave Controlled Rectifier",
      "authors": "Tapan Kumar Chakraborty, Shahruk Osman",
      "venue": "International Research Journal of Engineering and Technology",
      "volume": "Vol. 2, issue 9",
      "pages": "pp.1894-1897",
      "year": 2015
    },
    {
      "type": "Journal",
      "title": "Experimental Investigations of the Self-Controlled Synchronous Motor Connected to a Three-Phase Line Commutated SCR Inverter",
      "authors": "Tapan Kumar Chakraborty",
      "venue": "International Journal of Power Electronics and Drive System",
      "volume": "vol.7, no.1",
      "pages": "pp.1-6",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "Design and Simulation of DC-DC Converters",
      "authors": "Shafinaz A. Lopa, S. Hossain, M. K. Hasan, T. K. Chakraborty",
      "venue": "International Research Journal of Engineering and Technology",
      "volume": "vol. 3, issue 1",
      "pages": "pp.63-70",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "A Microcontroller Based Gate Drive Circuit for Three-Phase Line Commutated SCR Inverter",
      "authors": "Tapan Kumar Chakraborty, Shahruk Osman, Nadia Binte Asif",
      "venue": "Presidency University journal of Science and Engineering",
      "volume": "Part:B, Vol.3, No.2",
      "pages": "pp.33-37",
      "year": 2016
    },
    {
      "type": "Journal",
      "title": "A Simple Gate Pulse Generating Circuit for Single-Phase Line-Commutated Thyristor Converter",
      "authors": "Tapan Kumar Chakraborty, Shahruk Osman, Ariful Islam",
      "venue": "International Journal of Electronics and Electrical Engineering",
      "volume": "vol.4, no.5",
      "pages": "pp.403-407",
      "year": 2016
    },
    {
      "type": "Conference",
      "title": "Simulation and Implementation of Microcontroller Based Gate Drive Circuit for Three-Phase MOSFET Inverter",
      "authors": "Tapan Kumar Chakraborty, Shahinur Rahman, Sakhawat Hossen Rakib",
      "venue": "Proceedings of IEEE International Conference on Energy, Communication, Data Analytics and Soft Computing (ICECDS), Chennai, India",
      "pages": "pp. 13-16",
      "year": 2017,
      "doi": "10.1109/ICECDS.2017.8389717"
    },
    {
      "type": "Conference",
      "title": "Transitions Between Amorphous and Crystalline States Using Electrical Pulse in Tellurium-Based Semiconductor",
      "authors": "Tapan Kumar Chakraborty",
      "venue": "Proceedings of the 2nd IEEE International Conference on Electronics, Communication and Aerospace Technology, Coimbatore, India",
      "pages": "pp. 895~898",
      "year": 2018,
      "doi": "10.1109/ICECA.2018.8474622"
    },
    {
      "type": "Journal",
      "title": "A Simple Digital Triggering Circuit for Three-Phase Line Commutated SCR Inverter",
      "authors": "Tapan Kumar Chakraborty, Sakhawat Hossen Rakib",
      "venue": "International Journal of Industrial Electronics and Electrical Engineering",
      "volume": "Vol.6, Issue 2",
      "pages": "pp. 1-4",
      "year": 2018
    },
    {
      "type": "Conference",
      "title": "A Single Phase Cascaded H-Bridge Multilevel Inverter with Reduced Switching Devices and Harmonics",
      "authors": "Ashique Anan, Tapan Kumar Chakraborty, Khandaker Sultan Mahmood",
      "venue": "Proceedings of the 6th IEEE International Conference on Smart Energy Grid Engineering (SEGE), University of Ontario Institute of Technology, Oshawa, Canada",
      "pages": "pp. 222-225",
      "year": 2018,
      "doi": "10.1109/SEGE.2018.8499512"
    },
    {
      "type": "Conference",
      "title": "Generation of 13-Level Output Voltage from Single-Phase Multilevel Inverter Consisting of Cascaded Three H-Bridge Units",
      "authors": "Tapan Kumar Chakraborty, Ashique Anan, Sakhawat Hossen Rakib, Md. Imran Prodhan, Md. Mostofa Kamal, Md. Mahabubunnabi",
      "venue": "Proceedings of the 2nd IEEE International conference on power Electronics, Intelligent Control and Energy systems (ICPEICES-2018), Delhi Technological University, Delhi, India",
      "pages": "pp. 479-482",
      "year": 2018,
      "doi": "10.1109/ICPEICES.2018.8897441"
    },
    {
      "type": "Conference",
      "title": "Experimental Investigation on Single-Phase Multilevel Inverter for Generating 21-Level Output Voltage Using Four H-Bridge Units",
      "authors": "Tapan Kumar Chakraborty, Ashique Anan, Sakhawat Hossen Rakib",
      "venue": "Proceedings of the 4th IEEE Southern power Electronics Conference (SPEC 2018), Nanyang Technological University, Singapore",
      "pages": "pp. 648-651",
      "year": 2018,
      "doi": "10.1109/SPEC.2018.8635831"
    },
    {
      "type": "Conference",
      "title": "Study of Single-Phase Hybrid Multilevel Inverter for Obtaining 13-Level output Voltage Using Three H-Bridge Units",
      "authors": "Ashique Anan Abir, Mahmudul Alam, Tapan Kumar Chakraborty",
      "venue": "Proceedings of the 4th IEEE International Conference on Electrical Energy Systems (ICEES 2019), Chennai, India",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "An Experimental Study of Cascaded H-Bridge Multilevel Inverter for Obtaining Multiple Voltage Waveforms Containing Different Number of Levels",
      "authors": "Ashique Anan Abir, Tapan Kumar Chakraborty, Khandaker Sultan Mahmood",
      "venue": "Proceedings of the 10th IEEE International Symposium on Power Electronics for Distributed Generation Systems (PEDG2019), Xian, Shaanxi, China",
      "pages": "pp. 1017-1020",
      "year": 2019,
      "doi": "10.1109/PEDG.2019.8807600"
    },
    {
      "type": "Conference",
      "title": "A Simple Technique for Generating Gate Drive Signals for MOSFET-Based Single-Phase Multilevel Inverter",
      "authors": "Tapan Kumar Chakraborty, Ashique Anan Abir",
      "venue": "Proceedings of the 2nd International conference on Energy, Electrical and Power Engineering (CEEPE 2019), University of California, Berkeley, USA",
      "year": 2019
    },
    {
      "type": "Journal",
      "title": "A review on graph search algorithms for optimal energy efficient path planning for an unmanned air vehicle",
      "authors": "Sanjoy Kumar Debnath, Rosli Omar, Nor Badariyah Abdul Latip, Shasha Shely, Elia Nadira, Che Ku Nor Che Ku Melor, Tapan Kumar Chakraborty, Elango Natarajan",
      "venue": "Indonesian Journal of Electrical Engineering and Computer Science",
      "volume": "Vol.15, No. 2",
      "pages": "pp. 743-749",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Generation of Eleven-Level Output Voltage from Cascaded Multilevel Inverter Consisting of Three H-Bridge Units Connected to Unequal dc Sources",
      "authors": "Tapan Kumar Chakraborty, Ashique Anan Abir, Md. Imran Prodhan",
      "venue": "Proceedings of IEEE 4th International Conference on Green Energy and Applications (ICGEA 2020), NTU, Singapore",
      "pages": "pp. 21",
      "year": 2020
    },
    {
      "type": "Conference",
      "title": "Different Cell Decomposition Path Planning Methods for Unmanned Air Vehicles-A Review",
      "authors": "Sanjoy Kumar Debnath, Rosli Omar, Susama Bagchi, Elia Nadira Sabudin, Mohd Haris Asyraf Shee Kanda, Khan Foysol, Tapan Kumar Chakraborty",
      "venue": "Springer Nature, LNEE",
      "volume": "Vol. 666",
      "pages": "pp. 99-111",
      "year": 2020,
      "doi": "10.1007/978-981-15-5281-6_8"
    },
    {
      "type": "Conference",
      "title": "Harmonics Mitigation in Cascaded Multilevel Inverter Consisting of Four H-Bridge Units Connected to Unequal dc Sources",
      "authors": "Tapan Kumar Chakraborty, Ashique Anan Abir, Md. Imran Prodhan",
      "venue": "IEEE 5th International Conference on Green Energy and Applications (ICGEA 2021), NTU, Singapore",
      "year": 2021
    },
    {
      "type": "Conference",
      "title": "Experimental and Simulation Study of Harmonics in Asymmetric Multilevel Inverter Fabricated Using Four Units",
      "authors": "Ashique Anan Abir, Md. Mostofa Kamal, Md. Imran Prodhan, Tapan Kumar Chakraborty",
      "venue": "Proceedings of IEEE 6th International Conference on Green Energy and Applications (ICGEA 2022), NTU, Singapore",
      "pages": "pp. 167-170",
      "year": 2022,
      "doi": "10.1109/ICGEA54406.2022.9792023"
    },
    {
      "type": "Conference",
      "title": "A New Control Strategy for Multilevel Inverter to Reduce THD",
      "authors": "Tapan Kumar Chakraborty, Mushfiqur Rahman, Md. Zahidur Rahman Philips, Shara Islam",
      "venue": "Proceedings of IEEE 13th International Conference on Power, Energy and Electrical Engineering (CPEEE 2023), Tokyo, Japan",
      "pages": "pp. 166-169",
      "year": 2023,
      "doi": "10.1109/CPEEE56777.2023.10217747"
    },
    {
      "type": "Conference",
      "title": "A Comparative Study Between Two Switching Angle Techniques for Cascaded H Bridge Multilevel Inverter",
      "authors": "Tapan Kumar Chakraborty, Mushfiqur Rahman, Md. Zahidur Rahman Philips, Shara Islam",
      "venue": "Proceedings of IEEE 2023 International Conference on Power and Renewable Energy Engineering (PREE 2023), Tokyo, Japan",
      "pages": "pp. 162-167",
      "year": 2023,
      "doi": "10.1109/PREE57903.2023.10370268"
    },
    {
      "type": "Conference",
      "title": "Experimental Study of 13-Level Cascaded H-Bridge Multilevel Inverter Using Sinusoidal Switching Angle Technique",
      "authors": "Mujahidul Islam, Md. Imran Khan, Md. Saiful Islam Abir, Tapan Kumar Chakraborty",
      "venue": "Proceedings of IEEE 8th International Conference on Green Energy and Applications (ICGEA 2024), NTU, Singapore",
      "pages": "pp. 12-16",
      "year": 2024,
      "doi": "10.1109/ICGEA60749.2024.10561187"
    },
    {
      "type": "Conference",
      "title": "A Study of Dual Active Bridge Converter Performance",
      "authors": "Dhananjaya. B, Sadhana. B, Susama Bagchi, Sanjoy Kumar Debnath, Tapan Kumar Chakraborty, Manika Debnath",
      "venue": "Proceedings of 2024 IEEE Asia Pacific Conference on Innovation in Technology (APCIT), Mysore, Karnataka, India",
      "pages": "pp. 1-7",
      "year": 2024,
      "doi": "10.1109/APCIT62007.2024.10673580"
    },
    {
      "type": "Conference",
      "title": "Harmonics Mitigation in Multilevel Inverter Controlled by Equal-Step Angle and Sinusoidal Switching Angle Strategy with Increased Number of Voltage Levels Using PSIM Software",
      "authors": "Dewan Ashikur Rahaman, Tapan Kumar Chakraborty",
      "venue": "Proceedings of 2024 IEEE 4th International Symposium on Electrical, Electronics and Information Engineering (ISEEIE 2024), University of Leicester, United Kingdom",
      "pages": "pp. 109-114",
      "year": 2024,
      "doi": "10.1109/ISEEIE62461.2024.00028"
    },
    {
      "type": "Conference",
      "title": "Study of Sinusoidal Switching Angle-Based Asymmetrical Multilevel Solar Inverter",
      "authors": "Md. Kamrul Islam, Zahid Hasan Rifat, Rifat Siddiqa, Md. Abu Bakkar Siddik, Tapan Kumar Chakraborty",
      "venue": "IEEE 15th International Conference on Power, Energy and Electrical Engineering, Fukuoka, Japan",
      "year": 2025
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
