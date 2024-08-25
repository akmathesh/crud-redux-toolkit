import { createSlice } from "@reduxjs/toolkit";
import userData from "../Data";

export const userSlice = createSlice({
  name: "users",
  initialState: userData,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state));
    },

    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const findUser = state.find((user) => user.id == id);

      if (findUser) {
        findUser.name = name;
        findUser.email = email;
      }
    },

    deleteUser: (state, action) => {
      const { id } = action.payload;
      const findUser = state.find((user) => user.id == id);

      if (findUser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
