import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface phoneType {
    area : string;
    phone : number;
}
interface locationType {
    country : string;
    city : string;
}

type initialType = {
    firstName : string;
    lastName : string;
    email : string;
    phone : phoneType;
    heading : string;
    education : string;
    location : locationType;
    img : string;
    doneFirst : boolean;
    doneSecond : boolean;
    doneThird : boolean;
}

const initialState : initialType = {
    firstName : "",
    lastName : "",
    email : "",
    phone : {
        area : "",
        phone : 0,
    },
    heading : "",
    education : "",
    location : {
        country : "",
        city : "",
    },
    img: '',
    doneFirst : false,
    doneSecond : false,
    doneThird : false,
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        setFirstName : (state, action : PayloadAction<string>) => {
            state.firstName = action.payload
        } ,
        setLastName : (state, action : PayloadAction<string>) =>{
            state.lastName = action.payload
        }, 
        setEmail : (state, action : PayloadAction<string>) =>{
            state.email = action.payload;
        },
        setPhone : (state, action : PayloadAction<phoneType>) =>{
            state.phone = action.payload;
        },
        setHeading : (state, action : PayloadAction<string>) =>{
            state.heading = action.payload;
        },
        setEducation : (state, action : PayloadAction<string>) =>{
            state.education = action.payload;
        },
        setLocation : (state, action : PayloadAction<locationType>) =>{
            state.location = action.payload;
        },
        setImage : (state, action : PayloadAction<string>) =>{
            state.img = action.payload;
        },
        setFirst : (state, action : PayloadAction<boolean>) =>{
            state.doneFirst = action.payload; 
        },
        setSecond : (state, action : PayloadAction<boolean>) =>{
            state.doneSecond = action.payload; 
        },
        setThird : (state, action : PayloadAction<boolean>) =>{
            state.doneThird = action.payload; 
        },
    }
})

export const {setFirstName, setLastName, setEmail, setPhone, setHeading, setEducation, setLocation, setImage, setFirst, setSecond, setThird} = userSlice.actions;
export default userSlice.reducer;