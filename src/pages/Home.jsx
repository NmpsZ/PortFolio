import About from "../components/about"
import Contact from "../components/contact"
import Navbar from "../components/navbar"
import Works from "../components/works"
import TechStack from "../components/techstack"
import Internship from "../components/internship"
import ProfileSummary from "../components/profileSummary"
import Education from "../components/education"
import { useState, useEffect } from "react"


const workItem = [
  {
    id: 1,
    title: "SpawnCtl",
    img: [
      "/pic/spawn1.png",
      "/pic/spawn2.png",
      "/pic/spawn3.png"
    ],
    category: "Game Server Hosting Platform",
    year: "2026",
    description: `A self-service game server hosting platform for various multiplayer games. The system lets users start isolated Docker game servers from a Next.js dashboard, exposes them publicly with Playit.gg tunnels, streams live container logs through Socket.io, stores server state in Supabase, and runs Redis/BullMQ background checks to auto-shutdown idle servers and save host resources.`,
    tech: ["Next.js", "React", "Fastify", "Typescript", "Supabase", "PostgreSQL", "Docker", "Node.js"],
    github: "https://github.com/NmpsZ/SpawnCtl",
    link: "https://spawn-ctl-web.vercel.app/",
  },
  {
    id: 2,
    title: "KitmaiOx",
    img: [
      "/pic/kit1.png",
      "/pic/kit2.png",
      "/pic/kit3.png",
    ],
    category: "AI Recipe Web App",
    year: "2026",
    description: `An AI-powered recipe assistant that helps users decide what to cook from ingredients they already have. The React.js frontend includes ingredient picking, flavor-pair recommendations, recipe cards, favorites, search history, and a stats dashboard. The ASP.NET Core backend provides JWT authentication, PostgreSQL persistence through Entity Framework Core, AI-powered recipe generation, and deployment-ready configuration for Render and Vercel.`,
    tech: ["React", ".NET", "PostgreSQL", "Typescript", "TailwindCSS"],
    github: "https://github.com/NmpsZ/KitMaiOx",
    link: "https://kitmaiox-web.onrender.com/",
  },
  {
    id: 3,
    title: "Senior Project Medical Equipment LineChatBot & Admin Web",
    img: [
      "/pic/line_chat_1.png",
      "/pic/line_chat_2.png",
      "/pic/line_chat_3.png",
      "/pic/line_chat_4.png",
      "/pic/line_chat_5.png",
      "/pic/line_chat_6.png",
      "/pic/line_chat_7.png",
      "/pic/line2.png",
      "/pic/line3.png",
    ],
    category: "Line-Chatbot & Admin-Dashboard",
    year: ["2025", "2026"],
    description: `Developed a LINE Chatbot integrated with an Admin Dashboard for managing medical equipment. The chatbot allows users to report repairs, check equipment status, and search for devices. Python-based OCR is used to scan serial numbers and equipment labels for quick identification. The Admin Dashboard provides tools for managing equipment records, viewing support tickets, and monitoring statistics.`,
    tech: ["React", "Golang", "Fiber", "Python", "Typescript", "TailwindCSS", "PostgreSQL"],
    github: [
      { label: "Frontend", url: "https://github.com/NmpsZ/Medical-Equipment-Web" },
      { label: "Backend", url: "https://github.com/NmpsZ/Medical-Equipment-LineChatBot" },
    ],
  },
  {
    id: 4,
    title: "Web Game Shop 2048",
    img: [
      "/pic/game1.png",
      "/pic/game2.png",
      "/pic/game3.png",
      "/pic/game4.png"
    ],
    category: "Web-Game",
    year: "2025",
    description: `A full-stack web-based 2048 game with a built-in item shop. Players can enjoy the classic 2048 puzzle directly in the browser and purchase power-up items to assist gameplay. Includes user authentication with registration and login. A back-office admin panel allows administrators to manage and add shop items and inventory.`,
    tech: ["Vue.js", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/NmpsZ/Web-Game-Shop-2048"
  },
  {
    id: 5,
    title: "Mobile Shop Shoes",
    img: [
      "/pic/shoes1.png",
      "/pic/shoes2.png",
      "/pic/shoes3.png",
    ],
    category: "Mobile App",
    year: "2025",
    description: `A cross-platform mobile shopping app for footwear built with Flutter and Firebase. Features include user authentication, product browsing, shopping cart, order placement, payment processing, and product search. Firebase is used for Auth, Firestore database, Cloud Storage for product images, and Cloud Functions for backend logic.`,
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/NmpsZ/Shoes-app"
  },
  {
    id: 6,
    title: "Blog Post",
    img: [
      "/pic/blog.png",
      "/pic/blog2.png",
      "/pic/blog3.png"
    ],
    category: "Blog",
    year: "2025",
    description: `A full-stack blog application developed with both frontend and backend. The frontend features a clean, responsive UI for creating, reading, updating, and deleting blog posts, along with a dedicated post detail page and user profile section. The backend provides secure CRUD APIs, user authentication with login/logout functionality, and role-based access control to manage permissions. Additional features include search and filtering, image upload for posts, and optimized performance for smooth user experience.`,
    tech: ["Vue.js", "Golang", "Fiber", "TailwindCSS", "PostgreSQL"],
    github: "https://github.com/NmpsZ/Blog-go"
  },
  {
    id: 7,
    title: "MegaMart",
    img: [
      "/pic/shop.png",
    ],
    category: "Landing-page",
    year: "2025",
    description: `A responsive mock UI landing page for an e-commerce platform, built as a frontend-only project. Features a clean, modern design with fully responsive layouts optimized for mobile, tablet, and desktop screens.`,
    tech: ["React", "TailwindCSS"],
    github: "https://github.com/NmpsZ/Landing-page-Shop"

  },
]


function Home() {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#eee";
      document.body.style.transition = "all 0.5s ease";
    } else {
      document.documentElement.classList.remove("dark");
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
      <Education darkMode={darkMode} />
      <Internship darkMode={darkMode} />
      <ProfileSummary darkMode={darkMode} />
      <Works works={workItem} darkMode={darkMode} />
      <Contact />
    </>

  )

}



export default Home
