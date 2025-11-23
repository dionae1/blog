import Socials from "../components/Socials";
import { Mail } from "lucide-react";

function About() {
    return (
        <div className="p-4 m-auto">
            <h2 className="mt-8 text-2xl text-center font-bold mb-6 pb-">About Me</h2>

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

                <div className="mt-4">
                    <h3 className="text-xl font-bold text-zinc-100 mb-2">Connect with me</h3>
                    <Socials />
                    <div className="mt-4">
                        <a href="mailto:p.guilhermemedeiros@gmail.com" className="font-bold text-lg">
                            <Mail size={20} className="inline-block mx-2" />
                            p.guilhermemedeiros@gmail.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
