import { Mail } from "lucide-react";

function EmailContact() {
    return (
        <a href="mailto:p.guilhermemedeiros@gmail.com" className="font-bold text-md sm:text-lg">
            <Mail size={20} className="inline-block mx-2 my-1" />
            p.guilhermemedeiros@gmail.com
        </a>
    );
}

export default EmailContact;