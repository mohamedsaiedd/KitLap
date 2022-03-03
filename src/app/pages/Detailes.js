import React, { useState, useEffect, Component, Suspense } from 'react'
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios"
import { Image } from 'semantic-ui-react'
import MediaCard from '../shared/ItemCard';
import { Grid ,Button } from '@material-ui/core';
import Header from '../shared/Header';
import { useDispatch , useSelector } from 'react-redux';
import  {addToCart as addToCartDispatch} from "../redux/reducers/cartReducer/actionsCreator"



export function Detailes(ItemCount) {

  const dispatch = useDispatch(); 
  const cartStore = useSelector((state)=> state.cartReducer)  
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)


  // const [productId, SetProductId] = useState("")
  const { id } = useParams();

  useEffect(() => {

    const url = `https://fakestoreapi.com/products/${id}`

    axios.get(url).then(res => {
      console.log(res.data)
      setProduct(res.data);
      setLoading(false)
    })

  }
    , [id])

  const addToCart = () => {
    dispatch(addToCartDispatch(product))
  } 

  const toggleProBanner = () => {
    document.querySelector('.proBanner').classList.toggle("hide");
  }
  
 console.log( "cartStore" , cartStore)
  

  return  (
    <div>
      
    {/* <Header /> */}
      <div className="proBanner">
        <div>
          <span className="d-flex align-items-center purchase-popup">
            <p className="m-0">Get <span>30%</span>  discount using promocode "<span>SALEWIN20</span>"</p>
            <a href="./" rel="noopener noreferrer" target="_blank" className="btn btn-sm btn-primary ml-auto">GET PROMOCODE</a>
            <i className="typcn typcn-delete-outline bannerClose" onClick={toggleProBanner}></i>
          </span>
        </div>
      </div>
      <div className="container p-md-0">
        <div className="az-content-body">
          <Grid container spacing={2} >

            <Grid item xs={12} md={8} lg={4} >
              <img src={product.image} />

            </Grid>

            <Grid className='gridFlex' item xs={12} md={8} lg={8} >
              <div>
              <h1>
                {product.title}
              </h1>
              
              <h4 className='productDescription'>
                {product.description}
              </h4>
          
             
              <h2 className='productPrice'>
                EGP {product.price}
              </h2>
              </div>
              <div>
              <Button onClick={event=>addToCart(event)}  variant="contained" className='successBtn cartBtn' >
                Add To Cart
              </Button>
              <Link to="/">
              <Button  variant="contained" className='continueBtn cartBtn' >
                Continue Shopping
              </Button>
              </Link>
              </div>
            </Grid>
           

          </Grid>
          

        </div >{/* row */}
      </div>{/* az-content-body */}

    </div>
   
  )

}

export default Detailes
