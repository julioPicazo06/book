import React, { useEffect, useState } from 'react'
import { Cover } from 'components/cover/Cover'
import { MenuGeneral } from 'components/GeneralMenu/GeneralMenu'
import {  coverColors, coverColorsGreens } from 'data/colorData';
import { getCoverData } from 'data/coverData';
import { useDispatch } from 'react-redux';
import { setCover } from 'store/reducers/coverSlice';
import { fetchAndDispatch } from 'utils/fetchAndDispatch';
import { endpoints } from 'utils/endpoints';
import { setMenu } from 'store/reducers/menuSlice';
import { getMenuData } from 'data/menuData';
import useLocalStorage from 'hooks/useLocalStorage';
import LanguageButton from 'components/LanguageButton/LanguageButton';
import GlobalLoader from 'components/Loader/GlobalLoader';
import { isVisibleLanguage } from 'utils/utils';

export const Menu = () => {

    const [randomNumber, setRandomNumber] = useState<number>(0);
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
    const dispatch = useDispatch();
    // const { param:lang } = useParams<{param: string}>();
    const [lang , setLang] = useLocalStorage<string>('lang');
    if (lang === undefined) {
        setLang('en') ;
    }

    
    useEffect(() => {
    
        isVisibleLanguage('menu');
        
        // Cargar datos con manejo de errores
        const loadData = async () => {
            try {
                await fetchAndDispatch({
                    url: endpoints['cover'],
                    staticContent: getCoverData(lang), // Add the staticContent property with a value of n
                    action: setCover,
                    dispatch,
                    flag: false,
                    lenguage : lang
                });

                await fetchAndDispatch({
                    url: endpoints['menu'],
                    staticContent: getMenuData(lang),
                    action: setMenu,
                    dispatch,
                    flag: false,
                    lenguage : lang
                });

                setIsDataLoaded(true);
            } catch (error) {
                console.error('Error loading data:', error);
                // Si hay error, usar datos estáticos
                dispatch(setCover(getCoverData(lang)));
                dispatch(setMenu(getMenuData(lang)));
                setIsDataLoaded(true);
            }
        };

        loadData();

        const generateRandomNumber = () => Math.floor(Math.random() * coverColorsGreens.length ); // Genera un número entre 0 y 3
        setRandomNumber(generateRandomNumber());

    }, [lang, dispatch]);

    // Mostrar loader mientras se cargan los datos
    if (!isDataLoaded) {
        return (
            <div className="principal" style={{
                backgroundColor: coverColors[randomNumber],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh'
            }}>
                <GlobalLoader />
            </div>
        );
    }

    return (
        <div className="principal" style={{
            backgroundColor:coverColors[randomNumber],
        }}>
            <GlobalLoader />
            <LanguageButton />
            <section id="portada" style={{
            overflow: 'auto'
        }}>
            <Cover/>
            </section>
            <section id="menu" >
                <MenuGeneral/>
            </section>
        
        
        </div>
    )
}
