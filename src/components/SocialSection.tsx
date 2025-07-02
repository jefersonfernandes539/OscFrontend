import { Instagram, Youtube } from "lucide-react";

export default function SocialSection() {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#ff605f]  mb-8">
          Nos acompanhe nas redes sociais
        </h2>

        <div className="flex justify-center items-center gap-8">
          <a
            href="https://www.instagram.com/redemobilize/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Instagram
              size={48}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-semibold text-lg">Instagram</span>
          </a>

          <a
            href="https://www.youtube.com/@institutodeativismocomunit8163"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Youtube
              size={48}
              className="group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-semibold text-lg">YouTube</span>
          </a>
        </div>

        <p className="text-gray-600 mt-8 text-lg font-semibold">
          Fique por dentro das nossas novidades e acompanhe nosso trabalho!
        </p>
      </div>
    </section>
  );
}
