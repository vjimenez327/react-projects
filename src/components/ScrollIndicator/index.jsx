import { useDebugValue, useEffect, useState } from "react";
import './style.css';

export default function ScrollIndicator({url}){
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0)

  async function fetchData(url) {
    try {
      setLoading(true)
      const response = await fetch(url);
      const data = await response.json();
      
      if(data && data.products && data.products.length > 0){
        setData(data.products)
        setLoading(false);
      }

    } catch(e) {
      console.log(e)
      setLoading(false)
    }
  }

  useEffect(()=> {
    fetchData(url)
  }, [url])

  function handleScrollPercentage(){
    const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 

    setScrollPercentage( (howMuchScrolled/height) * 100)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage)

    return () => window.removeEventListener('scroll', () => {}) 
  })
  
  if(loading) return <div>LOADING.....</div>
  
  return(
    <div>
      <div className="scroll-top">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress">
          <div className="progress-bar" style={{ width:`${scrollPercentage}%`}}></div>
        </div>
      </div>
      <div className="data-container">
        {
          data && data.length > 0 ? 
          data.map((product, i) => <p key={i}>{product.title}</p>)
          : null
        }
      </div>
    </div>
  )
}