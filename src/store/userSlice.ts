import { createSlice } from "@reduxjs/toolkit";

interface userState {
  userRecord: number;
}

// Se non è presente un salvataggio nel localStorage
// setto il record a 0, altrimenti al valore
// del record
const initialState: userState = {
  userRecord: parseInt(localStorage.getItem("userRecord") ?? "0"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveGame: (state, { payload }) => {
      // Se lo score è maggiore del record
      // salva la partita
      if (payload > state.userRecord) {
        state.userRecord = payload;
        localStorage.setItem("userRecord", String(state.userRecord));
      }
    },
  },
});

export const { saveGame } = userSlice.actions;

export default userSlice.reducer;
