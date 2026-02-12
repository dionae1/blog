import { Download } from "lucide-react";

function BaixarCurriculo() {
    return (
        <a
            href="/Guilherme_Gomes_CV_BR.pdf"
            download
            className="justify-center text-xl font-bold inline-flex items-center gap-4 p-4 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors"
        >
            <Download size={24} />
            Veja meu currículo
        </a>
    );
}

export default BaixarCurriculo;