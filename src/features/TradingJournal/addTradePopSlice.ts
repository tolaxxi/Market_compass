import { createSlice } from '@reduxjs/toolkit';

interface AddTradePopUpType {
  isOpen: boolean;
}
const initialState: AddTradePopUpType = {
  isOpen: true,
};
export const AddTradePopUpSlice = createSlice({
  name: 'addTrade',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    togglePopUp: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});
export const { open, close, togglePopUp } = AddTradePopUpSlice.actions;
export default AddTradePopUpSlice.reducer;
