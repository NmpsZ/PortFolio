function Internship({ darkMode }) {
  const experiences = [
    {
      company: "T.C.C. Technology Co., Ltd.",
      role: "Fullstack Application Developer (Intern)",
      period: "APR. 2025 - OCT. 2025",
      duration: "6 Month",
      items: [
        "Built a full-stack CMD platform centralizing customer data from SAP and internal systems, using Vue.js and Golang.",
        "Built a Kafka-based pipeline and cron jobs to sync data with SAP, and exposed REST APIs for the frontend",
        "Wrote unit tests across frontend and backend, maintaining over 80% code coverage.",
      ],
    },
    {
      company: "T.C.C. Technology Co., Ltd.",
      role: "Fullstack Application Developer (Part-time)",
      period: "NOV. 2025 - MAR. 2026",
      duration: "5 Month",
      items: [
        "Developed Legal One, a centralized contract and tax management platform, using React.js and C# .NET Core 8 with PostgreSQL.",
        "Built RESTful APIs powering SLA tracking, a performance dashboard, notifications, and activity logs.",
        "Fixed critical workflow bugs while building new frontend features and API integrations.",
      ],
    },
  ];

  return (
    <section id="internship" className="container mx-auto px-4 py-8 text-left md:px-0">
      <div className="my-2 md:m-2 md:ms-1 md:mb-6">
        <h1 className="font-medium lg:text-xl">
          Internship Experience
        </h1>
        <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Practical experience in fullstack development and business application systems.
        </p>
      </div>

      <div className="mb-8 border-b border-gray-300 pb-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.period}`}
              className={`rounded-lg border p-5 transition-all hover:-translate-y-1 hover:shadow-md ${darkMode
                ? "border-gray-700 bg-[#222222] hover:bg-[#2b2b2b]"
                : "border-gray-200 bg-gray-50 hover:bg-white"
                }`}
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-lg font-bold lg:text-xl">{experience.company}</h2>
                  <p className={`mt-1 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>{experience.role}</p>
                </div>
                <div className={`w-fit rounded-lg px-3 py-2 text-left text-sm md:text-right ${darkMode ? "bg-blue-500/10 text-blue-200" : "bg-blue-50 text-blue-700"}`}>
                  <p>{experience.period}</p>
                  <p>({experience.duration})</p>
                </div>
              </div>

              <ul className={`mt-4 space-y-2 text-sm leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {experience.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internship;
