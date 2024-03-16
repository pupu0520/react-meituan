import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const footStore = createSlice({
  name: 'foots',
  initialState: {
    footList: [],
    activeIndex: 0,
  },
  reducers: {
    setFootList: (state, action) => {
      state.footList = action.payload;
    },
    changeActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    }
  }
})


const { setFootList, changeActiveIndex } = footStore.actions;


const fetchFootList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway');
    dispatch(setFootList(res.data));
  }
}

export {fetchFootList, changeActiveIndex}

const reducer = footStore.reducer;

export default reducer;

//redux-1. 引入createSlice 并声明 store实例
//redux-2. 从footStore解构reducer中的方法,并抛出
//redux-3. 如果是异步请求需要声明一个请求方法，里面返回一个方法
