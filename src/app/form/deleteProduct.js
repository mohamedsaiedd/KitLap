import React from "react"
import axios from "axios"
// import { useParams } from "react-router-dom"


// const { id } = useParams();

const DeleteProduct = (productId) => {
    const url = `https://kitlap.monady.tk/api/Products/DeleteProduct/${productId}`
    axios.delete(url,

    )
}
export default DeleteProduct