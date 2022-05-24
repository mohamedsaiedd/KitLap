// import React from 'react'

const getPrice = (product) => {

  let price = 0;

  if (product.discount) {
    price = Math.floor(parseFloat(product.price) * (1 - (parseFloat(product.discount) / 100)))
  } else {
    price = Math.floor(product.price)
  }
  return price  ;
}


export default getPrice