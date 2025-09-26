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
  note?: string;
  head?: boolean;
  points?: number;
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
  "id": "mr-a-h-m-zadidul-karim",
  "name": "A. H. M. Zadidul Karim",
  "title": "Head & Associate Professor",
  "role": "Associate Professor",
  "note": "Head of Department",
  "head": false,
  "points": 97,
  "image": "/images/faculties/mr-a-h-m-zadidul-karim.jpg",
  "bio": "Dr. A. H. M. Zadidul Karim is an Associate Professor in the Department of Electrical and Electronic Engineering at the University of Asia Pacific. He is currently pursuing his PhD in Deep learning based breast cancer detection and classification schemes using medical images from BUET. His research interests include medical image processing, deep learning applications in healthcare, cardiac signal analysis, and digital circuit design. He has extensive experience in teaching and research with over 16 years of academic service at UAP.",
  "email": "zadidul.karim@uap-bd.edu",
  "phone": "",
  "room": "",
  "education": [
    {
      "degree": "Doctor of Philosophy (PhD) in Electrical and Electronic Engineering (EEE) - Ongoing",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2015-Present"
    },
    {
      "degree": "Master of Engineering (M.Engg.) in Electrical and Electronic Engineering (EEE)",
      "institution": "Bangladesh University of Engineering and Technology (BUET)",
      "year": "2005-2010"
    },
    {
      "degree": "Bachelor of Science (B.Sc.) in Electrical and Electronic Engineering (EEE)",
      "institution": "Ahsanullah University of Science and Technology (AUST)",
      "year": "2000-2004"
    }
  ],
  "researchInterests": [
    "Deep Learning Applications in Healthcare",
    "Medical Image Processing",
    "Breast Cancer Detection and Classification",
    "Cardiac Signal Analysis",
    "ECG Signal Processing",
    "Digital Circuit Design",
    "Biomedical Engineering",
    "Machine Learning in Medical Diagnosis"
  ],
  "academicExperience": [
    {
      "position": "Associate Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "April 2016 – Present",
      "description": "Teaching undergraduate and graduate courses, conducting research in medical image processing and deep learning applications"
    },
    {
      "position": "Assistant Professor",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "November 2010 – April 2016",
      "description": "Teaching undergraduate courses and conducting research in biomedical signal processing"
    },
    {
      "position": "Lecturer",
      "institute": "Department of EEE, University of Asia Pacific",
      "period": "April 2007 – October 2010",
      "description": "Teaching undergraduate courses in electrical and electronic engineering"
    }
  ],
  "professionalMemberships": [
    "Publication Co-Chair of IEEE-EMBS, 2015, Dhaka, Bangladesh",
    "Member, Planning Committee, International Student-LED conference, IEEE, 2022",
    "Member Planning Committee International Symposium on Social Implications of Sustainable Technology 2022, (SympSIST-2022), IEEE",
    "Member Planning Committee ProCon 2022, IEEE Conference",
    "Member Planning Committee YPCON 2022, IEEE Conference"
  ],
  "recentPublications": {
    "journalPapers": [
      {
        "type": "journal",
        "title": "COVID-19, Pneumonia, and Healthy Lungs Classification Using CNN and Transfer Learning Model Using Chest X-Ray",
        "authors": "Rafatul Alam Fahima, A.H.M. Zadidul Karim, Tanima Tasmin Chowdhury, Kazi Bil Oual Mahmud*, Fahmida Khanam, Khondaker Md. Abdur Rahman",
        "venue": "American Journal of Biomedical Engineering",
        "year": "2024",
        "volume": "Vol. 12",
        "pages": "pp. 1-6",
        "publisher": "Scientific & Academic Publishing",
        "location": "USA"
      },
      {
        "type": "journal",
        "title": "Peak Detection and Tracking of PPG Signal: A Multi model approach using Empirical Mode Decomposition & Machine Learning",
        "authors": "AHM Zadidul Karim, Md Abdullah Al Mahmud, Md Sazal Miah, Shikder Shafiul Bashar, Seungmin Oh, Jinsul Kim, Maliha Marium",
        "venue": "The Journal of Contents Computing",
        "year": "2020",
        "volume": "Vol-2",
        "pages": "pp. 153-163",
        "date": "December 2020"
      },
      {
        "type": "journal",
        "title": "Biomedical Image Processing: Spine Tumor Detection from MRI image using MATLAB",
        "authors": "Md Abdullah Al Mahmud, AHM Zadidul Karim, Md Sazal Miah, Yeonggwang Kim, Jinsul Kim, Shikder Shafiul Bashar",
        "venue": "The Journal of Contents Computing",
        "year": "2020",
        "volume": "Vol-2",
        "pages": "pp. 225-235",
        "date": "December 2020"
      },
      {
        "type": "journal",
        "title": "Determination of Green Spots (Trees) For Google Satellite Images Using MATLAB",
        "authors": "Urmi Sultana, Mashrun Hoque, Popy Akter, Maruful Islam, Md Abdullah Al Mahmud, Muhammad Towhidur Rahman, AHM Zadidul Karim",
        "venue": "Procedia Computer Science",
        "year": "2020",
        "volume": "Vol:171",
        "pages": "pp: 1634-1641",
        "publisher": "Elsevier",
        "date": "January 2020"
      },
      {
        "type": "journal",
        "title": "Analysis and Different Modifications of Empirical Mode Decomposition Method of Heart Rate Extraction from PPG Signal",
        "authors": "AHM Zadidul Karim, Tabassum Hasnat Reshmi, Sabrina Sultana, Md Rakibul Islam, Shikder Shafiul Bashar, Md Abdullah Al Mahmud",
        "venue": "American Journal of Biomedical Engineering",
        "year": "2020",
        "volume": "Vol: 10",
        "pages": "pp. 9-15",
        "date": "January 2020"
      },
      {
        "type": "journal",
        "title": "Energy harvesting—technical analysis of evolution, control strategies, and future aspects",
        "authors": "MD Shahrukh Adnan Khan, Md Tanbhir Hoq, AHM Zadidul Karim, Md Khairul Alam, Masum Howlader, Rajprasad Kumar Rajkumar",
        "venue": "Journal of Electronic Science and Technology",
        "year": "2019",
        "volume": "Vol: 27(2)",
        "pages": "pp. 116-125",
        "publisher": "Elsevier",
        "date": "June 2019"
      },
      {
        "type": "journal",
        "title": "A security system for kindergarten school using RFID technology",
        "authors": "Salma Nazia Rahman, Shikder Shafiul Bashar, Md Abdullah Al Mahmud, Md Sazal Miah, AHM Zadidul Karim, Maliha Marium",
        "venue": "Journal of Computer and Communications",
        "year": "2019",
        "volume": "Vol: 7(4)",
        "pages": "pp. 21",
        "publisher": "Scientific Research Publishing",
        "date": "April 16, 2019"
      },
      {
        "type": "journal",
        "title": "A security system for kindergarten school using RFID technology",
        "authors": "Salma Nazia Rahman, Shikder Shafiul Bashar, Md Abdullah Al Mahmud, Md Sazal Miah, AHM Zadidul Karim, Maliha Marium",
        "venue": "Journal of Computer and Communications",
        "year": "2019",
        "volume": "Vol: 7(4)",
        "pages": "pp. 21",
        "publisher": "Scientific Research Publishing",
        "date": "April 16, 2019"
      },
      {
        "type": "journal",
        "title": "Analysis of Empirical Mode Decomposition Method of Heart Rate Extraction from Motion Artifact Corrupted PPG Signal",
        "authors": "Maliha Marium, A. H. M. Zadidul Karim, Muhammad Towhidur Rahman, Md. Abdullah Al Mahmud, Shikder Shafiul Bashar, Md. Sazal Miah",
        "venue": "American Journal of Signal Processing",
        "year": "2019",
        "volume": "Vol: 9(1)",
        "pages": "pp. 6-10",
        "publisher": "Scientific & Academic Publishing"
      },
      {
        "type": "journal",
        "title": "Chemically converted graphene as a hole transport layer (HTL) inorganic photovoltaics (OPVS)",
        "authors": "Farjana Haque, Md Moshiur Rahman, Md Abdullah Al Mahmud, M Subbir Reza, Munmun Akter, AHM Zadidul Karim",
        "venue": "Engineering International",
        "year": "2018",
        "volume": "Vol: 6(1)",
        "pages": "pp. 7-20",
        "date": "December 2018"
      },
      {
        "type": "journal",
        "title": "Classification of Electrocardiogram Signal Using Support Vector Machine Based on Fractal Extraction by FD",
        "authors": "Farhana Akter Mou, Muhammed Abdullah Al Mahmud, AH M Zadidul Karim, Salma Nazia Rahman, Shaikh Rashedur Rahman",
        "venue": "American Journal of Circuits, Systems and Signal Processing",
        "year": "2017",
        "volume": "Vol: 3(3)",
        "pages": "pp. 12-22",
        "date": "December 2017",
        "location": "USA"
      },
      {
        "type": "journal",
        "title": "Identification of abnormality in Electrocardiogram Using Fractal Dimension",
        "authors": "Mishuk Mitra, A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, Md. Mashiur Rahamn",
        "venue": "International Journal of Bioinformatics and Biomedical Engineering",
        "year": "2016",
        "volume": "Vol:2, Issue:4",
        "pages": "PP: 51-58",
        "date": "August 06, 2016",
        "location": "USA"
      },
      {
        "type": "journal",
        "title": "Detection of abnormality in Electrocardiogram signals based on Katz's and Higuchi's Method under fractal dimensions",
        "authors": "Md. Mashiur Rahamn, A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, Salma Nazia Rahman",
        "venue": "Computational biology and Bioinformatics",
        "year": "2016",
        "volume": "Vol:4, Issue:4",
        "pages": "PP: 27-36",
        "date": "August 09, 2016",
        "location": "USA"
      },
      {
        "type": "journal",
        "title": "Spine Tumor Detection Using MRI",
        "authors": "Md. Abdullah- Al Mahmud, A.H.M. Zadidul Karim, Farhana Aktern Mou, Shaikh Rashedur Rahman",
        "venue": "International Journal of Biomedical Materials Research",
        "year": "2016",
        "volume": "Vol:4, Issue:3",
        "pages": "PP: 35-42",
        "date": "December 12, 2016",
        "location": "USA"
      },
      {
        "type": "journal",
        "title": "Brain Tumor Detection by Using Bounding Box methodology Based on Bhattacharyya Coefficient",
        "authors": "A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, M. Abdullah Al Amin, Mr. Muhammed Towhidur Rahman",
        "venue": "American journal of engineering research Research",
        "year": "2016",
        "volume": "Vol:5, Issue:12",
        "pages": "PP: 218-223",
        "date": "December 02, 2016",
        "location": "USA"
      },
      {
        "type": "journal",
        "title": "Effects of Natural Dust on the Performance of PV Panels in Bangladesh",
        "authors": "Mizanur Rahman, Asraful Haque Ronee, Abdullah-Al-Shafi, A.H.M. Zadidul Karim, and Nahyan Al Mahmud",
        "venue": "Journal of Electrical Engineering, IEB",
        "year": "2013",
        "publisher": "IEB for the Issue of 2013",
        "location": "Bangladesh"
      },
      {
        "type": "journal",
        "title": "Detection of abnormality in Electrocardiogram signals based on Katz's and Higuchi's Method under fractal dimensions",
        "authors": "Md. Mashiur Rahamn, A.H.M. Zadidul Karim, Md. Abdullah- Al Mahmud, Salma Nazia Rahman",
        "venue": "Computational biology and Bioinformatics",
        "year": "2016",
        "volume": "Vol:4, Issue:4",
        "pages": "PP: 27-36",
        "date": "August 09, 2016",
        "location": "USA"
      },
      {
        "type": "journal",
        "title": "Spine Tumor Detection Using MRI",
        "authors": "Md. Abdullah- Al Mahmud, A.H.M. Zadidul Karim, Farhana Aktern Mou, Shaikh Rashedur Rahman",
        "venue": "International Journal of Biomedical Materials Research",
        "year": "2016",
        "volume": "Vol:4, Issue:3",
        "pages": "PP: 35-42",
        "date": "December 12, 2016",
        "location": "USA"
      },
      {
        "type": "journal",
        "title": "LOW COST SMART BANGLA TOKEN NUMBER SPEAKER AND DISPLAY SYSTEM",
        "authors": "Md.Mizanur Rahman, Md. Aminul Islam, A.H.M. Zadidul Karim, Asraful Haque Ronee, Rajib Sarkar Rajan",
        "venue": "Canadian Journal on Electrical and Electronics Engineering",
        "year": "2012",
        "volume": "Vol. 3, No. 7",
        "publisher": "ISSN: 1923-0540",
        "date": "September 2012",
        "location": "Canada"
      },
      {
        "type": "journal",
        "title": "Classification of ECG Using Chaotic Models",
        "authors": "Khandakar Mohammad Ishtiak, A. H. M. Zadidul Karim",
        "venue": "International Journal of Modern Education and Computer Science (IJMECS)",
        "year": "2012",
        "volume": "Vol:4, Issue 9",
        "pages": "PP:30-38",
        "publisher": "ISSN Print: 2075-0161 ISSN Online: 2075-017X",
        "location": "Hong-Kong"
      },
      {
        "type": "journal",
        "title": "Low Cost Digital Basic Mathematics Rules Learner Kit",
        "authors": "MD.Mizanur Rahman, A.H.M. Zadidul Karim, Asraful Haque Ronee, Khandakar Mohammad Ishtiak",
        "venue": "International Journal of Scientific & Engineering Research",
        "year": "2012",
        "volume": "Volume 3, Issue 7",
        "publisher": "ISSN 2229-5518",
        "date": "July-2012",
        "location": "France"
      },
      {
        "type": "journal",
        "title": "Identification of Premature Ventricular Contraction of Heart using Poincare Plot Parameters and Sample Entropy",
        "authors": "A. H. M. Zadidul Karim, Md. Meganur Rahman, M.A Haque",
        "venue": "Engineering e-Transaction",
        "year": "2010",
        "volume": "Vol. 5, No. 1",
        "pages": "pp 1-5",
        "publisher": "ISSN 1823-6379",
        "date": "June 2010",
        "location": "Malaysia"
      },
      {
        "type": "journal",
        "title": "Detection of Cardiac Abnormality using Fractal Dimension",
        "authors": "Md. Meganur Rahman, A. H. M. Zadidul Karim, M.A Haque",
        "venue": "Engineering e-Transaction",
        "year": "2010",
        "volume": "Vol. 5, No. 1",
        "pages": "pp 43-47",
        "publisher": "ISSN 1823-6379",
        "date": "June 2010",
        "location": "Malaysia"
      },
      {
        "type": "journal",
        "title": "Identification of Atrial Fibrillation (AFIB) of Heart Using Robust Statistical Tools and Approximate Entropy Method",
        "authors": "A. H. M. Zadidul Karim, Md. Meganur Rahman",
        "venue": "International Journal of Computer and Information Technology (IJCIT)",
        "year": "2011",
        "volume": "VOLUME 01, ISSUE 02",
        "pages": "pp.108-111",
        "publisher": "ISSN 2078-5828 (PRINT), ISSN 2218-5224 (ONLINE)",
        "date": "January 2011",
        "location": "Bangladesh"
      },
      {
        "type": "journal",
        "title": "Design and Implementation of a microcontroller based digital multi-language word master",
        "authors": "Munzur-ul-Mamun, Md.Sharif Ullah, A.H.M. Zadidul Karim and Kazi Shamsul Arefin",
        "venue": "International Journal of Computer and Information Technology (IJCIT)",
        "year": "2011",
        "volume": "VOLUME 01, ISSUE 02",
        "pages": "pp.112-117",
        "publisher": "ISSN 2078-5828 (PRINT), ISSN 2218-5224 (ONLINE)",
        "date": "January 2011",
        "location": "Bangladesh"
      },
      {
        "type": "journal",
        "title": "Designing a Microcontroller Based Smart Multilanguage Learning Word Master",
        "authors": "Munzur-ul-Mamun, A.H.M. Zadidul Karim, Md.Sharif Ullah, Md.Istiaq Mahbub",
        "venue": "IJEST",
        "year": "2011",
        "volume": "Volume 3 Issue 1",
        "pages": "pp 84-88",
        "publisher": "ISSN: 0975-5462",
        "date": "January 2011",
        "location": "India"
      },
      {
        "type": "journal",
        "title": "Design a Corruption less Security System For Broadband Over Power Line",
        "authors": "A.H. M Zadidul Karim, Md.Istiaq Mahbub, Munzur-ul-Mamun, Md. Meganur Rahman",
        "venue": "International Journal of Science and Advanced Technology",
        "year": "2011",
        "volume": "Volume 1 No 3",
        "pages": "pp. 57-62",
        "publisher": "ISSN 2221-8386",
        "date": "May 2011",
        "location": "Bangladesh"
      },
      {
        "type": "journal",
        "title": "Low power microcontroller based intelligent token number speaker and display system",
        "authors": "Munzur-ul-Mamun , A.H.M. Zadidul Karim , Md.Istiaq Mahbub",
        "venue": "International Journal of Engineering and Technology",
        "year": "2011",
        "volume": "Vol.3, No.2",
        "pages": "pp.199-202",
        "date": "April 2011",
        "location": "China"
      },
      {
        "type": "journal",
        "title": "Design Implementation of a smart load timer to prevent insensible use of electricity",
        "authors": "Munzur-ul-Mamun, A.H.M. Zadidul Karim, Md. Sharif Ulah",
        "venue": "International Journal of Scientific and Engineering Research - IJSER",
        "year": "2011",
        "location": "France"
      },
      {
        "type": "journal",
        "title": "Comparative analysis of RR interval of PVC signal with normal Heart beat using Fractal Dimension, Poincaré Plot and Sample Entropy method",
        "authors": "Md. Meganur Rahman, A.H.M. Zadidul Karim",
        "venue": "International Journal of Modern Education and Computer Science (IJMECS)",
        "year": "2012",
        "volume": "Vol:4, Issue 12",
        "publisher": "ISSN Print: 2075-0161 ISSN Online: 2075-017X",
        "location": "Hong-Kong"
      },
      {
        "type": "journal",
        "title": "Comparative Analysis of Image Registration Using Pixel, Wavelet and Translation Method",
        "authors": "A.H.M. Zadidul Karim, Binoy Sarker, Nahyan Al Mahmud",
        "venue": "Scientific and Academic Publishing Journal(SAP)",
        "year": "2014",
        "volume": "Vol:4, Issue 2",
        "location": "USA"
      },
      {
        "type": "journal",
        "title": "Industrial Application of PLCs in Bangladesh",
        "authors": "Ahmed Ullah Abu Saeed, Md. Al-Mamun and A.H.M. Zadidul Karim",
        "venue": "International Journal of Scientific & Engineering Research(IJSER)",
        "year": "2012",
        "volume": "Volume 3, Issue 6",
        "publisher": "ISSN 2229-5518",
        "date": "June-2012",
        "location": "France"
      }
    ],
    "conferencePapers": [
      {
        "type": "conference",
        "title": "Classification of Electrocardiogram Using Color Images with Pixel Method by Deep CNN",
        "authors": "A. H. M. Zadidul Karim, Md. Badeuzzamal Sarker, Md. Rafiqul Alam Rejon, Md. Saimun Islam, Md. Rafatul Alam Fahima",
        "venue": "Proceedings of 3rd International Conference on Artificial Intelligence: Advances and Applications",
        "year": "2023",
        "volume": "Vol.3",
        "pages": "pp 289-301",
        "date": "April 2023",
        "publisher": "Springer"
      },
      {
        "type": "conference",
        "title": "Effect of Number of Modes of EMD in Respiratory Rate Estimation from PPG Signal",
        "authors": "AHM Zadidul Karim, Md Sazal Miah, GR Ahmed Jamal, Rafatul Alam Fahima, Rashik Rahman",
        "venue": "2022 International Conference on Advancement in Electrical and Electronic Engineering (ICAEEE)",
        "year": "2022",
        "pages": "pp. 1-6",
        "publisher": "IEEE",
        "date": "February 2022"
      },
      {
        "type": "conference",
        "title": "Application of Chrominance Based rPPG in Estimation of Heart Rate from Video Signal",
        "authors": "A.H.M. Zadidul Karim; Md. Sazal Miah; G. R. Ahmed Jamal; Rafatul Alam Fahima; Muhammad Towhidur Rahman",
        "venue": "2021 24th International Conference on Computer and Information Technology (ICCIT)",
        "year": "2021",
        "pages": "pp. 1-6",
        "publisher": "IEEE",
        "date": "December 2021"
      },
      {
        "type": "conference",
        "title": "Application of Feature based Face Detection in Adaptive Skin Pixel Identification Using Signal Processing Techniques",
        "authors": "AHM Zadidul Karim, Md Sazal Miah, GR Ahmed Jamal, Nusrat Jahan, Rafatul Alam Fahima, Muhammad Towhidur Rahman",
        "venue": "2021 24th International Conference on Computer and Information Technology (ICCIT)",
        "year": "2021",
        "pages": "pp. 1-5",
        "publisher": "IEEE",
        "date": "December 2021"
      },
      {
        "type": "conference",
        "title": "Image Compression using Huffman Coding Scheme with Partial/Piecewise Color Selection",
        "authors": "AHM Zadidul Karim, Md Sazal Miah, GR Ahmed Jamal, Nusrat Jahan, Rafatul Alam Fahima, Muhammad Towhidur Rahman",
        "venue": "2021 IEEE 4th International Conference on computing and Communication Technologies (GUCON)",
        "year": "2021",
        "pages": "pp. 1-6",
        "publisher": "IEEE",
        "date": "September 2021"
      },
      {
        "type": "conference",
        "title": "Seizure Detection and Classification using different Decomposition Methods and Robust statistical Analysis from EEG Signals",
        "authors": "Sumona S Islam, Md Sazal Miah, AHM Zadidul Karim, Shikder Shafiul Bashar",
        "venue": "2020 International Symposium on Advanced Electrical and Communication Technologies (ISAECT)",
        "year": "2020",
        "pages": "pp. 1-6",
        "publisher": "IEEE",
        "location": "Marrakech, Morocco",
        "date": "November 2020"
      },
      {
        "type": "conference",
        "title": "Heart Rate Extraction from Photoplethysmography Signal: A Multi Model Machine Learning Approach",
        "authors": "Md Sazal Miah, Shikder Shafiul Bashar, AHM Zadidul Karim, Zahid Hasan",
        "venue": "2020 IEEE 2nd International Conference on Artificial Intelligence in Engineering and Technology (IICAIET)",
        "year": "2020",
        "pages": "pp. 1-6",
        "location": "Kota Kinabalu, Malaysia",
        "date": "September 2020"
      },
      {
        "type": "conference",
        "title": "Identification of seizure from single channel EEG using support vector machine & Hilbert vibration decomposition",
        "authors": "AHM Zadidul Karim, Shikder Shafiul Bashar, Md Sazal Miah, Md Abdullah Al Mahmud, M Abdullah Al Amin",
        "venue": "2020 IEEE Symposium on Industrial Electronics & Applications (ISIEA)",
        "year": "2020",
        "pages": "pp. 1-6",
        "location": "TBD, Malaysia",
        "date": "July 2020"
      },
      {
        "type": "conference",
        "title": "Extraction of heart rate from PPG Signal: a machine learning approach using decision tree regression algorithm",
        "authors": "Shikder Shafiul Bashar, Md Sazal Miah, AHM Zadidul Karim, Md Abdullah Al Mahmud",
        "venue": "2019 4th International Conference on Electrical Information and Communication Technology (EICT)",
        "year": "2019",
        "pages": "pp. 1-6",
        "publisher": "IEEE",
        "date": "December 2019"
      },
      {
        "type": "conference",
        "title": "A machine learning approach for heart rate estimation from PPG signal using random forest regression algorithm",
        "authors": "Shikder Shafiul Bashar, Md Sazal Miah, AHM Zadidul Karim, Md Abdullah Al Mahmud, Zahid Hasan",
        "venue": "2019 International Conference on Electrical, Computer and Communication Engineering (ECCE)",
        "year": "2019",
        "pages": "pp. 1-5",
        "publisher": "IEEE",
        "date": "February 2019"
      },
      {
        "type": "conference",
        "title": "Respiration monitoring by using ECG",
        "authors": "Muhammad Towhidur Rahman, Muhammad Abdul Kadir, AHM Zadidul Karim, Md Abdullah Al Mahmud",
        "venue": "2017 20th International Conference of Computer and Information Technology (ICCIT)",
        "year": "2017",
        "pages": "pp. 1-5",
        "publisher": "IEEE",
        "date": "December 2017"
      },
      {
        "type": "conference",
        "title": "Navigation System Using GPS and GSM for Visually Impaired Personals with Nerve Stimulation Feedback",
        "authors": "Sakhawat Hossen Rakib, Atika Farhana, A.H.M. Zadidul Karim, Galib Hashmi",
        "venue": "international conference on Mechanical Engineering and Applied Science (ICMEAS)",
        "year": "2017",
        "date": "22-23 February 2017",
        "location": "Bangladesh"
      },
      {
        "type": "conference",
        "title": "Bimodal Gaussian PDF of the Dominant IMFs of EEG Signals for Seizure Activity Classification",
        "authors": "Tanima Tasmin Chowdhury, AHM Zadidul Karim, Shaikh Anowarul Fattah, Celia Shahnaz",
        "venue": "2017 IEEE International WIE Conference on Electrical and Computer Engineering (WIECON-ECE)",
        "year": "2017",
        "pages": "pp. 180-183",
        "publisher": "IEEE",
        "date": "December 2017"
      },
      {
        "type": "conference",
        "title": "Brain Tumor Detection: A Comparison among Various Techniques",
        "authors": "M. Abdullah Al Amin, Abdullah al Mahmud, A.H.M Zadidul Karim, Md. Subbir Reza and Munmun Akter",
        "venue": "14th global engineering and technology conference",
        "year": "2017",
        "date": "29-30 December, 2017",
        "location": "BIAM Foundation, Dhaka, Bangladesh"
      },
      {
        "type": "conference",
        "title": "Electricity Generation by Using Amplitude of Ocean Wave",
        "authors": "A.H.M. Zadidul Karim, MD.Mizanur Rahman, Subroto Kormokar",
        "venue": "3rd International Conference on Green Energy and Technology (ICGET)",
        "year": "2015",
        "publisher": "Co-Sponsored by the IEEE PES",
        "location": "Dhaka University, Bangladesh"
      }
    ]
  },
  "administrativeRoles": [
    {
      "title": "Publication Co-Chair",
      "organization": "IEEE-EMBS",
      "period": "2015",
      "description": "Dhaka, Bangladesh"
    }
  ],
  "academicProfiles": []
};

export default facultyData;
