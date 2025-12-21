import { createSlice } from '@reduxjs/toolkit';


interface CounterState {
    value: number;
}

const initialState : CounterState = { value: 0 };

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterState) => {
            state.value = state.value + 1;
        },
        decrement: (state: CounterState) => {
            if(state.value > 0) state.value -= 1;
        },
        reset: (state: CounterState) => {
            state.value = 0;
        }
    }
})

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;