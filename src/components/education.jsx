function Education({ darkMode }) {
  const educationItems = [
    {
      degree: "Bachelor of Computer Science",
      school: "Kasetsart University Sriracha",
      period: "2022 - Present",
      details: ["Computer Science Sriracha", "GPA: 3.25"],
    },
    {
      degree: "High School",
      school: "Chonrasadornumrung High School",
      period: "2016 - 2022",
      details: ["Arts-Mathematics Program"],
    },
  ];

  return (
    <section id="education" className="container mx-auto px-4 py-8 text-left md:px-0">
      <div className="my-2 md:m-2 md:ms-1 md:mb-6">
        <h1 className="font-medium lg:text-xl">Education</h1>
        <p className={`mt-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Academic background and completed fields of study.
        </p>
      </div>

      <div className="mb-8 border-b border-gray-300 pb-8">
        <div className="relative space-y-5 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-blue-200 md:before:left-4">
          {educationItems.map((item) => (
            <article
              key={`${item.degree}-${item.school}`}
              className={`relative ml-8 rounded-lg border p-5 transition-all hover:-translate-y-1 hover:shadow-md md:ml-10 ${
                darkMode
                  ? "border-gray-700 bg-[#222222] hover:bg-[#2b2b2b]"
                  : "border-gray-200 bg-gray-50 hover:bg-white"
              }`}
            >
              <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full border-2 border-blue-600 bg-white md:-left-[2.45rem]" />

              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-lg font-bold lg:text-xl">{item.degree}</h2>
                  <p className={`${darkMode ? "text-gray-200" : "text-gray-800"}`}>
                    {item.school}
                  </p>
                </div>
                <p className={`w-fit rounded-full px-3 py-1 text-sm font-medium ${darkMode ? "bg-blue-500/10 text-blue-200" : "bg-blue-50 text-blue-700"}`}>
                  {item.period}
                </p>
              </div>

              <ul className={`mt-3 flex flex-wrap gap-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                {item.details.map((detail) => (
                  <li
                    key={detail}
                    className={`rounded border px-3 py-1 ${
                      darkMode ? "border-gray-700 bg-[#1a1a1a]" : "border-gray-200 bg-white"
                    }`}
                  >
                    {detail}
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

export default Education;
