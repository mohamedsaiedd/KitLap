
import { useSelector } from "react-redux";
import cartReducer from "../redux/reducers/cartReducer/cartReducer";
import CartSingleItemPage from "../shared/CartSingleItemPage";
import { useParams, Link } from "react-router-dom"
import React, { useState, useEffect, Component, Suspense } from 'react'
import axios from "axios"
import { Image } from 'semantic-ui-react'
import MediaCard from '../shared/ItemCard';
import { Grid, Button } from '@material-ui/core';
import Header from '../shared/Header';
// import  { removeFromCart as removeFromCartDispatch } from "../redux/reducers/cartPageReducer/actionCreators"
// import { useSelector } from 'react-redux';



const Cart = () => {
  const cartStore = useSelector(state => state.cartReducer)
  let sum = 0;

  cartStore.menuAccItems.forEach(element => {
    sum += parseInt(element.oldprice)
  });

  console.log("cart Test", cartStore)
  return (

    <div className="container p-md-0">
      <div className="az-content-body">
        {/* <h3>Cart ( {cartStore.menuItems.length} ) </h3> */}
        {/* <hr /> */}
        <div className="itemsDescription">
          <div className="media mediaCartDescription new">
            <p className=" imageCartDescripton ">
              {/* image */}
            </p>
            <div className="media-body mediabodyCartDescription">

              <p className=" titleCartDescripton ">
                product title
              </p>

              <p className="totalPriceDescripton">product price </p>

              <div className="quantitySectionDescripton">
                product quantity
              </div>
            </div>
            <hr />
          </div>
        </div>
        {
          cartStore.menuItems.map(product => {
            return (
              <CartSingleItemPage product={product} productId={product.id} />
            )
          })
        }

      </div>
      <div className="totalCart">
        <div className="totalCartDescripton">

          <p className="totalPriceDesctionFinal">
            <span>CART SUMMARY</span>
            <br />
            Subtotal :
          </p>
          <p className="totalPriceFinal">
            <br />
            EGP {sum}
          </p>
        </div>
        <button >
          <Link className="btnCheck" to="../../checkout/CheckOut">
            CHECKOUT <span> ( EGP {sum} ) </span>
          </Link>
        </button>
      </div>
    </div>


  )



  // })
}

export default Cart;