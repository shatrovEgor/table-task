import { configureStore } from '@reduxjs/toolkit'
import RowDataReducer from './reducer';
import dictionary from './dictionary';

export default configureStore({
  reducer: {
      rowData: RowDataReducer,
      dictionary: dictionary
  },
})