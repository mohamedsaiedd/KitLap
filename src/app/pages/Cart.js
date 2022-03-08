import React from "react"
import { useSelector } from "react-redux";
import cartReducer from "../redux/reducers/cartReducer/cartReducer";
import CartSingleItemPage from "../shared/CartSingleItemPage";



const Cart = ({ product, productId }) => {
  const cartStore = useSelector(state => state.cartReducer)

  const array = cartStore.menuItems

  console.log("cart Test", cartStore)

  // cartStore.menuItems.map(product => {
  

 
      return (
    <div className="container p-md-0">
      <div className="az-content-body">
        <h3>Cart ( {cartStore.menuAccItems.length} )</h3>
        <hr />
        <CartSingleItemPage />
      </div>
    </div>


  )
      // })
}

export default Cart;