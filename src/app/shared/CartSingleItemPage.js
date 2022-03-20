import React from "react"
import { useSelector } from "react-redux";
import { Link, useParams, withRouter } from "react-router-dom";
import cartReducer from "../redux/reducers/cartReducer/cartReducer";
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { addToCart as addToCartDispatch, removeFromCart as removeFromCartDispatch } from "../redux/reducers/cartReducer/actionsCreator"
import { CustomizedSnackbarAdd} from "./snackBar"
import {CustomizedSnackbarRemove } from "./snackBar"



const CartSingleItemPage = ({ product, productId }) => {


    const dispatch = useDispatch();


    const removeFromCart = () => {
        dispatch(removeFromCartDispatch(product))

    }
    const addToCart = () => {
        dispatch(addToCartDispatch(product))
    }


    return (
        <div key={productId} className="media mediaCart new">
            <div className="az-img-user az-img-user-menu  ">
                <img
                    src={product.image}
                    alt={product.title}
                ></img>
            </div>
            <div className="media-body">
                <p>
                    {product.title}
                </p>

                <span>EGP {product.price}</span>
                <div className="quantitySection">
                    <Button onClick={e => removeFromCart(e)} variant="contained" className='successBtn ' >
                    < CustomizedSnackbarRemove />
                    </Button>
                    <span className="quantityText">
                        Qty:
                        <span>
                            {
                                product.duplication
                            }
                        </span>
                    </span>
                    <Button onClick={event => addToCart(event)} variant="contained" className='successBtn cartBtn' >
                   < CustomizedSnackbarAdd />
                    </Button>
                </div>
            </div>
            <hr />
        </div>




    )
}

export default CartSingleItemPage;