const { createSlice } = require("@reduxjs/toolkit");


const loginSlice = createSlice({
    name: "loginSlice",
    initialState :{
        authState : "qwww"
    },
    reducers: {
      // Action to set the authentication status
      setAuthState :(state, action)=>{
        state.authState = "000000";
      },
}
})

export const {setAuthState} = loginSlice.actions;
export default loginSlice.reducer;