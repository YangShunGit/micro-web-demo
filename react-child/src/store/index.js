import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../pages/counter/modal';

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})