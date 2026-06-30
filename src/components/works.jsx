import { useEffect, useState } from "react";
import { FaChevronDown, FaGithub, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { IoClose, IoFilterOutline, IoOpenOutline } from "react-icons/io5";
import {
  SiDocker,
  SiDotnet,
  SiExpress,
  SiFastify,
  SiFirebase,
  SiFlutter,
  SiGoland,
  SiNextdotjs,
  SiPostgresql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import ImageCarousel from "./ImageCarousel";

function Works({ works, darkMode }) {
  const [filterYear, setFilterYear] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  const techMap = {
    "Vue.js": { color: "#42b883", icon: <FaVuejs /> },
    Golang: { color: "#00ADD8", icon: <SiGoland /> },
    Fiber: { color: "#00ADD8", icon: <SiGoland /> },
    React: { color: "#61DBFB", icon: <FaReact /> },
    TailwindCSS: { color: "#38BDF8", icon: <SiTailwindcss /> },
    "Node.js": { color: "#339933", icon: <FaNodeJs /> },
    Express: { color: "#111827", icon: <SiExpress /> },
    Flutter: { color: "#02569B", icon: <SiFlutter /> },
    PostgreSQL: { color: "#4169E1", icon: <SiPostgresql /> },
    Firebase: { color: "#FFCA28", icon: <SiFirebase /> },
    Python: { color: "#3776AB", icon: <FaPython /> },
    Typescript: { color: "#3178C6", icon: <SiTypescript /> },
    "Next.js": { color: "#111827", icon: <SiNextdotjs /> },
    Fastify: { color: "#111827", icon: <SiFastify /> },
    Supabase: { color: "#3ECF8E", icon: <SiSupabase /> },
    Docker: { color: "#2496ED", icon: <SiDocker /> },
    ".NET": { color: "#512BD4", icon: <SiDotnet /> },
    Vite: { color: "#646CFF", icon: <SiVite /> },
  };

  const closeDetail = () => setSelectedWork(null);

  useEffect(() => {
    if (!selectedWork) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeDetail();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedWork]);

  const allYears = Array.from(new Set(works.flatMap((work) => Array.isArray(work.year) ? work.year : [work.year]))).sort((a, b) => b.localeCompare(a));
  const filters = ["All", ...allYears];
  const filteredWorks = filterYear === "All"
    ? works
    : works.filter((work) => (Array.isArray(work.year) ? work.year : [work.year]).includes(filterYear));

  const githubLinks = (github) => {
    if (Array.isArray(github)) return github.filter((link) => link.url);
    if (github) return [{ label: "GitHub", url: github }];
    return [];
  };

  return (
    <div id="works" className="container mx-auto px-4 py-4 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-2 md:m-2 md:ms-1 md:mb-10">
        <h1 className="font-medium lg:text-xl mb-4 md:mb-0">
          Project Experience
        </h1>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-bold shadow-sm transition-colors ${darkMode ? "border-gray-700 bg-[#222222] text-white hover:bg-[#333333]" : "border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
              }`}
          >
            <IoFilterOutline className="h-4 w-4" />
            Filter: {filterYear}
            <FaChevronDown className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {isDropdownOpen && (
            <div className={`absolute right-0 z-10 mt-2 w-32 overflow-hidden rounded-lg border shadow-lg ${darkMode ? "border-gray-700 bg-[#222222]" : "border-gray-200 bg-white"
              }`}>
              {filters.map((year) => (
                <button
                  key={year}
                  onClick={() => {
                    setFilterYear(year);
                    setIsDropdownOpen(false);
                  }}
                  className={`block w-full px-4 py-2 text-left text-sm transition-colors ${filterYear === year
                    ? (darkMode ? "bg-[#444444] font-bold text-white" : "bg-gray-100 font-bold text-gray-900")
                    : (darkMode ? "text-gray-300 hover:bg-[#333333] hover:text-white" : "text-gray-700 hover:bg-gray-50 hover:text-gray-900")
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {filteredWorks.map((work) => (
        <article
          key={work.id}
          className="flex flex-col md:flex-row md:items-center lg:items-center md:space-x-6 lg:space-x-6 mb-8 pb-8 border-b border-gray-300 text-left"
        >
          {work.img && (
            <div className="md:flex-shrink-0">
              <ImageCarousel
                images={Array.isArray(work.img) ? work.img : [work.img]}
                alt={work.title}
                darkMode={darkMode}
                containIndices={work.containIndices}
              />
            </div>
          )}

          <div className="md:flex-1">
            <h3 className="text-xl font-bold lg:text-2xl">{work.title}</h3>
            <ProjectMeta work={work} darkMode={darkMode} />
            <p className={`mb-4 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              {Array.isArray(work.description) 
                ? work.description.map(text => text.replace(/^(Overview|Features|Challenges & Solutions):\s*/, '')).join(" ") 
                : work.description}
            </p>
            <TechPills tech={work.tech} techMap={techMap} />

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedWork(work)}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-blue-700"
              >
                View details
                <IoOpenOutline className="h-4 w-4" />
              </button>

              {/* {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold transition-colors ${darkMode
                      ? "bg-white text-black hover:bg-gray-200"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                    }`}
                >
                  Live Demo
                  <IoOpenOutline className="h-4 w-4" />
                </a>
              )} */}
            </div>
          </div>
        </article>
      ))}

      {selectedWork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-detail-title"
          onClick={closeDetail}
        >
          <div
            className={`max-h-[84vh] w-full max-w-4xl overflow-y-auto rounded-xl border text-left shadow-2xl ${darkMode ? "border-gray-700 bg-[#171717] text-white" : "border-gray-200 bg-white text-gray-950"
              }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className={`sticky top-0 z-20 flex items-start justify-between gap-4 border-b px-4 py-4 backdrop-blur-md md:px-6 ${darkMode ? "border-white/10 bg-[#171717]/95" : "border-gray-200 bg-white/95"
              }`}>
              <div className="min-w-0">
                <ProjectMeta work={selectedWork} darkMode={darkMode} compact />
                <h2 id="project-detail-title" className="text-xl font-extrabold leading-tight md:text-3xl">
                  {selectedWork.title}
                </h2>
              </div>
              <button
                onClick={closeDetail}
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-colors ${darkMode ? "hover:bg-white/10" : "hover:bg-gray-100"
                  }`}
                aria-label="Close project details"
              >
                <IoClose className="h-6 w-6" />
              </button>
            </div>

            <div className="space-y-6 p-4 md:p-6">
              {selectedWork.img && (
                <div className={`rounded-xl border p-3 ${darkMode ? "border-white/10 bg-[#101010]" : "border-gray-200 bg-gray-50"
                  }`}>
                  <ImageCarousel
                    images={Array.isArray(selectedWork.img) ? selectedWork.img : [selectedWork.img]}
                    alt={selectedWork.title}
                    darkMode={darkMode}
                    containIndices={selectedWork.containIndices}
                    size="large"
                  />
                </div>
              )}

              <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div>
                  <h3 className="mb-3 text-lg font-bold md:text-xl">Project overview</h3>
                  {Array.isArray(selectedWork.description) ? (
                    <ul className={`list-disc pl-5 max-w-3xl text-base leading-7 space-y-2 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {selectedWork.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className={`max-w-3xl text-base leading-7 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                      {selectedWork.description}
                    </p>
                  )}
                </div>

                <aside className={`rounded-xl border p-5 ${darkMode ? "border-white/10 bg-white/5" : "border-gray-200 bg-white"
                  }`}>
                  <h3 className="mb-4 text-lg font-bold">Stack & source</h3>
                  <TechPills tech={selectedWork.tech} techMap={techMap} />

                  <div className="flex flex-col gap-3 mt-5">
                    {/* {selectedWork.link && (
                      <a
                        href={selectedWork.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-base font-bold text-white transition-colors hover:bg-blue-700"
                      >
                        <IoOpenOutline className="h-5 w-5" />
                        Live Demo
                      </a>
                    )} */}

                    {githubLinks(selectedWork.github).length > 0 ? (
                      githubLinks(selectedWork.github).map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-bold transition-colors ${darkMode ? "bg-white text-black hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-700"
                            }`}
                        >
                          <FaGithub className="h-5 w-5" />
                          {link.label === "GitHub" ? "GitHub" : `GitHub ${link.label}`}
                        </a>
                      ))
                    ) : (
                      <div className={`inline-flex w-full items-center justify-center gap-2 rounded-lg border px-4 py-3 text-base font-bold ${darkMode ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-500"
                        }`}>
                        <FaGithub className="h-5 w-5" />
                        Add GitHub link soon
                      </div>
                    )}
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectMeta({ work, darkMode, compact = false }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${compact ? "mb-2" : "mb-4 mt-2"}`}>
      {(Array.isArray(work.year) ? work.year : [work.year]).map((year) => (
        <span
          key={year}
          className="rounded-full px-3 py-1 text-sm font-bold"
          style={{
            backgroundColor: darkMode ? "#fff" : "#1f2937",
            color: darkMode ? "#000" : "#fff",
          }}
        >
          {year}
        </span>
      ))}
      <span className={`font-semibold ${compact ? "text-sm" : ""} ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
        {work.category}
      </span>
    </div>
  );
}

function TechPills({ tech, techMap }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {tech?.map((name) => (
        <span
          key={name}
          className="flex items-center gap-1 rounded-full px-3 py-1 text-sm font-medium text-white shadow-sm"
          style={{ backgroundColor: techMap[name]?.color || "#6B7280" }}
        >
          {techMap[name]?.icon}
          {name}
        </span>
      ))}
    </div>
  );
}

export default Works;
