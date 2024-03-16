import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'


import { useSelector, useDispatch } from 'react-redux'
import { fetchFootList } from './store/modules/takeaway'
import { useEffect } from 'react'
import './App.scss'


const App = () => {
  const {footList, activeIndex}  = useSelector(state => state.foot); // redux-9 使用useSelector引入store声明的值
  const dispatch = useDispatch(); // redux-10 useDispatch 触发请求

  useEffect(() => {
    dispatch(fetchFootList()) // redux-11 触发store中的异步请求
  }, [dispatch]);

  return (
    <div className="home">
      {/* 导航 */}
      <NavBar />

      {/* 内容 */}
      <div className="content-wrap">
        <div className="content">
          <Menu />

          <div className="list-content">
            <div className="goods-list">
              {/* 外卖商品列表 */}
              {footList.map((item, index) => {
                return (
                  activeIndex === index && <FoodsCategory
                    key={item.tag}
                    // 列表标题
                    name={item.name}
                    // 列表商品
                    foods={item.foods}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 购物车 */}
      <Cart />
    </div>
  )
}

export default App
