import gato from 'img/skills/gato.png';

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

export const aboutData: AboutData = {
    title : "Acerca de mi",
    img : gato,
    text: "Mi Gusto por las artes visuales me llevó al Diseño y mi curiosidad por cómo funcionan las cosas: a la programación, Desde entonces el Front-end se ha convertido en la piedra angular de mi carrera profesional en la cual he participado tanto en proyectos con normas rigurosas en cuanto al flujo de la información como en desarrollos totalmente libres, así que integro lo mejor de dos mundos que convergen en el front-end.",
    links: [
        {
            title: "CV",
            url: 'https://drive.google.com/file/d/1a71244TpvgFHgub9G5_ot4hh_Evt6e-q/view?usp=sharing',
            icon: 'CV'
        },
        {
            title: 'GitHub',
            url: "https://github.com/julioPicazo06",
            icon: 'GitHub'
        }
    ]
};