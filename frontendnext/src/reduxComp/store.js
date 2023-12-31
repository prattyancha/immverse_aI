import loginSlice from "./slicesFolder/loginSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = () => {
    return configureStore({
      reducer: {
        login : loginSlice
      }
    })
  }

export default store;