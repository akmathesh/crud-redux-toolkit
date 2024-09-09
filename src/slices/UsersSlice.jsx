import { createSlice } from "@reduxjs/toolkit";
// import userData from "../Data";

const initialData = JSON.parse(localStorage.getItem("users"));

export const userSlice = createSlice({
  name: "users",
  initialState: {
    userData: initialData ? initialData : [],
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action.payload);
      // state.userData.push(action.payload);
      state.userData = [...state.userData, action.payload];
    },

    updateLocalStoarege: (state) => {
      localStorage.setItem("users", JSON.stringify(state.userData));
    },

    getLocalStorageItem: (state) => {
      const data = JSON.parse(localStorage.getItem("users"));
      // state.userData = data;
    },

    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const findUser = state.find((user) => user.id === id);

      console.log(findUser);

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

export const {
  addUser,
  updateLocalStoarege,
  getLocalStorageItem,
  updateUser,
  deleteUser,
} = userSlice.actions;

export default userSlice.reducer;
