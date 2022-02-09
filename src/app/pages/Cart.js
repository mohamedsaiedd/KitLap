import React, { useState ,useEffect ,  Component } from 'react'
// import {Line, Bar, Pie } from 'react-chartjs-2';
import { Link, withRouter } from "react-router-dom";

import  MediaCard from '../shared/ItemCard';
import { Grid } from '@material-ui/core';


function ProductList({ products, onChangeProductQuantity, onRemoveProduct }) {
  // console.log(products)
  
    return (
      <section className="container">
        <ul className="products">
          {products.map((product, index) => {
            return (
              <li className="row" key={index}>
                <div className="col left">
                  <div className="thumbnail">
                    <a href="#">
                      <img src={product.image} alt={product.title} />
                    </a>
                  </div>
                  <div className="detail">
                    <div className="name">
                      <a href="#">{product.title}</a>
                    </div>
                    {/* <div className="description">{product.description}</div> */}
                    <div className="price">{formatCurrency(product.price)}</div>
                  </div>
                </div>
  
                <div className="col right">
                  <div className="quantity">
                    <input
                      type="text"
                      className="quantity"
                      step="1"
                      value={product.quantity}
                      onChange={(event) => onChangeProductQuantity(index, event)}
                    />
                  </div>
  
                  <div className="remove">
                    <svg
                      onClick={() => onRemoveProduct(index)}
                      version="1.1"
                      className="close"
                      x="0px"
                      y="0px"
                      viewBox="0 0 60 60"
                      enableBackground="new 0 0 60 60"
                    >
                      <polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812" />
                    </svg>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  function Header({ itemCount }) {
    return (
      <header className="container">
        <h1>Shopping Cart</h1>
  
        <ul className="bread">
          <li>Home</li>
          <li>Shopping Cart</li>
        </ul>
  
        <span className="count">{itemCount} items in the bag</span>
      </header>
    );
  }
  
function formatCurrency(value) {
    return Number(value).toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    });
  }
function Summary({
    subTotal,
    discount,
    tax,
    onEnterPromoCode,
    checkPromoCode
  })
  {
    const total = subTotal - discount + tax;
  
    return (
      <section className="container">
        <div className="promotion">
          <label htmlFor="promo-code">Have A Promo Code?</label>
          <input type="text" onChange={onEnterPromoCode} />
          <button type="button" onClick={checkPromoCode} />
        </div>
  
        <div className="summary">
          <ul>
            <li>
              Subtotal <span>{formatCurrency(subTotal)}</span>
            </li>
            {discount > 0 && (
              <li>
                Discount <span>{formatCurrency(discount)}</span>
              </li>
            )}
            <li>
              Tax <span>{formatCurrency(tax)}</span>
            </li>
            <li className="total">
              Total <span>{formatCurrency(total)}</span>
            </li>
          </ul>
        </div>
  
        <div className="checkout">
          <button type="button">Check Out</button>
        </div>
      </section>
    );
  }

export function Cart  () { 

  const [Productsi, SetProducts] = useState([])
  const [products, setProducts] = React.useState(Productsi);
  const [promoCode, setPromoCode] = React.useState("");
  const [discountPercent, setDiscountPercent] = React.useState(0);



  const itemCount = products.reduce((quantity, product) => {
    return quantity + +product.quantity;
  }, 0);
  const subTotal = products.reduce((total, product) => {
    return total + product.price * +product.quantity;   
  }, 0);
  const discount = (subTotal * discountPercent) / 100;

  const onChangeProductQuantity = (index, event) => {
    const value = event.target.value;
    const valueInt = parseInt(value);
    const cloneProducts = [...Productsi];
  // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
  if (value === "") {
    cloneProducts[index].quantity = value;
  } else if (valueInt > 0 && valueInt < 100) {
    cloneProducts[index].quantity = valueInt;
  }
  console.log(Productsi );
  setProducts(cloneProducts);
};

const onRemoveProduct = (i) => {
    const filteredProduct = products.filter((product, index) => {
      return index != i;
    });

    setProducts(filteredProduct);
  };


//   promo code methods

  const PROMOTIONS = [
    {
      code: "SUMMER",
      discount: "50%"
    },
    {
      code: "AUTUMN",
      discount: "40%"
    },
    {
      code: "WINTER",
      discount: "30%"
    }
  ];
  const TAX = 5;
  
  const onEnterPromoCode = (event) => {
    setPromoCode(event.target.value);
  };
  const checkPromoCode = () => {
    for (var i = 0; i < PROMOTIONS.length; i++) {
      if (promoCode === PROMOTIONS[i].code) {
        setDiscountPercent(parseFloat(PROMOTIONS[i].discount.replace("%", "")));

        return;
      }
    }

    alert("Sorry, the Promotional code you entered is not valid!");
  };


  useEffect(() => {
      const url =  "https://fakestoreapi.com/carts/5"

      const fetchData = async () => {

          const response = await fetch(url);
          const data = await response.json();
          
          // const data = JSON.parse(data1)
          SetProducts(data);
      };
      fetchData();

  },[]);
  
  // console.log(Productsi)


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
          <Header itemCount={itemCount} />

                    {Productsi.length > 0 ? (
                    <div>
                        <ProductList
                        products={Productsi}
                        onChangeProductQuantity={onChangeProductQuantity}
                        onRemoveProduct={onRemoveProduct}
                        />
                        <Summary
                        subTotal={subTotal}
                        discount={discount}
                        tax={TAX}
                        onEnterPromoCode={onEnterPromoCode}
                        checkPromoCode={checkPromoCode}
                        />

                    </div>
                    ) : (
                    <div className="empty-product">
                        <h3>There are no products in your cart.</h3>
                        <button onClick={() => setProducts(Productsi)}>Shopping now</button>
                    </div>
                    )}
            </div>{/* row */}
          </div>{/* az-content-body */}
         
      </div>
    )
 
}
export default Cart
