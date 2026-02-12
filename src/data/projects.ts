export interface Project {
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    demoLink?: string;
    repoLink?: string;
    isFeatured?: boolean;
}

export const projects: Project[] = [
    {
        title: "BiCO - A freelancer manager",
        description: "Developed to help freelancers manage their clients, services, and contracts efficiently. It offers features such as demo accounts, JWT authentication and analytics.",
        image: "/images/bico_preview.png",
        technologies: ["Python", "FastAPI", "Postgres", "React", "TypeScript", "AWS", "Docker"],
        demoLink: "https://bicoapp.me",
        repoLink: "https://github.com/dionae1/bico",
        isFeatured: true
    },
    {
        title: "Local RAG System",
        description: "A Retrieval-Augmented Generation (RAG) system that allows users to upload documents and query them using natural language processing techniques.",
        // image: "/images/rag_preview.png",
        technologies: ["Python", "LangChain", "GenAI", "Ollama", "HuggingFace", "FastAPI", "Vector DBs"],
        repoLink: "https://github.com/dionae1/local-rag"
    },
    {
        title: "Portfolio Platform",
        description: "The personal blog you are in right now, a platform built with React and Tailwind CSS.",
        // image: "/images/blog_preview.png",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "AWS"],
        repoLink: "https://github.com/dionae1/blog"
    },
];
