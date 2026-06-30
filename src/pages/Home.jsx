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
    description: [
      "Overview: A self-service platform for hosting multiplayer game servers, allowing users to easily start and manage their own instances.",
      "Features: Built a Next.js dashboard to launch isolated Docker containers for each game server.",
      "Features: Integrated Playit.gg for public tunneling and Socket.io for real-time container log streaming.",
      "Challenges & Solutions: Optimized host resources by implementing background jobs (Redis/BullMQ) to automatically shut down idle servers."
    ],
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
    description: [
      "Overview: An AI-powered recipe assistant web application designed to help users figure out what to cook based on available ingredients.",
      "Features: Developed a React frontend with ingredient selection, flavor-pair recommendations, favoriting system, and search history.",
      "Features: Built a secure ASP.NET Core backend with JWT authentication and Entity Framework Core for PostgreSQL persistence.",
      "Features: Integrated AI for recipe generation and configured seamless deployment pipelines using Render and Vercel."
    ],
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
    description: [
      "Overview: A comprehensive LINE Chatbot and Admin Dashboard system for tracking and managing medical equipment in a hospital setting.",
      "Features: Developed a LINE Chatbot for users to quickly report repairs, check statuses, and search for specific devices.",
      "Features: Implemented Python-based OCR to scan serial numbers and equipment labels for fast and accurate identification.",
      "Features: Built an Admin Dashboard to manage equipment records, oversee support tickets, and analyze usage statistics."
    ],
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
    description: [
      "Overview: A full-stack web-based implementation of the classic 2048 game, featuring an integrated item shop for power-ups.",
      "Features: Created an interactive gameplay experience directly in the browser with secure user registration and login.",
      "Features: Developed an in-game economy where players can purchase power-up items to assist them during gameplay.",
      "Features: Built a back-office administration panel for managing shop items, user accounts, and overall inventory."
    ],
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
    description: [
      "Overview: A cross-platform mobile e-commerce application tailored for browsing and purchasing footwear.",
      "Features: Built with Flutter for a smooth cross-platform UI and Firebase for scalable backend services.",
      "Features: Implemented core shopping functionalities including product search, shopping cart, order placement, and payment processing.",
      "Features: Utilized Firebase Authentication, Firestore for database management, and Cloud Storage for handling product images."
    ],
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
    description: [
      "Overview: A fully functional full-stack blog application providing a platform for content creation and reading.",
      "Features: Developed a responsive Vue.js frontend with features for creating, reading, updating, and deleting posts, alongside user profiles.",
      "Features: Built a robust Golang (Fiber) backend offering secure CRUD REST APIs and JWT-based user authentication.",
      "Features: Implemented role-based access control, search/filtering capabilities, and image uploading functionality."
    ],
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
    description: [
      "Overview: A frontend-only responsive landing page project designed as a mock UI for an e-commerce platform.",
      "Features: Crafted a clean and modern user interface utilizing React and TailwindCSS.",
      "Features: Ensured fully responsive layouts that are optimized for seamless viewing across mobile, tablet, and desktop screens."
    ],
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
