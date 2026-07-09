import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white px-10 pt-24"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-2xl text-cyan-400 mb-2">
            Hello, I'm
          </h2>

          <h1 className="text-6xl font-bold mb-4">
            Apeksha Thorvat
          </h1>

          <h3 className="text-3xl font-semibold text-gray-300 mb-6">
            Diploma Computer Science Student
          </h3>

          <p className="text-lg text-gray-400 leading-8 mb-8">
            Passionate Web Developer, State-Level Athlete and
            AI Enthusiast. I love building real-world projects
            that solve problems using modern technologies.
          </p>

          <div className="flex gap-5 flex-wrap">
            <a
              href="https://women-safety-app-rosy.vercel.app/"
              target="_blank"
              className="bg-cyan-500 px-6 py-3 rounded-xl font-semibold hover:bg-cyan-600 transition"
            >
              Women Safety App
            </a>
            <a
  href="/resume.pdf"
  className="border-2 border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 transition"
>
  📄 Download Resume
</a>

            <a
              href="#contact"
              className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/profile.jpeg"
            alt="Apeksha Thorvat"
            width={380}
            height={380}
            className="rounded-full border-8 border-cyan-500 shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}