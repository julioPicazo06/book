import { logger } from './logger';

export const isVisibleLanguage = (whereIAm: string) : void => {
    const objWehereIAM = {
        "menu": {
            name : "menu",
            isVisible : true
        },
        "about": {
            name : "about",
            isVisible : false
        },
        "skills": {
            name : "skills",
            isVisible : false
        },
        "projects": {
            name : "projects",
            isVisible : false
        },
        "contact": {
            name : "contact",
            isVisible : false
        }
    }
    
    // Verificar si whereIAm existe en el objeto
    const section = objWehereIAM[whereIAm as keyof typeof objWehereIAM];
    const isVisible = section ? section.isVisible : false;
    
    localStorage.setItem('WhereIAm', isVisible.toString());
    logger.log(localStorage.getItem('WhereIAm'));
}

export const getWhereIAm = () : boolean => {
    return localStorage.getItem('WhereIAm') as unknown as boolean || true;
}