import axios from 'axios';
import { Dispatch } from 'redux';

interface FetchAndDispatchParams<T> {
  url: string;
  staticContent: T;
  action: (content: T) => any;
  dispatch: Dispatch<any>;
  flag: boolean;
  lenguage?: string;
}

interface Response<T> {
  content: T;
  status: number;
}

export const fetchAndDispatch = async <T>({
  url,
  staticContent,
  action,
  dispatch,
  flag,
  lenguage = 'en'
}: FetchAndDispatchParams<T>) => {
    const storageKey = `${url}_${lenguage}`;
    const stored = sessionStorage.getItem(storageKey);

    if (stored) {
        // Si hay datos en sessionStorage, los usamos
        dispatch(action(JSON.parse(stored)));
        return;
    }

    if(!flag){
        try {
            const response = await axios.get<Response<T>>(url);
            if (response.status !== 200) {
            throw new Error('Network response was not ok');
            }

            const data = response.data;
            const selectedLang = lenguage || 'es';
            const result = ((data as unknown) as Record<string, T>)[selectedLang];

            // Guardar en sessionStorage
            sessionStorage.setItem(storageKey, JSON.stringify(result));

            dispatch(action(result));
        } catch (error) {
            console.log('staticContent', staticContent);
            dispatch(action(staticContent));
        }
    } else{
      dispatch(action(staticContent));

    }
};