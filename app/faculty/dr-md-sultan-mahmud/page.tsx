import { facultyData } from './data';
import { notFound } from 'next/navigation';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Star, ArrowLeft, Award, Users, FileText, Calendar, Trophy, GraduationCap, Building } from 'lucide-react';
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

            {/* Publications */}
            {member.recentPublications && member.recentPublications.length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-indigo-600" />
                  Recent Publications
                </h2>
                
                <div className="space-y-4">
                  {member.recentPublications.slice(0, 10).map((pub, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border-l-4 border-indigo-200">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant={pub.type === 'Journal' ? 'default' : 'secondary'} className="mb-2">
                          {pub.type}
                        </Badge>
                        <span className="text-sm text-gray-500 font-medium">{pub.year}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2 leading-tight">{pub.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                      <p className="text-sm text-indigo-600 font-medium">{pub.venue}</p>
                      {pub.impactFactor && (
                        <p className="text-xs text-gray-500 mt-1">Impact Factor: {pub.impactFactor}</p>
                      )}
                      {pub.doi && (
                        <p className="text-xs text-gray-500 mt-1">DOI: {pub.doi}</p>
                      )}
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