function Works({ works, darkMode }) {
  return (
    <div className="container mx-auto p-4">
      <h1 className="m-2 font-medium md:text-start lg:text-xl md:ms-1 md:mb-10">
        Featured works
      </h1>
      {works.map((work) => (
        <div
          key={work.id}
          className="md:flex md:items-start md:space-x-6 lg:flex lg:items-start lg:space-x-6 mb-8 pb-8 border-b border-gray-300"
        >
          {/* รูป */}
          <div className="md:flex-shrink-0 lg:flex-shrink-0">
            <img
              className="h-48 w-full md:w-64 lg:w-72 rounded-lg"
              src={work.img}
              alt={work.title}
            />
          </div>

          {/* ข้อมูล */}
          <div className="mt-4 md:mt-0 md:flex-1 lg:mt-0 lg:flex-1">
            <h1 className="text-start font-bold text-xl lg:text-2xl">{work.title}</h1>
            <div className="flex items-center mt-2 mb-4">
              <h1
                className="rounded-full px-3 py-1 text-sm font-bold"
                style={{
                  backgroundColor: darkMode ? "#fff" : "#1f2937",
                  color: darkMode ? "#000" : "#fff", 
                }}
              >
                {work.year}
              </h1>
              <p className="ml-4 text-gray-600">{work.category}</p>
            </div>
            <p className="text-start text-gray-700 leading-relaxed">{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Works;
