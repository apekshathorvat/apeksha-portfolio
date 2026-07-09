export default function Skills() {
  const skills = [
    "HTML",
    "Firebase",
    "Python",
    "Java",
    "Git",
    "GitHub",
    "UI/UX Design",
    "Figma",
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 p-8 rounded-2xl text-center hover:bg-cyan-500 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}