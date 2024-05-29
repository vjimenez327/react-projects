import {React, useEffect, useState } from "react";
import './styles.css'

//note: clarify if the URL will always be the same

export default function LoadMoreData(){
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false)

  async function fetchProducts(){
    try {
      setLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
      const data = await response.json()

      if(data && data.products && data.products.length) {
        setProducts(() => [...products, ...data.products])
        setLoading(false)
      }
    } catch(e) {
      console.error(e.message)
      setLoading(false)
    }
  }
  
  useEffect(() => {
    fetchProducts()
  }, [count])

  useEffect(()=> {
    if(products && products.length === 100) {
      setDisabled(true)
    }
  }, [products])

  if(loading) {
    return <div>Loading....</div>
  }

  return (
    <div className="load-more-container">
      <div className="product-container-grid">
      {
        products && products.length ? 
          products.map((product, index) => (
            <div key={index} className="product-thing"> 
              <img src={product.thumbnail} />
              <p>{product.title}</p>
            </div>
          ))
        : null
      }
      </div>
      <div className="load-more">
        <button className="load-btn" disabled={disabled} onClick= {()=> setCount(count + 1)}>Load More Products</button>
        {
          disabled ? 'you have reached too many products' : null
        }
      </div>
    </div>
  ) 
}