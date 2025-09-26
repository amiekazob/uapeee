const fs = require('fs');
const path = require('path');

// Read faculty data
const facultyDataPath = path.join(__dirname, '..', 'lib', 'faculty-data.ts');
const facultyData = fs.readFileSync(facultyDataPath, 'utf8');

// Extract faculty IDs using regex
const idMatches = facultyData.match(/id: "[^"]*"/g);
const facultyIds = idMatches.map(match => match.replace('id: "', '').replace('"', ''));

console.log('Found faculty IDs:', facultyIds.length);

// Template for faculty pages
const pageTemplate = (facultyId) => `import { facultyMembers } from '@/lib/faculty-data';
import { FacultyProfileTemplate } from '@/components/faculty/faculty-profile-template';
import { notFound } from 'next/navigation';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';

const facultyId = "${facultyId}";

export async function generateMetadata(): Promise<Metadata> {
  const member = facultyMembers.find(m => m.id === facultyId);
  
  if (!member) {
    return {
      title: 'Faculty Member Not Found',
      description: 'The requested faculty member could not be found.'
    };
  }

  return generateSEOMetadata({
    title: \`\${member.name} - \${member.title}\`,
    description: \`Learn about \${member.name}, \${member.title} at UAP EEE Department. \${member.bio.substring(0, 150)}...\`,
    keywords: \`\${member.name}, UAP faculty, \${member.title}, electrical engineering professor, \${member.researchInterests.join(', ')}\`,
    url: \`https://uap-eee.edu.bd/faculty/\${member.id}\`,
    image: member.image
  });
}

export default function FacultyProfilePage() {
  const member = facultyMembers.find(m => m.id === facultyId);

  if (!member) {
    notFound();
  }

  const customizations = {
    headerStyle: 'default' as const,
    showBackButton: true
  };

  return <FacultyProfileTemplate member={member} customizations={customizations} />;
}`;

// Create directories and files for each faculty member
let created = 0;
let skipped = 0;

facultyIds.forEach(facultyId => {
  const facultyDir = path.join(__dirname, '..', 'app', 'faculty', facultyId);
  const pageFile = path.join(facultyDir, 'page.tsx');
  
  // Skip if already exists
  if (fs.existsSync(pageFile)) {
    console.log(`Skipped: ${facultyId} (already exists)`);
    skipped++;
    return;
  }
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(facultyDir)) {
    fs.mkdirSync(facultyDir, { recursive: true });
  }
  
  // Write the page file
  fs.writeFileSync(pageFile, pageTemplate(facultyId));
  console.log(`Created: ${facultyId}`);
  created++;
});

console.log(`\nSummary: Created ${created} pages, Skipped ${skipped} pages`);