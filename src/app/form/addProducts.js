import React , {useState , useRef  }  from 'react';
import axios from "axios"

const AddProducts = () => {
    const [AddProduct, setAddProduct] = useState({})

//using ref for selecting dom elements
        const titleRef = useRef(null);
        const imageRef = useRef(null);
        const descriptonRef = useRef(null);
        const priceRef = useRef(null);
        const discountRateRef = useRef(null);

        const url = "https://kitlap.monady.tk/api/Products/AddProduct"
        const pushProduct = () => {

            titleRef.current = AddProduct.title
            console.log(titleRef.current)
            imageRef.current = AddProduct.imageUrl
            descriptonRef.current = AddProduct.description
            priceRef.current = AddProduct.price
            discountRateRef.current = AddProduct.discountRate
        
            axios.post(url,  AddProduct ).then(res => {
                console.log(res);
                console.log(res.data);
            })
        }

        return (
            //  <button onClick={pushProduct}>AddProduct</button>
         
                <div>
                    {/* product Title: */}
                    <input ref={titleRef} type="text" name="title"  /> <br/>
                    product Image:
                    <input ref={imageRef} type="file" name="image"  /> <br/>
                    product descripton:
                    <input ref={descriptonRef} type="text" name="description"  /><br/>
                    product price:
                    <input  ref={priceRef} type="text" name="price"/><br/>
                    product discountRate:
                    <input ref={discountRateRef} type="text" name="discountRate" /><br/> 
            
                      <button onClick={pushProduct}>AddProduct</button>
                </div>
           
         
        )
    

}

export default AddProducts