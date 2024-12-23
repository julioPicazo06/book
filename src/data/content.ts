import murcielago from '@/img/fizhart/murci.png'
import pollo from '@/img/fizhart/pollo.png'
import OryMago from '@/img/fizhart/OryMago.png'
import ilustracion from '@/img/fizhart/illustracionF.png'
import trabajando from '@/img/fizhart/trabajando.png'

import { c1, c2, c3, fizh1, fizh2, fizh3  } from  '@/utils/img'
import cangrejo from '@/img/fizhart/krab.png';
import { illustrationContent } from '@/store/reducers/illustrationSlice'
import { ContentWeb } from '@/store/reducers/contentWebSlice'


export interface IllustrationContentMultilenguaje{
    [key:string]:illustrationContent
}

export const contentIllustration:IllustrationContentMultilenguaje = {
    es : {
        title :  "Proyectos Ilustración",
        description : 'Aquí está un poco de mi trabajo en diseño de personajes , algo que me ha gustado mucho a lo largo de los años, digitalizar bocetos y transformarlos en vectores.',
        img : [
        {
            id : 1 ,
            nombre : 'Personajes',
            cliente : 'Personajes propios',
            tecnica : 'Imágenes vectoriales',
            imgProyecto : {
              img : cangrejo
            },
            descripcion : 'Caricaturas para un proyecto propio en el que se tenía como límite 5 minutos para la creación del boceto',
            img : [
                {
                    src : cangrejo,
                    alt : 'cangrejo'
                },
                {
                    src : murcielago,
                    alt :  'murcielago'
                },
                {
                    src: pollo ,
                    alt : 'pollo'
                }
            ]
        },
        {
            id : 2 ,
            nombre : 'Diseño de personajes Ory el conejo',
            cliente : 'Personaje propio',
            tecnica : 'Imágenes vectoriales',
            descripcion : 'Ory el conejo es un personaje propio registrado ante indautor en el 2014 ',
            imgProyecto : {
              img : OryMago
            },
            img : [
                {
                    src : OryMago,
                    alt : 'OryMago'
                },
                {
                    src : ilustracion,
                    alt :  'ilustracion'
                },
                {
                    src: trabajando ,
                    alt : 'trabajando'
                }
            ]
        }
      ]
    },
    en : {
        title :  "Illustration Projects",
        description : 'Here is a little of my work in character design, something that I have liked a lot over the years, digitizing sketches and transforming them into vectors.',
        img : [
        {
            id : 1 ,
            nombre : 'Characters',
            cliente : 'Own characters',
            tecnica : 'Vector images',
            imgProyecto : {
              img : cangrejo
            },
            descripcion : 'Caricatures for a personal project in which there was a limit of 5 minutes for the creation of the sketch',
            img : [
                {
                    src : cangrejo,
                    alt : 'cangrejo'
                },
                {
                    src : murcielago,
                    alt :  'murcielago'
                },
                {
                    src: pollo ,
                    alt : 'pollo'
                }
            ]
        },
        {
            id : 2 ,
            nombre : 'Character design Ory the rabbit',
            cliente : 'Own character',
            tecnica : 'Vector images',
            descripcion : 'Ory the rabbit is a character of my own registered before indautor in 2014',
            imgProyecto : {
              img : OryMago
            },
            img : [
                {
                    src : OryMago,
                    alt : 'OryMago'
                },
                {
                    src : ilustracion,
                    alt :  'ilustracion'
                },
                {
                    src: trabajando ,
                    alt : 'trabajando'
                }
            ]
        }
      ]
    }
}

export const getJobsTimeLineContent = (lang:string = ''):illustrationContent => {
    return contentIllustration[lang] || contentIllustration['es']
}






export interface webContentMultilenguaje{
    [key:string]:ContentWeb
}




export const contentWebR: webContentMultilenguaje = {
    es : {
        title :  "Proyectos Front-End",
        description : "Un poco de código con React como Librería de desarrollo combinando con Sass para lograr un código cada vez más óptimo.",
        img : [
            {
                id : 1 ,
                nombre : 'página web para Fizharts',
                cliente : 'Fizharts',
                tecnica : 'html5 JavaScript , php , Css3',
                liga : 'http://fizharts.com/',
                imgProyecto : {
                  img : fizh1
                },
                descripcion : 'Se realizo la página web desde la toma de requerimientos hasta la maquetación y programación de la misma , la creación de imágenes vectoriales y retoque fotográfico.',
                img : [
                    {
                        src : fizh1,
                        alt : 'fizh1'
                    },
                    {
                        src : fizh2,
                        alt :  'fizh1'
                    },
                    {
                        src: fizh3 ,
                        alt : 'fizh1'
                    }
                ]
            },
            {
                id : 2 ,
                nombre : 'planetas covid',
                cliente : 'Planetas Covid',
                tecnica : 'html5 React , sass ',
                liga : 'https://juliopicazo06.github.io/multimedia/',
                descripcion : 'Proyecto escolar para la especialidad de Diseño multimedia , donde se consumió la Api de la ciudad de méxico de la ocupación hospitalaria en la capital de México y el área metropolitana. transformando datos en imágenes en objetos 3D',
                imgProyecto : {
                  img : c1
                },
                img : [
                    {
                        src : c1,
                        alt : 'c1'
                    },
                    {
                        src : c2,
                        alt :  'c2'
                    },
                    {
                        src: c3 ,
                        alt : 'c3'
                    }
                ]
            }
          ]
    } ,
    en : {
        title :  "Front-End Projects",
        description : "A bit of code with React as a development library combined with Sass to achieve increasingly optimal code.",
        img : [
            {
                id : 1 ,
                nombre : 'website for Fizharts',
                cliente : 'Fizharts',
                tecnica : 'html5 JavaScript , php , Css3',
                liga : 'http://fizharts.com/',
                imgProyecto : {
                  img : fizh1
                },
                descripcion : 'The website was made from the requirements gathering to the layout and programming of it, the creation of vector images and photo retouching.',
                img : [
                    {
                        src : fizh1,
                        alt : 'fizh1'
                    },
                    {
                        src : fizh2,
                        alt :  'fizh1'
                    },
                    {
                        src: fizh3 ,
                        alt : 'fizh1'
                    }
                ]
            },
            {
                id : 2 ,
                nombre : 'covid planets',
                cliente : 'Covid Planets',
                tecnica : 'html5 React , sass ',
                liga : 'https://juliopicazo06.github.io/multimedia/',
                descripcion : 'School project for the specialty of Multimedia Design, where the Mexico City API of hospital occupancy in the capital of Mexico and the metropolitan area was consumed. transforming data into images in 3D objects',
                imgProyecto : {
                  img : c1
                },
                img : [
                    {
                        src : c1,
                        alt : 'c1'
                    },
                    {
                        src : c2,
                        alt :  'c2'
                    },
                    {
                        src: c3 ,
                        alt : 'c3'
                    }
                ]
            }
          ]
    }
}

export const getWebContent = (lang:string = ''):ContentWeb => {
    return contentWebR[lang] || contentWebR['es']
}



  export const colors : {
    aboutColor: string,
    frontEndColor: string,
    illustracionColor: string,
    contactoColor: string
  } = {
        aboutColor: '#002D40',
        frontEndColor: '#FF414D',
        illustracionColor: '#329D9C',
        contactoColor: '#56C596'
  }

interface GalleryStaticText {
    title : string,
    Client : string,
    Tecnic : string,
    Description : string
}

export const galleryStaticText:GalleryStaticText = {
    title : "Ir al Proyecto",
    Client : "Cliente",
    Tecnic : "Técnica",
    Description : "Descripción"
}


  
  