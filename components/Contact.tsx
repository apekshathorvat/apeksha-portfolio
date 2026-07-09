export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-cyan-400">
          Contact Me
        </h2>

        <p className="text-gray-400 mt-6 text-lg">
          I'm always excited to connect for internships,
          collaborations, hackathons, and innovative projects.
        </p>

        <div className="mt-12 space-y-6 text-xl">

          <p>
            📧 Email:
            <br />
            <span className="text-cyan-400">
              thorvatapeksha@gmail.com
            </span>
          </p>

          <p>
            💼 LinkedIn
          </p>

          <a
            href="https://www.linkedin.com/in/apeksha-thorvat-8aa893335"
            target="_blank"
            className="inline-block bg-cyan-500 px-8 py-4 rounded-xl font-bold hover:bg-cyan-600 transition"
          >
            Visit LinkedIn
          </a>

          <br />

          <a
            href="https://women-safety-app-rosy.vercel.app/"
            target="_blank"
            className="inline-block mt-5 border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-500 transition"
          >
            Women Safety App
          </a>

        </div>

      </div>
    </section>
  );
}