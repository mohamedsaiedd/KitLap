import React, { useState, useEffect, Component } from 'react'
// import {Line, Bar, Pie } from 'react-chartjs-2';
import { Link, useParams, withRouter } from "react-router-dom";
// import SearchBar from "material-ui-search-bar";  

import MediaCard from '../shared/ItemCard';
import { Grid } from '@material-ui/core';
import { getByDisplayValue } from '@testing-library/react';
import { useSelector } from "react-redux"
import Test from './Test';


export function Dashboard(ItemCount) {
  const [Products, SetProducts] = useState([])


  const url = "http://localhost:4000/products?_page=1"

  const showMore = () => {
    window.history.pushState(url, "http://localhost:4000/products?_page=2")
  }

  // console.log(Products)

  let now = new Date();

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
              <Link to="../pages/men" className="nav-link "> Men </Link>
              <Link to="../pages/women" className="nav-link "> Women </Link>
              <Link to="../pages/electronics" className="nav-link "> Electronics </Link>
              <Link to="./" className="nav-link active "> All </Link>
            </nav>

            <nav className="nav">
              <a className="nav-link" href="#/">Free Shipping</a>
              <a className="nav-link" href="#/">Originals</a>
              <a className="nav-link" href="#/">Top Deals</a>
              <a className="nav-link" href="#/"></a>
            </nav>
          </div>

          <Grid container spacing={2} >
            {Products.map(product => (
              <Grid item xs={12} md={4} lg={3}>
                <MediaCard product={product} productId={product.id} />
                {console.log(product.id)}
              </Grid>
            ))}
          </Grid>


          <br />
          <a onClick={showMore()}>
            load more
          </a>
          <br />
          <Test />

        </div>{/* row */}
      </div>{/* az-content-body */}
    </div>
  )

}

export default Dashboard
