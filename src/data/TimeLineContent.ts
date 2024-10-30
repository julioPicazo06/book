
export interface TimeLineContentModel {
    name : string;
    date : string;
    position : string;
}

export interface MultiLangTimeLineContent {
    [key: string]: {
        title?: string;
        content: TimeLineContentModel[];
    }
}






export const JobsTimeLineContents: MultiLangTimeLineContent = {
    es : {
        title : "Experiencia Laboral",
        content : [
            {
                name:'Scottian Bank / Front-end SR   ',
                date : '2021',
                position :'Programación con reactjs , consumo de API´s , Pruebas Unitarias '
            },
            {
                name:'CONAGUA / Front-end SR   ',
                date : '2017 | 2021',
                position :'Programación con reactjs , aplicaciones  de georeferencia , consumo de API´s , Backend con php '
            },
            {
                name : 'Punto Pen / Front end Developer  ',
                date :'2016 | 2017',
                position : 'Programación front-end para paginas gubernamentales y para la secretaria de salud, Diseño UX/UI'
        
            }, 
            {
                name : 'Starker / Web Master ',
                date :'2014 | 2015',
                position : 'Web Master, Seo, Campañas de mailing, campañas de redes sociales, trato directo con el cliente, depuración de errores, creación de material didáctico para nuevos prospectos.'
        
            },
            {
                name : 'Ecocare / Web Master  ',
                date :'2013 | 2014',
                position : 'Desarrollo de intranet para el aprenizaje de remanufactura de tóner, mantenimiento de foros, gestión de usuarios, métodos de cobro desde paypal, desarrollo de paginas web'
        
            },
            {
                name : 'Fizharts / Diseño & Desarrollo Web',
                date :'2012 | 2013',
                position : 'Desarrollo de personajes, páginas web, desarrollo web, diseño de logotipos, trato directo con cientes. detectar errores dentro del codigo, optimización para dispositivos móviles.'
        
            },
            {
                name : 'G soft Microsoft partner / Diseñador Web  ',
                date :'2010 | 2012',
                position : 'Desarrollo de ilustración interna, diseño y desarrollo Web. Aprendí a desarrollar una página web desde 0, además de inciarme en el desasrrollo web y de interfaces para software a la medida.'
        
            }
        ] 
    },
    en : {
        title : "Work Experience",
        content : [
            {
                name:'Scottian Bank / Front-end SR   ',
                date : '2021',
                position :'Programming with reactjs, API consumption, Unit Testing'
            },
            {
                name:'CONAGUA / Front-end SR   ',
                date : '2017 | 2021',
                position :'Programming with reactjs, georeference applications, API consumption, Backend with php'
            },
            {
                name : 'Punto Pen / Front end Developer  ',
                date :'2016 | 2017',
                position : 'Front-end programming for government websites and for the health secretariat, UX/UI Design'
        
            }, 
            {
                name : 'Starker / Web Master ',
                date :'2014 | 2015',
                position : 'Web Master, Seo, Mailing campaigns, social media campaigns, direct customer contact, error debugging, creation of educational material for new prospects.'
        
            },
            {
                name : 'Ecocare / Web Master  ',
                date :'2013 | 2014',
                position : 'Development of intranet for learning about toner remanufacturing, forum maintenance, user management, payment methods from paypal, web development'
        
            },
            {
                name : 'Fizharts / Web Design & Development',
                date :'2012 | 2013',
                position : 'Development of characters, web pages, web development, logo design, direct customer contact. detect errors within the code, optimization for mobile devices.'
        
            },
            {
                name : 'G soft Microsoft partner / Web Designer  ',
                date :'2010 | 2012',
                position : 'Development of internal illustration, Web design and development. I learned to develop a web page from 0, in addition to starting in web development and interfaces for custom software.'
        
            }
        ] 
    }
}

export const getJobsTimeLineContent = (lang: string = ""): MultiLangTimeLineContent | { title?: string; content: TimeLineContentModel[] } => {
    return JobsTimeLineContents[lang] || JobsTimeLineContents['es']; // Default to 'es' if the language is not found
}









export const timeLineContents: MultiLangTimeLineContent = {
   es : {
    title : "Educación",
    content :
    [

        {
            name : 'Especialidad en diseño multimedia',
            date :'2022',
            position : 'EDINBA (Escuela de diseño del instituto nacional de bellas artes)'
        },
        
        {
            name : 'Curso Desarrollo en Android',
            date :'2017',
            position : 'UAQ (Universidad Autonoma de Queretaro)'
    
        },
    
        {
            name : 'Diplomado Georeferencia',
            date :'2017',
            position : 'Instituto de Geografia UNAM'
    
        },
    
        {
            name : 'Curso PHP',
            date :'2016',
            position : 'Media Tech '
    
        },
    
        {
            name : 'Diplomado Animación 3D para cortometrajes',
            date :'2014 - 2015',
            position : 'ED (Escuela digital) '
    
        },
    
        {
            name : 'Diplomado en animación de personajes',
            date :'2014 | 2015',
            position : 'UAM'
    
        },
    
        
        {
            name : 'Diplomado de Diseño Web',
            date :'2012 - 2013',
            position : 'UCI'
    
        },
    
    
    
        {
            name : 'Licenciatura en Diseño Gráfico',
            date :'2007 - 2010',
            position : ''
    
        }, 
      
      
    ]
   },
en : {
    title : "Education",
    content :
    [
        {
            name : 'Specialty in multimedia design',
            date :'2022',
            position : 'EDINBA (School of design of the national institute of fine arts)'
        },
        
        {
            name : 'Android Development Course',
            date :'2017',
            position : 'UAQ (Autonomous University of Queretaro)'
    
        },
    
        {
            name : 'Georeference Diploma',
            date :'2017',
            position : 'UNAM Geography Institute'
    
        },
    
        {
            name : 'PHP Course',
            date :'2016',
            position : 'Media Tech '
    
        },
    
        {
            name : 'Diploma 3D animation for short films',
            date :'2014 - 2015',
            position : 'ED (Digital School) '
    
        },
    
        {
            name : 'Diploma in character animation',
            date :'2014 | 2015',
            position : 'UAM'
    
        },
    
        
        {
            name : 'Web Design Diploma',
            date :'2012 - 2013',
            position : 'UCI'
    
        },
        
            {
                name : 'Degree in Graphic Design',
                date :'2007 - 2010',
                position : ''
        
            }
        
    ]
}
};

export const getTimeLineContent = (lang: string = ""): MultiLangTimeLineContent | { title?: string; content: TimeLineContentModel[] } => {
    return timeLineContents[lang] || timeLineContents['es']; // Default to 'es' if the language is not found
}









