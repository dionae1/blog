import Footer from "../components/Footer";
import Header from "../components/Header";


function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-zinc-900 min-h-screen text-zinc-200 p-4">
            <div className="max-w-2xl mx-auto">
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default MainLayout;