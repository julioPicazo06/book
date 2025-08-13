import { Dispatch } from 'redux';
import { setLoading } from 'store/reducers/loadingSlice';
import axios from 'axios';
import { logger } from './logger';

interface FetchAndDispatchParams<T> {
  url: string;
  staticContent: T;
  action: (content: T) => any;
  dispatch: Dispatch<any>;
  flag: boolean;
  lenguage?: string;
}

export const fetchAndDispatch = async <T>({
  url,
  staticContent,
  action,
  dispatch,
  flag,
  lenguage = 'en'
}: FetchAndDispatchParams<T>) => {
    try {
        dispatch(setLoading(true));
        logger.info('[fetchAndDispatch] Ejecutando con flag:', flag, 'url:', url, 'lenguage:', lenguage);
        
        if (flag) {
            // Hacer petición HTTP real a la API
            logger.info('Fetching from:', url);
            const response = await axios.get(url);
            logger.info('API Response for', url, ':', response.data);
            
            let data = response.data as T;
            
            // Procesar datos multilenguaje de la API
            if (response.data && typeof response.data === 'object') {
                const responseData = response.data as any;
                
                // Si la API devuelve datos multilenguaje (es, en)
                if (responseData[lenguage]) {
                    logger.info(`Extrayendo datos para idioma: ${lenguage}`);
                    data = responseData[lenguage] as T;
                } else if (responseData.data) {
                    // Si la API devuelve los datos en una propiedad data
                    data = responseData.data as T;
                } else if (responseData.result) {
                    // Si la API devuelve los datos en una propiedad result
                    data = responseData.result as T;
                } else if (responseData.content) {
                    // Si la API devuelve los datos en una propiedad content
                    data = responseData.content as T;
                }
            }
            
            // Validar que los datos tienen la estructura esperada
            if (!data || (typeof data === 'object' && Object.keys(data).length === 0)) {
                logger.warn('API returned empty or invalid data for:', url, 'using static content');
                data = staticContent;
            }
            
            logger.info('Datos procesados para dispatch:', data);
            
            // Dispatch de los datos obtenidos de la API
            dispatch(action(data));
        } else {
            // Usar contenido estático local
            logger.info('Using static content for:', url);
            dispatch(action(staticContent));
        }
    } catch (error) {
        logger.error('Error fetching data from:', url, error);
        // En caso de error, usar contenido estático como fallback
        logger.info('Falling back to static content for:', url);
        dispatch(action(staticContent));
    } finally {
        dispatch(setLoading(false));
    }
};