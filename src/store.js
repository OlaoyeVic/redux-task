import { configureStore } from "@reduxjs/toolkit";
import { covidAPI } from "./services/covidAPI";

export default configureStore({
    reducer: {
        [covidAPI.reducerPath]: covidAPI.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(covidAPI.middleware)
})