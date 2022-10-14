import { configureStore, createSlice } from "@reduxjs/toolkit";

const word = createSlice({
    name: "글자",
    initialState:'나는 글자임...',

})


const store = configureStore({
    reducer: {}
});

export default store