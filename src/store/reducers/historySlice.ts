
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

interface HistoryState {
    jobHistory: JobHistory[];
    educationHistory: EducationHistory[];
  }

const initialState:HistoryState = {
    jobHistory: [
        {
            name: '',
            date: '',
            position: ''
        },
    ] as JobHistory[],
    educationHistory: [
        {
            name: '',
            date: '',
            position: ''
        },
    ] as EducationHistory[]
}

const historySlice = createSlice({
    name: 'history',
    initialState,
    reducers: {
        setJobHistory: (state, action: PayloadAction<JobHistory[]>) => {
            state.jobHistory = action.payload
        },
        setEducationHistory: (state, action: PayloadAction<EducationHistory[]>) => {
            state.educationHistory = action.payload
        }
    }
})

export const { setJobHistory , setEducationHistory } = historySlice.actions;
export default historySlice.reducer