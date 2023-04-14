import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userEmail: "",
  userRole: "",
  userPermissions: "",
  userToken: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (_, action) => action.payload,
    loggedOutUser: () => initialState,
  },
});

export const { setUser, loggedOutUser } = userSlice.actions;

export default userSlice.reducer;
