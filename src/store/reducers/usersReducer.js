import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../action/userAction";
const usersReducer = createSlice({
    name: "users",
    initialState: {
        users: [],
        loader: false,
        errors: {}
    },
    reducers: {
        addUser: (state, action) => {
            console.log(action);
            state.users = [...state.users, action.payload]
        }
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.loader = true;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loader = false;
            state.users = action.payload
        },
         [getUsers.rejected]: (state, action) => {
            state.loader = false;
            state.errors = action.payload
        }
    }
});

export const { addUser } = usersReducer.actions;
export default usersReducer.reducer;