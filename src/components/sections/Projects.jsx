import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-black text-white"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Clicker Game */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Clicker Game</h3>
              <p className="text-gray-400 mb-4">
                Solo React app built with dynamic state management and responsive UI.
                My first deployed personal project integrating external libraries and APIs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "JavaScript", "Tailwind", "Vite"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-red-600/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-600/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Carterjmalcom/minecraft_clicker"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                View Project →
              </a>
            </div>

            {/* Laravel Task App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Laravel Task App</h3>
              <p className="text-gray-400 mb-4">
                A 3-day team project using Laravel. Built controllers and form logic for
                task management and user interaction.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Laravel", "PHP", "Blade", "MySQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-red-600/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-600/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/Cmalco709/laravel_task_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                View Project →
              </a>
            </div>

            {/* Flight Match */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Flight Match</h3>
              <p className="text-gray-400 mb-4">
                Worked on flight database and search functionality in a 6-member team.
                Built the backend and integrated database queries with frontend.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Node.js", "Express", "MongoDB", "React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-red-600/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-600/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/lillian-og/flight-match-group-project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                View Project →
              </a>
            </div>

            {/* Mechazon */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(239,68,68,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Mechazon</h3>
              <p className="text-gray-400 mb-4">
                Server-side development using MongoDB and Express in a team of five.
                Built API routes and backend models for a scalable full-stack app.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express", "Node.js", "React"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-red-600/10 text-red-400 py-1 px-3 rounded-full text-sm hover:bg-red-600/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/orgs/WestMecCoding/teams/12pm-teamc-client-dev-mecazon/repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                View Project →
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
