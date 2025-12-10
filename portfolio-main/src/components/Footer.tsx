import { Container, Twitter, Github } from "lucide-react"

const Footer = () => {
    return (
        <footer className="footer footer-center p-10">
            <aside>
                <Container className="w-10 h-10" />
                <p className="font-bold">
                    YASS
                    <span className="text-accent">DEV</span>
                </p>
                <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    
                    {/* GitHub */}
                    <a href="https://github.com/TOOKKII" target="_blank" rel="noopener noreferrer">
                        <Github className="w-6 h-6 text-current hover:text-accent transition-colors" />
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-6 h-6 text-current hover:text-accent transition-colors" />
                    </a>

                </div>
            </nav>
        </footer>
    )
}

export default Footer