import React, { useState, useEffect } from "react";




const Search = () => {

    useEffect(() => {
        const url = "http://localhost:4000/products"

        const fetchData = async () => {

            const response = await fetch(url);
            const data = await response.json();

            // const data = JSON.parse(data1)
            SetProducts(data);

        };
        fetchData();

    }, []);

    const [Products, SetProducts] = useState([])
    const [SearchTarget, setSearchTarget] = useState("");

    let resultsChanged =  false    ;

    return (
        <div className="wrapperSearch">
            <div className="wrapper">
                <div className="search">
                    <input
                        placeholder="Search a color by name..."
                        onChange={
                            (e) => {
                                setSearchTarget(e.target.value);
                                console.log("value", e.target.value)
                                resultsChanged = true;
                                console.log("changed")
                            }
                        }
                        autocomplete="on"
                    />
                    <i class="fas fa-search"></i>
                </div>

            </div>
               {
               
               
                (resultsChanged == true) ?

                Products.filter((product) => {
                    if (SearchTarget === "") {
                        return product
                    } else if (product.title.toLowerCase().includes(SearchTarget)) {
                        return product
                    }
                }).map((product, key) => {
                    return (
                        <div key={key} className="searchResult" >
                            <p> <span>{product.category}</span>
                                {product.title} </p>
                        </div>
                    )
                }) :
                resultsChanged == false
                
                
            }
        </div>
    )
}

export default Search
