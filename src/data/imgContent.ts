import angular from 'img/skills/angular.png';
import reactImg from 'img/skills/react.png';
import jquery from 'img/skills/jquery.jpg';
import javaScriptImg from 'img/skills/javaScript.png';
import nodejs from 'img/skills/nodejs.png'


export interface ImgSkills {
    src : any ,
    alt : string,
    width : number
}

export interface ContentSkills {
    title : string,
    width:number,
    description : string,
    imgSkills : ImgSkills[]
}

export const contentSkills :ContentSkills = {
    
    title: 'Skills',
    width: 30,
    description: '',
    imgSkills : [
        {
            src: angular,
            alt: 'angular',
            width: 30
        },
        {
            src: reactImg,
            alt: 'reactImg',
            width: 30,
        },
        {
            src: jquery,
            alt: 'jquery',
            width: 30,
        },
        {
            src: javaScriptImg,
            alt: 'javaScriptImg',
            width: 30,
        },
        {
            src: nodejs,
            alt: 'nodejs',
            width: 30,
        },
    ]
}

export interface SkillData {
    contentSkills: ContentSkills;
    imgSkills: ImgSkills[];
}


