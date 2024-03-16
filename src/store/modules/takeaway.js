import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const foodStore = createSlice({
  name: 'foods',
  initialState: {
    foodList: [],
    activeIndex: 0,
    cardList: []
  },
  reducers: {
    setFoodList: (state, action) => {
      state.foodList = action.payload;
    },
    changeActiveIndex: (state, action) => {
      state.activeIndex = action.payload;
    },
    // 添加购物车
    addCard:(state, action) => {
      const item = state.cardList.find(item => item.id === action.payload.id);
      if(item) {
        item.count++;
      } else {
        state.cardList.push(action.payload)
      }
    }
  }
})


const { setFoodList, changeActiveIndex, addCard } = foodStore.actions;


const fetchFoodList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway');
    dispatch(setFoodList(res.data));
  }
}

export {fetchFoodList, changeActiveIndex, addCard}

const reducer = foodStore.reducer;

export default reducer;

//redux-1. 引入createSlice 并声明 store实例
//redux-2. 从foodStore解构reducer中的方法,并抛出
//redux-3. 如果是异步请求需要声明一个请求方法，里面返回一个方法
