import {useEffect, useState} from 'react'
import './styles.css'
import data from './products.json'

const URL = 'https://dummyjson.com/products';

export default function Products(){
  const [products, setProducts] = useState([]);
  const [isToggled, setIsToggled] = useState(false)

function fetchProducts(){
    try {
      // const response = await fetch(data);
      // const data = await response.json();

      if(data.products && data.products.length > 0) {
        setProducts(data.products);
      }
      
    }catch(e) {
      console.log(e)
    }
  }

  useEffect(() => {
  fetchProducts();
  }, [])

    const filteredProducts = products.reduce((a, c) => {
      
      const filteredItems = c.variants.filter(item => item.available_inventory > 0)

      if(filteredItems.length > 0) {
        a.push({...c, variants:filteredItems})
      }

      return a;
    }, [])


  const displayProducts = isToggled ? filteredProducts : products;

  return(
    <div>
      <h1 className='products-title'> Products! </h1>
      <a
        href="#"
        onClick={()=> !isToggled ? setIsToggled(true): setIsToggled(false)}
      >
      {isToggled ? 'Show All Products' : 'Show In Stock Products Only'}
      </a>
      {
        products && products.length ?
          <div className='product-container'>
            {displayProducts.map(p => (
                <div key={p.id} className='product-column'>
                  <h3>{p.title}</h3>
                  <div className='images-row-container'>
                    {p.variants.map((variant, i) =>(
                      <div className='product-meta' key={i}>
                        <img
                        className="product-image-display"
                        key={i}
                        src={variant.image.image_url}
                        />
                        <div className='meta'>
                          <span>Size: ${variant.title}</span>
                          <span>In-Stock:{variant.available_inventory}</span>
                        </div>    
                    </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        : null
      }
    </div>
  )
}