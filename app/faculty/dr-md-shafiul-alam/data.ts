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
  "id": "dr-md-shafiul-alam",
  "name": "Dr. Md. Shafiul Alam (Among the world's top 2% Scientists)",
  "title": "Associate Professor(On Leave)",
  "role": "Associate Professor",
  "note": "On Leave; Among the world's top 2% Scientists",
  "points": 87,
  "image": "/images/faculties/dr-md-shafiul-alam.jpg",
  "bio": "Dr. Md. Shafiul Alam is an Associate Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He holds a PhD in Electrical Engineering from King Fahd University of Petroleum & Minerals (KFUPM), Saudi Arabia. With extensive international experience spanning over 16 years in academia and research, Dr. Alam has worked in prestigious institutions in Saudi Arabia and Bangladesh. His research expertise encompasses power systems, electrical engineering, and energy technologies. He has served in various academic and research positions, including as a Postdoctoral Fellow and Researcher at KFUPM's Research Institute and K.A.CARE Energy Research & Innovation Center.",
  "email": "dr.md.shafiul.alam@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) - Electrical Engineering",
      "institution": "King Fahd University of Petroleum & Minerals (KFUPM), Saudi Arabia",
      "year": "2014-2018"
    },
    {
      "degree": "Master of Science (M.Sc.) - Electrical and Electronic Engineering",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2009-2012"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) - Electrical and Electronic Engineering",
      "institution": "Dhaka University of Engineering and Technology (DUET)",
      "year": "2002-2007"
    }
  ],
  "researchInterests": [
    "Power Systems Engineering",
    "Electrical Engineering",
    "Energy Technologies",
    "Smart Grid Systems",
    "Renewable Energy Integration",
    "Power Electronics",
    "Energy Research and Innovation"
  ],
  "academicExperience": [
    {
      "position": "Associate Professor",
      "institute": "University of Asia Pacific - Department of Electrical & Electronic Engineering (EEE), Dhaka, Bangladesh",
      "period": "August 2024 – Present",
      "description": "Leading undergraduate and graduate programs, conducting advanced research in electrical engineering"
    },
    {
      "position": "Researcher (Assistant Professor)",
      "institute": "Research Institute, King Fahd University of Petroleum & Minerals, Dhahran, Saudi Arabia",
      "period": "March 2022 – August 2024",
      "description": "Conducted advanced research in energy technologies and power systems"
    },
    {
      "position": "Postdoctoral Fellow",
      "institute": "K.A.CARE Energy Research & Innovation Center (ERIC), King Fahd University of Petroleum & Minerals, Dhahran, Saudi Arabia",
      "period": "March 2020 – March 2022",
      "description": "Advanced research in energy innovation and renewable energy systems"
    },
    {
      "position": "Associate Professor",
      "institute": "International Islamic University Chittagong (IIUC) - Department of Electrical & Electronic Engineering (EEE), Bangladesh",
      "period": "August 2019 – March 2020",
      "description": "Teaching and research in electrical engineering disciplines"
    },
    {
      "position": "Assistant Professor",
      "institute": "International Islamic University Chittagong (IIUC) - Department of Electrical & Electronic Engineering (EEE), Bangladesh",
      "period": "April 2019 – August 2019",
      "description": "Academic instruction and research supervision"
    },
    {
      "position": "Lecturer-B",
      "institute": "King Fahd University of Petroleum & Minerals - Electrical Engineering, Saudi Arabia",
      "period": "January 2014 – April 2019",
      "description": "Teaching electrical engineering courses and conducting research"
    },
    {
      "position": "Assistant Professor",
      "institute": "International Islamic University Chittagong (IIUC) - Department of Electrical & Electronic Engineering (EEE), Bangladesh",
      "period": "October 2012 – January 2014",
      "description": "Academic teaching and research activities"
    },
    {
      "position": "Lecturer",
      "institute": "International Islamic University Chittagong (IIUC) - Department of Electrical & Electronic Engineering (EEE), Bangladesh",
      "period": "August 2008 – October 2012",
      "description": "Undergraduate teaching and curriculum development"
    },
    {
      "position": "Instructor",
      "institute": "Institute of Computer Science & Technology - Electrical Engineering, Bangladesh",
      "period": "January 2008 – August 2008",
      "description": "Technical instruction in electrical engineering fundamentals"
    }
  ],
  "professionalMemberships": [
    "Editorial Board Member, Journal of Renewable Energy & Technology (JRET)",
    "Plenary Session Chair, 4th International Conference on Innovations in Science, Engineering and Technology (ICISET 2022)",
    "Technical Session Chair, 4th International Conference on Innovations in Science, Engineering and Technology (ICISET), 2022 and 2024",
    "Technical Session Chair, First International Conference on Energy, Thermofluids and Materials Engineering (ICETME), 2021",
    "Guest Editor, Energies and Discover Sustainability Journals",
    "Member, Institution of Engineers Bangladesh (IEB)",
    "Member, Institute of Electrical and Electronics Engineers (IEEE)"
  ],
  "recentPublications": [
    {
      "title": "Improvement of low-frequency oscillation damping in power systems using a deep learning technique",
      "authors": "Md Sanwar Hossain, Md Shafiullah, Mohammad Shoaib Shahriar, Md Shafiul Alam, M.I.H. Pathan, Md Juel Rana, Waleed M. Hamanah",
      "journal": "Engineering Applications of Artificial Intelligence",
      "year": "2024",
      "volume": "137",
      "pages": "109176",
      "type": "journal",
      "quartile": "Q1",
      "impactFactor": "7.5"
    },
    {
      "title": "Renewable Energy Integration with DC Microgrids: Challenges and Opportunities",
      "authors": "Md Shafiul Alam, Md. Alamgir Hossain, Md Shafiullah, Asif Islam, MSH Choudhury, Omer Farque, M.A. Abido",
      "journal": "Electric Power Systems Research",
      "year": "2024",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Realization of Robust Frequency Stability in Low-Inertia Islanded Microgrids with Optimized Virtual Inertia Control",
      "authors": "Waleed Mohammed Abdo Hamanah, Md Shafiullah, Luai Muhammad Alhems, Md Shafiul Alam, Mohamed Ali Abido",
      "journal": "IEEE Access",
      "year": "2024",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Evaluation of Uncertainty in Partial Discharge Measurement: A Case Study",
      "authors": "Asif Islam, Md Shafiullah, Waleed Mohammed Abdo Hamanah, Amjad Ali, Md Shafiul Alam",
      "journal": "IEEE Access",
      "year": "2024",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Physics-Informed NN-Based Adaptive Backstepping Terminal Sliding Mode Control of Buck Converter for PEM Electrolyzer",
      "authors": "Abdullah Baraean, Mahmoud Kassas, Md Shafiul Alam, Mohamed A. Abido",
      "journal": "HELIYON",
      "year": "2024",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "4.0"
    },
    {
      "title": "Enhancing Short-Term Photovoltaic Power Output Forecasting Using Gaussian Process Regression and Bayesian Optimization",
      "authors": "Md. Samin Safayat Islam, Puja Ghosh, Omer Faruque, Md. Rashidul Islam, Md Alamgir Hossain, Md Shafiul Alam, Md. Rafiqul Islam Sheikh",
      "journal": "Processes",
      "year": "2024",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.5"
    },
    {
      "title": "A New Voltage Compensation and State of Charge-Assisted Power Sharing Strategy for DC Microgrids",
      "authors": "Md Shafiul Alam, F. S. Al-Ismail, M. Shafiullah, M. I. Hossain, M. S. Shahriar, S. M. Mostafa, M. A. Abido",
      "journal": "Arabian Journal for Science and Engineering",
      "year": "2024",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "2.9"
    },
    {
      "title": "Techno-Economic Feasibility Study of a 1.5 MW Grid-Connected Solar Power Plant in Bangladesh",
      "authors": "M. F. Ali, N. K. Sarker, M. A. Hossain, Md. Shafiul Alam, A. H. Sanvi, S. I. Syam Sifat",
      "journal": "Designs",
      "year": "2023",
      "volume": "7(6)",
      "pages": "140",
      "type": "journal",
      "quartile": "Scopus Indexed"
    },
    {
      "title": "Analysis of charge transport resistance of ZnO-based DSSCs because of the effect of different compression temperatures",
      "authors": "M. S. H. Choudhury, S. E. Ahmed Himu, M. U. Khan, M. Z. Hasan, Md Shafiul Alam, T. Soga",
      "journal": "AIP Advances",
      "year": "2023",
      "volume": "13(9)",
      "type": "journal",
      "impactFactor": "1.6"
    },
    {
      "title": "Optimized Ensemble Machine Learning Models for Predicting Phytoplankton Absorption Coefficients",
      "authors": "Md Shafiul Alam, Surya Prakash Tiwari, Syed Masirur Rahman",
      "journal": "IEEE Access",
      "year": "2023",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Optimized forecasting model to improve the accuracy of very short-term wind power prediction",
      "authors": "M. A. Hossain, E. Gray, J. Lu, M. R. Islam, Md. Shafiul Alam, R. Chakrabortty, H. R. Pota",
      "journal": "IEEE Transactions on Industrial Informatics",
      "year": "2023",
      "type": "journal",
      "quartile": "Q1",
      "impactFactor": "12.3"
    },
    {
      "title": "Hybrid Neural Network and Adaptive Terminal Sliding Mode MPPT Controller for Partially Shaded Standalone PV Systems",
      "authors": "A. Baraean, M. Kassas, Md. Shafiul Alam, M. A. Abido",
      "journal": "Arabian Journal for Science and Engineering",
      "year": "2023",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "2.9"
    },
    {
      "title": "Greenhouse Gas Emission Dynamics of Saudi Arabia: Potential of Hydrogen Fuel for Emission Footprint Reduction",
      "authors": "A. Akinpelu, Md. Shafiul Alam, M. Shafiullah, S. M. Rahman, F. S. Al-Ismail",
      "journal": "Sustainability",
      "year": "2023",
      "volume": "15(7)",
      "pages": "5639",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Impacts of Renewable Energy Generation on Greenhouse Gas Emissions in Saudi Arabia: A Comprehensive Review",
      "authors": "F. S. Al-Ismail, Md. Shafiul Alam, M. Shafiullah, M. I. Hossain, S. M. Rahman",
      "journal": "Sustainability",
      "year": "2023",
      "volume": "15(6)",
      "pages": "5069",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Real-Time Solution of PSS Parameter Tuning by GA-ANFIS in Stabilizing the Electrical Power System",
      "authors": "M. Shafiullah, M. I. H. Pathan, M. S. Shahriar, A. Ali, M. I. Hossain, Md. Shafiul Alam",
      "journal": "Arabian Journal for Science and Engineering",
      "year": "2023",
      "volume": "48(5)",
      "pages": "6925-6938",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "2.9"
    },
    {
      "title": "Decision Tree-Based Ensemble Model for Predicting National Greenhouse Gas Emissions in Saudi Arabia",
      "authors": "M. M. Rahman, M. Shafiullah, Md. Shafiul Alam, M. S. Rahman, M. A. Alsanad, M. M. Islam, S. M. Rahman",
      "journal": "Applied Sciences",
      "year": "2023",
      "volume": "13(6)",
      "pages": "3832",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "2.7"
    },
    {
      "title": "Coupling Nexus and Circular Economy to Decouple Carbon Emissions from Economic Growth",
      "authors": "M. S. Uddin, K. Mahmud, B. Mitra, A. E. E. Hridoy, S. M. Rahman, Shafiullah, Md. Shafiul Alam, M. Sujauddin",
      "journal": "Sustainability",
      "year": "2023",
      "volume": "15(3)",
      "pages": "1748",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Solar and wind energy integrated system frequency control: A critical review on recent developments",
      "authors": "Md. Shafiul Alam, T. A. Chowdhury, A. Dhar, F. S. Al-Ismail, M. S. H. Choudhury, M. Shafiullah, S. M. Rahman",
      "journal": "Energies",
      "year": "2023",
      "volume": "16(2)",
      "pages": "812",
      "type": "journal",
      "quartile": "Q3",
      "impactFactor": "3.2"
    },
    {
      "title": "A novel interpretable machine learning and metaheuristic-based protocol to predict and optimize ciprofloxacin antibiotic adsorption with nano-adsorbent",
      "authors": "Yunus Ahmed, Akser Alam Siddiqua Maya, Parul Akhtar, Md Shafiul Alam, Hamad AlMohamadi, Md Nurul Islam, Obaid A. Alharbi, Syed Masiur Rahman",
      "journal": "Journal of Environmental Management",
      "year": "2024",
      "volume": "370",
      "pages": "122614",
      "type": "journal",
      "quartile": "Q1",
      "impactFactor": "8.0"
    },
    {
      "title": "Harnessing neural network model with optimization for enhanced ciprofloxacin antibiotic adsorption from contaminated water: A transparent and objective framework",
      "authors": "Yunus Ahmed, Md. Mahfujur Rahman, Md Shafiul Alam, Mohammad Islam Miah, Md. Shamimul Haque Choudhury, Obaid A. Alharbi, Parul Akhtar, Syed Masiur Rahman",
      "journal": "Journal of Water Process Engineering",
      "year": "2024",
      "volume": "65",
      "pages": "105724",
      "type": "journal",
      "quartile": "Q1",
      "impactFactor": "6.3"
    },
    {
      "title": "Tree-based machine learning for predicting Neochloris oleoabundans biomass growth and biological nutrient removal from tertiary municipal wastewater",
      "authors": "Shaikh Abdur Razzak, Md Shafiul Alam, S.M. Zakir Hossain, Syed Masiur Rahman",
      "journal": "Chemical Engineering Research and Design",
      "year": "2024",
      "volume": "210",
      "pages": "614-624",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.7"
    },
    {
      "title": "A comprehensive survey on advancement and challenges of DC microgrid protection",
      "authors": "Hamed Binqadhi, Waleed M. Hamanah, Md Shafiullah, Md Shafiul Alam, Mohammad M. AlMuhaini, Mohammad A. Abido",
      "journal": "Sustainability",
      "year": "2024",
      "volume": "16(14)",
      "pages": "6008",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.3"
    },
    {
      "title": "Removal of N-Nitrosodiphenylamine from Contaminated Water: A Novel Modeling Framework using Metaheuristic-based Ensemble Models",
      "authors": "Md Shaful Alam, Adeola Akeem Akinpelu, Mazen K. Nazal, Syed Masiur Rahman",
      "journal": "Journal of Environmental Management",
      "year": "2024",
      "type": "journal",
      "quartile": "Q1",
      "impactFactor": "8.7"
    },
    {
      "title": "Climate Change through Quantum Lens: Computing and Machine Learning",
      "authors": "Syed Masiur Rahman, Omar H. Alkhalf, Md Shafiul Alam, Surya Prakash Tiwari, Md Shafiullah, Sarah Mohammed Aljudaibi, Fahad Saleh Al-Ismail",
      "journal": "Earth Systems and Environment",
      "year": "2024",
      "type": "journal",
      "quartile": "Q1",
      "impactFactor": "7.2"
    },
    {
      "title": "Securing Electric Vehicle Performance: Machine Learning-Driven Fault Detection and Classification",
      "authors": "Mahbub Ul Islam Khan, Md Ilius Hasan Pathan, Mohammad Mominur Rahman, Md Maidul Islam, Mohammed Arfat Raihan Chowdhury, Md Shamim Anower, Md Masud Rana, Md Shafiul Alam, Mahmudul Hasan, Md Shohanur Islam Sobuj, Md Babul Islam, V. P. Meena, Francesco Benedetto",
      "journal": "IEEE Access",
      "year": "2024",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Planning and protection of DC microgrid: A critical review on recent developments",
      "authors": "Md. Shafiul Alam, Al-Ismail, F. S., Rahman, S. M., Shafiullah, M., & Hossain, M. A.",
      "journal": "Engineering Science and Technology, an International Journal",
      "year": "2023",
      "volume": "41",
      "pages": "101404",
      "type": "journal",
      "quartile": "Q1",
      "impactFactor": "5.7"
    },
    {
      "title": "Fault Ride Through and Intermittency Improvement of Renewable Energy Integrated MMC-HVDC system Employing Flywheel Energy Storage",
      "authors": "Hossain, M. I., Hamanah, W., Md. Shafiul Alam, Shafiullah, M., & Abido, M. A.",
      "journal": "IEEE Access",
      "year": "2023",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Ensemble Machine-Learning Models for Accurate Prediction of Solar Irradiation in Bangladesh",
      "authors": "Md. Shafiul Alam, Al-Ismail, F. S., Hossain, M. S., & Rahman, S. M.",
      "journal": "Processes",
      "year": "2023",
      "volume": "11",
      "issue": "3",
      "pages": "908",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.5"
    },
    {
      "title": "Energy management in DC microgrid with an efficient voltage compensation mechanism",
      "authors": "Md. Shafiul Alam, Al-Ismail, F. S., Al-Sulaiman, F. A., & Abido, M. A.",
      "journal": "Electric Power Systems Research",
      "year": "2023",
      "volume": "214",
      "pages": "108842",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Review of Recent Developments in Microgrid Energy Management Strategies",
      "authors": "Md Shafiullah, Akib Mostabe Refat, Md Ershadul Haque, Dewan Mabrur Hasan Chowdhury, Md Sanower Hossain, Abdullah G Alharbi, Md Shafiul Alam, Amjad Ali, Shorab Hossain",
      "journal": "Sustainability",
      "year": "2022",
      "volume": "14",
      "issue": "22",
      "pages": "14794",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.9"
    },
    {
      "title": "Blockchain applications in smart sustainable city context—A systematic mapping study",
      "authors": "Siddiquee, S. S., Khan, M. M. H., Al-Ismail, F. S., Ullah, A., Md. Shafiul Alam, & Ahmed, H.",
      "journal": "Energy Reports",
      "year": "2022",
      "volume": "8",
      "pages": "162-169",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "5.2"
    },
    {
      "title": "Machine learning tools for active distribution grid fault diagnosis",
      "authors": "Md Shafiullah, Khalid A. AlShumayri, Md. Shafiul Alam",
      "journal": "Advances in Engineering Software",
      "year": "2022",
      "volume": "173",
      "pages": "103279",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "4.8"
    },
    {
      "title": "Power Management for Distributed Generators Integrated System",
      "authors": "Md. Shafiul Alam",
      "journal": "Energies",
      "year": "2022",
      "volume": "15",
      "issue": "1",
      "pages": "1-2",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.2"
    },
    {
      "title": "Frequency Stabilization of AC Microgrid Clusters: An Efficient Fractional Order Supercapacitor Controller Approach",
      "authors": "Md Shafiul Alam, Abdullah A. Almehizia, Fahad Saleh Al-Ismail, Md Hossain, Muhammad Azharul Islam, Md Shafiullah, and Aasim Ullah",
      "journal": "Energies",
      "year": "2022",
      "volume": "15",
      "issue": "14",
      "pages": "5179",
      "type": "journal",
      "quartile": "Q3",
      "impactFactor": "3.252"
    },
    {
      "title": "Power Management and State of Charge Restoration of Direct Current Microgrid with Improved Voltage-Shifting Controller",
      "authors": "Md. Shafiul Alam, F. S. Al-Ismail, M. A. Abido",
      "journal": "Journal of Energy Storage",
      "year": "2022",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "9.4"
    },
    {
      "title": "Integration of Large-Scale Electric Vehicles into Utility Grid: An Efficient Approach for impact analysis and Power Quality Assessment",
      "authors": "Md. Mosaraf Hossain Khan, Amran Hossain, Aasim Ullah, M. Shahadat Hossain Lipu, S. M. Shahnewaz Siddiquee, M. Shafiul Alam, Taskin Jamal, Hafiz Ahmed",
      "journal": "Sustainability",
      "year": "2021",
      "volume": "13",
      "issue": "19",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.251"
    },
    {
      "title": "Electricity generation in Saudi Arabia: Tracing opportunities and challenges to reducing greenhouse gas emissions",
      "authors": "S. M. Rahman, F. S. Al-Ismail, M. E. Haque, Md Shafiullah, M. R. Islam, M. T. Chowdhury, M. Shafiul Alam, S. A. Razzak, A. Ali, Z. A. Khan",
      "journal": "IEEE Access",
      "year": "2020",
      "volume": "8",
      "pages": "190277-190299",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.367"
    },
    {
      "title": "Fault current limiter of VSC-HVDC systems using variable resistive bridge controller",
      "authors": "Md. Shafiul Alam, F. S. Al-Ismail, M. A. Abido, M. A. Hossain",
      "journal": "Ain Shams Engineering Journal",
      "year": "2021",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.18"
    },
    {
      "title": "PV/Wind-Integrated Low-Inertia System Frequency Control: PSO-Optimized Fractional-Order PI-Based SMES Approach",
      "authors": "Md. Shafiul Alam, F. S. Al-Ismail, M. A. Abido",
      "journal": "Sustainability",
      "year": "2021",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.251"
    },
    {
      "title": "Home Energy Management for Community Microgrids Using Optimal Power Sharing Algorithm",
      "authors": "Md Mamun Ur Rashid, Majed A Alotaibi, Abdul Hasib Chowdhury, Muaz Rahman, Md. Shafiul Alam, Md Hossain, M. A. Abido",
      "journal": "Energies",
      "year": "2021",
      "volume": "4",
      "issue": "14",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "3.004"
    },
    {
      "title": "High-Level Renewable Energy Integrated System Frequency Control with SMES-Based Optimized Fractional Order Controller",
      "authors": "Md. Shafiul Alam, M. A. Alotaibi, Md Ahsanul Alam, Md Alamgir Hossain, Md Shafiullah, Fahad Saleh Al-Ismail, Md Mamun Ur Rashid, M. A. Abido",
      "journal": "Electronics",
      "year": "2021",
      "volume": "10",
      "issue": "4",
      "pages": "1-21",
      "type": "journal",
      "quartile": "Q2",
      "impactFactor": "2.412"
    },
    {
      "title": "An Advanced Optimized Virtual Inertia Control Technique for Wind Energy Integrated AC Microgrids",
      "authors": "Md Shafiul Alam, Md Shafiullah, Fahad Saleh Al-Ismail, Md. Shamimul Haque Choudhury, S. M. G Mostafa, Aasim Ullah, Yasir Arafat, Waleed M. Hamana, Mohammad A. Abido",
      "venue": "IEEE Int. Conf. on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2024",
      "location": "Chittagong, Bangladesh",
      "pages": "26-27 October",
      "type": "Conference"
    },
    {
      "title": "Advanced Estimation of SoC and SoH for Li-Ion EV Batteries Using Soft Computing Techniques",
      "authors": "Waleed M. Hamana, Md. Shafiul Alam, Md. Shamimul Haque Choudhury, M. A. Abido",
      "venue": "IEEE Int. Conf. on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2024",
      "location": "Chittagong, Bangladesh",
      "pages": "26-27 October",
      "type": "Conference"
    },
    {
      "title": "Short Transmission Line Fault Identification and Classification Using Supervised Machine Learning",
      "authors": "Lamia Akther, Tahmida Khanam, Md Ismail Hossain, Md Shafiul Alam",
      "venue": "3rd International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE)",
      "year": "2024",
      "location": "Gazipur, Bangladesh",
      "pages": "25-27 April",
      "type": "Conference"
    },
    {
      "title": "Single Phase Fault Detection of Induction Motor using Machine Learning Approaches",
      "authors": "Udoy Roy Turza, Viswya Deb Das, Shaikh Hasib-Ul Islam, Mih Pathan, Mohammad Shoaib Shahriar, Md. Shafiul Alam, Md. Mizanur Rahman, Khondoker Ziaul Islam, Md. Sanwar Hossain, Mohammad Mominur Rahman",
      "venue": "2024 IEEE 4th International Conference in Power Engineering Applications (ICPEA)",
      "year": "2024",
      "location": "Pulau Pinang, Malaysia",
      "pages": "04-05 March",
      "type": "Conference"
    },
    {
      "title": "Load Frequency Analysis Using Optimal Virtual Inertial and SMES Considering A Random Load",
      "authors": "Tanzi Ahmed Chowdhury, Abhishak Dhar, Md Shafiul Alam, Fahad Saleh Al-Ismail",
      "venue": "IEEE International Conference on Electrical, Computer and Communication Engineering (ECCE)",
      "year": "2023",
      "location": "Bangladesh",
      "pages": "February",
      "type": "Conference"
    },
    {
      "title": "Optimised online adaptive frequency control of power system with renewable energy penetration",
      "authors": "Md Alamgir Hossain, Evan Gray, Junwei Lu, M. Shafiul Alam, Waqas Hassan, Michael Negnevitsky",
      "venue": "2023 IEEE International Conference in Energy Technologies for Future Grids (IEEE ETFG)",
      "year": "2024",
      "location": "Wollongong, Australia",
      "pages": "02 February",
      "type": "Conference"
    },
    {
      "title": "Fault Ride Through Improvement Employing Individual Phase Linked Dynamic Braking Resistor for Wind Energy Integrated MMC-HVDC Transmission Network",
      "authors": "Hossain, M. I., Md Shafiul Alam, & Abido, M. A.",
      "venue": "IEEE EUROCON 2023-20th International Conference on Smart Technologies",
      "year": "2023",
      "location": "IEEE",
      "pages": "496-501",
      "type": "Conference"
    },
    {
      "title": "An Efficient Voltage Compensation and SoC-based Power Management in DC Microgrid",
      "authors": "Md Shafiul Alam, Al-Ismail, F. S., & Abido, M. A.",
      "venue": "2023 IEEE Power & Energy Society Innovative Smart Grid Technologies Conference (ISGT)",
      "year": "2023",
      "location": "IEEE",
      "pages": "1-5",
      "type": "Conference"
    },
    {
      "title": "Concentrated Solar Power Plant With Central Receiver System For Rajshahi And It's Possibility In Bangladesh",
      "authors": "Jahan, S. A., Rahman, A., Md Shafiul Alam, Al-Ismail, F. S., Chowdhury, T. A., & Hossain, M. M.",
      "venue": "2023 1st International Conference on Innovations in High Speed Communication and Signal Processing (IHCSP)",
      "year": "2023",
      "location": "IEEE",
      "pages": "290-294",
      "type": "Conference"
    },
    {
      "title": "Resiliency Analysis of a Microgrid-Based Hospital During an Outage in Texas City",
      "authors": "Jahan, S. A., Rahman, A., Md Shafiul Alam, Al-Ismail, F. S., Chowdhury, T. A., & Hossain, M. S.",
      "venue": "2022 4th International Conference on Electrical, Computer & Telecommunication Engineering (ICECTE)",
      "year": "2022",
      "location": "IEEE",
      "pages": "1-4",
      "type": "Conference"
    },
    {
      "title": "Design and Implementation of a Data-Driven Fuel Management System",
      "authors": "Mostafa, S. G., Al Masum, A., Islam, M. S., Hossain, Md Shafiul Alam, M. S., Ullah, A., ... & Jahan, S. A.",
      "venue": "2022 4th International Conference on Sustainable Technologies for Industry 4.0 (STI)",
      "year": "2022",
      "location": "IEEE",
      "pages": "1-5",
      "type": "Conference"
    },
    {
      "title": "Design and Implementation of an IoT-Based Healthcare Monitoring System",
      "authors": "S. M. G. Mostafa, Mohammed Zaki, Mohammed Moinul Islam, Md Shafiul Alam, and Md Aasim Ullah",
      "venue": "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2022",
      "location": "IEEE",
      "pages": "362-366",
      "type": "Conference"
    },
    {
      "title": "Optimization of Electrophoretic Deposition Parameters for Uniform ZnO Deposition on Conductive Glass Substrate",
      "authors": "Md Muhidur Rahman, Nurul Islam, M. Shafiul Alam, Muhammad Athar Uddin, T. Soga, and M. S. H. Choudhury",
      "venue": "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2022",
      "location": "IEEE",
      "pages": "595-599",
      "type": "Conference"
    },
    {
      "title": "Analyzing the Effect of Nickel Tetraphenylporphyrin Doping on the Crystallite Parameters of ZnO Nanoparticles",
      "authors": "Md Al Saeid Chowdhury, Amran Hossain, Mohammad Rafiqul Islam, M. Shafiul Alam, Tetsuo Soga, and Md Shamimul Haque Choudhury",
      "venue": "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2022",
      "location": "IEEE",
      "pages": "266-271",
      "type": "Conference"
    },
    {
      "title": "Electrochemical Impedance Spectroscopy Analysis to Find the Effect of Compression Temperature on the Performance of P25 Based Dye-sensitized Solar Cell",
      "authors": "M. S. H. Choudhury, Md Inzamam-Ul-Alam Chowdhury, Md Mohsin Hossain, M. Shafiul Alam, Mohammad Rafiqul Islam, and Tetsuo Soga",
      "venue": "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2022",
      "location": "IEEE",
      "pages": "600-605",
      "type": "Conference"
    },
    {
      "title": "Energy Conservation and Load Shifting based DSM approach in the residential sector: applicability and impacts analysis in the case of developing countries",
      "authors": "Muhammad Azharul Islam, Md Sarowar Hossain, Md Rabiul Hasan, Md Sayedul Islam Babu, Hasan Al Banna, Md Nahid Hasan Rashed, and Md Shafiul Alam",
      "venue": "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2022",
      "location": "IEEE",
      "pages": "498-503",
      "type": "Conference"
    },
    {
      "title": "IoT-GSM Based Controlling and Monitoring System to Prevent Water Wastage, Water Leakage, and Pollution in the Water Supply",
      "authors": "Abdullah Al Shahid Chowdhury, Yasir Arafat, and M. Shafiul Alam",
      "venue": "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2022",
      "location": "IEEE",
      "pages": "567-572",
      "type": "Conference"
    },
    {
      "title": "Analysis of Photovoltaic Parameters For Hot-compressed ZnO Based DSSC Under Illumination and Dark Condition",
      "authors": "Abdullah Al Mamun, Mohammad Rafiqul Islam, A. A. Abuelwafa, M. Shafiul Alam, T. Soga, and M. S. H. Choudhury",
      "venue": "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2022",
      "location": "IEEE",
      "pages": "7-12",
      "type": "Conference"
    },
    {
      "title": "Power compensation and Voltage flicker control of Solar-wind hybrid microgrid with optimized D-STATCOM using a control Technique",
      "authors": "Md Mosaraf Hossain Khan, Aasim Ullah, SM Shahnewaz Siddiquee, M. Shafiul Alam, Kallol Biswas, and Rafat Bin Ali",
      "venue": "2022 International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2022",
      "location": "IEEE",
      "pages": "1-6",
      "type": "Conference"
    },
    {
      "title": "Signal Processing-based Artificial Intelligence Approach for Power Quality Disturbance Identification",
      "authors": "Md Sadman Sakib, Md Rashidul Islam, SM Sazzadul Haque Tanim, Md Shafiul Alam, Md Shafiullah, and Amjad Ali",
      "venue": "2022 International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE)",
      "year": "2022",
      "location": "IEEE",
      "pages": "1-6",
      "type": "Conference"
    },
    {
      "title": "A Real-Time Digital Protection Scheme for VSC-HVDC System with LR Type Solid State Current Limiter Controller",
      "authors": "Md Shafiul Alam, Aasim Ullah, Fahad Saleh Al-Ismail, Mohammad Haque Choudhury, Yasir Arafat, Mohammad Shoaib Shahriar, Sk. Md. Golam Mostafa",
      "venue": "IEEE International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2022",
      "location": "Chittagong, Bangladesh",
      "pages": "26-27 February",
      "type": "Conference"
    },
    {
      "title": "An Efficient Protection Scheme for VSC-HVDC System with Modified Bridge Limiter Controller",
      "authors": "Md Shafiul Alam, Islam, M. A., Alam, M. A., Ullah, A., Hossain, M. I., Mostafa, G. S. M., & Al-Ismail, F. S.",
      "venue": "2021 3rd International Conference on Sustainable Technologies for Industry 4.0 (STI)",
      "year": "2021",
      "location": "IEEE",
      "pages": "1-5",
      "type": "Conference"
    },
    {
      "title": "Estimation of ZnO Nanoparticles Crystallite Parameters at Different Compression Temperatures",
      "authors": "Uddin, Z., Uddin, M. J., Islam, M. R., Md Shafiul Alam, Soga, T., & Choudhury, M. S. H.",
      "venue": "2021 5th International Conference on Electrical Engineering and Information Communication Technology (ICEEICT)",
      "year": "2021",
      "location": "IEEE",
      "pages": "1-6",
      "type": "Conference"
    },
    {
      "title": "Demand Side Management in a model house for better load profile in the perspective of Bangladesh",
      "authors": "Islam, M. A., Saimon, S. A., Chowdhury, M. E. H., Mostafa, S. M. G., Al Masud, M. A., & Md Shafiul Alam",
      "venue": "2021 5th International Conference on Electrical Engineering and Information Communication Technology (ICEEICT)",
      "year": "2021",
      "location": "IEEE",
      "pages": "1-5",
      "type": "Conference"
    },
    {
      "title": "An Efficient Adjustable Duty Control Based Current Limiter for Grid-Connected Solar PV System",
      "authors": "Md Shafiul Alam, Al-Ismail, F. S., Choudhury, M. S. H., Shafiullah, M., Mostafa, S. G., & Abido, M. A.",
      "venue": "2021 5th International Conference on Electrical Engineering and Information Communication Technology (ICEEICT)",
      "year": "2021",
      "location": "IEEE",
      "pages": "1-5",
      "type": "Conference",
      "note": "BEST PRESENTATION AWARD"
    },
    {
      "title": "An Efficient Protection and Control Schemes for IBDG system with Resistive Superconducting Current Limiter",
      "authors": "Md Shafiul Alam, Al-Ismail, F. S., Shafiullah, M., Choudhury, M. S. H., & Abido, M. A.",
      "venue": "2021 5th International Conference on Electrical Engineering and Information Communication Technology (ICEEICT)",
      "year": "2021",
      "location": "IEEE",
      "pages": "1-5",
      "type": "Conference"
    },
    {
      "title": "A fully decentralized control approach for hybrid energy storage system in dc microgrids based on fractional order voltage compensation",
      "authors": "Md Shafiul Alam, Al-Ismail, F. S., Almehizia, A. A., & Abido, M. A.",
      "venue": "2021 North American Power Symposium (NAPS)",
      "year": "2021",
      "location": "IEEE",
      "pages": "1-5",
      "type": "Conference"
    },
    {
      "title": "An Intelligent Approach for Power Quality Events Detection and Classification",
      "authors": "Md Shafiullah, M J Rana, M E Haque, S M Rahman, Md Shafiul Alam, A Ali",
      "venue": "11th IEEE International Conference on Artificial Intelligence & Data Analytics",
      "year": "2021",
      "location": "Riyadh, Saudi Arabia",
      "pages": "6-7 April",
      "type": "Conference",
      "note": "BEST PAPER AWARD"
    },
    {
      "title": "Backtracking Search Algorithm for PV Module Electrical Parameter Estimation",
      "authors": "Md Shafiullah, M E Haque, F S Ismail, Md Shafiul Alam, A Ali, S M Rahman",
      "venue": "11th IEEE International Conference on Artificial Intelligence & Data Analytics",
      "year": "2021",
      "location": "Riyadh, Saudi Arabia",
      "pages": "6-7 April",
      "type": "Conference"
    },
    {
      "title": "A Modified Bridge Type Fault Current Limiter based Protection scheme for Inverter Based Distributed Generation",
      "authors": "Muhammad Azharul Islam, M. Shafiul Alam, Ashrafur Rahman, M. A. Abido, Fahad Saleh AL-Ismail, Md. Faysal Amin",
      "venue": "11th IEEE International Conference on Electrical and Computer Engineering",
      "year": "2020",
      "location": "Dhaka, Bangladesh",
      "pages": "17-19 December",
      "type": "Conference"
    },
    {
      "title": "Solar PV Integrated Distributed Generation System Protection with Bridge Current Limiter Controller",
      "authors": "M Shafiul Alam, Fahad Saleh AL-Ismail, Muhammad Azharul Abido, M. A. Islam",
      "venue": "11th IEEE International Conference on Electrical and Computer Engineering",
      "year": "2020",
      "location": "Dhaka, Bangladesh",
      "pages": "17-19 December",
      "type": "Conference"
    },
    {
      "title": "Fault Current Limiter Controller for the Protection of Inverter Based Distributed Generation",
      "authors": "M. Shafiul Alam, M. Z. Islam, A. Rahman, F. S Al-Ismail, M. A. Hossain",
      "venue": "EEE Region 10 Symposium (TENSYMP) 2020",
      "year": "2020",
      "location": "Dhaka, Bangladesh",
      "pages": "07 June",
      "type": "Conference"
    },
    {
      "title": "An Improved Energy and Cost Minimization Scheme for Home Energy Management (HEM) in the Smart Grid Framework",
      "authors": "Md Mamun Ur Rashid, Md. Alamgir Hossain, Rakibuzzaman Shah, Md Shafiul Alam, Ashish Kumar Karmaker, Muaz Rahman",
      "venue": "IEEE International Conference on Applied Superconductivity and Electromagnetic Devices (ASEMD2020)",
      "year": "2020",
      "location": "Tianjin, China",
      "pages": "16-18 Oct",
      "type": "Conference"
    },
    {
      "title": "Low-Frequency Inter-Area Mode Detection in Power System using Continuous Wavelet Transform",
      "authors": "M. I. Hossain, M. A. Abido, M. Shafiul Alam, Md. Al Emran, F. S. Hossain",
      "venue": "IEEE Int. Conf. on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2018",
      "location": "Chittagong, Bangladesh",
      "pages": "27-28 October",
      "type": "Conference"
    },
    {
      "title": "Series Dynamic Braking Resistor Based Protection Scheme for Inverter Based Distributed Generation System",
      "authors": "M. Shafiul Alam, M. A. Abido, M. I. Hossain, M. S. H. Choudhury, M. A. Uddin",
      "venue": "IEEE Int. Conf. on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2018",
      "location": "Chittagong, Bangladesh",
      "pages": "27-28 October",
      "type": "Conference"
    },
    {
      "title": "Protection of Inverter-based Distributed Generation with Series Dynamic Braking Resistor: A Variable Duty Control Approach",
      "authors": "M. Shafiul Alam, M. I. Hossain, M. A. Hossain, M. S. H. Choudhury",
      "venue": "10th IEEE International Conference on Electrical and Computer Engineering",
      "year": "2018",
      "location": "Dhaka, Bangladesh",
      "pages": "20-22 December",
      "type": "Conference"
    },
    {
      "title": "Asynchronous Induction Motor Speed Control Using Takagi-Sugeno Fuzzy Logic",
      "authors": "M. I. Hossain, M. Shafiul Alam, Md. Shafiullah, Md. Al Emran",
      "venue": "10th IEEE International Conference on Electrical and Computer Engineering",
      "year": "2018",
      "location": "Dhaka, Bangladesh",
      "pages": "20-22 December",
      "type": "Conference"
    },
    {
      "title": "Transient stability enhancement of active front-end rectifier with model predictive control approach",
      "authors": "M. J. Rana, M. Shafiul Alam, A. Hussein, and M. A. Abido",
      "venue": "IEEE Conference on Control and Modeling for Power Electronics (COMPEL)",
      "year": "2018",
      "location": "IEEE",
      "pages": "1–5",
      "type": "Conference"
    },
    {
      "title": "Determining Crystallite Parameters of ZnO Nanoparticles Using Various Peak Profile Analysis",
      "authors": "MSH Choudhury, Mohammad Shahidul Alam, Md Mizanul Islam, Tetsuo Soga, M Shafiul Alam, Mohammad Rafiqul Islam",
      "venue": "IEEE International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2018",
      "location": "Chittagong, Bangladesh",
      "pages": "2018",
      "type": "Conference"
    },
    {
      "title": "Influence of Compression and Hot-compression in Electron Transport in Dye-sensitized Solar Cells Studied by Electrochemical Impedance Spectroscopy Analysis",
      "authors": "MSH Choudhury, An Nazmus Sakib, Mobinul Islam, AA Abuelwafa, M Shafiul Alam, T Soga",
      "venue": "IEEE International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2018",
      "location": "Chittagong, Bangladesh",
      "pages": "2018",
      "type": "Conference"
    },
    {
      "title": "Optimization of Electrophoretic Deposition Parameters for Uniform Titanium Oxide Deposition on Conductive Glass Substrate",
      "authors": "MSH Choudhury, Shah Ridwan Ahmed, Md Munirul Islam Tusher, Muhammad Athar Uddin, M Shafiul Alam, T Soga",
      "venue": "IEEE International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2018",
      "location": "Chittagong, Bangladesh",
      "pages": "2018",
      "type": "Conference"
    },
    {
      "title": "VSC-HVDC system stability augmentation with bridge type fault current limiter",
      "authors": "M. Shafiul Alam, A Hussein, M. A. Abido, Z. M. Al-Hamouz",
      "venue": "6th International Conference on Clean Electrical Power",
      "year": "2017",
      "location": "Italy",
      "pages": "531-535",
      "type": "Conference"
    },
    {
      "title": "Real Time Digital Simulation of Voltage Source Converter Controller for HVDC Application",
      "authors": "M. Shafiul Alam, M. J. Rana, M. A. Abido",
      "venue": "9th IEEE GCC conference and Exhibition",
      "year": "2017",
      "location": "Manama, Bahrain",
      "pages": "May 8-11",
      "type": "Conference"
    },
    {
      "title": "Optimization of daily operation of micro hydro power plant coupled with compress air storage",
      "authors": "U. B. Irshad, M. S. Javaid, M. S. Shafiq, M. Shafiul Alam, M. A. Abido, T. Mumtaz",
      "venue": "19th IEEE International Multi-Topic Conference (INMIC)",
      "year": "2016",
      "location": "Islamabad Pakistan",
      "pages": "5-6 December, pp. 1-5",
      "type": "Conference"
    },
    {
      "title": "Direct control of three-phase smart load for neutral current mitigation",
      "authors": "M. S. Javaid, U. B. Irshad, M. A Abido, M. Shafiul Alam, Z. Khalid, M. J. Rana",
      "venue": "19th IEEE International Multi-Topic Conference (INMIC)",
      "year": "2016",
      "location": "Islamabad Pakistan",
      "pages": "5-6 December, pp. 1-5",
      "type": "Conference"
    },
    {
      "title": "Optimal placement of Phasor Measurement Units for transmission grid observability",
      "authors": "Md. Shafiullah, M. J. Rana, M. Shafiul Alam, M. A. Uddin",
      "venue": "IEEE International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2016",
      "location": "Dhaka, Bangladesh",
      "pages": "28-29 October, pp. 1-4",
      "type": "Conference"
    },
    {
      "title": "Switching signal reduction of load aggregator with optimal dispatch of electric vehicle performing V2G regulation service",
      "authors": "M. Shafiul Alam, Md. Shafiullah, M. J. Rana, M. S. Javaid, U. B. Irshad, M. A. Uddin",
      "venue": "IEEE International Conference on Innovations in Science, Engineering and Technology (ICISET)",
      "year": "2016",
      "location": "Dhaka, Bangladesh",
      "pages": "28-29 October, pp. 1-4",
      "type": "Conference"
    },
    {
      "title": "Continuous Wavelet Transform Based Analysis of Low Frequency Oscillation in Power System",
      "authors": "Md. Juel Rana, M. Shafiul Alam, Md. Shariful Islam",
      "venue": "3rd IEEE International Conference on Advances in Electrical Engineering (ICAEE)",
      "year": "2015",
      "location": "Dhaka, Bangladesh",
      "pages": "17-19 December",
      "type": "Conference"
    },
    {
      "title": "Comparison of Series and Combined Series Shunt Compensation on East-West Interconnectors of Bangladesh Power System",
      "authors": "M. Shafiul Alam, A. Hasib Chowdhury, Md. Nazmul Hasan",
      "venue": "3rd IEEE International Conference on Advances in Electrical Engineering (ICAEE)",
      "year": "2015",
      "location": "Dhaka, Bangladesh",
      "pages": "17-19 December",
      "type": "Conference"
    },
    {
      "title": "Transient Performance Improvement of Power System by Optimal Design of SVC Controller Employing Genetic Algorithm",
      "authors": "Md. Shafiullah, Md. Shafiul Alam, Md. Ismail Hossain, Md Nazmul Hasan",
      "venue": "IEEE International Conference on Electrical and Computer Engineering-2014",
      "year": "2014",
      "location": "Dhaka, Bangladesh",
      "pages": "",
      "type": "Conference"
    },
    {
      "title": "Enhancement of Power System Damping Employing TCSC with Genetic Algorithm Based Controller Design",
      "authors": "Md. Shafiul Alam, Md. Shafiullah, Md. Ismail Hossain, Md Nazmul Hasan",
      "venue": "IEEE International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT) 2014",
      "year": "2015",
      "location": "Dhaka, Bangladesh",
      "pages": "10-12 April 2015, pp. 1-6",
      "type": "Conference"
    },
    {
      "title": "Impact Study of a Generation Rich Island and Development of Auto Load Shedding Scheme to Improve Service Reliability",
      "authors": "Md Shafiullah, M. Shafiul Alam, Md Ismail Hossain, Md Quamrul Ahsan",
      "venue": "IEEE International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT) 2014",
      "year": "2014",
      "location": "Dhaka, Bangladesh",
      "pages": "10-12 April 2014, pp. 1-6",
      "type": "Conference",
      "award": "BEST PAPER AWARD"
    },
    {
      "title": "Application of TCSC and SVC in Damping Oscillations in Bangladesh Power System",
      "authors": "M. Shafiul Alam, Md. Abdur Razzak, Md. Shafiullah, A. Hasib Chowdhury",
      "venue": "IEEE International Conference on Electrical and Computer Engineering-2012",
      "year": "2012",
      "location": "Dhaka, Bangladesh",
      "pages": "pp. 571-574",
      "type": "Conference"
    },
    {
      "title": "Transmission Capacity Enhancement of East-West Interconnectors Using Series-Shunt Compensation",
      "authors": "M. Shafiul Alam, Md. Abdur Razzak, Md. Nazmul Hasan, A. Hasib Chowdhury",
      "venue": "IEEE International Conference on Electrical and Computer Engineering-2012",
      "year": "2012",
      "location": "Dhaka, Bangladesh",
      "pages": "pp. 579-582",
      "type": "Conference"
    },
    {
      "title": "Power System Load Switching Monitoring Using Wavelet Transform Based Multiresolution Signal Decomposition",
      "authors": "M. Shafiul Alam, A Hasib Chowdhury",
      "venue": "IEEE International Conference on Electrical and Computer Engineering-2010",
      "year": "2010",
      "location": "Dhaka, Bangladesh",
      "pages": "pp. 287-290",
      "type": "Conference"
    },
    {
      "title": "Improvement of low-frequency oscillation damping in power systems using a deep learning technique",
      "authors": "Md Sanwar Hossain, Md Shafiullah, Mohammad Shoaib Shahriar, Md Shafiul Alam, M.I.H. Pathan, Md Juel Rana, Waleed M. Hamanah",
      "venue": "Engineering Applications of Artificial Intelligence",
      "year": "2024",
      "location": "",
      "pages": "137, 109176",
      "type": "Journal",
      "impact_factor": "7.5",
      "quartile": "Q1"
    },
    {
      "title": "Renewable Energy Integration with DC Microgrids: Challenges and Opportunities",
      "authors": "Md Shafiul Alam, Md. Alamgir Hossain, Md Shafiullah, Asif Islam, MSH Choudhury, Omer Farque, M.A. Abido",
      "venue": "Electric Power Systems Research",
      "year": "2024",
      "location": "",
      "pages": "",
      "type": "Journal",
      "impact_factor": "3.9",
      "quartile": "Q2"
    }
  ],
  "administrativeRoles": [
    {
      "role": "Principal Investigator - Greenhouse Gas Emission Analytics for KSA",
      "department": "Designated National Authorities (DNA)",
      "period": "September 2023 – August 2024",
      "description": "Project Number: CEM02764, Project Value: 500,000 SAR. Position: Tasks Leader. Contribution: Proposal development and execution. Status: Awarded and ongoing."
    },
    {
      "role": "Principal Investigator - AI for Smart-grid Fault Diagnosis",
      "department": "SDAIA-KFUPM Joint Research Center for Artificial Intelligence (JRC-AI)",
      "period": "December 2022 – November 2023",
      "description": "Project Number: JRCAI-RG-01, Project Value: 149,994 SAR. Contribution: Proposal development and execution. Status: Awarded and ongoing."
    },
    {
      "role": "Research Member - Environmental Compliance Monitoring",
      "department": "SAIPEM - Berri Offshore Field",
      "period": "July 2022 – August 2024",
      "description": "Project Number: CEM02630, Project Value: 2,860,102 SAR. Environmental Compliance Monitoring and Post-Construction Monitoring for Water Injection Pipeline Facilities. Contribution: Proposal development and execution."
    },
    {
      "role": "Task Leader - National Greenhouse Gas Inventory and Climate Change Mitigation",
      "department": "Designated National Authorities (DNA)",
      "period": "August 2021 – February 2023",
      "description": "Project Number: CEMS2670, Project Value: 960,000 SAR. Contribution: Proposal development and execution. Status: Awarded and completed."
    },
    {
      "role": "Principal Investigator - Deep Learning for Power System Stability Enhancement",
      "department": "Interdisciplinary Research Center for Renewable Energy and Power Systems (IRC-REPS), KFUPM",
      "period": "March 2023 – June 2024",
      "description": "Project Number: INRE2315, Project Value: 99,647 SAR. Contribution: Proposal development and execution. Status: Awarded and ongoing."
    },
    {
      "role": "Co-Investigator - AI-Based Nonlinear Control Strategy of DC Microgrid",
      "department": "Deanship of Research Oversight and Coordination (DROC), KFUPM",
      "period": "April 2023 – June 2024",
      "description": "Project Number: INRE2313, Project Value: 140,000 SAR. Net-Zero Energy Buildings focus. Contribution: Conceptualization, Modeling, Non-Linear Controller design, Practical Implementation. Status: Project Ongoing."
    },
    {
      "role": "Co-Investigator - Distributionally Robust Optimization for Power-to-Hydrogen",
      "department": "Deanship of Research Oversight and Coordination (DROC), KFUPM",
      "period": "October 2022 – September 2024",
      "description": "Project Number: ER221005, Project Value: 99,940 SAR. Carbon Capture System with High-Level Renewable Energy Integration. Contribution: Modeling, Controller design, Practical Implementation. Status: Project Ongoing."
    },
    {
      "role": "Co-Investigator - AI Based Decentralized Voltage Control and Energy Management",
      "department": "Deanship of Research Oversight and Coordination (DROC), KFUPM",
      "period": "June 2022 – December 2023",
      "description": "Project Number: INRE2209, Project Value: 133,500 SAR. Renewable Energy and Storage Devices Integrated DC Microgrid. Contribution: Conceptualization, Modeling, Controller design, Practical Implementation. Status: Project Ongoing."
    },
    {
      "role": "Co-Principal Investigator - Adaptive Virtual Inertia Control for DC Microgrids",
      "department": "Deanship of Scientific Research (DSR), KFUPM",
      "period": "June 2021 – June 2023",
      "description": "Project Number: DF201022, Project Value: 283,885 SAR. Efficient Power Management Scheme focus. Contribution: Conceptualization, Modeling, Controller design, Practical Implementation. Status: Awarded & Completed."
    },
    {
      "role": "Postdoctoral Research Fellow - Wind Power Generation Planning",
      "department": "Deanship of Scientific Research (DSR), KFUPM",
      "period": "July 2021 – July 2024",
      "description": "Project Number: DF18103, Project Value: 207,720 SAR. Quantifying capacity credit as reliability-based index for large-scale wind power using Stochastic Programming. Contribution: Model Analysis, Conceptual design. Status: Project Awarded and Completed."
    },
    {
      "role": "Research Assistant - DFIG Wind Integrated VSC-HVDC System",
      "department": "Deanship of Scientific Research (DSR), KFUPM",
      "period": "October 2016 – April 2019",
      "description": "Project Number: RG17002, Project Value: 299,730 SAR. Controller Design and Implementation with Bridge Type Fault Current Limiters. Contribution: Mathematical Modeling, Controller Design, Real Time Digital Simulation and Control Hardware-in-Loop Test, Report Writing. Status: Awarded and Completed."
    },
    {
      "role": "Research Assistant - Robust Controller Design for Voltage Source Inverters",
      "department": "Deanship of Scientific Research (DSR), KFUPM",
      "period": "October 2015 – April 2018",
      "description": "Project Number: RG1420-1&2, Project Value: 375,230 SAR. New Robust Controller Design for Voltage Source Inverters in Microgrids. Contribution: Model Analysis, Development and Simulations, Hardware Prototype Development, Report Writing. Status: Awarded and Completed."
    }
  ],
  "academicProfiles": [
    {
      "title": "Academic Scholarships",
      "items": [
        {
          "period": "2014-2018",
          "title": "KSA Government Scholarship for PhD",
          "description": "Full scholarship for doctoral studies in Saudi Arabia"
        },
        {
          "period": "2002-2007",
          "title": "University Merit List",
          "description": "Academic excellence recognition during undergraduate studies"
        }
      ]
    }
  ]
};

export default facultyData;
