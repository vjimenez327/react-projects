import MenuItem from "./menu-item"
import './styles.css'

export default function MenuList({list = []}){

  console.log(list)
  
  return (
    <ul className="menu-list-container">
      {list && list.length ? 
        list.map((listItem, id) => {
          return <MenuItem key={id} item={listItem} /> 
        } )
        : null}
    </ul>
  )
}