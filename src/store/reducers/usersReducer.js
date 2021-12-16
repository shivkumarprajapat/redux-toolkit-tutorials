import { createSlice } from "@reduxjs/toolkit";
import { getUsers, getUser } from "../action/userAction";
const usersReducer = createSlice({
    name: "users",
    initialState: {
        users: [],
        loader: false,
        errors: {},
        user: {}
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
        },
        [getUser.pending]: (state, action) => {
            state.loader = true;
        },
        [getUser.fulfilled]: (state, action) => {
            state.loader = false;
            state.user = action.payload
        },
        [getUser.rejected]: (state, action) => {
            state.loader = false;
            state.errors = action.payload
        }

    }
});

export const { addUser } = usersReducer.actions;
export default usersReducer.reducer;