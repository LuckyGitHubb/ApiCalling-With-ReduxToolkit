import { configureStore } from "@reduxjs/toolkit"
import apiCallingSlice from "../features/apiCallingSlice"
import logger from 'redux-logger'

const store = configureStore({
    reducer:{
        apiCalling:apiCallingSlice.reducer,
    },
    
    middleware: (DefaultMiddleware) => {
        return DefaultMiddleware().concat(logger);

    }
});
export default store;


