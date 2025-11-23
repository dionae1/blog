import ProjectCard from "../components/ProjectCard";

function Projects() {
    const projects = [
        {
            title: "BiCO - A freelancer manager",
            description: "Developed to help freelancers manage their clients, services, and contracts efficiently. It offers features such as demo accounts, JWT authentication and analytics.",
            image: "/images/bico_preview.png",
            technologies: ["Python", "FastAPI", "Postgres", "React", "TypeScript", "AWS", "Docker"],
            demoLink: "https://bicoapp.me",
            repoLink: "https://github.com/dionae1/bico"
        },
        {
            title: "Portfolio Platform",
            description: "The personal blog you are in right now, a platform built with React and Tailwind CSS.",
            image: "/images/blog_preview.png",
            technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "AWS"],
            repoLink: "https://github.com/dionae1/blog"
        },
    ];

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
