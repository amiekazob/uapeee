import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Program Educational Objectives (POE) | Department of EEE - UAP",
  description:
    "Program Educational Objectives, Vision, and Mission of the Department of Electrical and Electronic Engineering at University of Asia Pacific",
}

export default function POEPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Program Educational Objectives (POE)
          </h1>

          {/* Department Vision */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Department Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The vision of Electrical and Electronic Engineering Department at
              University of Asia Pacific is to reach at an educational excellence
              in full compliance to the international standards of quality
              assurance. The Department will produce quality graduates capable
              of taking the challenges of the rapidly changing field of
              Electrical and Electronic Engineering as well as capable of making
              significant contributions to individual and societal empowerment.
            </p>
          </div>

          {/* Department Mission */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Department Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Department of Electrical and Electronic Engineering at
              University of Asia Pacific aims to provide quality education at
              affordable cost in the areas of Electrical and Electronic
              Engineering through following mission statements:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Mission Statement-1: To enhance the competitiveness of our
                graduates in the job market and contribute to the economic,
                scientific, and social development of the country.
              </li>
              <li>
                Mission Statement-2: To maintain a positive academic environment
                that promotes excellence in learning and research through
                constructive interaction between students, faculty, industry,
                and community.
              </li>
              <li>
                Mission Statement-3: To utilize the available resources to
                instil latest technical knowledge and research capabilities, to
                encourage critical thinking, problem solving skills, and ethical
                responsibility and to develop students’ verbal and written
                communication skills.
              </li>
              <li>
                The long-term goal of the EEE department is to become a major
                center of higher education and research in Electrical and
                Electronic Engineering both nationally and internationally.
              </li>
            </ul>
          </div>

          {/* Program Educational Objectives */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Program Educational Objectives (PEO) for the B.Sc. in EEE
            </h2>

            <div className="space-y-4">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-1:</h3>
                <p className="text-gray-700">
                  Apply effectively their knowledge, tools and techniques to
                  solve real world complex engineering problems.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-2:</h3>
                <p className="text-gray-700">
                  Conduct research-based investigations and contribute to
                  advancements and innovation.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-3:</h3>
                <p className="text-gray-700">
                  Demonstrate commitment to ethical practices and sustainability.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-4:</h3>
                <p className="text-gray-700">
                  Work collaboratively and communicate effectively.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">PEO-5:</h3>
                <p className="text-gray-700">
                  Engage in continuous learning and professional development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
