import React , {useState  }  from 'react';
import axios from "axios"

const AddProducts = () => {
    // const [AddProduct, setAddProduct] = useState({ 
    //     "title": "string",
    //     "description": "string",
    //     "imageUrl": "string",
    //     "price": 0,
    //     "hasDiscount": true,
    //     "discountRate": 1
    //    })
    const [title, settitle] = useState("")
    const [imageUrl, setimage] = useState()
    const [description, setdescription] = useState("")
    const [price, setprice] = useState()
    const [discountRate, setdiscountRate] = useState()
    // const imageUrl  =  URL.createObjectURL();
    //  imageUplaoded = URL.createObjectURL(imageUrl);
    
    const url = "https://kitlap.monady.tk/api/Products/AddProduct"
    const pushProduct = (e) => {
        e.preventDefault();
        const AddProduct = {title , imageUrl , description , price , discountRate }
        
            console.log(AddProduct)

            axios.post(url, AddProduct ).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }

        return (
                <div>
                    product Title:
                    <input  type="text" name="title" onChange={(e) => {settitle(e.target.value)} } /> <br/>
                    product Image:
                    <input  type="text" name="imageUplaoded"  onChange={(e) => {setimage(e.target.value)}}/> <br/>
                    product descripton:
                    <input  type="text" name="description" onChange={(e) => {setdescription(e.target.value)}} /><br/>
                    product price:
                    <input   type="text" name="price" onChange={(e) =>{ setprice(e.target.value)}}/><br/>
                    product discountRate:
                    <input type="text" name="discountRate" onChange={(e) => setdiscountRate(e.target.value)} /><br/> 
            
                      <button onClick={(e) => pushProduct(e)}>AddProduct</button>
                </div>
           
         
        )
    

}

export default AddProducts