import axios from 'axios';
import { Dispatch } from 'redux';

interface FetchAndDispatchParams<T> {
  url: string;
  staticContent: T;
  action: (content: T) => any;
  dispatch: Dispatch<any>;
  flag: boolean;
}

interface Response<T> {
  data: T;
  status: number;
}

export const fetchAndDispatch = async <T>({
  url,
  staticContent,
  action,
  dispatch,
  flag
}: FetchAndDispatchParams<T>) => {
    if(!flag){
        try {
            const response = await axios.get<Response<T>>(url);
            if (response.status !== 200) {
            throw new Error('Network response was not ok');
            }
            const { data } = response.data;
            dispatch(action(data));
        } catch (error) {
            console.error('Fetch failed, using static content:', error);
            console.log('staticContent', staticContent);
            dispatch(action(staticContent));
        }
    } else{
      dispatch(action(staticContent));

    }
};