import { configureStore } from "@reduxjs/toolkit";
import langSlice from "./Index";


export const store=configureStore({
    reducer:{
        lang:langSlice.reducer
    }
})

export default store