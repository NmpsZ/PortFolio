import About from "../components/about"
import Contact from "../components/contact"
import Navbar from "../components/navbar"
import Works from "../components/works"
import { useState , useEffect } from "react"


const workItem = [
    {
        id:1,
        title:"Blog Post",
        img:"/src/assets/pic/blog.png",
        category:"Blog",
        year:"2025",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti, vel maxime architecto repellendus deleniti accusantium.
          Atque molestias odio praesentium ipsam quae unde ullam! Voluptatum a eum inventore quibusdam earum!
        `
    },
    {
        id:2,
        title:"MegaMart",
        img:"/src/assets/pic/shop.png",
        category:"Landing page",
        year:"2025",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas corrupti, vel maxime architecto repellendus deleniti accusantium.
          Atque molestias odio praesentium ipsam quae unde ullam! Voluptatum a eum inventore quibusdam earum!
        `
    }
]    

    
function Home(){

    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#eee";
      document.body.style.transition = "all 0.5s ease";
      document.querySelectorAll("p").forEach((p) => {
        p.style.color = "#eee";
      });
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      document.body.style.transition = "all 0.5s ease";
      document.querySelectorAll("p").forEach((p) => {
        p.style.color = "#000";
      });
    }
  }, [darkMode]);


    return(
        <>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <About />
        <Works works = {workItem}  darkMode={darkMode} />
        <Contact />
        </>
        
    )
    
}



export default Home