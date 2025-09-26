import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Program Educational Objectives (POE) | Department of EEE - UAP",
  description: "Program Educational Objectives, Vision, and Mission of the Department of Electrical and Electronic Engineering at University of Asia Pacific",
}

export default function POEPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Program Educational Objectives (POE)</h1>
          
          {/* Department Vision */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Department Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              The vision of the Electrical and Electronic Engineering Department at the University of Asia Pacific is to reach an educational excellence in full compliance to the international standards of quality assurance. The Department will produce quality graduates capable of taking the challenges of the rapidly changing field of Electrical and Electronic Engineering as well as capable of making significant contributions to individual and societal empowerment.
            </p>
          </div>

          {/* Department Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Department Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Department of Electrical and Electronic Engineering at the University of Asia Pacific aims to provide quality education at an affordable cost in the areas of Electrical and Electronic Engineering through the following mission statements:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>To enhance the competitiveness of our graduates in the job market and contribute to the economic, scientific, and social development of the country.</li>
              <li>To maintain a positive academic environment that promotes excellence in learning and research through constructive interaction between students, faculty, industry, and community.</li>
              <li>To utilize the available resources to instill the latest technical knowledge and research capabilities, to encourage critical thinking, problem solving skills, and ethical responsibility and to develop students' verbal and written communication skills.</li>
            </ul>
          </div>

          {/* Program Educational Objectives */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Program Educational Objectives (PEO) for the B.Sc. in EEE</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-1:</h3>
                <p className="text-gray-700">Apply effectively their knowledge, tools and techniques to solve real world complex engineering problems while engaging in professional design within the field of Electrical and Electronic Engineering.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-2:</h3>
                <p className="text-gray-700">Conduct research-based investigations, design experiments, analyze data, and synthesize information to contribute to advancements and innovation in the field of Electrical and Electronic Engineering.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-3:</h3>
                <p className="text-gray-700">Demonstrate a commitment to ethical practices, societal well-being, and environmental sustainability in their proposed solutions and professional endeavors, aligning with global engineering standards and best practices.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-4:</h3>
                <p className="text-gray-700">Work independently or collaboratively in interdisciplinary teams, manage projects and provide economic decisions while effectively communicating solutions to both technical and non-technical audiences.</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-5:</h3>
                <p className="text-gray-700">Engage in continuous learning, staying abreast of emerging technologies, industry trends, and professional best practices, and will actively pursue opportunities for professional development and growth in their careers.</p>
              </div>
            </div>
          </div>

          {/* Mapping between PEOs and Vision */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Mapping between the PEOs and the Vision of the Department</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Vision Elements</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Aligned PEOs</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Relation / Contribution</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Educational excellence in compliance with international standards</td>
                    <td className="border border-gray-300 px-4 py-3">PEO-1, PEO-2, PEO-5</td>
                    <td className="border border-gray-300 px-4 py-3">Graduates apply knowledge and tools effectively (PEO-1), conduct high-quality research (PEO-2), and pursue continuous learning (PEO-5) in line with global standards.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Highly skilled graduates capable of meeting challenges of a rapidly evolving field</td>
                    <td className="border border-gray-300 px-4 py-3">PEO-1, PEO-2, PEO-4, PEO-5</td>
                    <td className="border border-gray-300 px-4 py-3">Knowledge application (PEO-1), innovation through research (PEO-2), teamwork and leadership (PEO-4), and lifelong learning (PEO-5) ensure adaptability to industry changes.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3">Making meaningful contributions to individual empowerment</td>
                    <td className="border border-gray-300 px-4 py-3">PEO-3, PEO-4, PEO-5</td>
                    <td className="border border-gray-300 px-4 py-3">Ethics and responsibility (PEO-3), effective teamwork and communication (PEO-4), and continuous professional growth (PEO-5) contribute to empowering individuals.</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3">Making meaningful contributions to societal empowerment</td>
                    <td className="border border-gray-300 px-4 py-3">PEO-3, PEO-4</td>
                    <td className="border border-gray-300 px-4 py-3">Ethical, sustainable practices (PEO-3) and interdisciplinary collaboration with sound decision-making (PEO-4) ensure graduates positively impact society.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mapping between PEOs and Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">The mapping between the PEOs and the Mission of the Department</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">PEO No.</th>
                    <th className="border border-gray-300 px-4 py-3 text-left font-semibold">PEO Statement</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Mission 1</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Mission 2</th>
                    <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Mission 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">1</td>
                    <td className="border border-gray-300 px-4 py-3">Apply effectively their knowledge, tools and techniques to solve real world complex engineering problems while engaging in professional design within the field of Electrical and Electronic Engineering.</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">✓</td>
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">2</td>
                    <td className="border border-gray-300 px-4 py-3">Conduct research-based investigations, design experiments, analyze data, and synthesize information to contribute to advancements and innovation in the field of Electrical and Electronic Engineering.</td>
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">✓</td>
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">3</td>
                    <td className="border border-gray-300 px-4 py-3">Demonstrate a commitment to ethical practices, societal well-being, and environmental sustainability in their proposed solutions and professional endeavours, aligning with global engineering standards and best practices.</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">✓</td>
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">4</td>
                    <td className="border border-gray-300 px-4 py-3">Work independently or collaboratively in interdisciplinary teams, manage projects and provide economic decisions while effectively communicating solutions to both technical and non-technical audiences.</td>
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">✓</td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 text-center font-semibold">5</td>
                    <td className="border border-gray-300 px-4 py-3">Engage in continuous learning, staying abreast of emerging technologies, industry trends, and professional best practices, and will actively pursue opportunities for professional development and growth in their careers.</td>
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                    <td className="border border-gray-300 px-4 py-3 text-center"></td>
                    <td className="border border-gray-300 px-4 py-3 text-center text-green-600 font-bold">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Curriculum and Teaching-Learning Process */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Curriculum and Teaching-Learning Process for Attainment of PEOs</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold">PEO</th>
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold">Mapped POs</th>
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold">Related Courses</th>
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold">Teaching-Learning Activities</th>
                    <th className="border border-gray-300 px-3 py-3 text-center font-semibold">Alignment with PEO</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-3 text-center font-semibold bg-blue-50">PEO 1</td>
                    <td className="border border-gray-300 px-3 py-3">PO(a), PO(c), PO(e)</td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Electrical Circuits</li>
                        <li>• Digital Electronics</li>
                        <li>• Power System Analysis</li>
                        <li>• Signal & Linear Systems</li>
                        <li>• Electrical Eng. Materials</li>
                        <li>• Electromagnetic Fields & Waves</li>
                        <li>• DSP</li>
                        <li>• Control System</li>
                        <li>• Power Electronics Lab</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Lectures, tutorials, assignments</li>
                        <li>• Analytical problem-solving</li>
                        <li>• Design projects</li>
                        <li>• Simulation tasks</li>
                        <li>• Hands-on experiments</li>
                        <li>• Use of modern tools</li>
                        <li>• Simulation software</li>
                        <li>• Hardware kits</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3 text-xs">
                      Teaching provides knowledge, methods, and techniques. Learning transforms them into skills, understanding, and real-world problem-solving abilities using modern tools. Together they fulfill the PEO.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-3 text-center font-semibold bg-blue-50">PEO 2</td>
                    <td className="border border-gray-300 px-3 py-3">PO(b), PO(d)</td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Electronic Circuits II Lab (CO6)</li>
                        <li>• Power Electronics Lab</li>
                        <li>• Microprocessor & Interfacing Lab</li>
                        <li>• DSP Lab</li>
                        <li>• Control System Lab (CO1, CO3, CO5)</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Research-based assignments</li>
                        <li>• Experimental design</li>
                        <li>• Simulation projects</li>
                        <li>• Data collection & analysis</li>
                        <li>• Synthesis of information</li>
                        <li>• Connecting theoretical knowledge with practical investigations</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3 text-xs">
                      Teaching provides structured opportunities, resources, tools, and mentoring for research, experimentation, simulation, and data analysis. Learning transforms these experiences into research skills, critical analysis, problem-solving, and innovative thinking. Together, they achieve the PEO.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-3 text-center font-semibold bg-blue-50">PEO 3</td>
                    <td className="border border-gray-300 px-3 py-3">PO(f), PO(g), PO(h)</td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Digital Electronics (CO4)</li>
                        <li>• Control System Lab</li>
                        <li>• Microprocessor & Interfacing Lab</li>
                        <li>• Power Electronics Lab</li>
                        <li>• Power Station Engineering (CO5)</li>
                        <li>• Electromagnetic Fields & Waves (CO1, CO4)</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Ethical discussions</li>
                        <li>• Sustainability-focused design projects</li>
                        <li>• Environmental/sustainability impact analysis</li>
                        <li>• Lab and field assignments</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3 text-xs">
                      Teaching provides knowledge, frameworks, and opportunities to engage with ethical and sustainable practices. Learning transforms these into values, attitudes, and professional behaviors. Together, they ensure graduates can uphold ethics, contribute to society, and design sustainable solutions, fulfilling the PEO.
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-3 text-center font-semibold bg-blue-50">PEO 4</td>
                    <td className="border border-gray-300 px-3 py-3">PO(i), PO(j), PO(k)</td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Control System Lab (CO6)</li>
                        <li>• Power Electronics Lab (CO5)</li>
                        <li>• Digital Electronics Lab (CO3, CO4)</li>
                        <li>• Communication Eng. Fundamentals Lab</li>
                        <li>• Microprocessor & Interfacing Lab</li>
                        <li>• Thesis/Design Project (CO4)</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Group projects</li>
                        <li>• Teamwork in labs</li>
                        <li>• Thesis writing</li>
                        <li>• Report preparation</li>
                        <li>• Presentations</li>
                        <li>• Project management exercises</li>
                        <li>• Prototype design</li>
                        <li>• Budget planning</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3 text-xs">
                      Teaching provides structured opportunities for teamwork, project management, economics, and communication. Learning transforms these into practical skills and attitudes necessary for independent and collaborative professional work. Together, they produce graduates who can manage projects, make sound economic decisions, and communicate solutions effectively in diverse professional settings.
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-3 text-center font-semibold bg-blue-50">PEO 5</td>
                    <td className="border border-gray-300 px-3 py-3">PO(l)</td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Electrical Machines II (CO4)</li>
                        <li>• Power System Analysis I</li>
                        <li>• Power Electronics</li>
                        <li>• Thesis/Design Project (CO6)</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3">
                      <ul className="text-xs space-y-1">
                        <li>• Literature review</li>
                        <li>• Independent study</li>
                        <li>• Simulation projects</li>
                        <li>• Research-based thesis/design project</li>
                        <li>• Exposure to industrial practices</li>
                        <li>• Professional development activities (seminars, workshops, guest lectures)</li>
                      </ul>
                    </td>
                    <td className="border border-gray-300 px-3 py-3 text-xs">
                      Teaching provides the mindset, exposure, and opportunities that highlight the necessity of continuous learning. Learning transforms this into self-motivation, adaptability, and a proactive approach to career growth. Together, they produce graduates who pursue professional development, remain updated with technological advancements, and thrive in evolving engineering environments.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}