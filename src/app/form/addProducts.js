import React , {useEffect , useState} from 'react';
import axios from "axios"

const AddProducts = () => {
    // const [AddProduct, setAddProduct] = useState({title : ""})

    
       
        const product = {
            "title" :"mohamed",
            "description": "string",
            "imageUrl": "string",
            "price": 0,
            "hasDiscount": true,
            "discountRate": 0
        }
        const url = "https://kitlap.monady.tk/api/Products/AddProduct"
        const push = () => {
            axios.post(url,  product ).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }

        return (
             <button onClick={push}>AddProduct</button>
            // <form onSubmit={push}>
            //     <label>
            //         product Title:
            //         <input type="text" name="title" onChange={(e)=> setAddProduct(e.tasrget.value)} />
            //     </label>
            //     <button type="submit">Add</button>
            // </form>
        )
    

}
export default AddProducts