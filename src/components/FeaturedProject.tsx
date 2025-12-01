import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

function FeaturedProject() {
    const featured = projects.find(p => p.isFeatured);

    if (!featured) return null;

    return (
        <section className="mt-8">
            <h2 className="text-lg font-bold mb-4 border-b border-zinc-700 pb-2">Featured Project</h2>
            <ProjectCard {...featured} />
        </section>
    );
}

export default FeaturedProject;
