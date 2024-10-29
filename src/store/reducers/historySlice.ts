
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface JobHistory {
    name: string;
    date: string;
    position: string;

}


interface EducationHistory {
    name: string;
    date: string;
    position: string;
}

interface EducationObj{
    title : string;
    content: EducationHistory[];
}

interface JobObj{
    title : string;
    content: JobHistory[];
}


interface HistoryState {
    jobHistory: JobObj;
    educationHistory:  EducationObj;
  }

const initialState:HistoryState = {
    jobHistory: {
        title : '',
        content : [
            {
                name: '',
                date: '',
                position: ''
            },
        ] as JobHistory[]
    },
    educationHistory: {
        title : '',
        content : 
        [
            {
                name: '',
                date: '',
                position: ''
            },
        ] as EducationHistory[]
    }
}



const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setJobHistory: (state: HistoryState, action: PayloadAction<JobObj>) => {
            state.jobHistory = action.payload;
        },
        setEducationHistory: (state: HistoryState, action: PayloadAction<EducationObj>) => {
            state.educationHistory = action.payload;
        }
    }
});


export const { setJobHistory, setEducationHistory } = historySlice.actions;
export default historySlice.reducer;