import Image from "next/image";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Achievements
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Athlete */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <Image
              src="/athlete.jpeg"
              alt="Athlete"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-cyan-400">
                🥇 State-Level Athlete
              </h3>

              <p className="text-gray-300 mt-4">
                Consistently secured First Rank in athletics competitions,
                demonstrating discipline, determination, and teamwork.
              </p>
            </div>
          </div>

          {/* Presentation */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <Image
              src="/presentation.jpeg"
              alt="Presentation"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-cyan-400">
                🥈 YASH 2K25
              </h3>

              <p className="text-gray-300 mt-4">
                Secured Second Rank in PPT Presentation on
                <strong> Panchaganga River Pollution</strong>.
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">
            <Image
              src="/marksheet.jpeg"
              alt="Marksheet"
              width={500}
              height={300}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-bold text-cyan-400">
                🎓 Academic Excellence
              </h3>

              <p className="text-gray-300 mt-4">
                Fourth Semester Result:
              </p>

              <p className="text-4xl font-bold text-green-400 mt-4">
                77.06%
              </p>

              <p className="text-gray-400">
                First Class with Distinction
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}