import { FacultyMember } from '@/app/faculty/dr-g-r-ahmed-jamal/data';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Star, ArrowLeft, Award, Users, FileText, Calendar, Trophy, GraduationCap, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AcademicProfileIcons } from '@/components/ui/academic-profile-icons';
import { generatePersonSchema } from '@/lib/seo';

interface FacultyProfileTemplateProps {
  member: FacultyMember;
  customizations?: {
    headerStyle?: 'default' | 'gradient' | 'minimal';
    showBackButton?: boolean;
    additionalSections?: React.ReactNode;
    customBio?: string;
  };
}

export function FacultyProfileTemplate({ 
  member, 
  customizations = {} 
}: FacultyProfileTemplateProps) {
  const {
    headerStyle = 'default',
    showBackButton = true,
    additionalSections,
    customBio
  } = customizations;

  const longBio = customBio || `${member.bio} `.repeat(3);
  
  const personSchema = generatePersonSchema({
    name: member.name,
    jobTitle: member.title,
    description: member.bio,
    email: member.email,
    image: member.image,
    url: `https://uap-eee.edu.bd/faculty/${member.id}`,
    affiliation: 'University of Asia Pacific'
  });

  const HeaderComponent = () => {
    switch (headerStyle) {
      case 'gradient':
        return (
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <Image
                src={member.image || "/placeholder-user.jpg"}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full border-4 border-white/20 shadow-lg mb-6 md:mb-0 md:mr-8 flex-shrink-0 object-cover"
              />
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold">{member.name}</h1>
                <p className="text-xl text-indigo-200 font-semibold mt-1">{member.title}</p>
                {member.role === 'HOD' && (
                  <Badge className="mt-2 text-base bg-white/20 text-white py-1 px-3">Head of Department</Badge>
                )}
              </div>
            </div>
          </div>
        );
      case 'minimal':
        return (
          <div className="p-8 md:p-12 border-b border-gray-200">
            <div className="flex flex-col items-center text-center">
              <Image
                src={member.image || "/placeholder-user.jpg"}
                alt={member.name}
                width={120}
                height={120}
                className="rounded-full mb-4 object-cover"
              />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{member.name}</h1>
              <p className="text-lg text-gray-600 mt-1">{member.title}</p>
            </div>
          </div>
        );
      default:
        return (
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
              <Image
                src={member.image || "/placeholder-user.jpg"}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full border-4 border-gray-100 shadow-md mb-6 md:mb-0 md:mr-8 flex-shrink-0 object-cover"
              />
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{member.name}</h1>
                <p className="text-xl text-indigo-600 font-semibold mt-1">{member.title}</p>
                {member.role === 'HOD' && (
                  <Badge className="mt-2 text-base bg-indigo-100 text-indigo-800 py-1 px-3">Head of Department</Badge>
                )}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema)
        }}
      />
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {showBackButton && (
              <Button asChild variant="ghost" className="mb-8 text-indigo-600 hover:text-indigo-800">
                <Link href="/faculty">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Faculty
                </Link>
              </Button>
            )}

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <HeaderComponent />

              {/* Contact Information */}
              <div className="p-8 md:p-12 border-b border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-indigo-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a href={`mailto:${member.email}`} className="text-indigo-600 hover:text-indigo-800 font-medium">
                        {member.email}
                      </a>
                    </div>
                  </div>
                  {member.phone && (
                    <div className="flex items-center">
                      <Building className="w-5 h-5 text-indigo-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium">{member.phone}</p>
                      </div>
                    </div>
                  )}
                  {member.room && (
                    <div className="flex items-center">
                      <Building className="w-5 h-5 text-indigo-600 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500">Room</p>
                        <p className="font-medium">Room {member.room}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Biography */}
              <div className="p-8 md:p-12 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Users className="w-6 h-6 text-indigo-600 mr-2" />
                  About
                </h2>
                <p className="text-gray-700 leading-relaxed">{longBio}</p>
              </div>

              {/* Education */}
              {member.education && member.education.length > 0 && (
                <div className="p-8 md:p-12 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <GraduationCap className="w-6 h-6 text-indigo-600 mr-2" />
                    Education
                  </h2>
                  <div className="space-y-4">
                    {member.education.map((edu, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                          <p className="text-gray-600">{edu.institution}</p>
                          {edu.year && <p className="text-sm text-gray-500">{edu.year}</p>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Research Interests */}
              {member.researchInterests && member.researchInterests.length > 0 && (
                <div className="p-8 md:p-12 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Star className="w-6 h-6 text-indigo-600 mr-2" />
                    Research Interests
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {member.researchInterests.map((interest, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Academic Experience */}
              {member.academicExperience && member.academicExperience.length > 0 && (
                <div className="p-8 md:p-12 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 text-indigo-600 mr-2" />
                    Academic Experience
                  </h2>
                  <div className="space-y-6">
                    {member.academicExperience.map((exp, index) => (
                      <div key={index} className="border-l-4 border-indigo-200 pl-6">
                        <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                        <p className="text-indigo-600 font-medium">{exp.institute}</p>
                        <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                        {exp.description && <p className="text-gray-700">{exp.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recent Publications */}
              {member.recentPublications && member.recentPublications.length > 0 && (
                <div className="p-8 md:p-12 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <FileText className="w-6 h-6 text-indigo-600 mr-2" />
                    Recent Publications
                  </h2>
                  <div className="space-y-6">
                    {member.recentPublications.slice(0, 5).map((pub, index) => (
                      <div key={index} className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <Badge variant={pub.type === 'Journal' ? 'default' : 'secondary'} className="mb-2">
                            {pub.type}
                          </Badge>
                          <span className="text-sm text-gray-500">{pub.year}</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{pub.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                        <p className="text-sm text-indigo-600">{pub.venue}</p>
                        {pub.impactFactor && (
                          <p className="text-xs text-gray-500 mt-1">Impact Factor: {pub.impactFactor}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Research Experience */}
              {member.researchExperience && member.researchExperience.length > 0 && (
                <div className="p-8 md:p-12 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Star className="w-6 h-6 text-indigo-600 mr-2" />
                    Research Experience
                  </h2>
                  <div className="space-y-6">
                    {member.researchExperience.map((exp, index) => (
                      <div key={index} className="border-l-4 border-indigo-200 pl-6">
                        <p className="text-indigo-600 font-medium mb-2">{exp.period}</p>
                        <div className="space-y-2">
                          {exp.focus.map((focus, focusIndex) => (
                            <div key={focusIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{focus}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Academic Scholarships */}
              {member.academicScholarships && member.academicScholarships.length > 0 && (
                <div className="p-8 md:p-12 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 text-indigo-600 mr-2" />
                    Academic Scholarships & Awards
                  </h2>
                  <ul className="space-y-2">
                    {member.academicScholarships.map((scholarship, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{scholarship}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Professional Memberships */}
              {member.professionalMemberships && member.professionalMemberships.length > 0 && (
                <div className="p-8 md:p-12 border-b border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Trophy className="w-6 h-6 text-indigo-600 mr-2" />
                    Professional Memberships
                  </h2>
                  <ul className="space-y-2">
                    {member.professionalMemberships.map((membership, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{membership}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Academic Profiles */}
              {member.academicProfiles && member.academicProfiles.length > 0 && (
                <div className="p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Profiles</h2>
                  <AcademicProfileIcons profiles={member.academicProfiles} />
                </div>
              )}

              {/* Additional Custom Sections */}
              {additionalSections}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}