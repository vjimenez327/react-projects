import { useState } from "react"
import data from './data';
import './styles.css';

export default function Accordian() {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelect, setEnableMultiSelect] = useState(false);
  const [multiSelection, setMultiSelection] = useState([]);
  console.log(enableMultiSelect)

  function handleSingleSelection(currentId){
    setSelected( selected === currentId ? null : currentId)
  }

  function handleEnableMultiSelection(currentId, idx) {
    let copyMulti = [...multiSelection];
    const selectionExists = multiSelection.includes(currentId);
    console.log({selectionExists})
    
    if(!selectionExists) copyMulti.push(currentId)
    else copyMulti.splice(idx, 1)
  
    console.log({copyMulti})
    setMultiSelection(copyMulti)
  }
  
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelect(!enableMultiSelect)}>Enable Multi-Selection</button>
      <div className="accordian">
      {
        data && data.length > 0 ?
        (
          data.map((item, idx) => ( 
            <div key={item.id} className="item">
              <div onClick={
                enableMultiSelect ? 
                () => handleEnableMultiSelection(item.id, idx) :
                () => handleSingleSelection(item.id)} 
                className="title">
                <h3>{item.quote}</h3>
                <span>+</span>
              </div>

              {
                enableMultiSelect ? 
                multiSelection.includes(item.id) && (
                  <div className="author">{item.author}</div>
                ) : 
                selected === item.id && (
                  <div className="author">{item.author}</div>
                )
              }
              {
              //   selected === item.id ||
              //   multiSelection.includes(item.id) 
              //   ? 
              //   <div className="author">{item.author}</div>
              //   : null
              }
            </div>
          ))
        ) : (
          <div>sorry there is an error</div>
        )
      }
      </div>
    </div>
  )
}