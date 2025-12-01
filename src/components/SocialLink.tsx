import { Link } from "react-router-dom";

function SocialLink({ link, icon, label, text }: { link: string, icon: React.ReactNode, label: string, text?: string }) {
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-between text-lg hover:text-white transition-colors border border-zinc-700 p-4 rounded hover:border-zinc-500"
        >
            <div>
                {icon} {label}
            </div>
            {text && <span className=" text-zinc-400 mx-4 hidden sm:inline">{text}</span>}
        </Link>
    );
}

export default SocialLink;