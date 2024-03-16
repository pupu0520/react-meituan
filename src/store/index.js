import { configureStore } from "@reduxjs/toolkit";
import footReducers from './modules/takeaway.js';

export default configureStore({
  reducer: {
    foot: footReducers,
  }
})


// redux-4 引入configureStore
// redux-5 引入创建的modules里面的reducers
// redux-6 configureStore实例化reducers