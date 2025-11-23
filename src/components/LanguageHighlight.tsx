function LanguageHighlight({ text }: { text: string }) {
    return (
        <span className="text-xs text-zinc-500 bg-zinc-900/50 px-2 py-1 rounded">{text}</span>
    );
}

export default LanguageHighlight;