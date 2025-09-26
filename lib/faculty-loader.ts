import { FacultyMember } from '@/app/faculty/dr-g-r-ahmed-jamal/data';

// Client-side function to load faculty data
export async function loadFacultyDataClient(): Promise<FacultyMember[]> {
  const facultyIds = generateFacultyIdsList();
  const facultyData: FacultyMember[] = [];
  
  for (const id of facultyIds) {
    try {
      const dataModule = await import(`@/app/faculty/${id}/data`);
      const facultyMember = dataModule.facultyData || dataModule.default;
      
      if (facultyMember) {
        facultyData.push(facultyMember);
      }
    } catch (error) {
      console.warn(`Failed to load data for faculty: ${id}`, error);
    }
  }
  
  // Sort faculty data by points within each segment
  return sortFacultyByPoints(facultyData);
}

// Server-side function to load all faculty data dynamically
export async function loadAllFacultyData(): Promise<FacultyMember[]> {
  // For server-side, we'll use the same approach as client-side
  // since we can't use fs in the browser environment
  return loadFacultyDataClient();
}

// Sort faculty members by points within each segment
function sortFacultyByPoints(facultyData: FacultyMember[]): FacultyMember[] {
  // Separate Head of Department (HOD role)
  const headOfDepartment = facultyData.find(faculty => faculty.role === 'HOD');
  const otherFaculty = facultyData.filter(faculty => faculty.role !== 'HOD');
  
  // Group faculty by role
  const professors = otherFaculty.filter(faculty => faculty.role === 'Professor');
  const associateProfessors = otherFaculty.filter(faculty => faculty.role === 'Associate Professor');
  const assistantProfessors = otherFaculty.filter(faculty => faculty.role === 'Assistant Professor');
  const lecturers = otherFaculty.filter(faculty => faculty.role === 'Lecturer');
  
  // Sort each group by points (highest to lowest)
  const sortByPoints = (a: FacultyMember, b: FacultyMember) => {
    const pointsA = a.points || 0;
    const pointsB = b.points || 0;
    return pointsB - pointsA; // Descending order
  };
  
  professors.sort(sortByPoints);
  associateProfessors.sort(sortByPoints);
  assistantProfessors.sort(sortByPoints);
  lecturers.sort(sortByPoints);
  
  // Combine all faculty with Head of Department first
  const sortedFaculty = [];
  
  if (headOfDepartment) {
    sortedFaculty.push(headOfDepartment);
  }
  
  sortedFaculty.push(...professors);
  sortedFaculty.push(...associateProfessors);
  sortedFaculty.push(...assistantProfessors);
  sortedFaculty.push(...lecturers);
  
  return sortedFaculty;
}

// Generate list of faculty IDs (hardcoded for client-side use)
function generateFacultyIdsList(): string[] {
  return [
    // Head of Department (separate HOD profile)
    'hod-a-h-m-zadidul-karim',
    
    // Professors (Full-time first)
    'dr-g-r-ahmed-jamal',
    
    // Professors (Part-time - in specified order)
    'dr-quazi-deen-mohd-khosru',
    'dr-md-abdus-salam-akanda',
    'dr-enamul-basher',
    
    // Associate Professors (Mr. A.H.M. Zadidul Karim first)
    'mr-a-h-m-zadidul-karim',
    
    // Associate Professors (Full-time)
    // No current full-time Associate Professors
    
    // Associate Professors (Part-time)
    'dr-shuva-ghosh',
    'dr-tahsina-farah-sanam',
    
    // Associate Professors (On Leave)
    'dr-md-moshiur-rahman',
    'dr-md-shafiul-alam',
    
    // Assistant Professors (Full-time first)
    'dr-md-shofiqul-islam',
    'dr-md-sultan-mahmud',
    'dr-tapan-kumar-chakraborty',
    'dr-tasnia-hossain',
    'dr-tishna-sabrina',
    
    // Assistant Professors (Part-time)
    'dr-mohammad-jane-alam-khan',
    
    // Lecturers and other faculty
    'dewan-ashikur-rahaman',
    'khaled-mahmud',
    'mr-ibnun-nur-akash',
    'mr-kazi-mahtab-kadir',
    'mr-khandaker-sultan-mahmood',
    'mr-m-abdullah-al-amin',
    'mr-masum-howlader',
    'mr-md-abdullah-al-mahmud',
    'mr-md-khairul-alam',
    'mr-md-sabbir-ahmed',
    'mr-md-sharif-uddin',
    'mr-muhammad-ahad-rahman-miah',
    'mr-muhammad-towhidur-rahman',
    'mr-shaikh-rashedur-rahman',
    'ms-farhana-akter-mou',
    'ms-munmun-akter',
    'ms-salma-nazia-rahman',
    'ms-tanima-tasmin-chowdhury',
    'sakhawat-hossen-rakib',
    'usama-ibna-alam'
  ];
}