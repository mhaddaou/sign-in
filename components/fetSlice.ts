import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
const API = 'https://jsonplaceholder.typicode.com/users'

interface typeAdress{
    street : string;
    suite : string;
    city : string;
    zipcode : string;
    geo: typeGeo;

}
type Tpcom = {
    name : string;
    catchPhrase: string;
    bs : string;
}

interface typeGeo{
    lat : number;
    lng : number;
}

interface TypeData{
    id : number;
    name : string;
    username : string;
    email : string;
    address : typeAdress;
    phone : number;
    website : string;
    company : Tpcom;
    
}


interface initialType {
    isLoading : boolean;
    isDone : boolean;
    error : string;
    data : TypeData[]
}
const initialState = {
    isLoading : false,
    isDone : false,
    error : '',
    data : []
}


export const getUsers = createAsyncThunk('users/getUsers',async (data, dataThunk) =>{
    try{
        const res = await axios.get(API);
        return await res.data;
    }
    catch(err : any){
        return dataThunk.rejectWithValue(err.message);

    }
})


const fetSlice = createSlice({
    name : 'users', 
    initialState,
    reducers: {},
    extraReducers : (builder) =>{
        builder.addCase(getUsers.pending, () =>{
            return {
                ... initialState,
                isLoading : true,
            }
        })
        .addCase(getUsers.fulfilled, (state : initialType , action : PayloadAction<TypeData[]>) =>{
            state.isLoading = false;
            state.data = action.payload;
            state.isDone = true;
            

        })
        .addCase(getUsers.rejected, (state , action : PayloadAction<any>) =>{
            state.isDone = false;
            state.error = action.payload;
            state.data = [];
        })
    }
})

export default fetSlice.reducer;
