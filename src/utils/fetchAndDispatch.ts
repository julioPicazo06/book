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
    if(!flag){
        try {
            const response = await axios.get<Response<T>>(url);
            if (response.status !== 200) {
            throw new Error('Network response was not ok');
            }

            const data = response.data;
            const selectedLang = lenguage || 'es';
            dispatch(action(((data as unknown) as Record<string, T>)[selectedLang]));
        } catch (error) {
            console.log('staticContent', staticContent);
            dispatch(action(staticContent));
        }
    } else{
      dispatch(action(staticContent));

    }
};