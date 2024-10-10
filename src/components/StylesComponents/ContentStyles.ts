import styled from 'styled-components';


export interface ContentStyle {
    color:string
}

export interface MenuElementStyle {
    divWidth:string ;
    divHeigth:string;
    color:string
}

export interface ModuloType {
    width? : number ;
    height? : number;
    background: string;
    display?: boolean;
}

export interface MenuGType {
    display? : string;
    column? : boolean;
    row?:boolean;
    wrap?:boolean;
    color?:string;

}

export interface ArrowButtonModel {
    botom? : string
}


export const Content = styled.div<ContentStyle>`
    width: 100%;
    height: 100vh;

    ${props => props.color &&`
        background-color:${props.color};
    `}
    overflow: auto;
    overflow-x: hidden;


    
`;

export const MenuElementsDiv = styled.div<MenuElementStyle>`
            background-color: ${props => `${props.color}`};
            width: ${props => `${props.divWidth}`};
            height: ${props => `${props.divHeigth}`};
            transition: 'all 1s';


`


export const MenuSection = styled.div`
            display: flex!important;
            width: 100%;
            flex-direction: column!important;
            align-items: center!important;
            justify-content: center!important;
            color: white;
            font-family: 'Oswald', sans-serif;
            font-size: 1.5em;
                .item-hover{
                    display: flex;
                    flex-direction: column;
                    justify-items: center;
                    align-items: center;
                    &:hover{
                        padding-top: 20px;
                        transition: 'all 1s';
                    }
                }
`

// este es el menu completo
export const MenuG = styled.div<MenuGType>`
    width: 100%;
    height:100vh;
    display : ${props => `${props.display}`}; 
    ${props => props.column && `flex-direction:column;`}  ;
    ${props => props.row && `flex-direction:row;`}  ;         
    ${props => props.wrap &&`flex-wrap:wrap`};
    ${props => props.color && `background-color:${props.color}`}
    
`

// esta es una seccion
export const Modulo = styled.div<ModuloType>`
    background-color : ${props=> `${props.background}`};
    width : ${props => `${props.width}%`}; 
    height : ${props => `${props.width}vh`};
    display: ${props=> !props.display ? `none` : `block`} ;
    transition-property : width , display ;
    transition-duration:  .3s , .3s;
    transition-timing-function: ease-out;
    overflow: auto;

 `

export const ArrowButton = styled.div<ArrowButtonModel>`
    z-index: 0;
    position: absolute;
    display: flex;
    align-items: center;
    width:58px;
    justify-content: center;
    border-radius: 100px;
    background-color:rgba(40, 44, 52, 0.863);
    color:white;
    cursor:pointer;
    padding:15px;
    right:10px; 
    ${props => `bottom: ${props.botom};`}
`






