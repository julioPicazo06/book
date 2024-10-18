import angular from 'img/skills/angular.png';
import reactImg from 'img/skills/react.png';
import jquery from 'img/skills/jquery.jpg';
import javaScriptImg from 'img/skills/javaScript.png';
import nodejs from 'img/skills/nodejs.png'


export interface ImgSkills {
    src : any ,
    alt : string
}

export interface ContentSkills {
    title : string,
    description : string,
    imgSkills : ImgSkills[]
}

export const contentSkills :ContentSkills = {
    
    title: 'Skills',
    description: '',
    imgSkills : [
        {
            src: angular,
            alt: 'angular'
        },
        {
            src: reactImg,
            alt: 'reactImg'
        },
        {
            src: jquery,
            alt: 'jquery'
        },
        {
            src: javaScriptImg,
            alt: 'javaScriptImg'
        },
        {
            src: nodejs,
            alt: 'nodejs'
        },
    ]
}

export interface SkillData {
    contentSkills: ContentSkills;
    imgSkills: ImgSkills[];
}


