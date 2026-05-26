function ProfileSummary({ darkMode }) {
  const softSkills = [
    {
      title: "Communication",
      detail: "Communicates clearly with teammates and keeps work progress easy to follow.",
    },
    {
      title: "Teamwork",
      detail: "Works well with others, listens to feedback, and supports shared project goals.",
    },
    {
      title: "Problem Solving",
      detail: "Analyzes issues step by step and looks for practical ways to move work forward.",
    },
    {
      title: "Responsibility",
      detail: "Takes ownership of assigned tasks and focuses on completing work with care.",
    },
  ];

  return (
    <section id="soft-skills" className="container mx-auto px-4 py-8 text-left md:px-0">
      <div className="my-2 md:m-2 md:ms-1 md:mb-6">
        <h1 className="font-medium lg:text-xl">Soft Skills</h1>
        <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Personal skills that support collaboration and daily development work.
        </p>
      </div>

      <div className="border-b border-gray-300 pb-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {softSkills.map((skill) => (
            <article
              key={skill.title}
              className={`rounded-lg border p-5 transition-all hover:-translate-y-1 hover:shadow-md ${
                darkMode
                  ? "border-gray-700 bg-[#222222] hover:bg-[#2b2b2b]"
                  : "border-gray-200 bg-gray-50 hover:bg-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ${darkMode ? "bg-blue-500/10 text-blue-200" : "bg-blue-50 text-blue-700"}`}>
                  {skill.title.charAt(0)}
                </span>
                <h2 className="font-bold">{skill.title}</h2>
              </div>
              <p className={`mt-3 text-sm leading-6 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {skill.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProfileSummary;
