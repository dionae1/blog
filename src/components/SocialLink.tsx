import { Link } from "react-router-dom";

function SocialLink({ link, icon, label }: { link: string, icon: React.ReactNode, label: string }) {
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer"
            className="text-lg hover:text-white transition-colors border border-zinc-700 p-4 rounded hover:border-zinc-500"
        >
            {icon} {label}
        </Link>
    );
}

export default SocialLink;