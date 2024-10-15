import React, { useEffect, useState } from 'react'
import { Cover } from 'components/cover/Cover'
import { MenuGeneral } from 'components/GeneralMenu/GeneralMenu'
import {  coverColors, coverColorsGreens } from 'data/colorData';
import { isColorDark } from 'utils/isDarkColor';
import { coverData } from 'data/coverData';

export const App = () => {

    const [randomNumber, setRandomNumber] = useState<number>(0);

    useEffect(() => {
        const generateRandomNumber = () => Math.floor(Math.random() * coverColorsGreens.length ); // Genera un número entre 0 y 3
        setRandomNumber(generateRandomNumber());

        console.log(isColorDark(coverColors[randomNumber]));
    }, []);



    return (
        <div className="principal" style={{
            backgroundColor:coverColors[randomNumber],
        }}>
            <section id="portada" style={{
            overflow: 'auto'
        }}>
            <Cover   coverData={coverData}/>
            </section>
            <section id="menu" >
                <MenuGeneral/>
            </section>
        
        
        </div>
    )
}
