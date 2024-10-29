import React, { useEffect, useState } from 'react'
import { Cover } from 'components/cover/Cover'
import { MenuGeneral } from 'components/GeneralMenu/GeneralMenu'
import {  coverColors, coverColorsGreens } from 'data/colorData';
import { isColorDark } from 'utils/isDarkColor';
import { coverData, getCoverData } from 'data/coverData';
import { useDispatch } from 'react-redux';
import { setCover } from 'store/reducers/coverSlice';
import { fetchAndDispatch } from 'utils/fetchAndDispatch';
import { endpoints } from 'utils/endpoints';
import { setMenu } from 'store/reducers/menuSlice';
import { getMenuData, menuData } from 'data/menuData';
import { useParams } from 'react-router-dom';

export const Menu = () => {

    const [randomNumber, setRandomNumber] = useState<number>(0);
    const dispatch = useDispatch();
    const { param:lang } = useParams<{param: string}>();
    
    useEffect(() => {
    
        fetchAndDispatch({
            url: endpoints['cover'], 
            staticContent: getCoverData(lang), // Add the staticContent property with a value of null
            action: setCover,
            dispatch,
            flag: false,
            lenguage : lang
        });

        fetchAndDispatch({
            url: endpoints['menu'],
            staticContent: getMenuData(lang),
            action: setMenu,
            dispatch,
            flag: false,
            lenguage : lang

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
