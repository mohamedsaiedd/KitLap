import React, { useState ,useEffect  , Component } from 'react'
// import {Line, Bar, Pie } from 'react-chartjs-2';
import { Link, useParams, withRouter } from "react-router-dom";
// import React from 'react'
import {  Image } from 'semantic-ui-react'
import  MediaCard from '../shared/ItemCard';
import { Grid } from '@material-ui/core';
// import  SingleProduct  from "../components/singleProduct"
export function Detailes  () { 

  const [product, setProduct] = useState([])
  // const [productId, SetProductId] = useState("")
  const { id } = useParams(); 
  
  useEffect(() => {
      const url =  `https://fakestoreapi.com/products/${id}`
      const fetchData = async () => {
          const response = await fetch(url);
          const data = await response.json();
          setProduct(data);
      };
      fetchData();
  },[id]);
  
  const toggleProBanner = () => {
    document.querySelector('.proBanner').classList.toggle("hide");
  } 
    return (
      <div>
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

              <Grid item xs={12} md={8} lg={4} >
                <h1>
                    {product.title}
                </h1>
                <h4>
                    {product.description}
                </h4>
                <h2>
                   EGP {product.price}
                </h2>
              </Grid>
              <Grid item xs={12} md={8} lg={4} >
               
          
              </Grid>
            </Grid>
            </div >{/* row */}
          </div>{/* az-content-body */}
         
      </div>
    )
      
}

export default Detailes
