import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-black text-white"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Hi, I'm Carter Malcom
          </h1>

          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            I’m a dedicated and driven coding student with hands-on experience in
            full-stack development, React apps, and collaborative team projects.
            Passionate about building clean, scalable web applications and
            continuously improving my technical skills.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-red-600 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-red-600 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:bg-red-900/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
