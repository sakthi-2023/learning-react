import { useState } from "react";
import { Link } from "react-router-dom";

function HomeIntro() {

    const [open, setOpen] = useState(false);

    return (
        <nav>
            <h1>My Portfolio</h1>

            <button onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>

            {open && (
                <div>
                    <Link to="/">HomeIntro</Link>
                    <Link to="/about">AboutMe</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            )}
        </nav>

    );
};
export default HomeIntro;