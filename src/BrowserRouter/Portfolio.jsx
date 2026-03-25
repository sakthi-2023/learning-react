import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeIntro from "./HomeIntro";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Projects from "./Projects";

function Portfolio() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeIntro />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )

}
export default Portfolio;