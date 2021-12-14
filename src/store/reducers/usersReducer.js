import { createSlice } from "@reduxjs/toolkit";

const usersReducer = createSlice({
    name: "users",
    initialState: {
        users: [
            { id: 1, name: "Shiv" },
            { id: 2, name: "Mahesh" },
        ],
    },
    reducers: {
        addUser: (state, action) => {
            console.log(action);
            state.users = [...state.users, action.payload]
        }
    }
});

export const { addUser } = usersReducer.actions;
export default usersReducer.reducer;