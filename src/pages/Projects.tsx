import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
    useEffect(() => {
        document.title = "Projects | Guilherme Medeiros";
    }, []);

    return (
        <div className="p-4 m-auto">
            <h2 className="text-center mt-8 text-2xl font-bold mb-6 pb-2">Projects</h2>
            <div className="flex flex-col gap-6">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
