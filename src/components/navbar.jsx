// import { useState } from 'react'

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)

//   return (
//     <nav >
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold">Siraphop.dev</h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 lg:me-22">
//           <a href="#works" className="hover:text-blue-600 font-bold">Works</a>
//           <a href="#blog" className="hover:text-blue-600 font-bold">Blog</a>
//           <a href="#contact" className="hover:text-blue-600 font-bold">Contact</a>
//         </div>

//         {/* Hamburger button */}
//         <button
//           className="md:hidden focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden px-4 pb-4 flex flex-col gap-4">
//           <a href="#works" className="hover:text-blue-600">Works</a>
//           <a href="#blog" className="hover:text-blue-600">Blog</a>
//           <a href="#contact" className="hover:text-blue-600">Contact</a>
//         </div>
//       )}
//     </nav>
//   )
// }

// export default Navbar

import { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const smoothScrollTo = (e, targetId) => {
  e.preventDefault();
  const target = document.getElementById(targetId);
  if (!target) return;

  const navbarHeight = 80; // offset for sticky navbar
  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1200; // 1.2 seconds, slower and smoother

  let start = null;

  const easeInOutCubic = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  };

  const animation = (currentTime) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    } else {
      window.scrollTo(0, targetPosition);
    }
  };

  requestAnimationFrame(animation);
};

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        backgroundColor: darkMode ? "#121212" : "#fff",
        color: darkMode ? "#eee" : "#000",
        transition: "all 0.5s ease",
      }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* โลโก้ + ปุ่ม toggle (mobile) */}
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">Siraphop.dev</h1>

          {/* ปุ่ม toggle เฉพาะ mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full flex items-center justify-center md:hidden"
            style={{
              backgroundColor: darkMode ? "#333" : "#ddd",
              color: darkMode ? "#eee" : "#000",
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Desktop Menu + ปุ่ม toggle */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            onClick={(e) => smoothScrollTo(e, 'about')}
            className="hover:text-blue-600 font-bold"
            style={{ color: darkMode ? "#eee" : undefined }}
          >
            About Me
          </a>
          {/* <a
            href="#skills"
            onClick={(e) => smoothScrollTo(e, 'skills')}
            className="hover:text-blue-600 font-bold"
            style={{ color: darkMode ? "#eee" : undefined }}
          >
            Tech Stack
          </a> */}
          <a
            href="#works"
            onClick={(e) => smoothScrollTo(e, 'works')}
            className="hover:text-blue-600 font-bold"
            style={{ color: darkMode ? "#eee" : undefined }}
          >
            Works
          </a>
          {/* <a
            href="#blog"
            className="hover:text-blue-600 font-bold"
            style={{ color: darkMode ? "#eee" : undefined }}
          >
            Blog
          </a> */}
          <a
            href="#contact"
            onClick={(e) => smoothScrollTo(e, 'contact')}
            className="hover:text-blue-600 font-bold"
            style={{ color: darkMode ? "#eee" : undefined }}
          >
            Contact
          </a>

          {/* ปุ่ม toggle สำหรับ tablet/desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full flex items-center justify-center hidden md:flex"
            style={{
              backgroundColor: darkMode ? "#333" : "#ddd",
              color: darkMode ? "#eee" : "#000",
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          style={{ color: darkMode ? "#eee" : "#000" }}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-4"
          style={{ color: darkMode ? "#eee" : "#000" }}
        >
          <a
            href="#about"
            onClick={(e) => {
              smoothScrollTo(e, 'about');
              setIsOpen(false);
            }}
            className="hover:text-blue-600"
          >
            About Me
          </a>
          {/* <a
            href="#skills"
            onClick={(e) => {
              smoothScrollTo(e, 'skills');
              setIsOpen(false);
            }}
            className="hover:text-blue-600"
          >
            Tech Stack
          </a> */}
          <a
            href="#works"
            onClick={(e) => {
              smoothScrollTo(e, 'works');
              setIsOpen(false);
            }}
            className="hover:text-blue-600"
          >
            Works
          </a>
          {/* <a href="#blog" className="hover:text-blue-600">
            Blog
          </a> */}
          <a
            href="#contact"
            onClick={(e) => {
              smoothScrollTo(e, 'contact');
              setIsOpen(false);
            }}
            className="hover:text-blue-600"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
