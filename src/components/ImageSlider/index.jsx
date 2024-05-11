import { useEffect, useState } from "react";
import { SlArrowRight,  SlArrowLeft } from "react-icons/sl";
import './style.css'



export default function ImageSlider({url, limit = '5', page = '1'}) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  async function fetchImages(url){
    try{
      setIsLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if(data) {
        setImages(data)
        setIsLoading(false)
      }

    }catch(e){
      setErrorMessage(e.message)
      setIsLoading(false)
    } 
  }

  function handlePrevious(){
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

    function handleNext(){
      setCurrentSlide(currentSlide ===  images.length - 1 ? 0 : currentSlide + 1)
  }

  useEffect(() => {
    if(url !== '') fetchImages(url)
  }, [url])

  console.log({images})

  if(isLoading){
    return <div> Please wait...Data is loading. </div>
  }


  if(errorMessage !== null) {
    return <div>Error!</div>
  }


  return (
    <div className="container">
      <SlArrowLeft className="arrow arrow-left" onClick={handlePrevious}/>
      {
        images && images.length ? 
          images.map((img, index) => (
            <img 
            key={img.id}
            alt={img.download_url} 
            src={img.download_url}
            className={currentSlide === index ? "current-image" : "current-image hide-current-image"}

            />)) :
          null
      }
      <SlArrowRight className="arrow arrow-right" onClick={handleNext}/>
      <span className="circle-indicators">
        {
          images && images.length ? 
            images.map((_, idx) => (
              <button
                key={idx}
                className={currentSlide === idx ? "current-indicator" : "current-indicator inactive-indicator"}
                onClick={()=> setCurrentSlide(idx)}   
              >
              </button>
            ))
          : null 

        }
      </span>
    </div>
  )
}