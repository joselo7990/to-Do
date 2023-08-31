import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "list",
  initialState: [],
  reducers: {
    agregarLista(state, action) {
      state.push(action.payload);
    },
    eliminarLista(state, action) {
      state.filter((list) => list.id !== action.payload.listId);
    },
    agregarFruta(state, action) {
      const selectedList = state.find(
        (list) => list.id === action.payload.listId
      );
      selectedList.items.push(action.payload.item);
    },
    quitarFruta(state, action) {
      const selectedList = state.find(
        (list) => list.id === action.payload.listId
      );
      selectedList.items = selectedList.items.filter(
        (item) => item.id !== action.payload.itemId
      );
    },

    checkItem(state, action) {
      const selectedList = state.find(
        (list) => list.id === action.payload.listId
      );
      const selectedItem = selectedList.items.find(
        (item) => item.id === action.payload.itemId
      );

      selectedItem.complete = !selectedItem.complete;
    },
  },
});

export const {
  agregarFruta,
  quitarFruta,
  agregarLista,
  checkItem,
  eliminarLista,
} = listSlice.actions;
export default listSlice.reducer;
