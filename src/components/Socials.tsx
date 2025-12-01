import { Mail } from "lucide-react";
import SocialLink from "./SocialLink";
import {
    SiGithub,
    SiLinkedin,
} from "react-icons/si";

function Socials() {
    return (
        <div className="flex flex-col gap-2">
            <SocialLink link="https://github.com/dionae1" icon={<SiGithub className="inline-block ml-2 mr-4 mb-1" size={20} />} label="GitHub" />
            <SocialLink link="https://linkedin.com/in/guilhermegomespy" icon={<SiLinkedin className="inline-block ml-2 mr-4 mb-1" size={20} />} label="LinkedIn" />
            <SocialLink link="mailto:p.guilhermemedeiros@gmail.com" icon={<Mail className="inline-block ml-2 mr-4 mb-1" size={20} />} label="Email" text="p.guilhermemedeiros@gmail.com" />
        </div>
    );
}

export default Socials;