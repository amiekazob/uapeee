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
  "id": "dr-tasnia-hossain",
  "name": "Dr. Tasnia Hossain",
  "title": "Assistant Professor",
  "role": "Assistant Professor",
  "points": 77,
  "image": "/images/faculties/dr-tasnia-hossain.jpg",
  "bio": "Assistant Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. She holds a PhD from CNRS-CRHEA, University of Nice Sophia Antipolis, France, where she conducted research on GaN based structures on patterned silicon substrate. She is a recipient of the prestigious Erasmus Mundus scholarship from the European Commission. Her research expertise spans semiconductor device physics, digital signatures, and network protocols.",
  "email": "tasnia@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD)",
      "institution": "CNRS-CRHEA, University of Nice Sophia Antipolis, France",
      "year": "2009 - 2012"
    },
    {
      "degree": "Master of Science (M.Sc.) in Applied Physics, Electronics and Communication Engineering",
      "institution": "University of Dhaka (DU)",
      "year": "2002 - 2003 (Held in 2006)"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Applied Physics, Electronics and Communication Engineering",
      "institution": "University of Dhaka (DU)",
      "year": "1999 - 2002 (Held in 2004)"
    }
  ],
  "researchInterests": [
    "GaN Based Semiconductor Structures",
    "Stress and Strain Analysis",
    "Patterned Silicon Substrates",
    "Digital Signature Algorithms",
    "Network Routing Protocols",
    "Semiconductor Device Physics",
    "Applied Physics",
    "Electronics and Communication Engineering"
  ],
  "academicExperience": [
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "October 2014 - Present",
      "description": "Teaching undergraduate and graduate courses in electrical and electronic engineering"
    },
    {
      "position": "Assistant Professor (Part-time)",
      "institute": "Department of ECE, North South University",
      "period": "May - September 2013",
      "description": "Part-time teaching position in Electronics and Communication Engineering"
    },
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, Hamdard University Bangladesh",
      "period": "March - May 2013",
      "description": "Teaching position in Electrical and Electronic Engineering"
    },
    {
      "position": "Sales Contract Administrator",
      "institute": "Project Control Department, LM Ericsson Bangladesh",
      "period": "December 2006 - July 2009",
      "description": "Managed sales contracts and project control activities in telecommunications sector"
    }
  ],
  "professionalMemberships": [],
  "recentPublications": [
    {
      "type": "Journal",
      "title": "Modeling and performance study of CZTS solar cell with novel cupric oxide (CuO) as a bilayer absorber",
      "authors": "AA Md Monzur-Ul-Akhir, Saiful Islam, Md Touhidul Imam, Sharnali Islam, Tasnia Hossain, Mohammad Junaebur Rashid",
      "venue": "Memories-Materials, Devices, Circuits and Systems",
      "year": 2023,
      "doi": "100083"
    },
    {
      "type": "Journal",
      "title": "Tuning the bandgap of Cd1-xZnxS (x = 0~1) buffer layer and CIGS absorber layer for obtaining high efficiency",
      "authors": "Tasnia Hossain, M.K. Sobayel, F.T. Munna, S. Islamd, H. I. Alkhammash, Khaled Althubeiti, K. Techato, Md. Akhtaruzzaman, M. J. Rashid",
      "venue": "Superlattices and Microstructures",
      "year": 2022,
      "doi": "107100"
    },
    {
      "type": "Journal",
      "title": "Cubic Silicon Carbide (3C–SiC) as a buffer layer for high efficiency and highly stable CdTe solar cell",
      "authors": "Jannatun Noor Sameera, Mohammad Aminul Islam, Saiful Islam, Tasnia Hossain, M. K. Sobayel, Md. Akhtaruzzaman, Nowshad Amin, Mohammad Junaebur Rashid",
      "venue": "Optical Materials",
      "year": 2022,
      "doi": "111911"
    },
    {
      "type": "Journal",
      "title": "Bilayer CZTS/Si absorber for obtaining highly efficient CZTS solar cell",
      "authors": "M.S. Rahman, S. Islam, A. Khandaker, T. Hossain, M.J. Rashid",
      "venue": "Solar Energy",
      "year": 2021
    },
    {
      "type": "Journal",
      "title": "Efficiency enhancement of CIGS solar cell by cubic silicon carbide as prospective buffer layer",
      "authors": "M. K. Sobayel, M.S.Chowdhury, T. Hossain, H. I. Alkhammash, S. Islam, M. Shahiduzzaman, Md. Akhtaruzzaman, K. Techato, M. J. Rashid",
      "venue": "Solar Energy",
      "year": 2021
    },
    {
      "type": "Journal",
      "title": "A systematic study on chemically deposited cadmium sulfide thin film",
      "authors": "Md. Samiul Islam, Tasnia Hossain, Sarwar Hasan and Mohammad Junaebur Rashid",
      "venue": "Journal of Theoretical and Applied Physics",
      "year": 2020
    },
    {
      "type": "Journal",
      "title": "Simulation Study of GaN/Al1-xGaxN Quantum Well (QW)Operating in the UV Region",
      "authors": "Mohammad Junaebur Rashid, Abdullah Al Mamun, Md. Samiul Islam Sadek, Tasnia Hossain and Sarwar Hasan",
      "venue": "Journal of Physical Science",
      "year": 2019
    },
    {
      "type": "Conference",
      "title": "Influence of Compositional Variation of ZnxCd1-xS Buffer on Efficiency of Cu2ZnSnSe4 Solar Cell: A Simulation",
      "authors": "Md. Sazzadur Rahman, Munmun Akhter, Suman Miah and T. Hossain",
      "venue": "IEEE INDICON2018",
      "year": 2018
    },
    {
      "type": "Journal",
      "title": "A comparison of the absorbed power for periodic, disordered and deterministic aperiodic arrays of Silver nanoparticles",
      "authors": "S. Sarwar, S. Islam, T. Hossain, H. Sarwar and M. Junaebur Rashid",
      "venue": "IOP Conf. Series: Journal of Physics: Conf. Series",
      "year": 2018,
      "doi": "012008"
    },
    {
      "type": "Journal",
      "title": "Crack statististics and stress analysis of thick GaN on patterned silicon substrate",
      "authors": "T. Hossain, M. J. Rashid, E. Frayssinet, N. Baron, B. Damilano, F. Semond, J. Wang, L. Durand, A. Ponchet, F. Demangeot and Y. Cordier",
      "venue": "Phys. Status Solidi B",
      "year": 2018
    },
    {
      "type": "Journal",
      "title": "Chemical bath deposition of CdS layer for thin film solar cell",
      "authors": "T. Kamal, S. Parvez, K. M. Khabir, R. Matin, T. Hossain, H. Sarwar, M. S. Bashar, M. J. Rashid",
      "venue": "SAJREST",
      "year": 2019
    },
    {
      "type": "Journal",
      "title": "Growth of nitride-based light emitting diodes with a high-reflectivity distributed Bragg reflector on mesa-patterned silicon substrate",
      "authors": "Benjamin Damilano, Stephane Brochen, Julien Brault, Tasnia Hossain, FranScois Reveret, Eric Frayssinet, Sebastien Chenot, Aimeric Courville, Yvon Cordier, and Fabrice Semond",
      "venue": "Phys. Status Solidi A",
      "year": 2015
    },
    {
      "type": "Journal",
      "title": "A study on the distribution of stress in thin epitaxial GaN on patterned silicon substrate",
      "authors": "Tasnia Hossain, M. J. Rashid and M. R. Alam",
      "venue": "International Journal of Enhanced Research in Science Technology & Engineering",
      "year": 2015
    },
    {
      "type": "Journal",
      "title": "Study of Optical Radiation Efficiency of nanoparticles",
      "authors": "Hasan Sarwar, Md. Mydul Islam, M. Junaebur Rashid, Tasnia Hossain",
      "venue": "Nanosci. Nanotechnol. Lett.",
      "year": 2014
    },
    {
      "type": "Journal",
      "title": "Stress distribution of 12 μm thick crack free continuous GaN on patterned Si (110) substrate",
      "authors": "T. Hossain, J. Wang, E. Frayssinet, S. Chenot, M. Leroux, B. Damilano, F. Demangeot, L. Durand, A. Ponchet, M. J. Rashid, F. Semond, and Y. Cordier",
      "venue": "Physica status solidi C",
      "year": 2013
    },
    {
      "type": "Journal",
      "title": "Dirac point and edge states in a microwave realization of tight-binding graphene-like structures",
      "authors": "U. Kuhl, S. Barkhofen, T. Tudorovskiy, H.J. Stöckmann, T. Hossain, L. de Forges de Parny, and F. Mortessagne",
      "venue": "Physical Review B",
      "year": 2010,
      "doi": "094308"
    }
  ],
  "administrativeRoles": [],
  "academicProfiles": []
};

export default facultyData;
