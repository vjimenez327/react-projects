import { useState } from "react"
import './styles.css'
import QRCode from "react-qr-code"

export default function QRCodeGenerator(){
  const [input, setInput] = useState('')
  const [qrCode, setQrCode] = useState('')

  function handleGenerateCode(){
    setQrCode(input)
    setInput('')
  }

  return (
    <div className="qr-container">
      <h1> QR Code Generator </h1>
      <div className="fields">
        <input 
        type="text"
        name="qr-code"
        placeholder="Enter QR value here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={input && input.trim() !== "" ? false : true} className="qr-submit" onClick={handleGenerateCode}>
        Generate
        </button>
      </div>
      <QRCode id="qr-code" value={qrCode} size={400} />
    </div> 
  )
}