import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "TailwindCSS",
    "TypeScript",
    "JavaScript",
    "HTML/CSS",
  ];

  const backendSkills = ["Node.js", "MongoDB", "Express", "PHP", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I'm a passionate full-stack developer who loves building sleek,
              functional web applications. Whether it's deploying a solo project
              or collaborating in a team, I bring strong problem-solving and UI
              development skills to every build.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-600/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-600/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-red-600/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-600/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>West-MEC Coding Program</strong> (2023–2024)
                </li>
                <li>
                  Focused on JavaScript, React, Node.js, PHP/Laravel, and
                  full-stack teamwork.
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">💼 Projects & Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Clicker Game (Solo Project)</h4>
                  <p>
                    React-based incremental game deployed with Vite. Learned
                    fundamentals of state management, UI feedback, and GitHub
                    deployment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">Team Projects at West-MEC</h4>
                  <p>
                    Contributed to several full-stack builds, including Mechazon
                    (e-commerce clone) and Flight Match (search engine). Worked
                    on backend APIs, database schemas, and frontend integration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
