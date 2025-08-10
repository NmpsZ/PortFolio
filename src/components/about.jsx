function About() {
  return (
    <div className="container mx-auto px-4 py-10 flex flex-col-reverse md:flex-row items-center gap-10">

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl font-bold">Hi, I am Siraphop,</h1>
        <h1 className="text-2xl font-bold">Fullstack Developer</h1>
        <p className="text-gray-700 mt-4">
          I’m currently studying computer science and looking to gain more work experience.
          I have some real project experience from my previous job and am ready to take on freelance work to help bring your projects to life.
        </p>
       <button className="mt-6 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          <a href="https://drive.google.com/uc?export=download&id=1hAEe_lJ_nVgqNahsNa8Wu2nIhT5NDERC" target="_blank" rel="noopener noreferrer" download className="block">
            Download Resume
          </a>
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <img 
          className="rounded-full w-56 h-56 object-cover shadow-lg" 
          src="/src/assets/pic/me.jpg" 
          alt="Profile"
        />
      </div>
    </div>
  )
}

export default About
