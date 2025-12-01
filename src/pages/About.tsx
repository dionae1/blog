import Socials from "../components/Socials";
import { useEffect } from "react";
import { SiPython, SiFastapi, SiDjango, SiReact, SiTypescript, SiJavascript, SiTailwindcss, SiPostgresql, SiAmazonwebservices, SiDocker, SiGit, SiLinux, SiNodedotjs } from "react-icons/si";

function About() {
    useEffect(() => {
        document.title = "About | Guilherme Medeiros";
    }, []);

    return (
        <div className="p-4 m-auto">
            <h2 className="mt-8 text-2xl font-bold mb-6 pb-">About Me</h2>

            <div className="flex flex-col gap-6 text-zinc-300 leading-relaxed">
                <p>
                    Guilherme Medeiros Gomes, a passionate Software Developer and Information Systems student.
                    I have a strong background in Python and web development, always striving to create not obvious solutions, I believe that logical creativity is the key for progress.
                </p>

                <p>
                    My journey in technology began with curiosity, which quickly turned into a professional path.
                    I enjoy solving complex problems and learning new technologies. Currently, I am focused on backend development,
                    exploring web ecosystems and also doing a lot of research on artificial intelligence at university.
                </p>

                <p>
                    When I'm not coding, you can find me exploring new tech trends or contributing to open-source projects, I have several pilot repositories, feel free to check them out.
                </p>

                <div className="mt-8">
                    <h3 className="text-xl font-bold text-zinc-100 mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-4 text-zinc-400">
                        <SiPython size={32} title="Python" className="hover:text-yellow-400 transition-colors" />
                        <SiFastapi size={32} title="FastAPI" className="hover:text-teal-400 transition-colors" />
                        <SiDjango size={32} title="Django" className="hover:text-green-700 transition-colors" />
                        <SiReact size={32} title="React" className="hover:text-blue-400 transition-colors" />
                        <SiTypescript size={32} title="TypeScript" className="hover:text-blue-600 transition-colors" />
                        <SiJavascript size={32} title="JavaScript" className="hover:text-yellow-300 transition-colors" />
                        <SiNodedotjs size={32} title="Node.js" className="hover:text-green-500 transition-colors" />
                        <SiTailwindcss size={32} title="Tailwind CSS" className="hover:text-cyan-400 transition-colors" />
                        <SiPostgresql size={32} title="PostgreSQL" className="hover:text-blue-300 transition-colors" />
                        <SiAmazonwebservices size={32} title="AWS" className="hover:text-orange-400 transition-colors" />
                        <SiDocker size={32} title="Docker" className="hover:text-blue-500 transition-colors" />
                        <SiGit size={32} title="Git" className="hover:text-red-500 transition-colors" />
                        <SiLinux size={32} title="Linux" className="hover:text-yellow-100 transition-colors" />
                    </div>
                </div>

                <div className="mt-4">
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Connect with me</h3>
                    <Socials />
                </div>
            </div>
        </div>
    );
}

export default About;
