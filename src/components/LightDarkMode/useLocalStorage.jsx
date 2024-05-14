import { useDebugValue, useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue = "light"){

  const [value, setValue] = useState(()=> {
    let currentValue;

    try{
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      )
    } catch(e){
      console.error(e)
      currentValue = defaultValue
    }

    return currentValue
  })

  useEffect(()=> {
    localStorage.setItem(key, JSON.stringify(value))
  },[key, value])

  return [value, setValue]
}