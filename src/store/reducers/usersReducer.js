import { createSlice } from "@reduxjs/toolkit";

const usersReducer = createSlice({
    name: "users",
    initialState: {
        users: [
            { id: 1, name: "Shiv" },
            { id: 2, name: "Mahesh" },
        ],
    },
});

export default usersReducer.reducer;