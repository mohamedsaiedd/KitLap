import React from "react"
import axios from "axios"


const DeleteProduct = (productId) => {
    const url = "https://kitlap.monady.tk/api/Products/DeleteProduct"
    axios.delete(url , 
        {
            "productId" : productId
        }
        )
}
export default DeleteProduct