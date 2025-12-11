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

  researchExperience?: {
    period: string;
    focus: string[];
  }[];

  academicScholarships?: string[];

  consultancyActivities?: string[];

  fundedProjects?: {
    projectNumber: string;
    year: string;
    projectName: string;
    projectTitle: string;
    funder: string;
    role: string;
    amount: string;
  }[];

  ongoingWorks?: string[];

  academicProfiles?: AcademicProfile[];
};


export const facultyData: FacultyMember = {
  "id": "dr-md-shofiqul-islam",
  "name": "Dr. Md. Shofiqul Islam",
  "title": "Professor",
  "role": "Professor",
  "points": 94,
  "image": "/images/faculties/dr-md-shofiqul-islam.jpg",
  "bio": "Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. Dr. Islam has extensive experience in electronic device modeling, MEMS sensors, organic solar cells, and photonic crystal fiber-based sensors. He holds a PhD from Toyohashi University of Technology, Japan, and has over 25 years of academic and research experience.",
  "email": "dmsi@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "PhD in Electronic and Information Engineering",
      "institution": "Toyohashi University of Technology (TUT), Toyohashi, Japan",
      "year": "2007"
    },
    {
      "degree": "MSc in Electrical and Electronic Engineering",
      "institution": "Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      "year": "2002"
    },
    {
      "degree": "BSc in Electrical and Electronic Engineering",
      "institution": "Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      "year": "1999"
    }
  ],
  "researchInterests": [
    "Design, modeling and simulation of organic solar cells",
    "Design, modeling and simulation of photonic crystal fiber (PCF) based surface plasmon resonance (SPR) sensors",
    "Design, modeling and simulation of power electronic devices/circuits",
    "Study of the effect of materials on the performances of sensors and devices",
    "Design, fabrication and study of the properties of vertical Si microneedles",
    "Design, fabrication and study of the properties of MEMS sensors",
    "Modeling of electronic devices like MOSFET, TFET, GNRFET",
    "Fabrication of highly conductive vertical Si microneedles by using in-situ doping in vapor-liquid-solid method",
    "Modeling of n-C/p-Si solar cell"
  ],
  "academicExperience": [
    {
      "position": "Professor",
      "institute": "Electrical and Electronic Engineering (EEE), University of Asia Pacific (UAP), Dhaka, Bangladesh",
      "period": "Jan 2025 - Present"
    },
    {
      "position": "Associate Professor",
      "institute": "Electrical and Computer Engineering (ECE), King Abdulaziz University, Jeddah, Saudi Arabia",
      "period": "Dec 2012 – Aug 2024"
    },
    {
      "position": "Associate Professor",
      "institute": "Electrical and Electronic Engineering (EEE), Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      "period": "July 2009 – Dec 2012"
    },
    {
      "position": "Assistant Professor",
      "institute": "Electrical and Electronic Engineering (EEE), Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      "period": "Aug 2002 – July 2009"
    },
    {
      "position": "Lecturer",
      "institute": "Electrical and Electronic Engineering (EEE), Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh",
      "period": "Nov 1999 – Aug 2002"
    },
    {
      "position": "Part time/ Adjunct Faculty",
      "institute": "University of Liberal Arts, Military Institute of Science and Tech., East West University, Ahsanullah Univ. of Science and Tech., United International University, Dhaka, Bangladesh",
      "period": "2007- 2012, 2024"
    }
  ],
  "professionalMemberships": [
    "Member, Institute of Electrical and Electronics Engineers, IEEE",
    "Member, Institute of Engineers of Bangladesh, IEB, Dhaka, Bangladesh"
  ],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "Realization of In-Situ Doped n-Type and p-Type Si-Microprobe Array by Selective Vapor-Liquid-Solid (VLS) Growth Method",
      "authors": "Md. Shofiqul Islam, Hiroshi Ishino, Takeshi Kawano, Hidekuni Takao, Kazuaki Sawada and Makoto Ishida",
      "venue": "Japanese Journal of Applied Physics",
      "year": 2005,
      "impactFactor": 1.5,
      "doi": "https://doi.org/10.1143/JJAP.44.2161"
    },
    {
      "type": "Journal",
      "title": "Properties of a pn junction developed with a Si microprobe by vapour-liquid-solid growth using in situ doping",
      "authors": "M S Islam, T Kawashima, K Sawada and M Ishida",
      "venue": "Semiconductor Science and Technology",
      "year": 2006,
      "impactFactor": 1.9,
      "doi": "doi:10.1088/0268-1242/21/9/025"
    },
    {
      "type": "Journal",
      "title": "High Yield Growth of p-Si Microprobe Arrays by Selective Vapor-Liquid-Solid Method Using In Situ Doping and Their Properties",
      "authors": "Md. Shofiqul Islam, Takahiro Kawashima, Kazuaki Sawada and Makoto Ishida",
      "venue": "Journal of Crystal Growth",
      "year": 2007,
      "impactFactor": 1.7,
      "doi": "https://doi.org/10.1016/j.jcrysgro.2007.05.021"
    },
    {
      "type": "Journal",
      "title": "Photoabsorption in Carbon and Silicon Layer of Phosphorous Doped Camphoric Carbon/p-Silicon (n-CC/p-Si) Solar Cell",
      "authors": "Md. Shofiqul Islam, Sharif Mohammad Mominuzzaman, Tetsuo Soga and Takashi Jimbo",
      "venue": "Thin Solid Films",
      "year": 2010,
      "impactFactor": 2.0,
      "doi": "https://doi.org/10.1016/j.tsf.2009.09.086"
    },
    {
      "type": "Journal",
      "title": "Analysis of the Effect of Boron Doping on the Growth Rate and Diameter of p-Si Microneedle Grown by In-Situ Doping VLS Method",
      "authors": "Kamrul Hasan and Md. Shofiqul Islam",
      "venue": "IEBJEE",
      "year": 2012,
      "url": "http://www.iebeed.org/photogallary/IEBJEE-2012-102_Revised.pdf"
    },
    {
      "type": "Journal",
      "title": "Numerical Investigation of the Effects of Conduction Band Nonparabolicity on the Conduction Sub-band Dispersion Relationships in a Al0.88In0.12N/Ga0.92In0.08N Quantum Well",
      "authors": "Saumya Biswas, Md. Shofiqul Islam, Ifana Mahbub, Farasatul Adnan",
      "venue": "Lecture Notes on Photonics and Optoelectronics",
      "year": 2013,
      "url": "http://www.lnpo.net/uploadfile/2013/0624/20130624033521706.pdf"
    },
    {
      "type": "Journal",
      "title": "Interface pn Junction Arrays with High Yielded Grown p-Si Microneedles by Vapor-Liquid-Solid Method at Low Temperature",
      "authors": "Md. Shofiqul Islam, Makoto Ishida",
      "venue": "Solid-State Electronics",
      "year": 2015,
      "impactFactor": 1.4,
      "doi": "https://doi.org/10.1016/j.sse.2014.10.009"
    },
    {
      "type": "Journal",
      "title": "Analytical Modeling of Electrical Characteristics of Low Bandgap Graphene Nanoribbon FET",
      "authors": "Md. Shofiqul Islam, Tanvir Muntasir, Shuvomoy Das Gupta",
      "venue": "International Journal of Advanced Engineering and Nano Technology (IJAENT)",
      "year": 2015,
      "url": "https://www.ijaent.org/wp-content/uploads/papers/v2i10/J03380921015.pdf"
    },
    {
      "type": "Journal",
      "title": "Comparative Study of the Effects of Phosphorus and Boron Doping in Vapor-Liquid-Solid Growth with Fixed Flow of Silicon Gas",
      "authors": "Md. Shofiqul Islam, Ibrahim Mustafa Mehedi",
      "venue": "Journal of Crystal Growth",
      "year": 2016,
      "impactFactor": 1.7,
      "doi": "https://doi.org/10.1016/j.jcrysgro.2016.01.034"
    },
    {
      "type": "Journal",
      "title": "Nano-structural variation of highly aligned anodic Titania nanotube arrays for gas phase photocatalytic application",
      "authors": "Ibrahim Mustafa Mehedi, Md. Faruk Hossain, Takakazu Takahashi, Md. Shofiqul Islam",
      "venue": "Journal of Photochemistry and Photobiology A: Chemistry",
      "year": 2017,
      "impactFactor": 4.1,
      "doi": "https://doi.org/10.1016/j.jphotochem.2016.11.019"
    },
    {
      "type": "Journal",
      "title": "Analytical modeling of organic solar cells including monomolecular recombination and carrier generation calculated by optical transfer matrix method",
      "authors": "Md. Shofiqul Islam",
      "venue": "Organic Electronics",
      "year": 2017,
      "impactFactor": 2.7,
      "doi": "https://doi.org/10.1016/j.orgel.2016.10.040"
    },
    {
      "type": "Journal",
      "title": "Fringing-field-based 2-D analytical model for a gate-underlap double-gate TFET",
      "authors": "Dip Joti Paul, Md. Abdullah-Al-Kaiser, Md. Shofiqul Islam, Quazi D. M. Khosru",
      "venue": "Journal of Computational Electronics",
      "year": 2018,
      "impactFactor": 2.2,
      "doi": "https://doi.org/10.1007/s10825-018-1234-5"
    },
    {
      "type": "Journal",
      "title": "Numerical Study of Circularly Slotted Highly Sensitive Plasmonic Biosensor: A Novel Approach",
      "authors": "M. N. Sakib, S. M. R. Islam, T.V. Mahendiran, L. F. Abdulrazak, Md. Shofiqul Islam, I. M. Mehedi, Q. M. Kamrunnahar, M. Momtaj, M. W. Hassan, I. S. Amirig, M. B. Hossain",
      "venue": "Results in Physics",
      "year": 2020,
      "impactFactor": 4.4,
      "doi": "https://doi.org/10.1016/j.rinp.2020.103130"
    },
    {
      "type": "Journal",
      "title": "Numerical Investigation into Optoelectronic Performance of InGaN Blue Laser in Polar, Non-Polar and Semipolar Crystal Orientation",
      "authors": "S. Roy, S. G. Kiratnia, P. N. Roy, M. M. Hasan, A. H. Howlader, M. S. Rahman, M. R. Islam, M. M. Rana, L. F. Abdulrazak, I. M. Mehedi, Md. Shofiqul Islam, M. B. Hossain",
      "venue": "Crystals",
      "year": 2020,
      "impactFactor": 2.4,
      "doi": "https://doi.org/10.3390/cryst10111033"
    },
    {
      "type": "Journal",
      "title": "Mode-resolved analysis of a planar multi-layer plasmonic nanolaser",
      "authors": "Zihad Azad, Md. Shofiqul Islam, Muhammad Anisuzzaman Talukder",
      "venue": "Optics Communications",
      "year": 2021,
      "impactFactor": 2.2,
      "doi": "https://doi.org/10.1016/j.optcom.2020.126614"
    },
    {
      "type": "Journal",
      "title": "In-Depth Analysis of Organic Solar Cells Using Transport Equation and Optical Transfer Matrix Method with Detailed Analytical Derivations",
      "authors": "Md. Shofiqul Islam",
      "venue": "Energies",
      "year": 2021,
      "impactFactor": 3.0,
      "doi": "https://doi.org/10.3390/en14030735"
    },
    {
      "type": "Journal",
      "title": "Fabrication of pn junction arrays with highly successful grown n-Si microneedles by using low temperature VLS method",
      "authors": "Md. Shofiqul Islam, Mohammad Asif Hussain, Abdulhameed Fouad Alkhateeb",
      "venue": "Journal of Micromechanics and Microengineering",
      "year": 2021,
      "impactFactor": 2.4,
      "doi": "https://doi.org/10.1088/1361-6439/abf366"
    },
    {
      "type": "Journal",
      "title": "Negative resonant modes in a hyperbolic metamaterial slot cavity",
      "authors": "Mehedi Hasan, Dihan Hasan, Md. Shofiqul Islam, Muhammad Anisuzzaman Talukder",
      "venue": "Applied Physics B",
      "year": 2021,
      "impactFactor": 2.0,
      "doi": "https://doi.org/10.1007/s00340-021-07631-8"
    },
    {
      "type": "Journal",
      "title": "Investigation of the Current of P3HT: PCBM-Based Organic Solar Cell Extracting the Spatial Recombination Coefficient of the Active Layer",
      "authors": "Md. Shofiqul Islam",
      "venue": "IEEE Access",
      "year": 2021,
      "impactFactor": 3.4,
      "doi": "https://doi.org/10.1109/ACCESS.2021.3110508"
    },
    {
      "type": "Journal",
      "title": "Plasmonic sensor based on microstructure PCF: performance analysis with outside detecting approach",
      "authors": "L. F. Abdulrazak, M. B. Hossain, Md. Shofiqul Islam, A. F. Alkhateeb, I. M. Mehedi, S. Roy, M. S. Hossain, M. A. Hossain",
      "venue": "Optical and Quantum Electronics",
      "year": 2021,
      "impactFactor": 3.3,
      "doi": "https://doi.org/10.1007/s11082-021-03441-6"
    },
    {
      "type": "Journal",
      "title": "High index core flat fiber surface plasmon resonance bio-sensor",
      "authors": "A. F. Alkhateeb, Md. Shofiqul Islam, M. Y. Ali, R. J. Usha, S. Tasnim, S. Alghamdi, M. A. Mollah",
      "venue": "Applied Optics",
      "year": 2022,
      "impactFactor": 1.7,
      "doi": "https://doi.org/10.1364/AO.459374"
    },
    {
      "type": "Journal",
      "title": "Design of a Nonlinear Integral Terminal Sliding Mode Controller for a PEM Fuel Cell Based on a DC-DC Boost Converter",
      "authors": "F. Akter, T. K. Roy, Md. Shofiqul Islam, A. F. Alkhateeb, M. A. Mollah",
      "venue": "IEEE Access",
      "year": 2022,
      "impactFactor": 3.4,
      "doi": "https://doi.org/10.1109/ACCESS.2022.3205733"
    },
    {
      "type": "Journal",
      "title": "Surface plasmon resonance voltage sensor based on a liquid crystal-infiltrated hollow fiber",
      "authors": "Md. Shofiqul Islam, M. A. Mollah, A. F. Alkhateeb, W. Zouch, S. Alghamdi",
      "venue": "Optical Materials Express",
      "year": 2022,
      "impactFactor": 2.8,
      "doi": "https://doi.org/10.1364/OME.473834"
    },
    {
      "type": "Journal",
      "title": "Designing of Hollow Core Grapefruit Fiber Using Cyclo Olefin Polymer for the Detection of Fuel Adulteration in Terahertz Region",
      "authors": "S. Hossain, M. A. Mollah, M. K. Hosain, Md. Shofiqul Islam, A. F. Alkhateeb",
      "venue": "Polymers",
      "year": 2022,
      "impactFactor": 4.7,
      "doi": "https://doi.org/10.3390/polym15010151"
    },
    {
      "type": "Journal",
      "title": "Robust hybrid nonlinear control approach for stability enhancement of a constant power load DC-DC boost converter",
      "authors": "Z. Alam, S. K. Ghosh, A. F. Alkhateeb, T. K. Roy, Md. Shofiqul Islam, S. Saha, M. A. Hussain",
      "venue": "Alexandria Engineering Journal",
      "year": 2023,
      "impactFactor": 6.2,
      "doi": "https://doi.org/10.1016/j.aej.2023.05.041"
    },
    {
      "type": "Journal",
      "title": "X-Shaped Exposed Core Highly Sensitive Plasmonic Sensor for Cancer Cell Detection",
      "authors": "Afiquer Rahman, Md. Shofiqul Islam, M. Alharbi, Mehedi Hasan Pappu, Ibrahim Mustafa Mehedi, Sami Alghamdi, Md. Aslam Mollah",
      "venue": "Optical and Quantum Electronics",
      "year": 2024,
      "impactFactor": 3.3,
      "doi": "https://doi.org/10.1007/s11082-024-06392-w"
    },
    {
      "type": "Journal",
      "title": "Design and Characterization of Highly Sensitive Plasmonic Sensor for Pathogens Detection in Water",
      "authors": "Md. Rifat Jahan, Md. Shofiqul Islam, M. Alharbi, Wassim Zouch, Md. Aslam Mollah",
      "venue": "Optical and Quantum Electronics",
      "year": 2024,
      "impactFactor": 3.3,
      "doi": "https://doi.org/10.1007/s11082-024-06477-6"
    },
    {
      "type": "Journal",
      "title": "Rapid one pot syntheses of magnetic Zn1-xFexS nanostructures: Enhancing properties of ZnS material for effective photocatalytic application",
      "authors": "Ibrahim M. Mehedi, Ahmed IM. Iskanderani, Md Shofiqul Islam, Heidir Shah, Vipin Shrotriya, M Burhanuz Zaman",
      "venue": "Ceramics International",
      "year": 2024,
      "impactFactor": 5.1,
      "doi": "https://doi.org/10.1016/j.ceramint.2024.02.093"
    },
    {
      "type": "Journal",
      "title": "Dual-purpose surface plasmon resonance fiber sensor for power monitoring and biosensing application",
      "authors": "Md. Shofiqul Islam, Md. Aslam Mollah, Md. Shafiul Alam, Sakhawat Hossen Rakib, Md. Sultan Mahmud, Muhibul Haque Bhuyan",
      "venue": "Optics Express",
      "year": 2025,
      "impactFactor": 3.2,
      "doi": "https://doi.org/10.1364/OE.563235"
    },
    {
      "type": "Journal",
      "title": "Moon Landing Trajectory Optimization",
      "authors": "Ibrahim Mustafa Mehedi, Md. Shofiqul Islam",
      "venue": "International Journal of Advanced Computer Science and Applications (IJACSA)",
      "year": 2016,
      "impactFactor": 0.7,
      "doi": "https://dx.doi.org/10.14569/IJACSA.2016.070341"
    },
    {
      "type": "Journal",
      "title": "PREHEAT: Precision heart rate monitoring from intense motion artifact corrupted PPG signals using constrained RLS and wavelets",
      "authors": "Md. Shofiqul Islam, Md. Shifat-E-Rabbi, Abdullah Mohamed Ali Dobaie, Md. Kamrul Hasan",
      "venue": "Biomedical Signal Processing and Control",
      "year": 2017,
      "impactFactor": 4.9,
      "doi": "https://doi.org/10.1016/j.bspc.2017.05.010"
    },
    {
      "type": "Journal",
      "title": "Landing Trajectory Generation and Energy Optimization for Unmanned Lunar Mission",
      "authors": "Md. Shofiqul Islam, Ibrahim M. Mehedi",
      "venue": "Mathematical Problems in Engineering",
      "year": 2021,
      "impactFactor": 1.7,
      "doi": "https://doi.org/10.1155/2021/9902390"
    },
    {
      "type": "Conference",
      "title": "Separation of Photoabsorption in Carbon Layer of n-Carbon/p-Silicon Photovoltaic Cell",
      "authors": "Md. Shofiqul Islam, Sharif Mohammad Mominuzzaman, Mohammad Rusop, T. Soga",
      "venue": "Second International Conference on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh",
      "year": 2002,
      "url": "https://www.researchgate.net/publication/284617418"
    },
    {
      "type": "Conference",
      "title": "Realization of n-type and p-type Si-Microprobe Array Using In-Situ Doping with Selective Vapor-Liquid-Solid (VLS) Growth Method",
      "authors": "Md. Shofiqul Islam, Hiroshi Ishino, Takeshi Kawano, Hidekuni Takao, Kazuaki Sawada, Makoto Ishida",
      "venue": "International Conference on Solid State Devices and Materials (SSDM), Tokyo, Japan",
      "year": 2004,
      "doi": "10.7567/SSDM.2004.A-5-3"
    },
    {
      "type": "Conference",
      "title": "Fabrication of pn junction array using Si-microprobes grown by in-situ doping VLS growth",
      "authors": "Md. Shofiqul Islam, Naoki Funagayama, Takahiro Kawashima, Hidekuni Takao, Kazuaki Sawada, Makoto Ishida",
      "venue": "The 53rd Spring Meeting, JSAP, Tokyo, Japan",
      "year": 2006,
      "url": "https://www.researchgate.net/publication/284617271"
    },
    {
      "type": "Conference",
      "title": "Fabrication of pn junction using Si-microprobe array by in-situ doping VLS growth",
      "authors": "M. S. Islam, H. Takao, K. Sawada, M. Ishida",
      "venue": "Asia Pacific Conference of Transducers and Micro-Nano Technology (APCOT-2006), Singapore",
      "year": 2006,
      "url": "https://www.researchgate.net/publication/284617271"
    },
    {
      "type": "Conference",
      "title": "Spectral Photoresponse of Nitrogen Incorporated Carbon Thin Films",
      "authors": "Tanveer Al Amin, Chowdhury Md. Arif, Ahmed Tasnim Rasin, S. M. Mominuzzaman, Md. Shofiqul Islam",
      "venue": "Fourth International Conference on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh",
      "year": 2006,
      "doi": "10.1109/ICECE.2006.355649"
    },
    {
      "type": "Conference",
      "title": "p-Si Microprobe Arrays Grown at Low Temperature by Selective VLS Using In-Situ Doping and Their Properties",
      "authors": "Md. Shofiqul Islam, Takahiro Kawashima, Kazuaki Sawada, Makoto Ishida",
      "venue": "IEEE Sensors 2007, Atlanta, Georgia, USA",
      "year": 2007,
      "doi": "https://doi.org/10.1109/ICSENS.2007.4388444"
    },
    {
      "type": "Conference",
      "title": "VLS Growth of Doped Si-Microprobe Arrays Using Varying PH3 Flow with a Fixed Flow of Si2H6 at Low Temperature",
      "authors": "Md. Shofiqul Islam, Kazuaki Sawada, Makoto Ishida",
      "venue": "IEEE Fifth International Conference on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh",
      "year": 2008,
      "doi": "https://doi.org/10.1109/ICECE.2008.4769210"
    },
    {
      "type": "Conference",
      "title": "Realization of High Aspect Ratio Silicon Microneedles Using Optimized Process for Biomedical Applications",
      "authors": "Md. Shofiqul Islam, Md. Nurul Abser, Md. Nurul Islam, Md. Tanjil Shival",
      "venue": "IEEE TENCON 2009, Singapore",
      "year": 2009,
      "doi": "https://doi.org/10.1109/TENCON.2009.5396246"
    },
    {
      "type": "Conference",
      "title": "Mechanical Feasibility Analysis of Process Optimized Silicon Microneedle for Biomedical Applications",
      "authors": "Md. Nurul Abser, Md. Gaffar, Md. Shofiqul Islam",
      "venue": "IEEE Sixth International Conference on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh",
      "year": 2010,
      "doi": "https://doi.org/10.1109/ICELCE.2010.5700668"
    },
    {
      "type": "Conference",
      "title": "Design, Fabrication and Performance Evaluation of a Piezoresistive Arsenic Sensor",
      "authors": "Md. Shofiqul Islam, Sourav Das, Md. Mobashir Hasan Shandhi",
      "venue": "IEEE Sixth International Conference on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh",
      "year": 2010,
      "doi": "https://doi.org/10.1109/ICELCE.2010.5700672"
    },
    {
      "type": "Conference",
      "title": "Growth Rate Modeling of Boron Doped Silicon Micro Needle Grown by VLS Mechanism",
      "authors": "Kamrul Hasan, Md. Shofiqul Islam",
      "venue": "IEEE Sixth International Conference on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh",
      "year": 2010,
      "doi": "https://doi.org/10.1109/ICELCE.2010.5700711"
    },
    {
      "type": "Conference",
      "title": "A Compact Analytical Model of Band-to-Band Tunneling in a Nanoscale p-i-n Diode",
      "authors": "Kawser Ahmed, Mirza Mohammad Monzure Elahi, Md. Shofiqul Islam",
      "venue": "IEEE/OSA/IAPR International Conference on Informatics, Electronics & Vision, Dhaka, Bangladesh",
      "year": 2012,
      "doi": "https://doi.org/10.1109/ICIEV.2012.6317361"
    },
    {
      "type": "Conference",
      "title": "Rectifying Characteristics of Boron Doped Si Microneedle Grown by In-Situ Doping VLS",
      "authors": "Md. Shofiqul Islam, Kamrul Hasan",
      "venue": "IEEE/OSA/IAPR International Conference on Informatics, Electronics & Vision (ICIEV), Dhaka, Bangladesh",
      "year": 2012,
      "doi": "https://doi.org/10.1109/ICIEV.2012.6317429"
    },
    {
      "type": "Conference",
      "title": "Analytical Model of Spatial Distribution of Potential along the Channel of Low Band Gap GNR-FET at High Temperature",
      "authors": "Tanvir Muntasir, Md. Shofiqul Islam, Shuvomoy Das Gupta",
      "venue": "IEEE/OSA/IAPR International Conference on Informatics, Electronics & Vision (ICIEV), Dhaka, Bangladesh",
      "year": 2012,
      "doi": "https://doi.org/10.1109/ICIEV.2012.6317495"
    },
    {
      "type": "Conference",
      "title": "Analytical Modelling of Current in Higher Width Graphene Nanoribbon Field Effect Transistor",
      "authors": "Tanvir Muntasir, Shuvomoy Das Gupta, Md. Shofiqul Islam",
      "venue": "IEEE Electron Devices and Solid State Circuits (EDSSC), Bangkok, Thailand",
      "year": 2012,
      "doi": "https://doi.org/10.1109/EDSSC.2012.6482772"
    },
    {
      "type": "Conference",
      "title": "An Improved Analytical Model of Current in Tunnel Field Effect Transistor",
      "authors": "Mirza Mohammad Monzure Elahi, Kawser Ahmed, Md. Shofiqul Islam",
      "venue": "IEEE Seventh International Conference on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh",
      "year": 2012,
      "doi": "https://doi.org/10.1109/ICECE.2012.6471672"
    },
    {
      "type": "Conference",
      "title": "Off Current Modeling of a Tunnel Field Effect Transistor",
      "authors": "Md. Shofiqul Islam, Kawser Ahmed, Mirza Mohammad Monzure Elahi",
      "venue": "IEEE Seventh International Conference on Electrical and Computer Engineering (ICECE), Dhaka, Bangladesh",
      "year": 2012,
      "doi": "https://doi.org/10.1109/ICECE.2012.6471675"
    },
    {
      "type": "Conference",
      "title": "Peak Emission Wavelength Tuning for Light Emitting Diodes and Lasers for InGaN − delta InyGa1−y Quantum Well by varying the Composition of the Delta well",
      "authors": "Saumya Biswas, Ifana Mahbub, Md. Shofiqul Islam, Saugata Biswas",
      "venue": "Conference on Electron Devices (CDE), Valladolid, Spain",
      "year": 2013,
      "doi": "https://doi.org/10.1109/CDE.2013.6481379"
    },
    {
      "type": "Conference",
      "title": "Conduction band-Valence band Coupling Effects on the Band Structure of In0.28Ga0.72N/GaN Quantum Well",
      "authors": "Saumya Biswas, Ifana Mahbub, Md. Shofiqul Islam",
      "venue": "Conference on Electron Devices (CDE), Valladolid, Spain",
      "year": 2013,
      "doi": "https://doi.org/10.1109/CDE.2013.6481380"
    },
    {
      "type": "Conference",
      "title": "A Complete Analytical Model for Square Diaphragm Capacitive Sensor with Clamped Edge",
      "authors": "Farah Deeba, Shahed Khan Mohammed, Md. Shofiqul Islam",
      "venue": "IEEE Eighth International Conference on Nano/Micro Engineered and Molecular System (NEMS), Suzhou, China",
      "year": 2013,
      "doi": "https://doi.org/10.1109/NEMS.2013.6559956"
    }
  ],
  "administrativeRoles": [],
  "researchExperience": [
    {
      "period": "2015 - Present",
      "focus": [
        "Design, modeling and simulation of organic solar cells",
        "Design, modeling and simulation of photonic crystal fiber (PCF) based surface plasmon resonance (SPR) sensors",
        "Design, modeling and simulation of power electronic devices/circuits",
        "Study of the effect of materials on the performances of sensors and devices"
      ]
    },
    {
      "period": "2007 - 2014",
      "focus": [
        "Design, fabrication and study of the properties of vertical Si microneedles",
        "Design, fabrication and study of the properties of MEMS sensors",
        "Modeling of electronic devices like MOSFET, TFET, GNRFET"
      ]
    },
    {
      "period": "2003 - 2007",
      "focus": [
        "Fabrication of highly conductive vertical Si microneedles by using in-situ doping in vapor-liquid-solid method",
        "Fabrication of devices inside vertical SI microneedles"
      ]
    },
    {
      "period": "2000-2002",
      "focus": [
        "Modeling of n-C/p-Si solar cell",
        "Investigation of the effect of phosphorous doping on the performance of n-C/p-Si solar cell"
      ]
    }
  ],
  "academicScholarships": [
    "MONBUKAGAKUSHO Scholarship, Japan government for PhD study",
    "Dean's List Scholarship (4 times), BUET, Dhaka, Bangladesh",
    "University Merit Scholarship (8 times), BUET, Dhaka, Bangladesh",
    "Technical Scholarship, BUET, Dhaka, Bangladesh"
  ],
  "consultancyActivities": [
    "Member, Team for development and installation of SCADA system at different sub-stations of power development board of Bangladesh (BPDB) under BRTC, BUET, 2010-2012",
    "Member, Feasibility study for the co-generation in sugar mills in Bangladesh under BRTC, BUET, 2010",
    "Member, Team for \"Evaluation of quality and quantity of the equipment of 2500 KVA, 11/0.415 KV sub-station and generating units commissioned at the campus of Ahsanullah University of Science and Technology, Tejgaon, Dhaka, Bangladesh\" under BRTC, BUET, 2008",
    "Member, Team for \"The assessment of loss and damage of the telecommunication equipment imported by Grameen Phone Ltd from China\" under BRTC, BUET, 2008",
    "Member, Investigation of the project \"Installation of lifts at the National Institute of Ophthalmology and 250 Bed Hospital, Sher-E-Bangla Nagar, Dhaka, Bangladesh\" under BRTC, BUET, 2008",
    "Member, Testing of different features of LT panel, HT panel, Load break switch (LBS) under BRTC, BUET, 2009",
    "Member, Testing of different features of circuit breakers of different ranges 100-500A under BRTC, BUET, 2008",
    "Member, Testing of different features of Transformers of different sizes under BRTC, BUET, 2002-2012",
    "Member, Testing of different features of Batteries of different ampere hour 30-100 AH under BRTC, BUET, 2008-2012",
    "Member, Testing of different features of Electric bulbs of different wattages 40-200 watts under BRTC, BUET, 2002",
    "Member, Organizing Committee for the 7th International Conference of Electrical and Computer Engineering (ICECE), 20-22 December 2012, Held at Hotel Pan Pacific Shonargaon, Dhaka, Bangladesh",
    "Member and Treasurer, Organizing Committee for the 6th International Conference of Electrical and Computer Engineering (ICECE), 18-20 December 2010, Held at Hotel Pan Pacific Shonargaon, Dhaka, Bangladesh",
    "Member, Technical Committee for the 5th International Conference of Electrical and Computer Engineering (ICECE), 20-22 December 2008, Held at Hotel Sheraton, Dhaka, Bangladesh",
    "Member, Organizing Committee for the 2nd International Conference of Electrical and Computer Engineering (ICECE), 26-28 December 2002, Held at Hotel Pan Pacific Shonargaon, Dhaka, Bangladesh",
    "Member, The exam committee for the recruitment of Assistant and Sub-assistant Engineer in different organizations like PDB, WASA, DESA, DPCL, PGCB, PWD under BRTC, BUET, 2007-2012",
    "Member, The committee for the recruitment of technical persons in Bangladesh Film Development Corporation (BFDC), appointed by BUET under the instruction of Government of Bangladesh, 2007 - 2012",
    "Member, The committee for the recruitment of Assistant Electrician at Directorate of Student Welfare office, Bangladesh University of Engineering and Technology (BUET), 2010",
    "Member, The committee for the recruitment of Lab Attendant at Department of Electrical and Electronic Engineering, Bangladesh University of Engineering and Technology (BUET), 2012",
    "Member, Tender Evaluation Committee (TEC) in different projects of Dhaka Electric Supply Company Ltd (DESCO), appointed by BUET under the instruction of Government of Bangladesh, 2010 - 2012",
    "Member, Tender Evaluation Committee (TEC) in different projects of Bangladesh Council of Scientific and Industrial Research (BCSIR), appointed by BUET under the instruction of Government of Bangladesh, 2007 - 2012",
    "Member, Tender Opening Committee (TOC) in different projects of Bangladesh Council of Scientific and Industrial Research (BCSIR), appointed by BUET under the instruction of Government of Bangladesh, 2007 - 2012"
  ],
  "fundedProjects": [
    {
      "projectNumber": "17206038",
      "year": "2004-2007",
      "projectName": "21st Century COE Program",
      "projectTitle": "Intelligent Human Sensing",
      "funder": "Ministry of Education, Japan",
      "role": "Researcher",
      "amount": "40M Yen"
    },
    {
      "projectNumber": "BPDB-BRTC 2011",
      "year": "2011-2012",
      "projectName": "BPDB-BRTC",
      "projectTitle": "Development and Implementation of SCADA System at Several Sub-stations of BPDB in Bangladesh",
      "funder": "BPDB, Bangladesh",
      "role": "Member",
      "amount": "6M BDT"
    },
    {
      "projectNumber": "D-135-7-1437",
      "year": "2015",
      "projectName": "Distinct Research Study",
      "projectTitle": "Analytical modeling of organic solar cells including monomolecular recombination and carrier generation calculated by optical transfer matrix method",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "50000 SAR"
    },
    {
      "projectNumber": "D-135-106-1437",
      "year": "2015-2022",
      "projectName": "Distinct Research Study",
      "projectTitle": "Surface plasmon resonance voltage sensor based on a liquid crystal-infiltrated hollow fiber",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "50000 SAR"
    },
    {
      "projectNumber": "G-441-135-37",
      "year": "2015-2017",
      "projectName": "General Project",
      "projectTitle": "A robust wireless heart rate monitoring technique for handy devices using dual channel photoplethysmographic signals corrupted by intense motion artifacts",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "45000 SAR"
    },
    {
      "projectNumber": "D-144-135-1438",
      "year": "2017",
      "projectName": "Distinct Research Study",
      "projectTitle": "In-depth analysis of organic solar cells using transport equation and optical transfer matrix method with detailed analytical derivation",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "35000 SAR"
    },
    {
      "projectNumber": "G: 331-135-1439",
      "year": "2018",
      "projectName": "General Project",
      "projectTitle": "Fabrication of pn junction arrays with highly successful grown n-Si microneedles by using low temperature VLS method",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "35000 SAR"
    },
    {
      "projectNumber": "G: 293-135-1440",
      "year": "2018",
      "projectName": "General Project",
      "projectTitle": "Energy Optimization and Landing Trajectory Generation for Unmanned Lunar Mission",
      "funder": "DSR, King Abdulaziz University",
      "role": "Co-Investigator",
      "amount": "31000 SAR"
    },
    {
      "projectNumber": "DF-155-135-1441",
      "year": "2019-2021",
      "projectName": "Distinct Research Study Fast - 1",
      "projectTitle": "Investigation of the current of P3HT:PCBM based organic solar cell extracting the spatial recombination coefficient of the active layer",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "35000 SAR"
    },
    {
      "projectNumber": "DF-249-135-1441",
      "year": "2019-2022",
      "projectName": "Distinct Research Study Fast - 2",
      "projectTitle": "High index core flat fiber surface plasmon resonance bio-sensor",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "35000 SAR"
    },
    {
      "projectNumber": "DF-257-611-1441",
      "year": "2019-2021",
      "projectName": "Distinct Research Study Fast - 3",
      "projectTitle": "Plasmonic sensor based on microstructure PCF: performance analysis with outside detecting approach",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "35000 SAR"
    },
    {
      "projectNumber": "DF-355-135-1441",
      "year": "2019-2022",
      "projectName": "Distinct Research Study Fast - 4",
      "projectTitle": "Design of a Nonlinear Integral Terminal Sliding Mode Controller for a PEM Fuel Cell Based on a DC-DC Boost Converter",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "35000 SAR"
    },
    {
      "projectNumber": "DF-356-135-1441",
      "year": "2019-2022",
      "projectName": "Distinct Research Study Fast - 5",
      "projectTitle": "Designing of Hollow Core Grapefruit Fiber Using Cyclo Olefin Polymer for the Detection of Fuel Adulteration in Terahertz Region",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "35000 SAR"
    },
    {
      "projectNumber": "DF-487-135-1441",
      "year": "2019-2023",
      "projectName": "Distinct Research Study Fast - 6",
      "projectTitle": "Robust hybrid nonlinear control approach for stability enhancement of a constant power load DC-DC boost converter",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "35000 SAR"
    },
    {
      "projectNumber": "IFPIP:961-135-1443",
      "year": "2022-2024",
      "projectName": "Institutional Funding Project for Indexed Publication",
      "projectTitle": "X-shaped exposed core highly sensitive plasmonic sensor for cancer cell detection",
      "funder": "DSR, King Abdulaziz University",
      "role": "Principal Investigator",
      "amount": "28000 SAR"
    }
  ],
  "ongoingWorks": [
    "Design and Analysis of a Novel Dual V-Shaped SPR Biosensor for Wide Range Applications",
    "A Novel Grapefruit-Shaped Plasmonic Sensor Filled with Liquid Crystal for Voltage Sensing Application",
    "Ultra-Wideband Terahertz Metamaterial Absorber: Design and Optimization",
    "IoT-Integrated Eye Blink Controlled Wheelchair Using Machine Learning for Quadriplegic Patients",
    "Increased Solar PV Integrated System Frequency Stabilization Framework with Multi-Verse Optimization Based Fractional Order PI Controller",
    "Study of the effect of active layer thickness of P3HT:PCBM organic solar cell using improved analytical approach",
    "Realization of pn junction at the midway of vertically standing Si microneedle fabricating n-substrate/n-microneedle/p-microneedle structure by using 2-Step VLS Growth at Low Temperature",
    "High successful fabrication of vertical Si microneedle embedded with pn junction at the middle having the structure of p-substrate/p-microneedle/n-microneedle by low temperature VLS Growth in two steps",
    "Realization of High Aspect Ratio Out of Plane Hollow Silicon Microneedle by Optimizing the Etch Processes and Investigation of its Mechanical Stability for Biomedical Application",
    "Electrical Characteristics of Boron Doped Si Microneedles Grown by VLS Mechanism"
  ],
  "academicProfiles": []
};

export default facultyData;
