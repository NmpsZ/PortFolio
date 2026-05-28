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
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://drive.google.com/uc?export=download&id=1vY7GBvGla4Zjy0CDJm3ZKO8LnFQLwbqr"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex justify-center rounded bg-blue-600 px-5 py-2 font-semibold text-white transition hover:bg-blue-700"
          >
            Download Resume
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1FdpsYtczKLIut3Wwwzs7Uj_T4SHbErsD"
            target="_blank"
            rel="noopener noreferrer"
            download
            className={`inline-flex justify-center rounded border px-5 py-2 font-semibold transition ${darkMode ? "border-blue-400/60 text-blue-200 hover:bg-blue-400/10" : "border-blue-600 text-blue-700 hover:bg-blue-50"
              }`}
          >
            Download Transcript
          </a>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img
          className="rounded-full w-56 h-56 md:w-72 md:h-72 object-cover shadow-lg"
          src="/pic/me.jpg"
          alt="Profile"
        />
      </div>
    </div>
  )
}

export default About
