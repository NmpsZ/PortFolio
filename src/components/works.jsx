import { useState } from "react";
import { FaVuejs, FaReact, FaChevronDown, FaNodeJs, FaPython } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { SiGoland, SiTailwindcss, SiFlutter, SiPostgresql, SiFirebase } from "react-icons/si";
import ImageCarousel from "./ImageCarousel";

function Works({ works, darkMode }) {
  const [filterYear, setFilterYear] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const allYears = Array.from(new Set(works.flatMap(w => Array.isArray(w.year) ? w.year : [w.year]))).sort((a, b) => b.localeCompare(a));
  const filters = ['All', ...allYears];

  const filteredWorks = filterYear === 'All'
    ? works
    : works.filter(w => {
      const wYears = Array.isArray(w.year) ? w.year : [w.year];
      return wYears.includes(filterYear);
    });

  return (
    <div id="works" className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-2 md:m-2 md:ms-1 md:mb-10">
        <h1 className="font-medium lg:text-xl mb-4 md:mb-0">
          Featured works
        </h1>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors border shadow-sm ${darkMode ? "bg-[#222222] text-white border-gray-700 hover:bg-[#333333]" : "bg-white text-gray-800 border-gray-300 hover:bg-gray-50"
              }`}
          >
            <IoFilterOutline className="w-4 h-4" />
            Filter: {filterYear}
            <FaChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div
              className={`absolute right-0 mt-2 w-32 rounded-lg shadow-lg z-10 border overflow-hidden ${darkMode ? "bg-[#222222] border-gray-700" : "bg-white border-gray-200"
                }`}
            >
              {filters.map(year => (
                <button
                  key={year}
                  onClick={() => {
                    setFilterYear(year);
                    setIsDropdownOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm transition-colors ${filterYear === year
                    ? (darkMode ? "bg-[#444444] text-white font-bold" : "bg-gray-100 text-gray-900 font-bold")
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
        <div
          key={work.id}
          className="flex flex-col md:flex-row md:items-center lg:items-center md:space-x-6 lg:space-x-6 mb-8 pb-8 border-b border-gray-300 text-left"
        >
          {/* รูป Carousel */}
          <div className="md:flex-shrink-0 lg:flex-shrink-0">
            <ImageCarousel
              images={Array.isArray(work.img) ? work.img : [work.img]}
              alt={work.title}
              darkMode={darkMode}
              containIndices={work.containIndices}
            />
          </div>

          {/* ข้อมูล */}
          <div className="mt-4 md:mt-0 md:flex-1 lg:mt-0 lg:flex-1">
            <h1 className="text-start font-bold text-xl lg:text-2xl">{work.title}</h1>
            <div className="flex items-center justify-start flex-wrap gap-2 mt-2 mb-4">
              {(Array.isArray(work.year) ? work.year : [work.year]).map((y, idx) => (
                <h1
                  key={idx}
                  className="rounded-full px-3 py-1 text-sm font-bold"
                  style={{
                    backgroundColor: darkMode ? "#fff" : "#1f2937",
                    color: darkMode ? "#000" : "#fff",
                  }}
                >
                  {y}
                </h1>
              ))}
              <p className={`md:ml-2 transition-colors ${darkMode ? "text-gray-400" : "text-gray-600"}`}>{work.category}</p>
            </div>
            <p className={`text-start leading-relaxed transition-colors ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{work.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-start gap-2 mt-4">
              {work.tech && work.tech.map((t, index) => {
                const techMap = {
                  "Vue.js": { color: "#42b883", icon: <FaVuejs /> },
                  "Golang": { color: "#00ADD8", icon: <SiGoland /> },
                  "React": { color: "#61DBFB", icon: <FaReact /> },
                  "TailwindCSS": { color: "#38BDF8", icon: <SiTailwindcss /> },
                  "Node.js": { color: "#339933", icon: <FaNodeJs /> },
                  "Flutter": { color: "#02569B", icon: <SiFlutter /> },
                  "PostgreSQL": { color: "#4169E1", icon: <SiPostgresql /> },
                  "Firebase": { color: "#FFCA28", icon: <SiFirebase /> },
                  "Python": { color: "#3776AB", icon: <FaPython /> }
                };

                return (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium shadow-sm text-white"
                    style={{
                      backgroundColor: techMap[t]?.color || "#6B7280",
                    }}
                  >
                    {techMap[t]?.icon}
                    {t}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Works;