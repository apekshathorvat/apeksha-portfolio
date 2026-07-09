import Image from "next/image";

export default function Gallery() {
  const images = [
    { src: "/profile.jpeg", title: "Professional Photo" },
    { src: "/athlete.jpeg", title: "State-Level Athlete" },
    { src: "/award.jpeg", title: "Awards & Achievements" },
    { src: "/presentation.jpeg", title: "YASH 2K25 Presentation" },
    { src: "/marksheet.jpeg", title: "4th Semester Result" },
  ];

  return (
    <section
      id="gallery"
      className="bg-slate-900 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-16">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {images.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-500"
            >
              <Image
                src={img.src}
                alt={img.title}
                width={500}
                height={400}
                className="w-full h-80 object-cover"
              />

              <div className="bg-slate-800 p-5">
                <h3 className="text-xl font-semibold text-center">
                  {img.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}