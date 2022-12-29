import { createSlice } from '@reduxjs/toolkit'

const initialState ={
    origin:null,
    destination: null,
    travelTimeInformation: null,
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,

    ///Use state and action as parameters for the reducer function

    reducer: {
        setOrigin: (state, action)=>{
            state.origin = action.payload;
        },
        setDestination: (state, action)=>{
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action)=>{
            state.travelTimeInformation = action.payload;
        },
    },
});

export const {setOrigin, setDestination, setTravelTimeInformation} = navSlice.actions;
/// This pushes data and actions to datalayer

///USe selectors to grab info from data layer
/// Use one selector for each of the params of initialState
///// Action creators are generated for each case reducer function

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;