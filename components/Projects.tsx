export default function Projects() {
  const projects = [
    {
      title: "Women Safety App",
      description:
        "A smart safety application built using Next.js, Firebase and Tailwind CSS. It provides SOS alerts, emergency contacts, live location sharing, voice activation and a modern responsive interface.",
      tech: "Next.js • Firebase • TypeScript • Tailwind CSS",
      link: "https://women-safety-app-rosy.vercel.app/",
    },
    {
      title: "Fake News Detection using AI",
      description:
        "Hackathon project that detects fake news articles using Machine Learning and Natural Language Processing techniques.",
      tech: "Python • Machine Learning • NLP",
      link: "#",
    },
    {
      title: "Food Delivery UI/UX",
      description:
        "Designed a complete food delivery application prototype focusing on user experience, modern layouts and usability.",
      tech: "Figma • UI/UX Design",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 rounded-3xl p-8 border border-slate-700 hover:border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 leading-7">
                {project.description}
              </p>

              <p className="text-sm text-cyan-300 mt-6">
                {project.tech}
              </p>

              <a
                href={project.link}
                target="_blank"
                className="inline-block mt-8 bg-cyan-500 px-5 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
              >
                View Project →
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}