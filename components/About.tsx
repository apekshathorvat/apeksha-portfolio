import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <div>
          <Image
            src="/award.jpeg"
            alt="Award"
            width={500}
            height={500}
            className="rounded-2xl shadow-2xl"
          />
        </div>

        <div>

          <h4 className="text-cyan-400 text-xl mb-2">
            ABOUT ME
          </h4>

          <h2 className="text-5xl font-bold mb-6">
            Who is Apeksha Thorvat?
          </h2>

          <p className="text-gray-300 text-lg leading-9">

            I am a Diploma Computer Science Engineering student with a
            strong passion for software development, artificial intelligence,
            and UI/UX design.

            <br /><br />

            Along with academics, I am a State-Level Athlete who has
            consistently secured First Rank in athletics competitions.

            <br /><br />

            I enjoy building innovative projects that solve real-world
            problems, such as my Women Safety App, and I am always eager
            to learn new technologies and improve my skills.

          </p>

          <div className="grid grid-cols-2 gap-5 mt-10">

            <div className="bg-slate-800 rounded-xl p-5">
              <h2 className="text-4xl font-bold text-cyan-400">77.06%</h2>
              <p>4th Semester (MSBTE)</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h2 className="text-4xl font-bold text-cyan-400">1st</h2>
              <p>State-Level Athletics</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h2 className="text-4xl font-bold text-cyan-400">2nd</h2>
              <p>PPT Presentation (YASH 2K25)</p>
            </div>

            <div className="bg-slate-800 rounded-xl p-5">
              <h2 className="text-4xl font-bold text-cyan-400">AI</h2>
              <p>Developer & Problem Solver</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}