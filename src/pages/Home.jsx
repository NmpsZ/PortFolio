import About from "../components/about"
import Contact from "../components/contact"
import Navbar from "../components/navbar"
import Works from "../components/works"
import TechStack from "../components/techstack"
import { useState, useEffect } from "react"


const workItem = [
  {
    id: 1,
    title: "Senior Project Medical Equipment LineChatBot & Admin Web",
    containIndices: [0],
    img: [
      "/src/assets/pic/line1.png",
      "/src/assets/pic/line2.png",
      "/src/assets/pic/line3.png",
    ],
    category: "Line-Chatbot & Admin-Dashboard",
    year: ["2025", "2026"],
    description: `Developed a LINE Chatbot integrated with an Admin Dashboard for managing medical equipment. The chatbot allows users to report repairs, check equipment status, and search for devices. Python-based OCR is used to scan serial numbers and equipment labels for quick identification. The Admin Dashboard provides tools for managing equipment records, viewing support tickets, and monitoring statistics.`,
    tech: ["React", "Golang", "Python", "TailwindCSS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "Web Game Shop 2048",
    img: [
      "/src/assets/pic/game1.png",
      "/src/assets/pic/game2.png",
      "/src/assets/pic/game3.png",
      "/src/assets/pic/game4.png"
    ],
    category: "Web-Game",
    year: "2025",
    description: `A full-stack web-based 2048 game with a built-in item shop. Players can enjoy the classic 2048 puzzle directly in the browser and purchase power-up items to assist gameplay. Includes user authentication with registration and login. A back-office admin panel allows administrators to manage and add shop items and inventory.`,
    tech: ["Vue.js", "Node.js", "PostgreSQL"]
  },
  {
    id: 3,
    title: "Mobile Shop Shoes",
    containIndices: [0, 1, 2],
    img: [
      "/src/assets/pic/shoes1.png",
      "/src/assets/pic/shoes2.png",
      "/src/assets/pic/shoes3.png",
    ],
    category: "Mobile App",
    year: "2025",
    description: `A cross-platform mobile shopping app for footwear built with Flutter and Firebase. Features include user authentication, product browsing, shopping cart, order placement, payment processing, and product search. Firebase is used for Auth, Firestore database, Cloud Storage for product images, and Cloud Functions for backend logic.`,
    tech: ["Flutter", "Firebase"]
  },
  {
    id: 4,
    title: "Blog Post",
    img: [
      "/src/assets/pic/blog.png",
    ],
    category: "Blog",
    year: "2025",
    description: `A full-stack blog application developed with both frontend and backend. The frontend features a clean, responsive UI for creating, reading, updating, and deleting blog posts, along with a dedicated post detail page and user profile section. The backend provides secure CRUD APIs, user authentication with login/logout functionality, and role-based access control to manage permissions. Additional features include search and filtering, image upload for posts, and optimized performance for smooth user experience.`,
    tech: ["Vue.js", "Golang", "TailwindCSS", "PostgreSQL"]
  },
  {
    id: 5,
    title: "MegaMart",
    img: [
      "/src/assets/pic/shop.png",
    ],
    category: "Landing-page",
    year: "2025",
    description: `A responsive mock UI landing page for an e-commerce platform, built as a frontend-only project. Features a clean, modern design with fully responsive layouts optimized for mobile, tablet, and desktop screens.`,
    tech: ["React", "TailwindCSS"]

  },
]


function Home() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#eee";
      document.body.style.transition = "all 0.5s ease";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.body.style.transition = "all 0.5s ease";
    }
  }, [darkMode]);


  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} />
      <TechStack darkMode={darkMode} />
      <Works works={workItem} darkMode={darkMode} />
      <Contact />
    </>

  )

}



export default Home