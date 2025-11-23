import { Download } from "lucide-react";

function ResumeDownload() {
    return (
        <a
            href="/resume.pdf"
            download
            className="justify-center text-lg font-bold inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
        >
            <Download size={24} />
            Download my resume
        </a>
    );
}

export default ResumeDownload;