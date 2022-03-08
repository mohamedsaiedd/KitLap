import React from "react"
import { useSelector } from "react-redux";
import { Link, useParams, withRouter } from "react-router-dom";
import cartReducer from "../redux/reducers/cartReducer/cartReducer";
import { Button } from '@material-ui/core';
import { removeFromCart as removeFromCartDispatch } from "../redux/reducers/cartReducer/actionsCreator"
import { useDispatch } from 'react-redux';



const CartSingleItemPage = ({ product, productId }) => {

    const cartStore = useSelector((state) => state.cartReducer)

    // const dispatch = useDispatch();

    // const removeFromCart = () => {
    //     dispatch(removeFromCartDispatch(product))
    // }

    console.log("cart Test", cartStore)

    return (
        cartStore.menuItems.map(product => {
            return (
                <div className="media new">
                    <div className="az-img-user az-img-user-menu online ">
                        <img
                            src={product.image}
                            alt={product.title}
                        ></img>
                    </div>
                    <div className="media-body">
                        <p>
                            {product.title}
                        </p>
                        <p>
                            Qty: {
                                product.duplication
                            }
                        </p>
                        <span>EGP {product.price}</span>
                        {/* <Button onClick={event => removeFromCart(event)} variant="contained" className='successBtn cartBtn' >
                            remove To Cart
                        </Button> */}
                    </div>
                    <hr />
                </div>


            )

        }

        )

    )
}

export default CartSingleItemPage;