import { useState } from 'react'
import MenuList from './menu-list'
import './styles.css'

export default function MenuItem({item}){
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

  function hangleToggleChildren(getCurrentLabel){
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
    })
  }

  console.log(displayCurrentChildren)

  return(
    <li > 
      <div className='menu-item'> 
        <p>{item.label}</p>
        {
          item && item.children && item.children.length ? 
          <span onClick={() => hangleToggleChildren(item.label)}>
            {
              displayCurrentChildren[item.label] ? '--' : '**'
            }
          </span>
          : null
        }
      </div>
      { 
        item && item.children && item.children.length && displayCurrentChildren[item.label] ? 
        <MenuList list={item.children} />
        : null
      }
    </li>
  )
}