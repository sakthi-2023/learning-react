import { useState } from "react";

const Projects = () => {
    const [projects] = useState([
        { id: 1, name: "Portfolio", tech: "React" },
        { id: 2, name: "Todo App", tech: "Hooks" },
    ]);

    return (
        <div style={{ padding: "40px" }}>
            <h2>Projects</h2>
            {projects.map((p) => (
                <div key={p.id}>
                    <h3>{p.name}</h3>
                    <p>{p.tech}</p>
                </div>
            ))}
        </div>
    );
};

export default Projects;