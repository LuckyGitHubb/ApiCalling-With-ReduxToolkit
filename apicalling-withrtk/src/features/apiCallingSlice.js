import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialStateApiCalling = {
    loading:false,
    data:[],
    error:''
}
export var fetchApi = createAsyncThunk('apiCalling',()=>{
    return axios.get('https://dummyjson.com/products/categories').then((response)=>{
        return response.data;
    });
})
const apiCallingSlice = createSlice({
    name:'apiCalling',
    initialState:initialStateApiCalling,
    extraReducers:(builder)=>{
        builder.addCase(fetchApi.pending,(state,action)=>{
            state.loading=true;
        })
        builder.addCase(fetchApi.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        })
        builder.addCase(fetchApi.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.payload;
            });
        }
});
export default apiCallingSlice;