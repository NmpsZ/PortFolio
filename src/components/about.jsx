function About({ darkMode }) {
  return (
    <div id="about" className="container mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center gap-10">

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl font-bold">Hi, I am Siraphop,</h1>
        <h1 className="text-2xl font-bold">Fullstack Developer</h1>
        <p className={`mt-4 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
          My name is Siraphop Chootong (Cadcam). I am a recent graduate in Computer Science, currently seeking opportunities to gain work experience and further develop my skills. I am eager to grow and build my potential for a future career.
          I enjoy working with others and strongly believe in the value of teamwork.
        </p>
        <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          <a href="https://drive.google.com/uc?export=download&id=1bdfTNf2fJ64V0dEJmPsYPPIeS4Jej_MY" target="_blank" rel="noopener noreferrer" download className="block">
            Download Resume
          </a>
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover shadow-lg"
          src="/src/assets/pic/me.jpg"
          alt="Profile"
        />
      </div>
    </div>
  )
}

export default About
