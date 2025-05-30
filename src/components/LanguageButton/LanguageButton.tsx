import React, { useState } from 'react';
import useLocalStorage from 'hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { fetchAndDispatch } from 'utils/fetchAndDispatch';
import { endpoints } from 'utils/endpoints';
import { setCover } from 'store/reducers/coverSlice';
import { setMenu } from 'store/reducers/menuSlice';
import { getCoverData } from 'data/coverData';
import { getMenuData } from 'data/menuData';
import CircularProgress from '@mui/material/CircularProgress';
import { LanguageButtonContainer } from './styles';

const LanguageButton: React.FC = () => {
    const [lang, setLang] = useLocalStorage<string>('lang');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();

    const handleLanguageChange = async () => {
        setIsLoading(true);
        const newLang = lang === 'es' ? 'en' : 'es';
        setLang(newLang);

        try {
            // Actualizar los datos con el nuevo idioma
            await Promise.all([
                fetchAndDispatch({
                    url: endpoints['cover'],
                    staticContent: getCoverData(newLang),
                    action: setCover,
                    dispatch,
                    flag: false,
                    lenguage: newLang
                }),
                fetchAndDispatch({
                    url: endpoints['menu'],
                    staticContent: getMenuData(newLang),
                    action: setMenu,
                    dispatch,
                    flag: false,
                    lenguage: newLang
                })
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <LanguageButtonContainer 
            onClick={handleLanguageChange}
            disabled={isLoading}
        >
            {isLoading ? (
                <CircularProgress size={30} color="inherit" />
            ) : (
                lang === 'es' ? 'ES' : 'EN'
            )}
        </LanguageButtonContainer>
    );
};

export default LanguageButton; 