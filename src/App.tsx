import React, { useEffect, useState } from 'react'
import { Cover } from 'components/cover/Cover'
import { MenuGeneral } from 'components/GeneralMenu/GeneralMenu'
import {  coverColors, coverColorsGreens } from 'data/colorData';
import { isColorDark } from 'utils/isDarkColor';
import { coverData } from 'data/coverData';
import { useDispatch } from 'react-redux';
import { setCover } from 'store/reducers/coverSlice';
import { fetchAndDispatch } from 'utils/fetchAndDispatch';
import { endpoints } from 'utils/endpoints';
import { setMenu } from 'store/reducers/menuSlice';
import { menuData } from 'data/menuData';

export const App = () => {

    const [randomNumber, setRandomNumber] = useState<number>(0);
    const dispatch = useDispatch();


    useEffect(() => {

        fetchAndDispatch({
            url: endpoints['cover'], 
            staticContent: coverData, // Add the staticContent property with a value of null
            action: setCover,
            dispatch,
            flag: false
        });

        fetchAndDispatch({
            url: endpoints['menu'],
            staticContent: menuData,
            action: setMenu,
            dispatch,
            flag: false
        })

      

        const generateRandomNumber = () => Math.floor(Math.random() * coverColorsGreens.length ); // Genera un número entre 0 y 3
        setRandomNumber(generateRandomNumber());

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
