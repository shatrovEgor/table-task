import { createSlice } from '@reduxjs/toolkit'

export const rowData = createSlice({
  name: 'rowData',
  //хардкод для примера
  initialState: {
      data: [
    {"firsName":"Egor","LastName":"Shatrov", "age": "22", "salary": "80"},
    {"firsName":"Jhon","LastName":"Smit", "age": "40", "salary": "220"}
    ],
    currentRow: null,
    currentID: null
  },
  reducers: {
    addRow: (state, action) => {
      state.data.push(...action.payload);
    },
    deleteRow: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    editRow: (state, action) => {
      state.data[action.payload.id] = action.payload.data;
    },
    currentRow: (state, action) => {
        state.currentRow = state.data[action.payload];
        state.currentID = action.payload;
    }
  },
})

export const { addRow, deleteRow, editRow, currentRow, addDataToInput } = rowData.actions

export default rowData.reducer