import React, { useState, useEffect, Component } from 'react'
// import {Line, Bar, Pie } from 'react-chartjs-2';
import { Link, withRouter } from "react-router-dom";

import MediaCard from '../shared/ItemCard';
import { Grid } from '@material-ui/core';


export function WomenCategory() {

  const [Products, SetProducts] = useState([])
  const [categoryName, setCategoryName] = useState("women's clothing");

  useEffect(() => {

    const url = "https://kitlap.monady.tk/api/products/GetAllProductsSummary"

    const fetchData = async () => {

      const response = await fetch(url);
      const data = await response.json();

      // const data = JSON.parse(data1)

      SetProducts(data);

      //   setCategoryName(categoryName == Products.category ? Products.category : null  )
      console.log(Products)

    };

    fetchData();

  }, []);

  // console.log(Products)


  const toggleProBanner = () => {
    document.querySelector('.proBanner').classList.toggle("hide");
  }

  let now = new Date();

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
          <div className="az-dashboard-one-title">
            <div>
              <h2 className="az-dashboard-title">Hi, welcome back Mohamed!</h2>
              <p className="az-dashboard-text">Your web analytics dashboard template.</p>
            </div>
            <div className="az-content-header-right">
              <div className="media">
                <div className="media-body">
                  <label>Start Date</label>
                  <h6>Sat Mar 11 2022</h6>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-body">
                  <label>End Date</label>
                  <h6>{now.toDateString()}</h6>
                </div>{/* media-body */}
              </div>{/* media */}
              <div className="media">
                <div className="media-body">
                  <label>Event Category</label>
                  <h6>All Categories</h6>
                </div>{/* media-body */}
              </div>{/* media */}
              {/* <a href="#/" className="btn btn-purple">Search</a> */}
            </div>
          </div>{/* az-dashboard-one-title */}

          <div className="az-dashboard-nav">
            <nav className="nav">
              <Link to="../pages/men" className={"nav-link "}> Men </Link>
              <Link to="../pages/women" className="nav-link active"> Women </Link>
              <Link to="../pages/electronics" className="nav-link "> Electronics </Link>
              <Link to="../dashboard" className="nav-link "> All </Link>
            </nav>

            <nav className="nav">
              <a className="nav-link" href="#/">Free Shipping</a>
              <a className="nav-link" href="#/">Originals</a>
              <a className="nav-link" href="#/">Top Deals</a>
              <a className="nav-link" href="#/"></a>
            </nav>
          </div>

          {/* comment  */}


          <Grid container spacing={2} >


            {Products.filter(
              ({ category }) =>
                categoryName == category
            ).map(product => (
              <Grid item xs={12} md={4} lg={3} >
                <MediaCard product={product} productId={product.id} />
              </Grid>
            )
            )
            }
          </Grid>





        </div>{/* row */}
      </div>{/* az-content-body */}





    </div>
  )

}

export default WomenCategory
