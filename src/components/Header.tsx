import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="">
            <header className="pt-8 p-4 flex items-center flex-col justify-between sm:flex-row sm:gap-0 gap-4 border-b border-zinc-700">
                <Link to="/">
                    <div className="pt-2">
                        <h1 className="text-xl font-bold">Guilherme Medeiros Gomes</h1>
                        <p className="text-zinc-400 text-center sm:text-left">Software Developer</p>
                    </div>
                </Link>

                <ul className="flex space-x-8 sm:space-x-4 ">
                    <li>
                        <Link to="/projects" className="border border-transparent rounded py-1 px-2 font-bold hover:border-zinc-400">/ projects</Link>
                    </li>
                    <li>
                        <Link to="/about" className="border border-transparent rounded py-1 px-2 font-bold hover:border-zinc-400">/ about</Link>
                    </li>
                </ul>
            </header>
        </nav>
    );
}

export default Header;