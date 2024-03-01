import { createSlice } from "@reduxjs/toolkit";

const configSlice= createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },
    reducers:{
        changeLanguage:(state, action)=>{
            state.lang = action.payload;
        }
    }
});
//export reducers
export default configSlice.reducer;
//export actions
export const {changeLanguage} = configSlice.actions;