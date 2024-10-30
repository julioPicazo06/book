import yoImg from 'img/yo.png';
import frontEndImg from 'img/frontEnd.png';
import illustracionImg from 'img/illustracion.png';
import contactoImg from 'img/contacto.png';

export interface MenuItem {
    title: string;
    img: string;
    color: string;
}

export const menuData: Record<string, MenuItem> = {
    me: {
        title: 'Yo',
        img: yoImg,
        color: '#002D40'
    },
    frontend: {
        title: 'FrontEnd',
        img: frontEndImg,
        color: '#FF414D'
    },
    ilustration: {
        title: 'Ilustración',
        img: illustracionImg,
        color: '#329D9C'
    },
    contact: {
        title: 'Contacto',
        img: contactoImg,
        color: '#56C596'
    }
};

export interface MenuDataMultilenuage {
    [key: string]: Record<string, MenuItem>
}

export const menuDataMultilenuage: MenuDataMultilenuage = {
    es: {
        me: {
            title: 'Yo',
            img: yoImg,
            color: '#002D40'
        },
        frontend: {
            title: 'FrontEnd',
            img: frontEndImg,
            color: '#FF414D'
        },
        ilustration: {
            title: 'Ilustración',
            img: illustracionImg,
            color: '#329D9C'
        },
        contact: {
            title: 'Contacto',
            img: contactoImg,
            color: '#56C596'
        }
    },
    en: {
        me: {
            title: 'Me',
            img: yoImg,
            color: '#002D40'
        },
        frontend: {
            title: 'FrontEnd',
            img: frontEndImg,
            color: '#FF414D'
        },
        ilustration: {
            title: 'Illustration',
            img: illustracionImg,
            color: '#329D9C'
        },
        contact: {
            title: 'Contact',
            img: contactoImg,
            color: '#56C596'
        }
    }
}

export const getMenuData = (lang: string = ""): Record<string, MenuItem> => {
    return menuDataMultilenuage[lang] || menuDataMultilenuage['es']; // Default to 'es' if the language is not found
}



