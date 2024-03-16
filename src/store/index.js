import { configureStore } from "@reduxjs/toolkit";
import foodReducers from './modules/takeaway.js';

export default configureStore({
  reducer: {
    food: foodReducers,
  }
})


// redux-4 引入configureStore
// redux-5 引入创建的modules里面的reducers
// redux-6 configureStore实例化reducers