import { useState } from "react";

function AboutMe() {
    
    const [about, setAbout] = useState(false);

    return (
        <div style={{ padding: "40px" }}>
            <h2>About Me</h2>
            <p>I am a React developer.</p>

            {more && <p>I build modern web apps using hooks.</p>}

            <button onClick={() => setMore(!more)}>
                {more ? "Show Less" : "Read More"}
            </button>
        </div>
    );

}