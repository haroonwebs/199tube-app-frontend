import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
  _id: string;
  username: string;
  email: string;
  fullName: string;
  coverImage?: string;
  avatar: string;
  watchHistory: any[];
};

type userState = {
  user: User | null;
};

const initialState: userState = {
  user: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },

    logout: () => initialState,
  },
});

export const { setUser, logout } = UserSlice.actions;
export default UserSlice.reducer;
