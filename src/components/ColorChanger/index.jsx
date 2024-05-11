import { useState } from "react"

export default function RandomColor() {
  const [colorType, setColorType] = useState('hex')
  const [color, setColor] = useState("#222222");
  
  function generateVal(length) {
    //16 is the # if hex vals possible
    return Math.floor(Math.random()*length)
  }

  function handleSetHexColor(){
    let hexVals = [0,1,2,3,4,5,6,7,8,9,'A','B', 'C', 'D', 'E', 'F']
    let hexColor = "#";

    for(let i=0; i < 6; i++) {
      hexColor += hexVals[generateVal(hexVals.length)]
    }
    setColorType('hex')
    setColor(hexColor);
  }

  function handleSetRgbColor(){
    let r = generateVal(256);
    let g = generateVal(256);
    let b = generateVal(256);

    setColorType('rgb')
    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: 'row',
      "min-height": "100vh",
      background: color,
      justifyContent: "center",
      alignItems: "center",
    }}>
      {/*<button style={{ margin: "30px", background: "white", color: "black"}} onClick={() => handleSetHexColor()}> Generate Random Hex Color </button>
      <button style={{ margin: "30px", background: "white", color: "black"}} onClick={() => handleSetRgbColor()}> Generate Random rgb Color </button>
  <button style={{ margin: "30px", background: "white", color: "black"}} onClick={() => handleSetRandomColor()}> Generate Random Color </button> */}
      <button style={{ margin: "30px", background: "white", color: "black", }} onClick={handleSetHexColor}> Generate Random Hex Color </button>
      <button style={{ margin: "30px", background: "white", color: "black"}} onClick={handleSetRgbColor}> Generate Random rgb Color </button>
      <button style={{ margin: "30px", background: "white", color: "black"}} onClick={colorType === 'hex' ? handleSetHexColor : handleSetRgbColor}> Generate Random Color </button>

      <div style={{
        display: 'flex',
        "flexDirection": 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: `#fff`,
        "fontSize": '50px',
        marginTop: '50px',
      }}> 
        <h3>{`${colorType}`}</h3>
        <h1>{`${color}`}</h1>
      </div>
    </div>
  )
}