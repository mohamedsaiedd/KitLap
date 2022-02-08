import React, { useState ,useEffect ,  Component } from 'react'
// import {Line, Bar, Pie } from 'react-chartjs-2';
import { Link, useParams, withRouter } from "react-router-dom";

import  MediaCard from '../shared/ItemCard';
import { Grid } from '@material-ui/core';


export function Dashboard  () { 
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
            <div className="az-dashboard-one-title">
              <div>
                <h2 className="az-dashboard-title">Hi, welcome back!</h2>
                <p className="az-dashboard-text">Your web analytics dashboard template.</p>
              </div>
              <div className="az-content-header-right">
                <div className="media">
                  <div className="media-body">
                    <label>Start Date</label>
                    <h6>Oct 10, 2018</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>End Date</label>
                    <h6>Oct 23, 2018</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <div className="media">
                  <div className="media-body">
                    <label>Event Category</label>
                    <h6>All Categories</h6>
                  </div>{/* media-body */}
                </div>{/* media */}
                <a href="#/" className="btn btn-purple">Search</a>
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
                <a className="nav-link" href="#/"><i className="far fa-save"></i> Save Report</a>
                <a className="nav-link" href="#/"><i className="far fa-file-pdf"></i> Export to PDF</a>
                <a className="nav-link" href="#/"><i className="far fa-envelope"></i>Send to Email</a>
                <a className="nav-link" href="#/"><i className="fas fa-ellipsis-h"></i></a>
              </nav>
            </div>

            {/* comment  */}
            <Grid container spacing={2} >
              {Products.map(product => (
                <Grid item xs={12} md={8} lg={4} >
                  <MediaCard product={product} />
                  
            <Link to={`../pages/detailes/${product.id}`}>
              click
            </Link>
                </Grid>
              ))}
            </Grid>

            </div>{/* row */}
          </div>{/* az-content-body */}
         
       

       
       
      </div>
    )
 
}

export default Dashboard
