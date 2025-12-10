import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/LyonPalme.png';
import img3 from '../assets/projects/gestionmat.png';
import img4 from '../assets/projects/portfoliovuejs.png';

const projects = [
    {
        id: 1,
        title: 'Projet cinema',
        description: 'pour ce projet le but etant de prendre en mains power bi et de realiser des dashboards interactifs',
        technologies: ['Power BI'],
        repoLink: 'https://docs.google.com/presentation/d/1tM6ARNtxZ9UAuJp5orGZYWTMuNXHe5TYFl0aebenlM8/edit?usp=sharing',
        image: img1,
    },
    {
        id: 2,
        title: 'Blog',
        description: 'Une application gérant les inscriptions des adhérents au club doit être développée. Elle est utilisée par le(s) secrétaire(s) du club. Cette application permet au adhérent de ce connecter de pouvoir visualiser le trombinoscope, elle permet également la modification de données personnelles, de pouvoir changer son mot de passe, de cree des adhérents grace a des comptes de secretaires, darchiver également des adhérents.',
        technologies: ['Django', 'Python', 'SQLite', 'Bootstrap'],
        repoLink: 'https://github.com/TOOKKII/Lyonpalme',
        image: img2,
    },
    {
        id: 3,
        title: 'Gestion de matériel',
        description: 'Une application permettant de gérer le matériel du club doit être développée par les personnes du backoffice. Elle est utilisée par le(s) responsable(s) matériel. Cette application permet d’entrer du matériel en stock, de faire sortir du matériel du stock, de prêter du matériel à des adhérents. Elle permet également de « tracer » le matériel c’est-à-dire pour un matériel, connaitre toutes les personnes à qui il a été prêté. Ceci permet de retrouver la personne responsable en cas de détérioration du matériel.',
        technologies: ['C#', 'WINDOWS FORMS', 'SSIS'],
        repoLink: 'https://github.com/TOOKKII/GestionMat',
        image: img3,
    },
    {
        id: 4,
        title: 'Portfolio personnel',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae magni deserunt debitis recusandae ab harum totam, eum facilis et ratione officia ut inventore aspernatur',
        technologies: ['Vue.js','tailwind css'],
        repoLink: 'https://github.com/TOOKKII/my-project-vue3',
        image: img4,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-accent badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                           

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink} target="_blank" rel="noopener noreferrer"> Voir davantage</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
