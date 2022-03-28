
import { useSelector } from "react-redux";
import cartReducer from "../redux/reducers/cartReducer/cartReducer";
import CartSingleItemPage from "../shared/CartSingleItemPage";
import {useParams} from "react-router-dom"
import React, { useState, useEffect, Component, Suspense } from 'react'
import axios from "axios"
import { Image } from 'semantic-ui-react'
import MediaCard from '../shared/ItemCard';
import { Grid ,Button } from '@material-ui/core';
import Header from '../shared/Header';
// import  { removeFromCart as removeFromCartDispatch } from "../redux/reducers/cartPageReducer/actionCreators"
// import { useSelector } from 'react-redux';



const Cart = () => {
 
  const cartStore = useSelector(state => state.cartReducer)

  console.log("cart Test", cartStore)
      return (
        <div className="container p-md-0">
          <div className="az-content-body">
            <h3>Cart ( {cartStore.menuItems.length} )</h3>
            <hr />
            {
            cartStore.menuItems.map(product => {
              return(
            <CartSingleItemPage   product={product} productId={product.id}/>
              )
            })
          }
          </div>
        </div>
          )   
      

  
      // })
}

export default Cart;