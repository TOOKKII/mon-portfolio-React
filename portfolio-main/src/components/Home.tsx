import { Mail } from "lucide-react"
import img from '../assets/img.jpg'

const Home = () => {
    return (
        <div id="Home" className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10">

            <div className="flex flex-col ">
                <h1 className="text-5xl md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
                    Bonjour , <br /> je suis {" "}
                    <span className="text-accent">Yasser</span>
                </h1>

                <p className="my-4 text-md text-center md:text-left">
                    Déterminé, autonome et enthousiaste, avec un an d’expérience en tant que développeur, <br /> 
                    j’ai acquis des compétences en informatique et en expérience utilisateur. Persévérant et tenace, <br /> 
                    je recherche une entreprise avec laquelle je pourrais partager ma passion et m’engager pleinement<br /> 
                </p>
                <a href="mailto:yasserbouraghda1@gmail.com" className=" btn btn-accent md:w-fit">
                    <Mail className="w-5 h-5" />
                    Contactez-moi
                </a>

            </div>

            <div className="md:ml-60">
                <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl" 
                style={{
                    borderRadius : "30% 70% 70% 30% / 67% 62% 38% 33%"
                }}
                />
            </div>
        </div>
    )
}

export default Home
