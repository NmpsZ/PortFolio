import { FaReact, FaVuejs, FaNodeJs, FaPython } from "react-icons/fa";
import {
  SiDocker,
  SiFirebase,
  SiFlutter,
  SiGoland,
  SiJavascript,
  SiNextdotjs,
  SiPostgresql,
  SiRedis,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

function TechStack({ darkMode }) {
  const skills = [
    { name: "React", icon: <FaReact className="text-[#61DBFB] w-12 h-12" /> },
    { name: "Vue.js", icon: <FaVuejs className="text-[#42b883] w-12 h-12" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white w-12 h-12" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-[#339933] w-12 h-12" /> },
    { name: "Golang", icon: <SiGoland className="text-[#00ADD8] w-12 h-12" /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB] w-12 h-12" /> },
    { name: "C#", icon: <TbBrandCSharp className="text-[#68217A] w-12 h-12" /> },
    { name: "Flutter", icon: <SiFlutter className="text-[#46D1FD] w-12 h-12" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38BDF8] w-12 h-12" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E] w-12 h-12" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6] w-12 h-12" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1] w-12 h-12" /> },
    { name: "Supabase", icon: <SiSupabase className="text-[#3ECF8E] w-12 h-12" /> },
    { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28] w-12 h-12" /> },
    { name: "Docker", icon: <SiDocker className="text-[#2496ED] w-12 h-12" /> },
    { name: "Redis", icon: <SiRedis className="text-[#DC382D] w-12 h-12" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-black dark:text-white w-12 h-12" /> },

  ];

  return (
    <div id="skills" className="container mx-auto px-4 pb-12 pt-4">
      <h1 className="my-2 md:m-2 font-bold md:text-center lg:text-xl md:ms-1 md:mb-6">
        My Tech Stack
      </h1>
      <div className="flex flex-wrap justify-center md:justify-center gap-4 md:gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center p-4 w-24 h-24 md:w-28 md:h-28 rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${darkMode ? 'bg-[#222222] hover:bg-[#333333]' : 'bg-gray-50 hover:bg-gray-100'
              }`}
          >
            {skill.icon}
            <p className={`mt-3 text-xs md:text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechStack;
