import React, { useState ,useEffect ,  Component } from 'react'
// import {Line, Bar, Pie } from 'react-chartjs-2';
import { Link, withRouter } from "react-router-dom";

import  MediaCard from '../shared/ItemCard';
import { Grid } from '@material-ui/core';


export function Detailes  () { 

  const [Products, SetProducts] = useState([])

  useEffect(() => {
      const url =  "https://fakestoreapi.com/products"

      const fetchData = async () => {

          const response = await fetch(url);
          const data = await response.json();
          
          // const data = JSON.parse(data1)
          SetProducts(data);

      };
      fetchData();

  },[]);
  
  console.log(Products)


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
           
            </div>{/* row */}
          </div>{/* az-content-body */}
         
       

       
       
      </div>
    )
 
}

export default Detailes
