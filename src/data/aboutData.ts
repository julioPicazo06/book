import gato from 'img/skills/gato.png';
import pdfCV from 'pdf/cvJulioPicazo.pdf';
import pdfResume from 'pdf/resume_JulioPicazo.pdf';

export interface AboutData {
    title: string;
    img: any;
    text: string;
    links: {
        title: string;
        url: string;
        icon: string;
    }[];
}

 export const aboutDataMultilenguage: Record<string, AboutData> = {
    es : {
        title : "Acerca de mi",
        img : gato,
        text: "Mi Gusto por las artes visuales me llevó al Diseño y mi curiosidad por cómo funcionan las cosas: a la programación, Desde entonces el Front-end se ha convertido en la piedra angular de mi carrera profesional en la cual he participado tanto en proyectos con normas rigurosas en cuanto al flujo de la información como en desarrollos totalmente libres, así que integro lo mejor de dos mundos que convergen en el front-end.",
        links: [
            {
                title: "CV",
                url: pdfCV,
                icon: 'CV'
            },
            {
                title: 'GitHub',
                url: "https://github.com/julioPicazo06",
                icon: 'GitHub'
            }
        ]
    },
    en : {
        title : "About me",
        img : gato,
        text: "My taste for visual arts led me to design and my curiosity about how things work: to programming. Since then, the Front-end has become the cornerstone of my professional career in which I have participated in projects with rigorous standards regarding the flow of information as well as in totally free developments, so I integrate the best of two worlds that converge in the front-end.",
        links: [
            {
                title: "CV",
                url: pdfResume,
                icon: 'CV'
            },
            {
                title: 'GitHub',
                url: "https://github.com/julioPicazo06",
                icon: 'GitHub'
            }
        ]  
    }
 };

    export const getAboutData = (lang: string = ""): AboutData => {
        return aboutDataMultilenguage[lang] || aboutDataMultilenguage['es']; // Default to 'es' if the language is not found    
    }
