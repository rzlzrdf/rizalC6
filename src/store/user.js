import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null
    },
    reducers: {
        addUser: (state, action) => {
            state.data = {...action.payload.userData}
        }, 
        removeUser: (state) => {
            state.data = null
        }
    }
}) 

export default userSlice