import axios from 'axios';
import { Dispatch } from 'redux';
import { setLoading } from 'store/reducers/loadingSlice';

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

    try {
        dispatch(setLoading(true));
        if (flag) {
            // Aquí iría la lógica de fetch si se implementa
            console.log('Fetching from:', url);
        } else {
            dispatch(action(staticContent));
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        dispatch(setLoading(false));
    }
};