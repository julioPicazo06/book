import React, { FC, useEffect, useState } from 'react';
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
import { When } from 'components/When/When';
import { getWhereIAm } from 'utils/utils';
import { logger } from 'utils/logger';

const LanguageButton: React.FC = () => {
    const [lang, setLang] = useLocalStorage<string>('lang');
    const [isLoading, setIsLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsVisible(getWhereIAm());
    }, [isVisible]);

    const handleLanguageChange = async () => {
        logger.log('[LanguageButton] handleLanguageChange ejecutado', lang);
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
                    flag: true,
                    lenguage: newLang
                }),
                fetchAndDispatch({
                    url: endpoints['menu'],
                    staticContent: getMenuData(newLang),
                    action: setMenu,
                    dispatch,
                    flag: true,
                    lenguage: newLang
                })
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <When predicate={isVisible}>
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
        </When>
    );
};

export default LanguageButton; 