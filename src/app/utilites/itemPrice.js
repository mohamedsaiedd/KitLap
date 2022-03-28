

let price = 0
if (product.discount) {
  price = Math.floor(parseFloat(product.oldprice) * (1 - (parseFloat(product.discount) / 100)))
} else {
  price = Math.floor(product.oldprice)
}