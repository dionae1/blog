import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import LanguageHighlight from "./LanguageHighlight";

interface ProjectCardProps {
    title: string;
    description: string;
    image?: string;
    technologies: string[];
    demoLink?: string;
    repoLink?: string;
}

function ProjectCard({ title, description, image, technologies, demoLink, repoLink }: ProjectCardProps) {
    return (
        <div className="group border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-colors bg-zinc-900/30">
            {image && (
            <div className="w-full aspect-video bg-zinc-800 overflow-hidden relative border-b border-zinc-800/50">
                <img
                    src={image}
                    alt={`${title} Preview`}
                    className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
                />
            </div>
            )}
            <div className="p-5">
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white">{title}</h3>
                    <div className="flex gap-3 shrink-0">
                        {repoLink && (
                            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="View Code">
                                <SiGithub size={24} />
                            </a>
                        )}
                        {demoLink && (
                            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors" title="View Demo">
                                <ExternalLink size={24} />
                            </a>
                        )}
                    </div>
                </div>
                <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                    {description}
                </p>
                <div className="mt-4 flex gap-2 overflow-auto flex-wrap">
                    {technologies.map((tech) => (
                        <LanguageHighlight key={tech} text={tech} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
