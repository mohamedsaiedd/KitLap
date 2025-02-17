import React, { useState, useEffect } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const url = "http://localhost:3000/products"

const Search = () => {
  useEffect(() => {
    axios.get(url)
      .then((res) => SetProducts(res.data))
      .catch(({ response }) => {
        console.log(response)
      })
  }, []);

  const [Products, SetProducts] = useState([])
  const [SearchTarget, setSearchTarget] = useState("");
  const handelSearchTarget = (e) => {
    e.preventDefault();
    SearchTarget.value = "";

  }
  return (
    <div className="wrapperSearch">
      <div className="wrapper">
        <div className="search">
          <input
            placeholder="Search a color by name..."
            onChange={(e) => setSearchTarget(e.target.value)}
            autocomplete="on"
          />
          <i class="fas fa-search"></i>
        </div>

      </div>
      <div className="searchResultsWrap">
        {
          SearchTarget !== "" ?
            (Products.filter((product) => {
              return (product.title.toLowerCase().includes(SearchTarget))
            }).map((product, key) => {
              return ((


                <div key={key} className="searchResult"  >
                  <Link to={`../../pages/detailes/${product.id}`} onClick={(e) => setSearchTarget("")}>
                    <p>
                      {product.title} </p>
                  </Link>
                  <span >{product.category}</span>
                </div>
              )
              )

            })) : null
        }
      </div>
    </div>
  )
}

export default Search
