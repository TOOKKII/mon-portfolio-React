import Title from "./Title"

import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgLARA from "../assets/techno/Laravel.png";
import imgVuejs from "../assets/techno/Vuejs.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgSQL from "../assets/techno/SQL.png";
import imgCSHARP from "../assets/techno/Csharp.png";
import imgJAVA from "../assets/techno/java.png";


import ferdiplast from "../assets/companies/ferdiplast.png";
import micropole from "../assets/companies/micropole.png";



const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgREACT },
    { id: 5, name: "Vuejs", image: imgVuejs },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "TypeScript", image: imgTYPE },
    { id: 8, name: "Laravel", image: imgLARA },
    { id: 9, name: "SQL", image: imgSQL },
    { id: 10, name: "C#", image: imgCSHARP },
    { id: 11, name: "Java", image: imgJAVA },
    
];


const experiences = [
    {
        id: 1,
        role: "développeur CMS",
        company: "Ferdiplast",
        period: "Mai 2024 - Août 2025",
        description: [
            "Installation et configuration de CMS WordPress.",
            "Personnalisation de thèmes parfois avec du PHP.",
            
        ],
        image: ferdiplast,
    },
    {
        id: 2,
        role: "Developpeur Backend",
        company: "Micropole",
        period: "Jan 2021 - Août 2022",
        description: [
            "réation d'un blog simple avec Django.",
            "Utilisation de figma pour créer des maquettes.",
            "Intégration de tests unitaires.",
        ],
        image: micropole,
    },
    {
        id: 3,
        role: "Data Analyst",
        company: "Micropole",
        period: "Mai 2019 - Déc 2020",
        description: [
            "Utilisation d'outils ETL : azure synpase, IBM DataStage.",
            "Utilisation de SSIS.",
            "Création de rapports avec Power BI.",
        ],
        image: micropole,
    },
];



const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences" />
            <div className="flex  flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4  justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {skills.map((skill) => (
                        <div key={skill.id} className=" flex justify-center items-center flex-col">
                            <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                <img src={skill.image} alt={skill.name}
                                    className="object-cover rounded-full h-full w-full"
                                />
                            </div>
                            <span className="mt-2 text-sm">{skill.name}</span>
                        </div>
                    ))}
                </div>

                <div className="md:ml-4 flex flex-col space-y-4">
                    {experiences.map((expericence) => (
                        <div
                            key={expericence.id}
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                        >
                            <div className="flex items-center">
                                <img
                                    src={expericence.image}
                                    alt={expericence.company}
                                    className="object-cover h-10 w-10"
                                />
                                <div className="ml-4">
                                    <h1 className="text-xl text-accent font-bold">
                                        {expericence.role} , {expericence.company}
                                    </h1>
                                    <span className="text-sm">{expericence.period}</span>
                                </div>
                            </div>
                            <ul className="list-disc ml-16 mt-2">
                                {expericence.description.map((desc, index) => (
                                    <li key={index}>
                                        {desc}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experiences
