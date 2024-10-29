import cat from 'img/cat.png'

export interface CoverData {
    title: string;
    statement: string;
    img: any;
}

export interface MultiLangCoverData {
    [key:string]:CoverData
}

export const coverData:CoverData = {
    title: 'Julio Eduardo Picazo Rodriguez',
    statement: " Transformo ideas en código funcional y eficiente... y también hago dibujitos.",
    img : cat
}


export const coverDataMultilenguage: MultiLangCoverData = {
    es: {
        title: 'Julio Eduardo Picazo Rodriguez',
        statement: "Transformo ideas en código funcional y eficiente... y también hago dibujitos.",
        img: cat
    },
    en: {
        title: 'Julio Eduardo Picazo Rodriguez',
        statement: "I transform ideas into functional and efficient code... and I also make drawings.",
        img: cat
    }
};

export const getCoverData = (lang: string = ""): CoverData => {
    return coverDataMultilenguage[lang] || coverDataMultilenguage['es']; // Default to 'es' if the language is not found
};
