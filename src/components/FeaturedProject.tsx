import ProjectCard from "./ProjectCard";

function FeaturedProject() {
    return (
        <section className="mt-8">
            <h2 className="text-lg font-bold mb-4 border-b border-zinc-700 pb-2">Featured Project</h2>
            <ProjectCard
                title="BiCO - A freelancer manager"
                description="Developed to help freelancers manage their clients, services, and contracts efficiently. It offers features such as demo accounts, JWT authentication and analytics."
                image="/images/bico_preview.png"
                technologies={["Python", "FastAPI", "Postgres", "React", "TypeScript", "AWS"]}
            />
        </section>
    );
}

export default FeaturedProject;
