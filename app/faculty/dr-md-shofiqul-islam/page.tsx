import { facultyData } from './data';
import { notFound } from 'next/navigation';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Star, ArrowLeft, Award, Users, FileText, Calendar, Trophy, GraduationCap, Building, Briefcase, DollarSign, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export async function generateMetadata(): Promise<Metadata> {
  const member = facultyData;
  
  if (!member) {
    return {
      title: 'Faculty Member Not Found',
      description: 'The requested faculty member could not be found.'
    };
  }

  return generateSEOMetadata({
    title: `${member.name} - ${member.title}`,
    description: `Learn about ${member.name}, ${member.title} at UAP EEE Department. ${member.bio.substring(0, 150)}...`,
    keywords: `${member.name}, UAP faculty, ${member.title}, electrical engineering professor, ${member.researchInterests.join(', ')}`,
    url: `https://uap-eee.edu.bd/faculty/${member.id}`,
    image: member.image
  });
}

export default function FacultyProfilePage() {
  const member = facultyData;

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": member.name,
            "jobTitle": member.title,
            "description": member.bio,
            "email": member.email,
            "image": member.image,
            "url": `https://uap-eee.edu.bd/faculty/${member.id}`,
            "affiliation": {
              "@type": "Organization",
              "name": "University of Asia Pacific"
            }
          })
        }}
      />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Button asChild variant="ghost" className="mb-6 hover:bg-white/50">
          <Link href="/faculty">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Faculty
          </Link>
        </Button>
      </div>

      {/* Header Section - Customizable per faculty */}
      <div className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            {/* Profile Image */}
            <div className="relative">
              <Image
                src={member.image || "/placeholder-user.jpg"}
                alt={member.name}
                width={300}
                height={400}
                className="w-64 h-80 object-cover object-top rounded-2xl shadow-xl"
                priority
              />
              {member.role === 'Head of the Department' && (
                <Badge className="absolute -top-2 -right-2 bg-indigo-600 text-white px-3 py-1">
                  HOD
                </Badge>
              )}
            </div>

            {/* Basic Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {member.name}
              </h1>
              <p className="text-xl text-indigo-600 font-semibold mb-6">
                {member.title}
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href={`mailto:${member.email}`}
                  className="flex items-center justify-center lg:justify-start text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  {member.email}
                </a>
              </div>

              {/* Research Interests */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Research Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {member.researchInterests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="bg-indigo-100 text-indigo-800">
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Biography */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 mr-3 text-indigo-600" />
                About
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {member.bio}
              </p>
            </div>

            {/* Education */}
            {member.education && member.education.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-indigo-600" />
                  Education
                </h2>
                <div className="space-y-4">
                  {member.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-indigo-200 pl-4">
                      <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-indigo-600">{edu.institution}</p>
                      <p className="text-gray-500 text-sm">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Research Experience */}
            {member.researchExperience && member.researchExperience.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="w-6 h-6 mr-3 text-indigo-600" />
                  Research Experience
                </h2>
                <div className="space-y-6">
                  {member.researchExperience.map((research, index) => (
                    <div key={index} className="border-l-4 border-indigo-200 pl-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{research.period}</h3>
                      <ul className="space-y-2">
                        {research.focus.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700 text-sm flex items-start">
                            <span className="text-indigo-600 mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Publications */}
            {member.recentPublications && member.recentPublications.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-indigo-600" />
                  Recent Publications
                </h2>
                
                <div className="space-y-6">
                  {member.recentPublications.map((publication, index) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border-l-4 border-indigo-500">
                      <div className="flex items-start justify-between mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-700 bg-indigo-100 rounded-full">
                          {publication.type}
                        </span>
                        <span className="text-sm font-medium text-gray-600">{publication.year}</span>
                      </div>
                      
                      <h4 className="font-semibold text-gray-900 mb-2 leading-relaxed">
                        {publication.title}
                      </h4>
                      
                      <p className="text-sm text-gray-700 mb-2">
                        <span className="font-medium">Authors:</span> {publication.authors}
                      </p>
                      
                      <p className="text-sm text-indigo-600 mb-3">
                        <span className="font-medium">Published in:</span> {publication.venue}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                        {publication.impactFactor && (
                          <span className="flex items-center bg-green-100 text-green-700 px-2 py-1 rounded">
                            <Star className="w-3 h-3 mr-1" />
                            Impact Factor: {publication.impactFactor}
                          </span>
                        )}
                        
                        {publication.doi && (
                          <a 
                            href={publication.doi.startsWith('http') ? publication.doi : `https://doi.org/${publication.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            <FileText className="w-3 h-3 mr-1" />
                            DOI
                          </a>
                        )}
                        
                        {publication.url && (
                          <a 
                            href={publication.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            <FileText className="w-3 h-3 mr-1" />
                            View Paper
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {member.recentPublications.length > 10 && (
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                      Showing {Math.min(10, member.recentPublications.length)} of {member.recentPublications.length} publications
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Funded Projects */}
            {member.fundedProjects && member.fundedProjects.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3 text-indigo-600" />
                  Funded Projects
                </h2>
                <div className="space-y-6">
                  {member.fundedProjects.map((project, index) => (
                    <div key={index} className="border-l-4 border-indigo-200 pl-6 bg-gray-50 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-gray-900">{project.name}</h3>
                        <div className="text-right">
                          <span className="text-sm font-medium text-indigo-600">{project.year}</span>
                          <p className="text-sm text-gray-500">#{project.projectNumber}</p>
                        </div>
                      </div>
                      <h4 className="font-medium text-gray-800 mb-2">{project.title}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div>
                          <span className="font-medium text-gray-600">Funder:</span>
                          <p className="text-gray-700">{project.funder}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Role:</span>
                          <p className="text-gray-700">{project.role}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-600">Amount:</span>
                          <p className="text-green-600 font-medium">{project.amount}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ongoing Works */}
            {member.ongoingWorks && member.ongoingWorks.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-indigo-600" />
                  Ongoing Research Works
                </h2>
                <div className="space-y-4">
                  {member.ongoingWorks.map((work, index) => (
                    <div key={index} className="border-l-4 border-yellow-400 pl-4 bg-yellow-50 rounded-lg p-4">
                      <div className="flex items-start">
                        <span className="text-yellow-600 mr-3 mt-1 text-lg">⚡</span>
                        <p className="text-gray-800 font-medium leading-relaxed">{work}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Professional Memberships */}
            {member.professionalMemberships && member.professionalMemberships.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-indigo-600" />
                  Professional Memberships
                </h3>
                <div className="space-y-2">
                  {member.professionalMemberships.map((membership, index) => (
                    <div key={index} className="text-sm text-gray-700 p-2 bg-gray-50 rounded">
                      {membership}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Academic Scholarships */}
            {member.academicScholarships && member.academicScholarships.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-indigo-600" />
                  Academic Scholarships
                </h3>
                <div className="space-y-2">
                  {member.academicScholarships.map((scholarship, index) => (
                    <div key={index} className="text-sm text-gray-700 p-2 bg-gray-50 rounded">
                      {scholarship}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Professional Consultancy Activities */}
            {member.consultancyActivities && member.consultancyActivities.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-indigo-600" />
                  Professional Consultancy Activities
                </h3>
                <div className="space-y-2">
                  {member.consultancyActivities.map((activity, index) => (
                    <div key={index} className="text-sm text-gray-700 p-3 bg-gray-50 rounded-lg border-l-4 border-indigo-200">
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Info</h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Building className="w-4 h-4 mr-2 text-indigo-600" />
                  <span className="text-gray-600">Department:</span>
                  <span className="ml-2 font-medium">EEE</span>
                </div>
                <div className="flex items-center text-sm">
                  <Trophy className="w-4 h-4 mr-2 text-indigo-600" />
                  <span className="text-gray-600">Role:</span>
                  <span className="ml-2 font-medium">{member.role}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}