import { FC } from 'react'
import Sketch from 'react-p5';
import p5Types from 'p5'
import { ImagenModel } from '../Models/Imagen.model';



const Imagen: FC<ImagenModel> = ({ width, height }: ImagenModel) => {

    let img: p5Types.Image;

    const setup = (p5: p5Types, canvasParentRef: Element) => {
        p5.createCanvas(width, height).parent(canvasParentRef)

        img = p5.loadImage('img/cat.png')
        p5.background(img)
        p5.image(img , 0 , 0 , width , height)

        
    }

    const draw = (p5: p5Types) => {
        
    

    }

    const mouseClicked = (p5: p5Types)=> {

    }

    const mouseReleased = ( p5: p5Types ) => {
        p5.tint(p5.random(0,255), p5.random(0,255) , p5.random(0,255))
            p5.image(img , 0 , 0 , width , height)
    }

    return <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} mouseReleased={mouseReleased} />
}

export default Imagen
