import FeaturedProject from "../components/FeaturedProject"
import Socials from "../components/Socials"
import ResumeDownload from "../components/ResumeDownload";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        document.title = "Guilherme Medeiros | Software Developer";
    }, []);

    return (
        <div className="bg-zinc-900 min-h-screen text-zinc-200 p-4">
            <div className="max-w-2xl mx-auto">
                <div className="p-4 m-auto">
                    <p className="m-auto">
                        Software developer, Information Systems student, and passionate about Python and AI. Focused on creating optimal solutions through logical creativity.
                    </p>
                    <div className="mt-4">
                        <Socials />
                    </div>
                    <FeaturedProject />
                    <div className="mt-8 flex items-center justify-center">
                        <ResumeDownload />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home