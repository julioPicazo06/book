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
        text: "Mi gusto por las artes visuales me guió al diseño, pero mi curiosidad por comprender la lógica detrás de cada elemento me sumergió en el mundo de la programación. Comencé explorando el front-end, donde pude fusionar mi creatividad con mi conocimiento técnico. Sin embargo, mi interés por la programación trascendió esta área, y ahora me considero un desarrollador full-stack con una sólida base en JavaScript , Java , Python y Dart. Esta versatilidad me permite abordar proyectos desde una perspectiva integral, optimizando tanto la interfaz de usuario como la lógica del servidor.",
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
        text: "My passion for visual arts led me to design, but my curiosity about understanding the logic behind every element immersed me in the world of programming. I started by exploring the front-end, where I could merge my creativity with my technical knowledge. However, my interest in programming transcended this area, and now I consider myself a full-stack developer with a solid foundation in JavaScript, Java, Python, and Dart. This versatility allows me to approach projects from a comprehensive perspective, optimizing both the user interface and server-side logic.",
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
